const config = require('../config.js')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime,fetchJson} = require('../lib/functions')
const fs = require('fs')


cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📚",
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
❍ Bot Name : Qᴜᴇᴇɴ ᴇʟꜱᴀ𝗫 ᴍᴅ 
❍ Version : ${require('../package.json').version}
❍ RAM Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
❍ Runtime: ${runtime(process.uptime())}
❍ Platform: ${os.platform()}
❍ Mode:  ${config.MODE}
❍ OWNER MR NIKO | 94743595243 | 94704020146

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

> Qᴜᴇᴇɴ ᴇʟꜱᴀ𝗫 ᴍᴅ ɢɪᴛ ɢᴜʙ : https://github.com/niko-boy3/ElsaX_MD
> ᴡʜᴀᴛꜱ ᴀᴘᴘ : https://whatsapp.com/channel/0029Vb33GKr6buMK6SgaBc2j
© ᴍᴀᴅᴇʙʏ ꜱʜᴀʀᴋ ᴛᴍ
`;

await conn.sendMessage(
    m.chat,
    {
        document: fs.readFileSync("./package.json"),
        fileName: "Qᴜᴇᴇɴ ᴇʟꜱᴀ𝗫 ᴍᴅ ",
        mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        fileLength: 99999999999999,
        pageCount: 2024,
        caption: menumsg,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: 'Qᴜᴇᴇɴ ᴇʟꜱᴀ𝗫 ᴍᴅ ',
                newsletterJid: "120363373642098017@newsletter"
            },
            externalAdReply: {
                title: "> Qᴜᴇᴇɴ ᴇʟꜱᴀ𝗫 ᴍᴅ ",
                body: '',
                thumbnailUrl: 'https://i.ibb.co/LtDg0DV/31a34fdb88271d7f.jpg',
                sourceUrl: "https://github.com/niko-boy3/ElsaX_MD",
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