/***
                                ╭━━━┳╮ ╭┳━━━┳━━━┳━╮ ╭╮    ╭━━━┳━━╮
                                ┃╭━╮┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃    ┃╭━╮┣┫┣╯
                                ┃┃ ┃┃┃ ┃┃╰━━┫╰━━┫╭╮╰╯┃    ┃┃ ┃┃┃┃
                                ┃┃ ┃┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃╭━━╮┃╰━╯┃┃┃
                                ┃╰━╯┃╰━╯┃╰━━┫╰━━┫┃ ┃┃┃╰━━╯┃╭━╮┣┫┣╮
                                ╰━━╮┣━━━┻━━━┻━━━┻╯ ╰━╯    ╰╯ ╰┻━━╯
                                   ╰╯
## Project Name => Queen-AI
## Project Version => 1.0.0  
## Project Author => DarkWinzo
## Project license => MIT
## Project Team => DarkSide Team
## Module Name => config.js
## Coded By DarkWinzo
***/ 

const fs = require('fs');
const chalk = require('chalk');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

global.session = process.env.SESSION_ID || "PUT HERE"; //enter your session id here

global.openaikey = process.env.OPEN_AI_KEY || "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"; //Put Your Open AI Api key

global.ownername = process.env.OWNER_NAME || "Vihanga"; //Queen-AI Owner Name here

global.ownernumber = process.env.OWNER_NUMBER || "no number"; //Owner whatsapp number here

global.language = process.env.LANGUAGE || "SI"; //Enter bot working language EN = English / SI = Sinhala /ML = Malayalam /HI =Hindi /UR = Urdu

global.prefix = ['.'] //Don't Change

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update config.js"))
	delete require.cache[file]
	require(file)
});
