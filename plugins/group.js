const config = require('../config')
const { cmd, commands } = require('../command')
const os = require('os')
const fs = require('fs')
const moment = require('moment-timezone')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { default: makeWASocket, useMultiFileAuthState, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')
function genMsgId() {
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
} 
//======oo

var tesadtag = "*Give me text to tag !*"
var descg = "It tag all members in group."
var ONLGROUP = "*This is not a group !*"
var ADMIN = "You are not an admin !"
var tmsg = "It gives bot link"
var imgmsg = "Enter the enable/disable value, For Example ${prefix}ephemeral enable"
var BOTOW = "*You are not bot\'s owner or moderator !*"

//========

cmd({
    pattern: "kickall",
    react: "🚫",
    desc: "To kick all members in one time",
    category: "group",
    use: '.kickall',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
for (let mem of participants) {
                      
                      await sleep(1000)
                      if(mem.id == botNumber+'@s.whatsapp.net') return
                      if(mem.id == owner+'@s.whatsapp.net') return
                      await conn.groupParticipantsUpdate(from, [mem.id], 'remove')
                      await conn.sendText(from,`*${mem.id.split('@')[0]} Kick out !!!*`)
                                  }
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 		    	

cmd({
    pattern: "opentime",
    react: "🔓",
    desc: "To open group to a time",
    category: "group",
    use: '.opentime',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
  if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = mek.participant
                    const open = `_*Open time the group was opened by admin\n now members can send messages*_`
                    conn.groupSettingUpdate(from, 'not_announcement')
                    reply(open)
                }, timer)
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 	
	
cmd({
    pattern: "closetime",
    react: "🔒",
    desc: "To close group to a time",
    category: "group",
    use: '.closstime',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    conn.groupSettingUpdate(from, 'announcement')
                    reply(close)
                }, timer)
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 	

cmd({
    pattern: "sendcontact",
    react: "🐰",
    desc: "To see group contacts",
    category: "group",
    use: '.sendcontact',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
if (!mek.mentionedJid) return reply('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = q.split(' ')[1] ? q.split(' ')[1] : 'Contact' 
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+mek.mentionedJid.split('@')[0]+":"+mek.mentionedJid.split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
conn.sendMessage(mek.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 		    	

cmd({
    pattern: "savecontact",
    react: "🍁",
    desc: "To save group contacts",
    category: "group",
    use: '.savecontact',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
let cmiggc = await conn.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
conn.sendMessage(mek.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 	


cmd({
    pattern: "getcontact",
    react: "🍁",
    desc: "To get group contacts",
    category: "group",
    use: '.getcontact',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
if (!mek.mentionedJid) return reply('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = q.split(' ')[1] ? q.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid.split('@')+":"+mek.mentionedJid[0].split('@')+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
conn.sendMessage(mek.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 	

cmd({
    pattern: "contacttag",
    react: "🍁",
    desc: "To tag group contacts",
    category: "group",
    use: '.contacttag',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
izumibigpp = await conn.sendMessage(mek.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: mek, ephemeralExpiration: 86400})
await sleep(1000)
conn.sendContact(mek.chat, participants.map(a => a.id), izumibigpp)
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 	

cmd({
    pattern: "creatgc",
    react: "🍁",
    desc: "To create a group",
    category: "group",
    use: '.creatgc',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
let cret = await conn.groupCreate(args.join(" "), [])
let response = await conn.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
conn.sendMessage(m.chat, { text:teksop, mentions: await conn.parseMention(teksop)}, {quoted:mek}) 

await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 	

cmd({
    pattern: "hidetag",
    react: "🍁",
    desc: descg,
    category: "group",
    use: '.hidetag <hi>',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)
if (!q) return await  reply(tesadtag)
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)})
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "tagall",
    react: "🍁",
    desc: descg,
    category: "group",
    use: '.hidetag <hi>',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
let teks = ` 🍁𝐆𝐑𝐎𝐔𝐏  𝐍𝐎𝐓𝐅𝐘 🍁
                   
*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n`
for (let mem of participants) {
teks += `🍁 ✘@${mem.id.split('@')[0]}\n`
     }
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id)})
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('')
l(e)
}
})         

cmd({
    pattern: "tagadmin",
    react: "🍁",
    desc: descg,
    category: "group",
    use: '.tagadmin',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                    
                   if (!isGroup) return reply(ONLGROUP)
                  let teks = ` _❌ ${groupName}Admins ❌_
                  
*MASSAGE :* ${q ? q : 'blank'}\n\n`
                  for (let mem of groupAdmins) {
                                  teks += `    `
                                  }
                  conn.sendMessage(from, { text: teks, mentions: groupAdmins.map(a => a.id) })
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('')
l(e)
}
})

cmd({
    pattern: "setname",
    react: "🍁",
    desc: "To change group name",
    category: "group",
    use: '.setname',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
         	await conn.groupUpdateSubject(mek.chat, q).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
	reply('🍁 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐂𝐇𝐀𝐍𝐆𝐄𝐃 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄🍁')
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('𝐂𝐇𝐀𝐍𝐆𝐄𝐃 𝐃𝐎𝐍𝐄 ✔️')
l(e)
}
}) 		

cmd({
    pattern: "setdesc",
    react: "🍁",
    desc: "To change group description",
    category: "group",
    use: '.setdesc',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{            
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
         	await conn.groupUpdateDescription(mek.chat, q).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
	reply('🍁 𝐒𝐔𝐂𝐂𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐂𝐇𝐀𝐍𝐆𝐄𝐃 𝐆𝐑𝐎𝐔𝐏 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍 🍁')
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('*Done ✓✓*')
l(e)
}
}) 		

cmd({
    pattern: "ephemeral",
    react: "🍁",
    desc: "To desappear & appear messages",
    category: "group",
    use: '.ephemeral',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)

	if (!q) return await  reply(imgmsg)
                if (args[0] === 'enable') {
                    await conn.sendMessage(mek.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }else if (args[0] === 'disable') {
                    await conn.sendMessage(mek.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 		

cmd({
    pattern: "autoreadsw",
    react: "🍁",
    desc: "To desappear & appear messages",
    category: "group",
    use: '.autoreadsw',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
   
	if (args[0] == 'on') {
		if (autoreadsw) return reply('*Already activated!*')
		autoreadsw = true
		reply('*Successfully activate auto read status*')
	} else if (args[0] == 'off') {
		if (!autoreadsw) return reply('*Already deactivated!*')
		autoreadsw = false
		reply('*Successfully turn off auto read status*')
	} else {
		reply('𝗖𝗛𝗢𝗢𝗦𝗘 𝗢𝗡/𝗢𝗙𝗙')
	}
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 		



cmd({
    pattern: "delete",
    react: "🍁",
    desc: "To delete message",
    category: "group",
    use: '.delete',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{               
  if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                let teks = `The message was not sent by a bot!`
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
await conn.sendMessage(from, { react: { text: `✔️`, key: mek.key }}) 
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
l(e)
}
}) 		

