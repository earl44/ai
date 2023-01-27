<h1><p align="center"><img src="./ai.svg" alt="藍" height="200"></p></h1>
<p align="center">An Ai for Misskey. <a href="./torisetu.md">About Ai</a></p>

## Misskey Bot (magyar)。

## Docker telepites
##1,`git clone https://github.com/earl44/ai.git`
##2,`cd ai`
##3,`nano config.json`
``` json
{
	"host": "https:// misskey szerver cime",
	"i": "access token",
	"master": "admin felhasznalonev",
	"notingEnabled": "veletlen valaszok true/false",
	"keywordEnabled": "kulcsszavak mentese true/false",
	"chartEnabled": "diagram funkcio true/false",
	"reversiEnabled": "Ai-vel és a Reversi-vel valo jatek true/false",
	"serverMonitoring": "szerver figylese true/false",
	"mecab": "/usr/bin/mecab",
	"mecabDic": "/usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd/",
	"memoryDir": "data"
}
```
##4,`docker-compose build`
##5,`docker-compose up`

## Teszt Bot
https://829.hu/@Adriana

## Licenc
MIT 

## Eredeti Japan verzio alkotoja
https://github.com/syuilo

## Awards
<img src="./WorksOnMyMachine.png" alt="Works on my machine" height="120">
