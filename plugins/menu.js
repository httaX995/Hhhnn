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

╭━❮ *DOWNLOAD CMD* ❯⊷
┃▸
┃▸🇹🇿 COMMAND: .play
┃▸❕ Download Audio from yt
┃▸ 
┃▸🇹🇿 COMMAND: .song
┃▸❕ Download song from yt
┃▸ 
┃▸🇹🇿 COMMAND: .apk
┃▸❕ Download apk from playstore
┃▸ 
┃▸🇹🇿 COMMAND: .video
┃▸❕ Download video from yt
┃▸ 
┃▸🇹🇿 COMMAND: .fb
┃▸❕ Download  video from fb
┃▸ 
┃▸🇹🇿 COMMAND: .tk
┃▸❕ Download video from tiktok
┃▸ 
┃▸🇹🇿 COMMAND: .ig
┃▸❕ Download video from ig
┃▸ 
┃▸🇹🇿 COMMAND: .gdrive
┃▸❕ Download drive files
┃▸ 
┃▸🇹🇿 COMMAND: .twitter
┃▸❕ Download video from Twitter
┃▸
┃▸🇹🇿 COMMAND: .img
┃▸❕ Download image
┃▸
┃▸🇹🇿 COMMAND: .darama
┃▸❕ Download full episode video
┃▸
┃▸🇹🇿 COMMAND: .play2
┃▸❕ Download Audio from yt
┃▸ 
┃▸🇹🇿 COMMAND: .video2
┃▸❕ Download video from yt
┃▸ 
┃▸🇹🇿 COMMAND: .baiscope
┃▸❕ Download video from baiscope
┃▸ 
┃▸🇹🇿 COMMAND: .mfire
┃▸❕ Download mediafire files
╰━━━━━━━━━━━━⪼ 

╭━❮ *ANMIE CMD* ❯━⊷
┃▸
┃▸🇹🇿 COMMAND: .yts
┃▸❕ Serch videos from yt
┃▸
┃▸🇹🇿 COMMAND: .king
┃▸❕ get king about 
┃▸
┃▸🇹🇿 COMMAND: .dog
┃▸❕ get random dog imgs
┃▸
┃▸🇹🇿 COMMAND: .anime 
┃▸❕ get anime pics
┃▸
┃▸🇹🇿 COMMAND: .animegirl 
┃▸❕ get animegirl pics
┃▸
┃▸🇹🇿 COMMAND: .loli
┃▸❕ get romantic anime pics
╰━━━━━━━━━━━━⪼  

╭━❮‍ *INFO CMD* ❯━┈⊷
┃▸
┃▸🇹🇿 COMMAND: .alive
┃▸❕ Check online or not
┃▸  
┃▸🇹🇿 COMMAND: .ping
┃▸❕ Check bot speed
┃▸  
┃▸🇹🇿 COMMAND: .menu
┃▸❕ Nero main menu
┃▸
┃▸🇹🇿 COMMAND: .menu2
┃▸❕ Nero main menu2
┃▸ 
┃▸🇹🇿 COMMAND: .ai
┃▸❕ chat with ai bot
┃▸
┃▸🇹🇿 COMMAND: .system
┃▸❕ check bot systems
┃▸
┃▸🇹🇿 COMMAND: .owner
┃▸❕ get owner info
┃▸ 
┃▸🇹🇿 COMMAND: .status
┃▸❕ check bot runtime
┃▸
┃▸🇹🇿 COMMAND: .about 
┃▸❕ get about bot 
┃▸
┃▸🇹🇿 COMMAND: .list 
┃▸❕ get bot command list
┃▸
┃▸🇹🇿 COMMAND: .script 
┃▸❕ get bot repository 
╰━━━━━━━━━━━━⪼

╭━❮ *OTHER CMD* ❯━⊷
┃▸
┃▸🇹🇿 COMMAND: .joke 
┃▸❕ Get Rendom joke 
┃▸ 
┃▸🇹🇿 COMMAND: .fact
┃▸❕ Get Rendom fact
┃▸
┃▸🇹🇿 COMMAND: .githubstalk 
┃▸❕ Get github data any user
┃▸ 
┃▸🇹🇿 COMMAND: .gpass
┃▸❕ Get a strong password 
┃▸
┃▸🇹🇿 COMMAND: .hack
┃▸❕ prank with friends 
┃▸
┃▸🇹🇿 COMMAND: .srepo 
┃▸❕ serch repository 
┃▸
┃▸🇹🇿 COMMAND: .define 
┃▸❕ serch any words
╰━━━━━━━━━━━━⪼

