const config = require('../config.js')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime,fetchJson} = require('../lib/functions')
const fs = require('fs')


cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "🙈",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from,users , quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const getAllUsers = () => {
        return Array.from(users);  // Convert the Set to an array
    };
let totalusers = getAllUsers.length;
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
ai: '',
fun: '',
other: '',
nsfw: '',
settings: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `┃  ${config.PREFIX}${commands[i].pattern}\n`;
 }
}


let menumsg = `
📅 ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
⌚ ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
\
❍ Bot Name : 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️
❍ Version : ${require('../package.json').version}
❍ RAM Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
❍ Runtime: ${runtime(process.uptime())}
❍ Platform: ${os.platform()}
❍ Mode:  ${config.MODE}
❍ OWNER ꜱᴜʀᴀɴɢ ᴄʜᴀᴍɪᴛʜ

┏━━❮  ᴍᴇɴᴜ ᴀʟʟ  ❯━━━━

┍❏ _𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔_━━━━
${menu.group}
┕━━━━━━━━━━━━━━━


┍❏ _𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 𝐌𝐄𝐍𝐔_━━
${menu.settings}
┕━━━━━━━━━━━━━━━


┍❏ _𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔_━━━
${menu.search}

┍❏ _𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔_━━━
${menu.owner}
┕━━━━━━━━━━━━━━━

┍❏ _𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔_━━
${menu.convert}
┕━━━━━━━━━━━━━━━


┍❏ _𝐔𝐒𝐄𝐅𝐔𝐋 𝐌𝐄𝐍𝐔_━━━
${menu.other}
┕━━━━━━━━━━━━━━━


 ┍❏ _𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔_━━━━
 ${menu.logo}
 ┕━━━━━━━━━━━━━━━

> 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️
`;

await conn.sendMessage(
    m.chat,
    {
        document: fs.readFileSync("./package.json"),
        fileName: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ ",
        mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        fileLength: 99999999999999,
        pageCount: 2024,
        caption: menumsg,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ ',
                newsletterJid: "120363421846535301@newsletter"
            },
            externalAdReply: {
                title: "> 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ ",
                body: '',
                thumbnailUrl: 'https://files.catbox.moe/xnot7v.jpg',
                sourceUrl: "94760879639@s.whatsapp.net",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    },
    { quoted: mek }
);

} catch(e){
    console.log(e)
    reply(`${e}`)
}
})