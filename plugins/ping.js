const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    alias: "speed",
    desc: "Check bot's response time.",
    category: "main",
    react: "🧸",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const startTime = Date.now();

        // Add a short delay
        await new Promise(resolve => setTimeout(resolve, 100)); // 100M/s delay

        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping result
        await conn.sendMessage(from, { 
            text: `*🧙‍♂️* "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐒𝐏𝐄𝐄𝐃 𝐂𝐇𝐄𝐂𝐊" *SPEED: ${ping}M/s*`, 
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
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 

cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "💗",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*joine now zanta x-md saport group!*

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
 https://wa.me/94760879639?text=𝚣𝚊𝚗𝚝𝚊-𝚡𝚖𝚍-𝚋𝚘𝚝-deploy' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ : ${ping}M/s*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
