const { copy } = require('fs-extra')
const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
let cap = 'ʙᴜɴɴʏ ᴍᴅ ᴠɪ ᴜꜱᴇʀ ʙᴏᴛ\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍʀ ɴɪᴋᴏ| ʜᴀɴꜱᴀᴍᴀʟᴀ | ʀᴀꜱʜᴍɪᴋᴀ'
//=====================================================================================
cmd({
    pattern: "menu",
    react: "🍁",
    alias: ["panel", "list", "commands", "cmd"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let wm = ``
        if (os.hostname().length == 12) hostname = 'replit'
        else if (os.hostname().length == 36) hostname = 'heroku'
        else if (os.hostname().length == 8) hostname = 'koyeb'
        else hostname = os.hostname()
        let monspace = '```'
        const MNG = `${monspace}ʜᴇʟʟᴏᴡ ꜱᴀʀ 🐰 ${pushname}${monspace}

🍁 вυηηу м∂ αℓℓ ¢σммαη∂ѕ 🍁
┍───────────────┉►
┃
┃ 🔮 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 :🐰 ʙᴜɴɴʏ ᴍᴅ ʙᴏᴛ 🐰
┃ 📜 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: ${require("../package.json").version}
┃ ⚙️ 𝗠𝗘𝗠𝗢𝗘𝗬: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃ 🧭 𝗥𝗨𝗡 𝗧𝗜𝗠𝗘: ${runtime(process.uptime())}
┃ 📒 𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠: ${hostname}
║ 📆 𝗗𝗔𝗧𝗘 : ${tiny('Date Today')} : ${dayToday().date}
┃ 🕛 𝗧𝗜𝗠𝗘 : ${tiny('Time Now')} : ${dayToday().time}
┃ ❏» 𝚄𝚜𝚎𝚛 : ${pika.pushName}
┃ ❏» 𝙱𝚘𝚝 : ${Config.botname}
┃ ❏» 𝙿𝚛𝚎𝚏𝚒𝚡 : ${prefix}
┃ ❏» 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../../package.json').version}
┃ ❏» 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃ ❏» 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃ ❏» 𝙾𝚠𝚗𝚎𝚛 : ${Config.ownername}
┃ ❏» 𝙼𝚘𝚍𝚎 : ${bot.worktype}
┃ ❏» 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃ ❏» 𝚄𝚜𝚎𝚛𝚜 : ${await totalUsers()}
┃ ❏» 𝚄𝚙𝚝𝚒𝚖𝚎 : ${formatRuntime(process.uptime())}
┃ ❏» 𝙼𝚎𝚖 : ${getMemoryInfo().usedMemory}/${getMemoryInfo().totalMemory}
┃
└───────────────────────┉►`

        const categories = [];
        const categoryMap = new Map();

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                const category = cmd.category.toUpperCase();
                if (!categoryMap.has(category)) {
                    categories.push(category);
                    categoryMap.set(category, []);
                }
                categoryMap.get(category).push(cmd.pattern);
            }
        }

        const rows = []
        for (const category of categories) {
            rows.push({
                header: '',
                title: `${category} MENU`,
                description: '',
                id: `.category ${category}`
            })
        }

        let buttons = [{
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                    title: 'Tap Here!',
                    sections: [{
                        title: 'SELECT MENU',
                        highlight_label: 'ʙᴜɴɴʏ ᴍᴅ ᴜꜱᴇʀ ʙᴏᴛ',
                        rows: rows
                    }]
                }),
            }
        ]

        let opts = {
            image: config.LOGO,
            header: '',
            footer: config.FOOTER,
            body: MNG
        }

        await conn.sendMessage(from, {audio: { url: "https://github.com/NIKO-PAMIYA/voice-/raw/main/menu.mp3" }, mimetype: "audio/mpeg" }, {quoted:mek})
        return await conn.sendButtonMessage(from, buttons, m, opts)
    } catch (e) {
        reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
        console.log(e)
    }
})
ʙᴜɴɴʏ ᴍᴅ ᴠ1 ᴜꜱᴇʀ ʙᴏᴛ 🐰  \n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴍʀ ɴɪᴋᴏ | ʜᴀɴꜱᴀᴍᴀʟᴀ | ʀᴀꜱʜᴍɪᴋᴀ'
        const category = q.trim().toUpperCase();
        let commandList = `🍁✘${category} Command List:*\n\n`;

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (cmd.category.toUpperCase() === category) {
                commandList +=`
╭───────────────────╮
│🍁✘ *${cmd.use}*
╰───────────────────╯\n`;
            }
        }

        commandList += `\n🍁✘ *Total Commands in ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: commandList,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363298973396703@newsletter',
      newsletterName: "ʙᴜɴɴʏ ᴍᴅ ᴠ1 ᴜꜱᴇʀ ʙᴏᴛ 🐰",
      serverMessageId: 999
    },
externalAdReply: { 
title: '🍁 ʙᴜɴɴʏ ᴍᴅ ᴜꜱᴇʀ ʙᴏᴛ 🍁',
body: 'ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://github.com/NIKO-PAMIYA" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
        console.log(e)
    }
})
