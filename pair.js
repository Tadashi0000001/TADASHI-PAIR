const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function MALVIN_XD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "malvin~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*Ｈᴇʏ ᴛʜᴇʀᴇ, 𝗧𝗔𝗗𝗔𝗦𝗛𝗜-𝗜𝗗 ᴜꜱᴇʀ* 👋🏻

ㄒʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ 𝗧𝗔𝗗𝗔𝗦𝗛𝗜-𝗜𝗗 ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ʜᴀꜱ ʙᴇᴇɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴄʀᴇᴀᴛᴇᴅ!

🔐 *𝗦𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳 : 𝚂𝙴𝙽𝚃 𝙰𝙱𝙾𝚅𝙴*
⚠️ *𝗞𝙴𝙴𝙿 𝙸𝚃 𝚂𝙰𝙵𝙴! 𝙳𝙾 𝙽𝙾𝚃 𝚂𝙷𝙰𝚁𝙴 𝚃𝙷𝙸𝚂 𝙸𝙳 𝚆𝙸𝚃𝙷 𝙰𝙽𝚈𝙾𝙽𝙴*.

——————

𝙎𝙏𝘼𝙔 𝙐𝙋𝘿𝘼𝙏𝙀𝘿:
*ᴊᴏɪɴ ᴏᴜʀ ᴏꜰꜰɪᴄɪᴀʟ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ:*  
https://whatsapp.com/channel/0029Vb31g3WG3R3eMqI86g1k


> *𝐏ᴏᴡᴇʀᴇᴅ ʙʏ ᴀꜱᴜʀᴀ ᴛᴀᴅᴀꜱʜɪ*`;
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "ᴛᴀᴅᴀꜱʜɪ-ɪᴅ",
thumbnailUrl: "https://i.ibb.co/991x5ZHM/20250612-215241.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb31g3WG3R3eMqI86g1k",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*Ｈᴇʏ ᴛʜᴇʀᴇ, 𝗧𝗔𝗗𝗔𝗦𝗛𝗜-𝗜𝗗 ᴜꜱᴇʀ* 👋🏻

ㄒʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ 𝗧𝗔𝗗𝗔𝗦𝗛𝗜-𝗜𝗗 ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ʜᴀꜱ ʙᴇᴇɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴄʀᴇᴀᴛᴇᴅ!

🔐 *𝗦𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳 : 𝚂𝙴𝙽𝚃 𝙰𝙱𝙾𝚅𝙴*
⚠️ *𝗞𝙴𝙴𝙿 𝙸𝚃 𝚂𝙰𝙵𝙴! 𝙳𝙾 𝙽𝙾𝚃 𝚂𝙷𝙰𝚁𝙴 𝚃𝙷𝙸𝚂 𝙸𝙳 𝚆𝙸𝚃𝙷 𝙰𝙽𝚈𝙾𝙽𝙴*.

——————

𝙎𝙏𝘼𝙔 𝙐𝙋𝘿𝘼𝙏𝙀𝘿:
*ᴊᴏɪɴ ᴏᴜʀ ᴏꜰꜰɪᴄɪᴀʟ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ:*  
https://whatsapp.com/channel/0029Vb31g3WG3R3eMqI86g1k


> *𝐏ᴏᴡᴇʀᴇᴅ ʙʏ ᴀꜱᴜʀᴀ ᴛᴀᴅᴀꜱʜɪ*`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "ᴍᴀʟᴠɪɴ-xᴅ",
thumbnailUrl: "https://i.ibb.co/991x5ZHM/20250612-215241.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb31g3WG3R3eMqI86g1k",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    MALVIN_XD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await MALVIN_XD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