╭━❮ *GROUP CMD* ❯━┈⊷
┃▸
┃▸🇹🇿 COMMAND: .mute
┃▸❕ Mute group
┃▸
┃▸🇹🇿 COMMAND: .unmute
┃▸❕ Unmute group
┃▸
┃▸🇹🇿 COMMAND: .left
┃▸❕ left group
┃▸
┃▸🇹🇿 COMMAND: .jid
┃▸❕ group jid
┃▸
┃▸🇹🇿 COMMAND: .remove
┃▸❕ remove member from group
┃▸
┃▸🇹🇿 COMMAND: .delete 
┃▸❕ remove sms from group 
┃▸
┃▸🇹🇿 COMMAND: .add
┃▸❕ add members in group 
┃▸
┃▸🇹🇿 COMMAND: .kick
┃▸❕ kick any user 
┃▸
┃▸🇹🇿 COMMAND: .kickall
┃▸❕ remove all members from group
┃▸
┃▸🇹🇿 COMMAND: .setgoodbye
┃▸❕ set member leave sms
┃▸
┃▸🇹🇿 COMMAND: .setwelcome 
┃▸❕ set member welcome sms
┃▸
┃▸🇹🇿 COMMAND: promote 
┃▸❕ make group admin
┃▸
┃▸🇹🇿 COMMAND: .demote 
┃▸❕ dissmis any admin 
┃▸
┃▸🇹🇿 COMMAND: .tagall
┃▸❕ mention group all members
┃▸
┃▸🇹🇿 COMMAND: .getpic
┃▸❕ get group profile
┃▸
┃▸🇹🇿 COMMAND: .invite 
┃▸❕ get group invite link
┃▸
┃▸🇹🇿 COMMAND: .revoke 
┃▸❕ reset group link
┃▸
┃▸🇹🇿 COMMAND: .joinrequests
┃▸❕ cheack group panding members
┃▸
┃▸🇹🇿 COMMAND: .allreq
┃▸❕ add group panding members 
┃▸
┃▸🇹🇿 COMMAND: .lockgc
┃▸❕ lock group private
┃▸
┃▸🇹🇿 COMMAND: .unlockgc
┃▸❕ unlock group all
┃▸
┃▸🇹🇿 COMMAND: .leave 
┃▸❕ left any group 
┃▸
┃▸🇹🇿 COMMAND: .updategname
┃▸❕ set group name
┃▸
┃▸🇹🇿 COMMAND: .updategdesc
┃▸❕ set group description 
┃▸
┃▸🇹🇿 COMMAND: .joim
┃▸❕ join invite link 
┃▸
┃▸🇹🇿 COMMAND: .hidetag
┃▸❕ mention any user hide
┃▸
┃▸🇹🇿 COMMAND: .ginfo
┃▸❕ get group information 
┃▸
┃▸🇹🇿 COMMAND: .disappear on
┃▸❕ on disappear sms in group 
┃▸
┃▸🇹🇿 COMMAND: .disappear off
┃▸❕ off disappear sms in group 
┃▸
┃▸🇹🇿 COMMAND: .senddm
┃▸❕ send disappear sms in group 
┃▸
┃▸🇹🇿 COMMAND: .disappear 7d 24h 90d
┃▸❕ set time to disappear sms
╰━━━━━━━━━━━━⪼

╭━❮ *OWNER CMD* ❯┈⊷
┃▸
┃▸🇹🇿 COMMAND: .update
┃▸❕ update bot velue 
┃▸
┃▸🇹🇿 COMMAND: .restart 
┃▸❕ restart your bot
┃▸
┃▸🇹🇿 COMMAND: .settings
┃▸❕ see bot settings
┃▸
┃▸🇹🇿 COMMAND: .owner 
┃▸❕ get owner number 
┃▸
┃▸🇹🇿 COMMAND: .repo 
┃▸❕ get bot repository 
┃▸
┃▸🇹🇿 COMMAND: .system 
┃▸❕ check bot systems
┃▸
┃▸🇹🇿 COMMAND: .block
┃▸❕ block any user 
┃▸
┃▸🇹🇿 COMMAND: .unblock 
┃▸❕ unblock any user 
┃▸
┃▸🇹🇿 COMMAND: .shutdown 
┃▸❕ logout your bot
┃▸
┃▸🇹🇿 COMMAND: .clearchats 
┃▸❕ clearchats from ib
┃▸
┃▸🇹🇿 COMMAND: .setpp
┃▸❕ update profile pic
┃▸
┃▸🇹🇿 COMMAND: .broadcast 
┃▸❕ creat broadcast 
┃▸
┃▸🇹🇿 COMMAND: .jid
┃▸❕ get jid any user
┃▸
┃▸🇹🇿 COMMAND: .gjid 
┃▸❕ get group jid
╰━━━━━━━━━━━━⪼

╭❮ *CONVERT CMD* ❯┈⊷
┃▸
┃▸🇹🇿 COMMAND: .sticker
┃▸❕ convert photo to sticker
┃▸
┃▸🇹🇿 COMMAND: .tts
┃▸❕ change text to voice 
┃▸
┃▸🇹🇿 COMMAND: .trt 
┃▸❕ change languages 
╰━━━━━━━━━━━━⪼

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