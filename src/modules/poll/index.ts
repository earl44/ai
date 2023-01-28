import autobind from 'autobind-decorator';
import Message from '@/message';
import Module from '@/module';
import serifs from '@/serifs';
import { genItem } from '@/vocabulary';
import config from '@/config';
import { Note } from '@/misskey/note';

export default class extends Module {
	public readonly name = 'poll';

	@autobind
	public install() {
		setInterval(() => {
			if (Math.random() < 0.1) {
				this.post();
			}
		}, 1000 * 60 * 60);

		return {
			mentionHook: this.mentionHook,
			timeoutCallback: this.timeoutCallback,
		};
	}

	@autobind
	private async post() {
		const duration = 1000 * 60 * 15;

		const polls = [ // TODO: Extract serif
			['Mi nez ki finoman', 'Szerinted melyik a legfinomabb? '],
			['Neheznek tuno dolgok', 'Szerinted melyik a legnehezebb? '],
			['Mit akarsz', 'Mit szeretnel a legjobban? '],
			['Mit szeretnel vinni egy lakatlan szigetre', 'Ha egy dolgot vihetnel egy lakatlan szigetre, mi lenne az? '],
			['Mivel szeretned feldíszíteni a hazadat?', 'Mivel szeretned feldíszíteni a hazadat? '],
			['Mit valoszínu eladni', 'on szerint mi fog a legtobbet eladni? '],
			['Mit akarsz leesni', 'Mit akarsz leesni az egbol? '],
			['Mit akarsz vinni', 'Melyiket akarsz vinni? '],
			['Dolgok, amelyeket kereskedelmi forgalomba szeretnel hozni', 'Mit szeretnel kereskedelmi forgalomba hozni? '],
			['Valoszínuleg feltart targyak', 'on szerint mi kerulhet elo a romokbol? '],
			['Valami, aminek jo az illata', 'Szerinted melyik a legjobb illatu? '],
			['Valoszínuleg magas aron kereskedheto dolgok', 'on szerint melyik fog a legmagasabb aron kereskedni? '],
			['Mi varhatoan a Fold korul kering', 'Mit gondol, mi varhato a Fold koruli palyan? '],
			['Mit szeretnel ajandekozni', 'Ha megajandekoznal, mi lenne az? '],
			['Mit szeretne ajandekba kapni', 'Mit szeretne ajandekba kapni? '],
			['Mi lehet, mit kaphatok', 'Szerinted mi lehet? '],
			['Mi a trendi', 'Mit tartasz divatosnak? '],
			['Reggeli', 'Mit szeretnel reggelizni? '],
			['Ebed', 'Mit szeretnel ebedelni? '],
			['Vacsora', 'Mit szeretnel vacsorazni? '],
			['Valami, ami jol nez ki a testnek', 'Szerinted mi jo a testnek? '],
			['Mit akarsz hagyni a jovo generacioinak', 'Mit szeretnel hagyni a jovo generacioinak? '],
			['Dolgok, amelyek hangszerek lehetnek', 'Szerinted milyenek lehetnek hangszerek? '],
			['Mit szeretne hasznalni a miso leveseben', 'Mit szeretne hasznalni a miso leveseben?' ],
			['Mit szeretnel furikakekent hasznalni', 'Melyiket szeretned a rizsedre szorni? '],
			['Gyakran lathato dolgok', 'Mit latsz gyakran? '],
			['Dolgok, amelyek valoszínuleg esnek az utra', 'Szerinted mi eshet az ut szelere? '],
			['Dolgok, amelyek muzeumban lehetnek', 'on szerint ezek kozul melyik lenne muzeumban? '],
			['Valoszínuleg megtalalhato targyak az osztalyteremben', 'on szerint mi varhato az osztalyteremben? '],
			['Mit szeretnel hangulatjelnek lenni', 'Melyiket szeretnel hangulatjelnek lenni? '],
			['Valoszínuleg megtalalhato targyak a Misskey-fohadiszallason', 'on szerint mi varhato a Misskey-kozpontban? '],
			['egheto szemet', 'Szerinted mi az elegetheto szemet? '],
			['Kedvenc rizsgolyo toltelek', 'Mi a kedvenc rizsgolyotolteleked? '],
		];

		const poll = polls[Math.floor(Math.random() * polls.length)];

		const choices = [
			genItem(),
			genItem(),
			genItem(),
			genItem(),
		];

		const note = await this.ai.post({
			text: poll[1],
			poll: {
				choices,
				expiredAfter: duration,
				multiple: false,
			}
		});

		// タイマーセット
		this.setTimeoutWithPersistence(duration + 3000, {
			title: poll[0],
			noteId: note.id,
		});
	}

	@autobind
	private async mentionHook(msg: Message) {
		if (!msg.or(['/poll']) || msg.user.username !== config.master) {
			return false;
		} else {
			this.log('Manualy poll requested');
		}

		this.post();

		return true;
	}

	@autobind
	private async timeoutCallback({ title, noteId }) {
		const note: Note = await this.ai.api('notes/show', { noteId });

		const choices = note.poll!.choices;

		let mostVotedChoice;

		for (const choice of choices) {
			if (mostVotedChoice == null) {
				mostVotedChoice = choice;
				continue;
			}

			if (choice.votes > mostVotedChoice.votes) {
				mostVotedChoice = choice;
			}
		}

		const mostVotedChoices = choices.filter(choice => choice.votes === mostVotedChoice.votes);

		if (mostVotedChoice.votes === 0) {
			this.ai.post({ // TODO: Extract serif
				text: '投票はありませんでした',
				renoteId: noteId,
			});
		} else if (mostVotedChoices.length === 1) {
			this.ai.post({ // TODO: Extract serif
				cw: `${title}アンケートの結果発表です！`,
				text: `結果は${mostVotedChoice.votes}票の「${mostVotedChoice.text}」でした！`,
				renoteId: noteId,
			});
		} else {
			const choices = mostVotedChoices.map(choice => `「${choice.text}」`).join('と');
			this.ai.post({ // TODO: Extract serif
				cw: `${title}アンケートの結果発表です！`,
				text: `結果は${mostVotedChoice.votes}票の${choices}でした！`,
				renoteId: noteId,
			});
		}
	}
}
