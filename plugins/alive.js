const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *👋Hi*: ${pushname}
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *👨‍💻 Owner*: 
┃◈└───────────┈⊷
╰──────────────┈⊷

  *Multidevice Whatsapp Bot.*

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
                thumbnailUrl: 'https://files.catbox.moe/xnot7v.jpg',
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