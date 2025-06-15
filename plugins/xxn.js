const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
async function xnxxs(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = [];
      const url = [];
      const desc = [];
      const results = [];
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb').each(function(c, d) {
          url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
        });
      });
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb-under').each(function(c, d) {
          desc.push($(d).find('p.metadata').text());
          $(d).find('a').each(function(e, f) {
            title.push($(f).attr('title'));
          });
        });
      });
      for (let i = 0; i < title.length; i++) {
        results.push({title: title[i], info: desc[i], link: url[i]});
      }
      resolve({status: true, result: results});
    }).catch((err) => reject({status: false, result: err}));
  });
}

cmd({
    pattern: "xnxx",
    alias: ["xnxxs"],
    use: '.xnxx <query>',
    react: "🥵",
    desc: "Search and DOWNLOAD VIDEOS from xnxx.",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
//if (!isMe) return await reply('❌ 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝘼 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍/𝙉𝘽𝙐𝙔 𝙑𝙄𝘼 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙏𝙊 𝙊𝙒𝙉𝙀𝙍')
if (!q) return reply('🍁 𝙋𝙇𝙀𝘼𝙎𝙀 𝙂𝙄𝙑𝙀 𝙈𝙀 𝙒𝙊𝙍𝘿𝙎 𝙏𝙊 𝙎𝙃𝙀𝙍𝘾𝙃 🍁')
let res = await xnxxs(q)
let wm = `ᴘᴏᴡᴇʀᴅ ʙʏ ʙᴜɴɴʏ ᴍᴅ`
const msg = `\`𝘽𝙐𝙉𝙉𝙔 𝙈𝘿 𝙐𝙎𝙀𝙍 𝘽𝙊𝙏 \`

       🍁 𝗫 𝗩𝗶𝗱𝗲𝗼 𝗗𝗼𝘄𝗻𝗹𝗼𝗱𝗲𝗿 🍁

   ✦ X video name - ${q}    

`
const data = res.result
if (data.length < 1) return await conn.sendMessage(from, { text: "🍁 𝙄 𝘾𝙊𝙐𝙇𝘿𝙉'𝙏 𝙁𝙄𝙉𝘿 𝘼𝙉𝙔𝙏𝙃𝙄𝙂:(" }, { quoted: mek } )
var sections = []
        res.result.map((v) => {
          sections.push({
            rows: [{
              title: `${v.title}`,
              description: `Info : ${v.info}`,
              id: `.xnxxdl ${v.link}`
            }]
          })
        })
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            footer: config.FOOTER,
            header: '',
            image: config.LOGO,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: 'ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪' }, { quoted: mek } )
}
})

//------------------------dl---------------

async function xdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({status: true, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
    }).catch((err) => reject({status: false, result: err}));
  });
}

cmd({
    pattern: "xnxxdown",
    alias: ["dlxnxx","xnxxdl"],
    react: '🥵',
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 //if (!isMe) return await reply('❌ 𝙔𝙊𝙐 𝘼 𝙉𝙊𝙏 𝘼 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍\𝙉𝘼𝘽𝙐𝙔 𝙑𝙄𝘼 𝙈𝘼𝙎𝙎𝘼𝙂𝙀 𝙏𝙊 𝙈𝙔 𝙊𝙒𝙉𝙀𝙍')
 if (!q) return reply('🥵 𝙋𝙇𝙀𝘼𝙎𝙀 𝙂𝙄𝙑𝙀 𝙈𝙀 𝘼 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙐𝙍𝙇 🥵')
  let res = await xdl(q)
  let title = res.result.title
  await conn.sendMessage(from, { video: { url: res.result.files.high }, caption: title}, { quoted: mek })
} catch (e) {
reply('ɪᴀᴍ ꜱᴏʀʀʏ ꜱᴀʀ ᴇʀʀᴏ 😪')
console.log(e)
}
})
