const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🌝",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *👋Hi*: ${pushname}
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *👨‍💻 Owner*: suranga chamith
┃◈└───────────┈⊷
╰──────────────┈⊷

  
  📌 *Type* '.menu' *to see all features.*
⚠️ *Please follow the rules before use — no spam or calls.*

*joine now zanta x-md saport group!*

https://chat.whatsapp.com/B7sv68zUaEV7viIDGPX6ji

*follow now  zanta x-md official chanels!*

> 🧙‍♂️ ᴄʜᴀɴɴᴇʟ 1.
 https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28
> 🧙‍♂️  ᴄʜᴀɴɴᴇʟ 2.
 https://whatsapp.com/channel/0029VbAg0qCCHDynz0XCeN0U
> 🧙‍♂️   ᴄʜᴀɴɴᴇʟ 3.
 https://whatsapp.com/channel/0029Vb6DIaX96H4NAzP6Uv2C

*💗 Thank you for using zanta-X-md!*

> 𝙳𝙴𝙿𝙻𝙾𝚈 𝙽𝙾𝚆 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙾𝚆𝙽𝙴𝚁 :-

> Deploy price LKR 150
 https://wa.me/94760879639?text=𝚣𝚊𝚗𝚝𝚊-𝚡𝚖𝚍-𝚋𝚘𝚝-deploy

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 🗿*


`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/68rzgj.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421846535301@newsletter',
                    newsletterName: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
