const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({ 
    pattern: "video", 
    alias: ["ytdl", "mp4"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ 〕━━━┈⊷
┆
┆
┆ 📝 *Title* -  ${yts.title}
┆
┆
┆
┆ 📜 *Duration* - ${yts.timestamp}
┆
┆
┆
┆ 👀 *Views* -  ${yts.views}
┆
┆
┆
┆ 👤 *Author* -  ${yts.author.name}
┆
┆
┆
┇ 🖇️ *Link* -  ${yts.url}
┆
┆
╰────────────────┈⊷



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

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `> *${yts.title}*\n>  *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 🗿*`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
       
// play

cmd({ 
     pattern: "song", 
     alias: ["ytdl3", "play","audio","mp3"], 
     react: "🎧", 
     desc: "Download Youtube song",
     category: "main", 
     use: '.song < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("Please provide a YouTube URL or song name.");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `╭━━━〔 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ 〕━━━┈⊷
┆
┆
┆ 📝 *Title* -  ${yts.title}
┆
┆
┆
┆ 📜 *Duration* - ${yts.timestamp}
┆
┆
┆
┆ 👀 *Views* -  ${yts.views}
┆
┆
┆
┆ 👤 *Author* -  ${yts.author.name}
┆
┆
┆
┇ 🖇️ *Link* -  ${yts.url}
┆
┆
╰────────────────┈⊷



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



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
    
    // Send audio file
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
    
    // Send document file
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 🗿*`
    }, { quoted: mek });

} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});
