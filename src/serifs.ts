// せりふ

export default {
	core: {
		setNameOk: name => `ertem. Mostantol ${name}-nak hivlak!`,

		san: 'Hozza kell tennem Mr.',

		yesOrNo: 'Csak azt tudom, hogy igen vagy nem...',

		hello: name => name ? `hello、${name}♪` : `Szia`,
		
		helloNight: name => name ? `Jo estet、${name}♪` : `Jo estet`,

		goodMorning: (tension, name) => name ? `Jo reggelt kivanok、${name}！${tension}` : `'Jo reggelt kivanok！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `、${name}！${tension}` : `Jo reggelt kivanok！${tension}`,

			hiru: (tension, name) => name ? `Jo reggelt kivanok、${name}！${tension}Mar del van？${tension}` : `Jo reggelt kivanok！${tension}Mar del van？${tension}`,
		},
*/

		goodNight: name => name ? `Jo ejszakat、${name}！` : `'Jo ejszakat！'`,

		omedeto: name => name ? `koszonom、${name}♪` : 'koszonom♪',

		erait: {
			general: name => name ? [
				`${name}、a mai nap is remek！`,
				`${name}、a mai nap is remekよ～♪`
			] : [
				`a mai nap is remek！`,
				`a mai nap is remekよ～♪`
			],

			specify: (thing, name) => name ? [
				`${name}、${thing}ez nagyszeru！`,
				`${name}、${thing}ez nagyszeruよ～♪`
			] : [
				`${thing}ez nagyszeru！`,
				`${thing}ez nagyszeruよ～♪`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}ez nagyszeru！`,
				`${name}、${thing}ez nagyszeruよ～♪`
			] : [
				`${thing}ez nagyszeru！`,
				`${thing}ez nagyszeruよ～♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`udv itthon、${name}♪`,
				`udv itthon、${name}っ。`
			] : [
				'udv itthon♪',
				'udv itthon mester。'
			],

			love2: name => name ? `udv itthon♡♡♡${name}っっ♡♡♡♡♡` : 'udv itthon♡♡♡♡♡♡♡♡',

			normal: name => name ? `udv itthon、${name}！` : 'udv itthon！',
		},

		itterassyai: {
			love: name => name ? `vigyazz magadra、${name}♪` : 'vigyazz magadra♪',

			normal: name => name ? `vigyazz magadra、${name}！` : 'vigyazz magadra！',
		},

		tooLong: 'ugy erzem,tul hosszu...',

		invalidName: 'nehezen tudom kiejteni',

		nadenade: {
			normal: 'Huh...! meglepodott',

			love2: ['hu... ez kinos', 'Aww... ez kinos…', 'Huyaa…？'],

			love3: ['Hmm… koszonom♪', 'Hu, ez egyfajta pihenteto ♪', 'wow... megkonnyebbultem…', 'kezdek almos lenni…'],

			hate1: '...! Azt akarom, hogy hagyd abba...',

			hate2: 'Ne nyulj hozzam',

			hate3: 'kerlek maradj tavol',

			hate4: 'hagyd abba. tudatod velem?',
		},

		kawaii: {
			normal: ['koszonom♪', 'Szegyellem...'],

			love: ['Boldok vagyok♪', 'szegyellem...'],

			hate: '…koszonom'
		},

		suki: {
			normal: 'ehh… koszonom…♪',

			love: name => `nekem is… ${name}kedvellek！`,

			hate: null
		},

		hug: {
			normal: '...',

			love: 'love♪',

			hate: 'gyoker vagy...'
		},

		humu: {
			love: 'え、えっと…… ふみふみ……… どうですか…？',

			normal: 'えぇ... それはちょっと...',

			hate: '……'
		},

		batou: {
			love: 'えっと…、お、おバカさん…？',

			normal: '(じとー…)',

			hate: '…頭大丈夫ですか？'
		},

		itai: name => name ? `${name}、大丈夫ですか…？ いたいのいたいの飛んでけっ！` : '大丈夫ですか…？ いたいのいたいの飛んでけっ！',

		ote: {
			normal: 'くぅん... 私わんちゃんじゃないですよ...？',

			love1: 'わん！',

			love2: 'わんわん♪',
		},

		shutdown: 'csak nem almos vagy...？',

		transferNeedDm: 'oke beszeljuk meg privatban？',

		transferCode: code => `「${code}」ok！`,

		transferFailed: 'hibas a jelszo...？',

		transferDone: name => name ? `Done...！ udv itthon、${name}！` : `Done...！ udv itthon！`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... Emlekeztem)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} am！`
	},

	birthday: {
		happyBirthday: name => name ? `Boldog szuletesnapot、${name}🎉` : 'Boldok szuletesnapot🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: 'ez rendben van',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'sajnalom de most nem lehetseges...',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `Elkezdett egy jatekot{name}tarsasagaban！ (ero{strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}szorakozni kezdett)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}nyert`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}viccesen nyert...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}vesztett...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}hatalmas luzer...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}szakitottam vele`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}szorakozik...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}elismerte`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}elismerem szorakozok csak :D)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: 'え、ゲームは既に始まってますよ！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージでやりましょう！',

		/**
		 * ゲーム開始
		 */
		started: '0~100の秘密の数を当ててみてください♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '数字でお願いします！「やめる」と言ってゲームをやめることもできますよ！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: 'わかりました～。ありがとうございました♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}より大きいですね`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `もう一度言いますが${num}より大きいですよ！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}より小さいですね`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `もう一度言いますが${num}より小さいですよ！`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `正解です🎉 (${tries}回目で当てました)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '今ちょうどやってますよ～',

		matakondo: 'また今度やりましょう！',

		intro: minutes => `みなさん、数取りゲームしましょう！\n0~100の中で最も大きい数字を取った人が勝ちです。他の人と被ったらだめですよ～\n制限時間は${minutes}分です。数字はこの投稿にリプライで送ってくださいね！`,

		finish: 'ゲームの結果発表です！',

		finishWithWinner: (user, name) => name ? `今回は${user}さん(${name})の勝ちです！またやりましょう♪` : `今回は${user}さんの勝ちです！またやりましょう♪`,

		finishWithNoWinner: '今回は勝者はいませんでした... またやりましょう♪',

		onagare: '参加者が集まらなかったのでお流れになりました...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `Mit szolsz ehhez？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `${name}josolok neked...` : 'ne legy telhetetlen...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'beallitva！',

		invalid: 'hibas...？',

		tooLong: 'tul hosszu…',

		notify: (time, name) => name ? `${name}、${time}beallitva！` : `${time}beallitva！`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: 'うーん...？',

		doneFromInvalidUser: 'イタズラはめっですよ！',

		reminds: 'やること一覧です！',

		notify: (name) => name ? `${name}、これやりましたか？` : `これやりましたか？`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」やりましたか？` : `「${thing}」やりましたか？`,

		done: (name) => name ? [
			`よく出来ました、${name}♪`,
			`${name}、さすがですっ！`,
			`${name}、えらすぎます...！`,
		] : [
			`よく出来ました♪`,
			`さすがですっ！`,
			`えらすぎます...！`,
		],

		cancel: `わかりました。`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、Hm... csokit keszitettem, szoval ha nem banod, hajra.！🍫` : 'Csokoladet keszitettem, szoval hajra, ha tetszik！🍫',
	},

	server: {
		cpu: 'ugy tunik, hogy nagy a terheles a szerveren. Jol vagy...？'
	},

	maze: {
		post: 'Labirintus！ #AiMaze',
		foryou: 'rajzoltam！'
	},

	chart: {
		post: 'hozzaszolasok szama！',
		foryou: 'rajzoltam！'
	},

	sleepReport: {
		report: hours => `hmm ${hours}orat aludtam..`,
		reportUtatane: 'hmm... elaludtam',
	},

	noting: {
		notes: [
			'Dorges...',
			'"Kicsit almos vagyok"',
			'RENDBEN? ',
			'(。´･ω･)?',
			'huh',
			'– ooo... Csinald ezt igy... Mi? ',
			'Lehurrogas...',
			'"Phuu... faradt vagyok"',
			'Csinaljunk miso levest? ',
			'Kersz ​​egy kis rizst? akarsz furodni? ',
			'Tyuha! ? ',
			'Sok illusztraciom talalhato a Boldok vagyok oldalamon! ',
			'Misuki aranyos nev! ',
			'Jaj, nehez visszaforditani...',
			'Meg ha kudarcot vall, akkor is elonyt jelent, ha legkozelebb ki tudja hasznalni! ',
			'"Valahogy ehes vagyok"',
			'Rendszeresen kell takaritani, igaz? ',
			'Koszonjuk a mai kemeny munkajat! Minden tolem telhetot megteszek♪',
			'ohm, mit akartal csinalni...? ',
			'"Az otthon a legpihentetobb..."',
			'„Ha elfaradsz, megsimogatlak♪”',
			'Meg ha kulon is vagyunk, a szivem veled van♪',
			'Ez indigo~',
			'"Aranyos a kutya"',
			'Program? ',
			'"Goroon..."',
			'"A szamitogepem osszeomlott, pedig nem csinaltam semmit..."',
			'Szep napot kivanok♪',
			'"Engem megesz a futon"',
			'"Alvas kozben nezem"',
			'"Telekinezissel operalok"',
			'"Virtualis terbol posztolok"',
			'„Ma a Misskey fohadiszallasan vagyok! ',
			'"Misskey kozpontja a Z korzet 3. szektoraban talalhato"',
			'"A Misskey kozpontban sok szervernek nevezett gep talalhato"',
			'– Nincs farkad, igaz? ',
			'Hu...! \nCsiklandozik, ha megerinti',
			'„Mi az anti-dekompilacio? ',
			'Imadom Misskey iskolai egyenruhajat, aranyos♪',
			'Hu, a futon jol erzi magat...',
			'– Jol all rajtad a szobalany-ruha? ',
			'„Azok is fejlodhetnek, akik koszonni tudnak! … mondta syuilo-san,',
			'– Hol keresel, mester? ',
			'"Ha ram nezel, en is a Mesterre nezek"',
			'Igen, anya vagyok~',
			'Azta...',
			'Minden jegyzeted az enyem!',
			'– Ezt a piros ajtot fogom valasztani! ',
			'RENDBEN',
			'„(˘ω˘) Suya”',
			'(｀・ω・´) Shakin',
			'"Elnezest, harapok"',
			'"Jo reggeltol jo ejszakaig ez a te indigod~"',
			'"ugy tunik, a Misskey fejlesztoi keso reggel vannak ebren"',
			'nem nem...',
			'Miau miau! ',
			'Fentrol jon! Kerjuk, legyen ovatos! ',
			'Azta...',
			'Ah',
			'Fumya~',
			'Fah... almos vagyok',
			'ヾ(๑╹◡╹)ﾉ"',
			'"Elaludni..."',
			'Polyhos, az emlek atjarja a zsigereimet...',
			'megcsaltam!',
			'Hello',
			'"Nyan♪"',
			'"(*>ω<*)"',
			'"Niko♪"',
			'"puku"',
			'"Nyafuu"',
			'Ai itt van~',
			'Jee',
			'Mit? ',
		],
		want: item => `${item}、akarom...`,
		see: item => `Amikor setaltam meglattam az uton {item}！`,
		expire: item => `Most vettem eszre, hogy a ${item} lejart…`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
