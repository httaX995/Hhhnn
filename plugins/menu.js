const path = require('path');
let config = require('../config.cjs'); // Load current config
const {cmd , commands} = require('../command')
 
const os = require("os")
const {runtime,fetchJson} = require('../lib/functions')
const { BufferJSON, Browsers, WA_DEFAULT_EPHEMERAL, makeWASocket, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, useMultiFileAuthState, fetchLatestBaileysVersion, downloadContentFromMessage} = require('@whiskeysockets/baileys');
const prefix = config.PREFIX;

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "😚",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from,users , quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(config.BTN_MSG === true && !isGroup){
    try{

    const getAllUsers = () => {
        return Array.from(users);  // Convert the Set to an array
    };
let totalusers = getAllUsers.length;

let img = await fetchJson(`https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/logo.json`)

let menumsg = `
🧚‍♂️⃟🩵 © DNX MD 😈 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 🧚‍♂️⃟🩵
✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © DNX MD V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┗━━━━━━━━━━━━━━━━
> ᴅɴx ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ʟᴏᴅ ᴛᴇᴀᴍ .....
> © 𝐂𝐘𝐁𝐄𝐑 𝐃𝐈𝐍𝐔 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/DNX-MD-V1/DNX-MD-V1
`;

let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `👉 𝐇𝐞𝐥𝐥𝐨 ${pushname} 𝐈'𝐦 © 𝐃𝐍𝐗 𝐌𝐃 😈\n\n🍂 𝐉𝐨𝐢𝐧 𝐌𝐲 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 -:\n\nhttps://whatsapp.com/channel/0029Vaj5XmgFXUubAjlU5642\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐋𝐎𝐃 𝐓𝐄𝐀𝐌. 💗*`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: img.allmenu } }, { upload: conn.waUploadToServer })),
                    title: ``,
                    gifPlayback: true,
                    subtitle: '𝐂𝐘𝐁𝐄𝐑 𝐃𝐈𝐍𝐔 𝐈𝐃 😈',
                    hasMediaAttachment: false
                  }),
                  body: { text: menumsg},
                  nativeFlowMessage: {
                    buttons: [
{
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"♨️ 𝘼𝙇𝙇 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ⚠️",
"sections":[{"title":"𝐑𝐀𝐒𝐇 𝐃𝐄𝐕𝐒💗",
"rows":[{"header":"REACTION COMMANDS",
"title":"Reaction Zone",
"description":"Fun Reactions",
"id":"${prefix}list 14"},
{"header":"SEARCH OPTIONS",
"title":"Search Power",
"description":"Search Everything",
"id":"${prefix}list 4"},
{"header":"HENTAI COMMANDS",
"title":"Hentai Zone",
"description":"Anime Hentai Zone",
"id":"${prefix}list 15"},
{"header":"DOWNLOAD MENU",
"title":"Download Zone",
"description":"Download Anything",
"id":"${prefix}list 5"},
{"header":"MOVIE HUB",
"title":"Movie Zone",
"description":"Movies & Series",
"id":"${prefix}list 13"},
{"header":"GAME HUB",
"title":"Group Games",
"description":"Fun Group Games",
"id":"${prefix}list 9"},
{"header":"OWNER PANEL",
"title":"Owner Commands",
"description":"Manage Bot",
"id":"${prefix}list 1"},
{"header":"CONVERSION TOOLS",
"title":"Convert Options",
"description":"Convert Files/Media",
"id":"${prefix}list 2"},
{"header":"SETTINGS",
"title":"Settings",
"description":"Customize Bot",
"id":"${prefix}list 11"},
{"header":"NSFW COMMANDS",
"title":"NSFW Zone",
"description":"Adult Zone",
"id":"${prefix}list 12"},
{"header":"MAIN HUB",
"title":"Main Hub",
"description":"Central Commands",
"id":"${prefix}list 7"},
{"header":"ENTERTAINMENT",
"title":"Fun & Games",
"description":"Play Games & More",
"id":"${prefix}list 6"},
{"header":"LOGO GENERATION",
"title":"Logo Menu",
"description":"Create Logos",
"id":"${prefix}list 8"},
{"header":"AI TOOLS",
"title":"AI Fun",
"description":"AI-based Fun Tools",
"id":"${prefix}list 3"},
{"header":"TOOLS MENU",
"title":"Useful Tools",
"description":"Utilities & Tools",
"id":"${prefix}list 10"}]
}]
}`
          },
                                    {
              "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Owner 👤\",\"id\":\".owner"}`
                 },
                      {
                       "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐃𝐍𝐗 𝐌𝐃 V1 💚\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
                       },
                    ],
                  },
                },
              ],
                         messageVersion: 1,
                         },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363401928208566@newsletter',
                         newsletterName: `DNX MD FORWARD`,
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        { quoted: mek })
        
            await conn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });

} catch (e) {
console.log(e);
reply(`${e}`);
}
} else {
    try{
    
        const getAllUsers = () => {
            return Array.from(users);  // Convert the Set to an array
        };
    let totalusers = getAllUsers.length;
    
    let img = await fetchJson(`https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/logo.json`)
    
    let menumsg = `
    🧚‍♂️⃟🩵 © DNX MD  𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 🧚‍♂️⃟🩵
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © DNX MD  V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃✘◍ 1.𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
    ┃✘◍ 2.𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
    ┃✘◍ 3.𝗔𝗜 𝗙𝗨𝗡
    ┃✘◍ 4.𝗦𝗘𝗔𝗥𝗖𝗛 𝗣𝗢𝗪𝗘𝗥
    ┃✘◍ 5.𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗭𝗢𝗡𝗘
    ┃✘◍ 6.𝗙𝗨𝗡 & 𝗚𝗔𝗠𝗘𝗦
    ┃✘◍ 7.𝗠𝗔𝗜𝗡 𝗛𝗨𝗕
    ┃✘◍ 8.𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨
    ┃✘◍ 9.𝗚𝗥𝗢𝗨𝗣 𝗚𝗔𝗠𝗘𝗦
    ┃✘◍ 10.𝗨𝗦𝗘𝗙𝗨𝗟 𝗧𝗢𝗢𝗟𝗘𝗦
    ┃✘◍ 11.𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦
    ┃✘◍ 12.𝗡𝗦𝗙𝗪 𝗭𝗢𝗡𝗘
    ┃✘◍ 13.𝗠𝗢𝗩𝗜𝗘 𝗭𝗢𝗡𝗘
    ┃✘◍ 14.𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗭𝗢𝗡𝗘
    ┃✘◍ 15.𝗛𝗘𝗡𝗧𝗔𝗜 𝗭𝗢𝗡𝗘
    ┃
    ┗━━━━━━━━━━━━━━━━
    📝 ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ᴄᴏʀʀᴇꜱᴘᴏɴᴅɪɴɢ ɴᴜᴍʙᴇʀ ᴛᴏ ᴇᴍʙᴀʀᴋ ᴏɴ ʏᴏᴜʀ ᴊᴏᴜʀɴᴇʏ !!!
    
    > ᴅɴx ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ʟᴏᴅ ᴛᴇᴀᴍ .....
    > © 𝐂𝐘𝐁𝐄𝐑 𝐃𝐈𝐍𝐔 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/DNX-MD-V1/DNX-MD-V1
    `;
    
    
    let ownerMenu = `
    🧚‍♂️⃟🩵 © DNX MD  𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © DNX MD 😈 V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .forward
    ┃  .shutdown
    ┃  .broadcast
    ┃  .block
    ┃  .unblock
    ┃  .clearchats
    ┃  .jid
    ┃  .gjid
    ┃  .restart
    ┃  .update
    ┃  .ban
    ┃  .unban
    ┃  .addsudo
    ┃  .delsudo
    ┃
    ┗━━━━━━━━━━━━━━━━
    
    > ᴅɴx ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ʟᴏᴅ ᴛᴇᴀᴍ .....
    > © 𝐂𝐘𝐁𝐄𝐑 𝐃𝐈𝐍𝐔 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/DNX-MD-V1/DNX-MD-V1
    `;
    
    
    let convertMenu = `
    🧚‍♂️⃟🩵 © DNX MD  𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © DNX MD 😈 V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .toptt
    ┃  .tts
    ┃  .sticker
    ┃  .emojimix
    ┃  .trt
    ┃
    ┗━━━━━━━━━━━━━━━━
    > ᴅɴx ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ʟᴏᴅ ᴛᴇᴀᴍ .....
    > © 𝐂𝐘𝐁𝐄𝐑 𝐃𝐈𝐍𝐔 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/DNX-MD-V1/DNX-MD-V1
    `;
    
    
    
    let downloadMenu = `
    🧚‍♂️⃟🩵 © DNX MD 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © DNX MD 😈 V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .tiktok
    ┃  .fb
    ┃  .twitter
    ┃  .mediafire
    ┃  .ig
    ┃  .baiscope
    ┃  .ginisisila
    ┃  .apk
    ┃  .gdrive
    ┃  .spotify
    ┃  .song
    ┃  .video
    ┃
    ┗━━━━━━━━━━━━━━━━
    > ᴅɴx ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ʟᴏᴅ ᴛᴇᴀᴍ .....
    > © 𝐂𝐘𝐁𝐄𝐑 𝐃𝐈𝐍𝐔 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/DNX-MD-V1/DNX-MD-V1
    `;
    
    
    let mainHub = `
    🧚‍♂️⃟🩵 © DNX MD  𝗠𝗔𝗜𝗡 𝗛𝗨𝗕 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © DNX MD  V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .alive
    ┃  .system
    ┃  .runtime
    ┃  .ping
    ┃  .owner
    ┃  .menu
    ┃  .vv
    ┃  .push
    ┃
    ┗━━━━━━━━━━━━━━━━
    > ᴅɴx ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ʟᴏᴅ ᴛᴇᴀᴍ .....
    > © 𝐂𝐘𝐁𝐄𝐑 𝐃𝐈𝐍𝐔 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/DNX-MD-V1/DNX-MD-V1
    `;
    
    let logoMenu = `
    🧚‍♂️⃟🩵 © DNX MD 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © DNX MD V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .write
    ┃  .starsnight
    ┃  .leaves
    ┃  .metalstar
    ┃  .starzodiac
    ┃  .avatargold
    ┃  .frozen
    ┃  .neondevil
    ┃  .snow3d
    ┃  .birthday
    ┃  .colorfulangel
    ┃  .makingneon
    ┃  .beautifulgold
    ┃  .thunder
    ┃  .galaxy1
    ┃  .write
    ┃  .advancedglow
    ┃  .typography
    ┃  .pixelglitch
    ┃  .neonglitch
    ┃  .glitch
    ┃  .flag
    ┃  .flag3
    ┃  .deleting
    ┃  .blackpink
    ┃  .glowing
    ┃  .underwater
    ┃  .logomaker
    ┃  .cartoon
    ┃  .papercut
    ┃  .glitch
    ┃  .watercolor
    ┃  .effectcloud
    ┃  .gradien
    ┃  .summerbeach
    ┃  .luxurygold
    ┃  .multicolourneon
    ┃  .sandsummer
    ┃  .galaxywallpaper
    ┃  .1971
    ┃  .makingneon
    ┃  .royal
    ┃  .freecreate
    ┃  .galaxystyle
    ┃  .lighteffect
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let funMenu = `
    🧚‍♂️⃟🩵 © DNX MD 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © DNX MD V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .animegirl
    ┃  .quote
    ┃  .joke
    ┃  .hack
    ┃  .fact
    ┃  .dog
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let groupMenu = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .kick
    ┃  .add
    ┃  .delete
    ┃  .kickall
    ┃  .opentime
    ┃  .closetime
    ┃  .tagall
    ┃  .tagadmin
    ┃  .mute
    ┃  .unmute
    ┃  .promote
    ┃  .demote
    ┃  .setname
    ┃  .setdesc
    ┃  .invite
    ┃  .join
    ┃  .leave
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let aiMenu = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .gemini
    ┃  .ai
    ┃  .totext
    ┃  .aiimage
    ┃  .meta
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let searchMenu = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .esananews
    ┃  .img
    ┃  .bingimg
    ┃  .movie
    ┃  .news
    ┃  .pinterest
    ┃  .wallpaper
    ┃  .yts
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let usefulTools = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .gpass
    ┃  .githubstalk
    ┃  .srepo
    ┃  .weather
    ┃  .cal
    ┃  .currency
    ┃  .translate
    ┃  .tempmail
    ┃  .checkmail
    ┃  .delmail
    ┃  .password
    ┃  .hijact
    ┃  .fancy
    ┃  .removebg
    ┃  .boom
    ┃  .enhance
    ┃  .getdetails
    ┃  .toimg
    ┃  .tourl
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let settingsMenu = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃ .setprefix  *Example:* .setprefix !
    ┃  Set a custom prefix for your bot.
    ┃ 
    ┃ .setnews  *Example:* .setnews 123456789@s.whatsapp.net
    ┃  Set the news jid.
    ┃ 
    ┃ .setreact  *Example:* .setreact 👍
    ┃  Set a custom reaction emoji for the bot.
    ┃ 
    ┃ .btnmsg  *Example:* .btnmsg on
    ┃  Toggle Button messages for the bot.
    ┃ 
    ┃ .autoreadstatus  *Example:* .autoreadstatus on
    ┃  Toggle automatic message reading.
    ┃ 
    ┃ .setmode  *Example:* .setmode inbox
    ┃  Change the bot’s operating mode.
    ┃ 
    ┃ .setbotnumber  *Example:* .setbotnumber +123456789
    ┃  Set the bot's contact number.
    ┃ 
    ┃ .autovoice  *Example:* .autovoice on
    ┃  Toggle auto-voice messages for the bot.
    ┃ 
    ┃ .autosticker  *Example:* .autosticker off
    ┃  Enable or disable automatic stickers.
    ┃ 
    ┃ .autoreply  *Example:* .autoreply on
    ┃  Set a custom autoreply message.
    ┃ 
    ┃ .autoreact  *Example:* .autoreact on
    ┃  Toggle auto-reaction on messages.
    ┃ 
    ┃ .welcome  *Example:* .welcome on
    ┃  Enable or disable welcome messages for new users.
    ┃ 
    ┃ .antibad  *Example:* .antibad on
    ┃  Enable or disable anti-bad word filter.
    ┃ 
    ┃ .antibot  *Example:* .antibot on
    ┃  Enable or disable anti-bot protection.
    ┃ 
    ┃ .antilink  *Example:* .antilink on
    ┃  Enable or disable anti-link feature.
    ┃ 
    ┃ .anticall  *Example:* .anticall on
    ┃  Enable or disable anti-call protection.
    ┃ 
    ┃ .antidelete  *Example:* .antidelete on
    ┃  Enable or disable anti-delete feature.
    ┃ 
    ┃ .allwaysonline  *Example:* .allwaysonline on
    ┃  Keep the bot always online.
    ┃ 
    ┃ .moroccoblock  *Example:* .moroccoblock on
    ┃  Block users from Morocco.
    ┃ 
    ┃ .readcmd  *Example:* .readcmd on
    ┃  Enable or disable reading incoming commands.
    ┃ 
    ┃ .autotyping  *Example:* .autotyping on
    ┃  Enable auto-typing status for the bot.
    ┃ 
    ┃ .autorecording  *Example:* .autorecording on
    ┃  Enable or disable automatic recording.
    ┃ 
    ┃ .autonews  *Example:* .autonews on
    ┃  Enable or disable automatic news updates.
    ┃ 
    ┃ .ownerreact  *Example:* .ownerreact on
    ┃  Set the bot to react to the owner’s messages.
    ┃ 
    ┃ .setmovie  *Example:* .setmovie 123456789@s.whatsapp.net
    ┃  Set a custom jid for movie send.
    ┃ 
    ┃ .resetmovie  *Example:* .resetmovie
    ┃  Reset the movie to default.
    ┃ 
    ┃ .ban  *Example:* .ban 123456789@s.whatsapp.net
    ┃  Ban a user from interacting with the bot.
    ┃ 
    ┃ .unban  *Example:* .unban 123456789@s.whatsapp.net
    ┃  Unban a previously banned user.
    ┃ 
    ┃ .addsudo  *Example:* .addsudo 123456789
    ┃  Add a user as a superuser.
    ┃ 
    ┃ .delsudo  *Example:* .delsudo 123456789
    ┃  Remove a superuser from the list.
    ┃ 
    ┃ .setanime  *Example:* .setanime 123456789@s.whatsapp.net
    ┃  Set a custom jid for send anime status.
    ┃ 
    ┃ .resetanime  *Example:* .resetanime
    ┃  Reset the anime to default.
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

    
    let movieMenu = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .sinhalasub
    ┃  .cinesubz
    ┃  .ytsmx
    ┃  .1337x
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let nsfwMenu = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .xnxx
    ┃  .xvideos
    ┃  .phub
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let reactMenu = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .bully
    ┃  .cuddle
    ┃  .cry
    ┃  .hug
    ┃  .awoo
    ┃  .kiss
    ┃  .lick
    ┃  .pat
    ┃  .smug
    ┃  .bonk
    ┃  .yeet
    ┃  .blush
    ┃  .smile
    ┃  .wave
    ┃  .highfive
    ┃  .handhold
    ┃  .nom
    ┃  .bite
    ┃  .glomp
    ┃  .slap
    ┃  .kill
    ┃  .kick
    ┃  .happy
    ┃  .wink
    ┃  .poke
    ┃  .dance
    ┃  .cringe
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    let hentaiMenu = `
    🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗛𝗘𝗡𝗧𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵
    
    ✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
    ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.
    
    ┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
    ┃
    ┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
    ┃
    ┗━━━━━━━━━━━━━━━
    ┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
    ┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
    ┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
    ┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
    ┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
    ┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
    ┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
    ┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
    ┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    ┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
    ┃
    ┃  .hwaifu
    ┃  .hneko
    ┃  .trap
    ┃  .blowjob   
    ┃
    ┗━━━━━━━━━━━━━━━━
    > Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
    > © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
    > ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
    `;
    
    // Send the initial message and store the message ID
    const sentMsg = await conn.sendMessage(from, {
        image: { url: img.allmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
        caption: menumsg,
        contextInfo: {
            mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
            groupMentions: [],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363299978149557@newsletter',
                newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                serverMessageId: 999
            },
            externalAdReply: {
                title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                mediaType: 1,
                sourceUrl: "https://github.com/Mrrashmika",
                thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                renderLargerThumbnail: true,
                showAdAttribution: true
            }
        }
    });
    
    
    
    
    const messageID = sentMsg.key.id; // Save the message ID for later reference
    
    
    // Listen for the user's response
    conn.ev.on('messages.upsert', async (messageUpdate) => {
        const mek = messageUpdate.messages[0];
        if (!mek.message) return;
        const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
        const from = mek.key.remoteJid;
        const sender = mek.key.participant || mek.key.remoteJid;
    
        // Check if the message is a reply to the previously sent message
        const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;
    
        if (isReplyToSentMsg) {
            // React to the user's reply (the "1" or "2" message)
            await conn.sendMessage(from, { react: { text: '🎃', key: mek.key } });
    
            if (messageType === '1') {
                // Handle option 1 (Audio File)
                await conn.sendMessage(from, {
                    image: { url: img.ownermenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: ownerMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '2') {
                // Handle option 2 (Document File)
                await conn.sendMessage(from, {
                    image: { url: img.convertmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: convertMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '3') {
                await conn.sendMessage(from, {
                    image: { url: img.aimenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: aiMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '4') {
                await conn.sendMessage(from, {
                    image: { url: img.searchmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: searchMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '5') {
                await conn.sendMessage(from, {
                    image: { url: img.dlmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: downloadMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '6') {
                await conn.sendMessage(from, {
                    image: { url: img.funmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: funMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '7') {
                await conn.sendMessage(from, {
                    image: { url: img.mainmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: mainHub,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '9') {
                await conn.sendMessage(from, {
                    image: { url: img.groupmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: groupMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '10') {
                await conn.sendMessage(from, {
                    image: { url: img.usefulmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: usefulTools,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '12') {
                await conn.sendMessage(from, {
                    image: { url: img.nsfwmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: nsfwMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '11') {
                await conn.sendMessage(from, {
                    image: { url: img.settingmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: settingsMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '8') {
                await conn.sendMessage(from, {
                    image: { url: img.logomenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: logoMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '13') {
                await conn.sendMessage(from, {
                    image: { url: img.moviemenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: movieMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '14') {
                await conn.sendMessage(from, {
                    image: { url: img.reactmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: reactMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            } else if (messageType === '15') {
                await conn.sendMessage(from, {
                    image: { url: img.hentaimenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                    caption: hentaiMenu,
                    contextInfo: {
                        mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                        groupMentions: [],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363299978149557@newsletter',
                            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                            serverMessageId: 999
                        },
                        externalAdReply: {
                            title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                            mediaType: 1,
                            sourceUrl: "https://github.com/Mrrashmika",
                            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                            renderLargerThumbnail: true,
                            showAdAttribution: true
                        }
                    }
                });
            }
    
            // React to the successful completion of the task
            
        }
    });
    
    } catch (e) {
    console.log(e);
    reply(`${e}`);
    }
}
});





//=====================================================================================


cmd({
    pattern: "list",
    desc: "To get the menu.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from,users , quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const getAllUsers = () => {
        return Array.from(users);  // Convert the Set to an array
    };
let totalusers = getAllUsers.length;

let img = await fetchJson(`https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/logo.json`)

let menumsg = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 🧚‍♂️⃟🩵
✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;


let ownerMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .forward
┃  .shutdown
┃  .broadcast
┃  .block
┃  .unblock
┃  .clearchats
┃  .jid
┃  .gjid
┃  .restart
┃  .update
┃  .ban
┃  .unban
┃  .addsudo
┃  .delsudo
┃
┗━━━━━━━━━━━━━━━━

> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;


let convertMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .toptt
┃  .tts
┃  .sticker
┃  .emojimix
┃  .trt
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;



let downloadMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .tiktok
┃  .fb
┃  .twitter
┃  .mediafire
┃  .ig
┃  .baiscope
┃  .ginisisila
┃  .apk
┃  .gdrive
┃  .spotify
┃  .song
┃  .video
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;


let mainHub = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗠𝗔𝗜𝗡 𝗛𝗨𝗕 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .alive
┃  .system
┃  .runtime
┃  .ping
┃  .owner
┃  .menu
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let logoMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .write
┃  .starsnight
┃  .leaves
┃  .metalstar
┃  .starzodiac
┃  .avatargold
┃  .frozen
┃  .neondevil
┃  .snow3d
┃  .birthday
┃  .colorfulangel
┃  .makingneon
┃  .beautifulgold
┃  .thunder
┃  .galaxy1
┃  .write
┃  .advancedglow
┃  .typography
┃  .pixelglitch
┃  .neonglitch
┃  .glitch
┃  .flag
┃  .flag3
┃  .deleting
┃  .blackpink
┃  .glowing
┃  .underwater
┃  .logomaker
┃  .cartoon
┃  .papercut
┃  .glitch
┃  .watercolor
┃  .effectcloud
┃  .gradien
┃  .summerbeach
┃  .luxurygold
┃  .multicolourneon
┃  .sandsummer
┃  .galaxywallpaper
┃  .1971
┃  .makingneon
┃  .royal
┃  .freecreate
┃  .galaxystyle
┃  .lighteffect
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let funMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .animegirl
┃  .quote
┃  .joke
┃  .hack
┃  .fact
┃  .dog
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let groupMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .kick
┃  .add
┃  .delete
┃  .kickall
┃  .opentime
┃  .closetime
┃  .tagall
┃  .tagadmin
┃  .mute
┃  .unmute
┃  .promote
┃  .demote
┃  .setname
┃  .setdesc
┃  .invite
┃  .join
┃  .leave
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let aiMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .gemini
┃  .ai
┃  .totext
┃  .aiimage
┃  .meta
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let searchMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .esananews
┃  .img
┃  .bingimg
┃  .movie
┃  .news
┃  .pinterest
┃  .wallpaper
┃  .yts
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let usefulTools = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵


✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .gpass
┃  .githubstalk
┃  .srepo
┃  .weather
┃  .cal
┃  .currency
┃  .translate
┃  .tempmail
┃  .checkmail
┃  .delmail
┃  .password
┃  .hijact
┃  .fancy
┃  .removebg
┃  .boom
┃  .enhance
┃  .getdetails
┃  .toimg
┃  .tourl
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let settingsMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃ .setprefix  *Example:* .setprefix !
┃  Set a custom prefix for your bot.
┃ 
┃ .setnews  *Example:* .setnews 123456789@s.whatsapp.net
┃  Set the news jid.
┃ 
┃ .setreact  *Example:* .setreact 👍
┃  Set a custom reaction emoji for the bot.
┃ 
┃ .btnmsg  *Example:* .btnmsg on
┃  Toggle Button messages for the bot.
┃ 
┃ .autoreadstatus  *Example:* .autoreadstatus on
┃  Toggle automatic message reading.
┃ 
┃ .setmode  *Example:* .setmode inbox
┃  Change the bot’s operating mode.
┃ 
┃ .setbotnumber  *Example:* .setbotnumber +123456789
┃  Set the bot's contact number.
┃ 
┃ .autovoice  *Example:* .autovoice on
┃  Toggle auto-voice messages for the bot.
┃ 
┃ .autosticker  *Example:* .autosticker off
┃  Enable or disable automatic stickers.
┃ 
┃ .autoreply  *Example:* .autoreply on
┃  Set a custom autoreply message.
┃ 
┃ .autoreact  *Example:* .autoreact on
┃  Toggle auto-reaction on messages.
┃ 
┃ .welcome  *Example:* .welcome on
┃  Enable or disable welcome messages for new users.
┃ 
┃ .antibad  *Example:* .antibad on
┃  Enable or disable anti-bad word filter.
┃ 
┃ .antibot  *Example:* .antibot on
┃  Enable or disable anti-bot protection.
┃ 
┃ .antilink  *Example:* .antilink on
┃  Enable or disable anti-link feature.
┃ 
┃ .anticall  *Example:* .anticall on
┃  Enable or disable anti-call protection.
┃ 
┃ .antidelete  *Example:* .antidelete on
┃  Enable or disable anti-delete feature.
┃ 
┃ .allwaysonline  *Example:* .allwaysonline on
┃  Keep the bot always online.
┃ 
┃ .moroccoblock  *Example:* .moroccoblock on
┃  Block users from Morocco.
┃ 
┃ .readcmd  *Example:* .readcmd on
┃  Enable or disable reading incoming commands.
┃ 
┃ .autotyping  *Example:* .autotyping on
┃  Enable auto-typing status for the bot.
┃ 
┃ .autorecording  *Example:* .autorecording on
┃  Enable or disable automatic recording.
┃ 
┃ .autonews  *Example:* .autonews on
┃  Enable or disable automatic news updates.
┃ 
┃ .ownerreact  *Example:* .ownerreact on
┃  Set the bot to react to the owner’s messages.
┃ 
┃ .setmovie  *Example:* .setmovie 123456789@s.whatsapp.net
┃  Set a custom jid for movie send.
┃ 
┃ .resetmovie  *Example:* .resetmovie
┃  Reset the movie to default.
┃ 
┃ .ban  *Example:* .ban 123456789@s.whatsapp.net
┃  Ban a user from interacting with the bot.
┃ 
┃ .unban  *Example:* .unban 123456789@s.whatsapp.net
┃  Unban a previously banned user.
┃ 
┃ .addsudo  *Example:* .addsudo 123456789
┃  Add a user as a superuser.
┃ 
┃ .delsudo  *Example:* .delsudo 123456789
┃  Remove a superuser from the list.
┃ 
┃ .setanime  *Example:* .setanime 123456789@s.whatsapp.net
┃  Set a custom jid for send anime status.
┃ 
┃ .resetanime  *Example:* .resetanime
┃  Reset the anime to default.
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;


let movieMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .sinhalasub
┃  .cinesubz
┃  .ytsmx
┃  .1337x
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let nsfwMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .xnxx
┃  .xvideos
┃  .phub
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let reactMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .bully
┃  .cuddle
┃  .cry
┃  .hug
┃  .awoo
┃  .kiss
┃  .lick
┃  .pat
┃  .smug
┃  .bonk
┃  .yeet
┃  .blush
┃  .smile
┃  .wave
┃  .highfive
┃  .handhold
┃  .nom
┃  .bite
┃  .glomp
┃  .slap
┃  .kill
┃  .kick
┃  .happy
┃  .wink
┃  .poke
┃  .dance
┃  .cringe
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let hentaiMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗛𝗘𝗡𝗧𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃  .hwaifu
┃  .hneko
┃  .trap
┃  .blowjob   
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

let messageType = q;

        if (messageType === '1') {
            // Handle option 1 (Audio File)
            await conn.sendMessage(from, {
                image: { url: img.ownermenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: ownerMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '2') {
            // Handle option 2 (Document File)
            await conn.sendMessage(from, {
                image: { url: img.convertmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: convertMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '3') {
            await conn.sendMessage(from, {
                image: { url: img.aimenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: aiMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '4') {
            await conn.sendMessage(from, {
                image: { url: img.searchmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: searchMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '5') {
            await conn.sendMessage(from, {
                image: { url: img.dlmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: downloadMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '6') {
            await conn.sendMessage(from, {
                image: { url: img.funmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: funMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '7') {
            await conn.sendMessage(from, {
                image: { url: img.mainmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: mainHub,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '9') {
            await conn.sendMessage(from, {
                image: { url: img.groupmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: groupMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '10') {
            await conn.sendMessage(from, {
                image: { url: img.usefulmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: usefulTools,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '12') {
            await conn.sendMessage(from, {
                image: { url: img.nsfwmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: nsfwMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '11') {
            await conn.sendMessage(from, {
                image: { url: img.settingmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: settingsMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '8') {
            await conn.sendMessage(from, {
                image: { url: img.logomenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: logoMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '13') {
            await conn.sendMessage(from, {
                image: { url: img.moviemenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: movieMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '14') {
            await conn.sendMessage(from, {
                image: { url: img.reactmenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: reactMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        } else if (messageType === '15') {
            await conn.sendMessage(from, {
                image: { url: img.hentaimenu}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                caption: hentaiMenu,
                contextInfo: {
                    mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                    groupMentions: [],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299978149557@newsletter',
                        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                        serverMessageId: 999
                    },
                    externalAdReply: {
                        title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                        mediaType: 1,
                        sourceUrl: "https://github.com/Mrrashmika",
                        thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            });
        }

        // React to the successful completion of the task
} catch (e) {
console.log(e);
reply(`${e}`);
}
});