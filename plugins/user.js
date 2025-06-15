const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs = require('fs')

cmd({
    pattern: "getplugin",
    react: "🗿",
    alias: ["gp"],
    desc: "Change the Bot number Bio",
    category: "owner",
    use: '.getplugin',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply(' *You must be a bots owner frist*')
let sesi = await fs.readFileSync(`./plugins/${q}.js`)
await conn.sendMessage(from, { document: sesi, mimetype: 'application/javascript', fileName: `${q}.js` }, { quoted: mek })
//await conn.sendMessage(from , { text: "🚩 *New Bio Added Successfully*" }, { quoted: mek } )
} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "sesion",
    react: "🗿",
    alias: ["getses"],
    desc: "Change the Bot number Bio",
    category: "owner",
    use: '.getses',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply(' *You must be a bots owner frist*')
let sesi = await fs.readFileSync('./auth_info_baileys/creds.json')
await conn.sendMessage(from, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: mek })
//await conn.sendMessage(from , { text: "🚩 *New Bio Added Successfully*" }, { quoted: mek } )
} catch (e) {
reply('*Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "upbio",
    react: "🗿",
    alias: ["updatebio"],
    desc: "Change the Bot number Bio",
    category: "owner",
    use: '.upbio',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply(' *You must be a bots owner frist*')
if ( !q ) return reply('*Enter the New Bio*')
if (q.length > 139 ) return reply(' *Sorry ! Characters limit Exceded*')
await conn.updateProfileStatus(q)
await conn.sendMessage(from , { text: " *New Bio Added Successfully* ✔️" }, { quoted: mek } )
} catch (e) {
reply(' *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "getprivacy",
    react: "🗿",
    alias: ["getprivacysettings","gpvc"],
    desc: "Get the bot Number Privacy Setting Updates",
    category: "owner",
    use: '.getprivacy',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply(' *You must be a bots owner frist*')
const duka = await conn.fetchPrivacySettings(true)
let puka = `Read Recipt - ${duka.readreceipts}
Profile Picture - ${duka.profile}
Status  - ${duka.status}
Online - ${duka.online}
Last Seen - ${duka.last}
Group Privacy - ${duka.groupadd}
Call Privacy - ${duka.calladd}

©powerd by kavishan_OFC`
 await conn.sendMessage(from , { text: puka }, { quoted: mek } )

} catch (e) {
reply(' *Error Accurated !!*\n\n' + e )
l(e)
}
})
