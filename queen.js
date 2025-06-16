
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    getContentType,
    downloadContentFromMessage,
    fetchLatestBaileysVersion,
    Browsers,
    jidNormalizedUser,
    makeInMemoryStore,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
    } = require('@whiskeysockets/baileys')
    const os = require("os")
    const path = require('path')
    const l = console.log
    const fs = require('fs')
    const P = require('pino')
    const FileType = require("file-type");
    //============================
    const config = require('./config.cjs');
    const getPrefix = () => config.PREFIX;
    const getWelcome = () => config.WELCOME;
    //============================
    const qrcode = require('qrcode-terminal')
    const util = require('util')
    
    const axios = require('axios')
    const { File } = require('megajs')
    const { exec } = require('child_process');
    const AdmZip = require('adm-zip'); // Import AdmZip for extraction
    //=========================functions========================
    const cheerio = require('cheerio');
    const fetch = require('node-fetch');
    const scrapeAnimeVideo1 = async () => {
        try {
          const url = 'https://shortstatusvideos.com/anime-video-status-download/';
          const response = await fetch(url);
          const html = await response.text();
          const $ = cheerio.load(html);
          const videos = [];
      
          $('a.mks_button.mks_button_small.squared').each((_, element) => {
            const href = $(element).attr('href');
            const title = $(element).closest('p').prevAll('p').find('strong').text().trim();
            if (href) {
              videos.push({ title, source: href });
            }
          });
      
          const randomIndex = Math.floor(Math.random() * videos.length);
          return videos[randomIndex] || null;
        } catch (error) {
          return {
            status: 'error',
            Author: 'Manul Official',
            message: error.message || 'Error occurred while scraping anime video status from shortstatusvideos.com.',
          };
        }
      };
      
      /**
       * Scrapes anime video links from mobstatus.com
       * @returns {Promise<Object>} - The random anime video or error message.
       */
      const scrapeAnimeVideo2 = async () => {
        try {
          const url = 'https://mobstatus.com/anime-whatsapp-status-video/';
          const response = await fetch(url);
          const html = await response.text();
          const $ = cheerio.load(html);
          const videos = [];
      
          const title = $('strong').text().trim();
          $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((_, element) => {
            const href = $(element).attr('href');
            if (href) {
              videos.push({ title, source: href });
            }
          });
      
          const randomIndex = Math.floor(Math.random() * videos.length);
          return videos[randomIndex] || null;
        } catch (error) {
          return {
            status: 'error',
            Author: 'Manul Official',
            message: error.message || 'Error occurred while scraping anime video status from mobstatus.com.',
          };
        }
      };
      
      const sendRandomAnimeVideos = (jid, socket, interval = 60000) => {
        const sentVideos = new Set(); // To store already sent video URLs
      
        const sendVideo = async () => {
          const randomScrape = Math.random() > 0.5 ? scrapeAnimeVideo1 : scrapeAnimeVideo2;
          let video;
      
          // Keep trying to get a new video that hasn't been sent yet
          for (let attempt = 0; attempt < 5; attempt++) {
            video = await randomScrape();
            if (video && !sentVideos.has(video.source)) {
              break;
            }
            video = null; // Reset video if it was already sent
          }
      
          if (video) {
            try {
              // Send the video
              await socket.sendMessage(jid, {
                video: { url: video.source },
                caption: `>  © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚*`,
                contextInfo: {
                mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363299978149557@newsletter',
                    newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                    body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                    mediaType: 1,
                    sourceUrl: "https://github.com/Mrrashmika",
                    thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
            }
              });
      
              // Mark the video as sent
              sentVideos.add(video.source);
      
              // Optional: Limit the size of the set to avoid memory issues (e.g., keep the last 1000 sent videos)
              if (sentVideos.size > 1000) {
                const oldestVideo = [...sentVideos][0];
                sentVideos.delete(oldestVideo);
              }
            } catch (sendError) {
              console.error(`Failed to send anime video to ${jid}:`, sendError.message);
            }
          } else {
            console.error('No new video found to send after multiple attempts.');
          }
        };
      
        // Send videos continuously at the specified interval
        setInterval(sendVideo, interval);
      };
      

    //==========================================================
    const FormData = require('form-data');
    const ffmpeg = require('fluent-ffmpeg');
    const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
    ffmpeg.setFfmpegPath(ffmpegInstaller.path);
    
    // ACRCloud Details (Replace with your actual keys)
    const host = 'identify-ap-southeast-1.acrcloud.com';
    const accessKey = '631a3b3cce68ee6af65d162016970b27';
    const secretKey = 'oEXdxHDEDbjIexqdcLjmmvzBa8tvrhACM80xrjAL';
    
    // Get the current time in UTC seconds
    function getUTCTimeSeconds() {
      const now = new Date();
      return Math.floor(now.getTime() / 1000);
    }
    
    // HMAC SHA1 encryption
    function encryptByHMACSHA1(data, key) {
      const crypto = require('crypto');
      return crypto.createHmac('sha1', key).update(data).digest('base64');
    }
    
    // Recognize song using ACRCloud API
    async function recognizeMusic(filePath) {
      const method = "POST";
      const httpURL = "/v1/identify";
      const dataType = "audio";
      const sigVersion = "1";
      const timestamp = getUTCTimeSeconds();
      const sigStr = method + "\n" + httpURL + "\n" + accessKey + "\n" + dataType + "\n" + sigVersion + "\n" + timestamp;
      const signature = encryptByHMACSHA1(sigStr, secretKey);
    
      // Read audio file as buffer
      const fileBuffer = fs.readFileSync(filePath);
    
      const form = new FormData();
      form.append('access_key', accessKey);
      form.append('sample_bytes', fileBuffer.length.toString());
      form.append('sample', fileBuffer, { filename: 'audio-file.wav' });
      form.append('timestamp', timestamp);
      form.append('signature', signature);
      form.append('data_type', dataType);
      form.append('signature_version', sigVersion);
    
      try {
        // Make the API request
        const response = await axios.post(`http://${host}${httpURL}`, form, {
          headers: form.getHeaders(),
        });
    
        // Return the result of music recognition
        return response.data;
      } catch (error) {
        console.error('Error recognizing music:', error);
        return null;
      }
    }
    
    // Extract audio from video file using FFmpeg
    function extractAudioFromVideo(videoFilePath, audioOutputPath) {
      return new Promise((resolve, reject) => {
        ffmpeg(videoFilePath)
          .output(audioOutputPath)
          .noVideo()
          .audioCodec('pcm_s16le') // Convert audio to WAV format
          .audioChannels(1)
          .audioFrequency(44100)
          .on('end', () => resolve(audioOutputPath))
          .on('error', (err) => reject(err))
          .run();
      });
    }
    
    // Check if the file is an audio or video file
    function isAudioFile(filePath) {
      const audioExtensions = ['.mp3', '.wav'];
      const ext = path.extname(filePath).toLowerCase();
      return audioExtensions.includes(ext);
    }
    
    // Main function to handle video and music identification
    async function handleFile(filePath) {
      const audioFilePath = './extracted_audio.wav';
    
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        throw new Error('File not found.');
      }
    
      try {
        let finalAudioPath;
    
        // Check if the file is an audio file
        if (isAudioFile(filePath)) {
          console.log('Audio file detected.');
          finalAudioPath = filePath; // Use the audio file directly
        } else {
          console.log('Video file detected. Extracting audio...');
          await extractAudioFromVideo(filePath, audioFilePath);
          finalAudioPath = audioFilePath; // Use the extracted audio
        }
    
        // After processing the audio file, send it for recognition
        const result = await recognizeMusic(finalAudioPath);
    
        // If it's a video file, delete the temporary audio file after use
        if (!isAudioFile(filePath)) {
          fs.unlinkSync(audioFilePath);
        }
    
        // Return the result (music identification result)
        return result ? result.metadata.music : null;
      } catch (error) {
        console.error('Error handling file:', error);
        throw new Error('Error processing file.');
      }
    }
    //=======================================================
   //======================================================
    const mimeTypes = [
        "application/pdf",              // PDF file
        "application/vnd.ms-excel",     // Excel file
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Excel (XLSX)
        "application/msword",           // Word file
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // Word (DOCX)                    // Plain text file
      ];
      
      // Randomly select a mimetype
      const randomMimeType = mimeTypes[Math.floor(Math.random() * mimeTypes.length)];
//=================================================================
    const ownerNumber = ['']
    
    //===================SESSION-AUTH============================
    const SESSION_DIR = './sessions';
    if (!fs.existsSync(SESSION_DIR)) {
        fs.mkdirSync(SESSION_DIR);
      }
      const sess = require('./session');
    if (!fs.existsSync(__dirname + '/sessions/creds.json')) {
    if(!sess.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
    const sessdata = sess.SESSION_ID.split("ANJU-MD=")[1];
    const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
    filer.download((err, data) => {
    if(err) throw err
    fs.writeFile(__dirname + '/sessions/creds.json', data, () => {
    console.log("Queen_Anju Session downloaded ✅")
    })})}
    
    const express = require("express");
const { time } = require('console')
    const app = express();
    const por = require('./session');
    const port = por.PORT;
    
    //=============================================
    
    async function connectToWA() {
//===========================
    console.log("Connecting Queen_Anju 🧬...");
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/sessions/')
    var { version } = await fetchLatestBaileysVersion()
    
    const conn = makeWASocket({
            logger: P({ level: 'silent' }),
            printQRInTerminal: false,
            browser: Browsers.macOS("Firefox"),
            syncFullHistory: true,
            auth: state,
            version
            })
        
    conn.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
    if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
    connectToWA()
    }
    } else if (connection === 'open') {
    console.log('Queen_Anju Is Installing... ')


//===============================================================
console.log('Plugins installed and loaded successfully ✅');
//==========================================================================
    //============================================================
    console.log('Queen_Anju connected to whatsapp ✅')
    const prefix = getPrefix();
    const { commands }= require('./command')
    // Assuming `config` contains all the settings
    let up = `
    🚀 **Queen_Anju MD Connected Successfully!** ✅ 
    
    --- **🎉 Welcome to Queen_Anju MD!** 🎉 
    ✦» 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('./package.json').version}
    ✦» 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
    ✦» 𝙷𝚘𝚜𝚝 : ${os.hostname()}
    ✦» 𝙾𝚆𝙽𝙴𝚁: ${config.BOT_NUMBER}
    
    --- **Current Settings:**
    ✦» **PREFIX:** ${config.PREFIX}
    ✦» **MODE:** ${config.MODE}
    ✦» **AUTO READ STATUS:** ${config.AUTO_READ_STATUS ? 'Enabled' : 'Disabled'}
    ✦» **READ CMD:** ${config.READ_CMD ? 'Enabled' : 'Disabled'}
    ✦» **AUTO VOICE:** ${config.AUTO_VOICE ? 'Enabled' : 'Disabled'}
    ✦» **AUTO STICKER:** ${config.AUTO_STICKER ? 'Enabled' : 'Disabled'}
    ✦» **AUTO REPLY:** ${config.AUTO_REPLY ? 'Enabled' : 'Disabled'}
    ✦» **AUTO REACT:** ${config.AUTO_REACT ? 'Enabled' : 'Disabled'}
    ✦» **WELCOME:** ${config.WELCOME ? 'Enabled' : 'Disabled'}
    ✦» **ANTI BAD:** ${config.ANTI_BAD ? 'Enabled' : 'Disabled'}
    ✦» **ANTI BOT:** ${config.ANTI_BOT ? 'Enabled' : 'Disabled'}
    ✦» **ANTI LINK:** ${config.ANTI_LINK ? 'Enabled' : 'Disabled'}
    ✦» **ALWAYS ONLINE:** ${config.ALLWAYS_ONLINE ? 'Enabled' : 'Disabled'}
    ✦» **MOROCCO BLOCK:** ${config.MOROCCO_BLOCK ? 'Enabled' : 'Disabled'}
    ✦» **AUTO NEWS:** ${config.AUTO_NEWS ? 'Enabled' : 'Disabled'}
    ✦» **AUTO TYPING:** ${config.AUTO_TYPING ? 'Enabled' : 'Disabled'}
    ✦» **AUTO RECORDING:** ${config.AUTO_RECORDING ? 'Enabled' : 'Disabled'}

    --- Thank you for using **Queen_Anju MD**. 
    We're here to make your experience enjoyable and seamless. 
    If you need any help or have questions, don't hesitate to ask. 
    
    **Enjoy your time with us!** 😊`;
    
    conn.sendMessage(conn.user.id, { 
        image: { 
            url: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/connect.jpg' 
        }, 
        caption: up ,
        contextInfo: {
            mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
            groupMentions: [],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363299978149557@newsletter',
                newsletterName: "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃",
                serverMessageId: 999
            },
            externalAdReply: {
                title: '𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃',
                body: '𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃',
                mediaType: 1,
                sourceUrl: "https://github.com/Mrrashmika",
                thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg', // This should match the image URL provided above
                renderLargerThumbnail: false,
                showAdAttribution: true
            }
        }
    });
    if (config.AUTO_NEWS === true){
        const { startNewsService } = require('./plugins/news');
        const nsjid = config.NEWS_JID;
        startNewsService(conn,nsjid);
    }
    const jid = config.MOVIE_JID; // Replace with the target JID
    const interval = 30 * 60 * 1000; // 30 minutes in milliseconds
    // Start sending random anime videos
    if(jid){
        sendRandomAnimeVideos(jid,conn, interval)
    }
    const inviteLink = "https://chat.whatsapp.com/CodEh9HMiXl1nKmDOWqBWW";

try {
    // Extract the channel code from the invite link
    const channelCode = inviteLink.split('/').pop(); // Get the '0029Vaj5XmgFXUubAjlU5642' part

    // Use a hypothetical method to join the channel
     conn.groupAcceptInvite(channelCode); // If Baileys supports a method like this
    console.log("Successfully joined the channel!");
} catch (err) {
    console.error("Failed to join the channel:", err);
}
}
    //==========================================================================
// Define the update details URL and the owner information
const UPDATE_DETAILS_URL = "https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/ditels.json";

// Path to store the last fetched version locally
const VERSION_FILE = path.join(__dirname, "version.json");

// Function to fetch the update details
async function fetchUpdateDetails() {
  try {
    const response = await axios.get(UPDATE_DETAILS_URL);
    return response.data;
  } catch (error) {
    console.error("❌ Failed to fetch update details:", error.message);
    return null;
  }
}

// Function to check for updates
async function checkForUpdates(conn) {
  const updateDetails = await fetchUpdateDetails();

  if (!updateDetails || !updateDetails.version) {
    console.error("❌ Invalid update details received.");
    return;
  }

  // Ensure the VERSION_FILE exists
  let lastVersion = null;
  if (fs.existsSync(VERSION_FILE)) {
    try {
      const storedData = fs.readFileSync(VERSION_FILE, "utf-8");
      lastVersion = JSON.parse(storedData).version;
    } catch (error) {
      console.error("❌ Error reading version file:", error.message);
    }
  }

  // Compare the current version with the last version
  if (lastVersion !== updateDetails.version) {
    console.log(`✨ New update available: ${updateDetails.version}`);

    // Notify the owner
    const message = `🌟 *QUEEN ANJU XPRO Update Available!*\n\n` +
                    `📜 *Version:* ${updateDetails.version}\n` +
                    `📝 *Details:* ${updateDetails.changelog || "No details provided"}\n` +
                    `🚀 Use the *.update* command to update your bot to the latest version.`;
    await conn.sendMessage(conn.user.id, { 
        image: { 
            url: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/connect.jpg' 
        }, 
        caption: message,
        contextInfo: {
            externalAdReply: {
                title: '𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗫ᴾᴿᴼ',
                body: '𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗫ᴾᴿᴼ',
                mediaType: 1,
                sourceUrl: "https://github.com/Mrrashmika",
                thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg', 
            }
        }
    });

    // Save the new version to the local file
    try {
      fs.writeFileSync(VERSION_FILE, JSON.stringify({ version: updateDetails.version }, null, 2));
      console.log("✅ Update notification sent to the owner.");
    } catch (error) {
      console.error("❌ Error saving version file:", error.message);
    }
  } else {
  }
}

// Schedule periodic update checks (e.g., every 1 minute)
function startUpdateChecker(conn) {
  setInterval(() => checkForUpdates(conn), 60 * 60 * 1000); // 1 minute
}
//=======================================================================================
    startUpdateChecker(conn);
    })

    
    //============================================================================
if(config.WELCOME === true){
    conn.ev.on('group-participants.update', async (update) => {
        const { id, participants, action } = update;
    
        try {
            const groupMetadata = await conn.groupMetadata(id);
            const groupName = groupMetadata.subject;
    
            // Loop through participants
            for (const participant of participants) {
                try {
                    let message = '';
                    let profilePicUrl = `https://cdn.discordapp.com/embed/avatars/0.png`;
    
                    // Fetch participant's profile picture
                    try {
                        profilePicUrl = await conn.profilePictureUrl(participant, 'image');
                    } catch (err) {
                        console.warn('Error fetching profile picture, using default:', err);
                    }
    
                    // Generate welcome card using Popcat API
                    const welcomeCardUrl = `https://api.popcat.xyz/welcomecard?background=https://cdn.popcat.xyz/welcome-bg.png&text1=${encodeURIComponent(
                        groupName
                    )}&text2=${encodeURIComponent(
                        `@${participant.split('@')[0]}`
                    )}&text3=Thank+You+For+Joining+Us❤️&avatar=${encodeURIComponent(
                        profilePicUrl
                    )}`;
    
                    if (action === 'add') {
                        if (getWelcome()) {
                            message = `
    ⫷⦁[ * '-'_꩜ 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 ꩜_'-' * ]⦁⫸
    
    *Hey @${participant.split('@')[0]}!* 👋
    
    WELCOME TO *${groupName}*
    
    > 🟢 *Queen Anju WhatsApp Bot* is up and running!
       Runtime: ${runtime(process.uptime())}
    > 🛠️ *Created by:* Janith Rashmika
    
    *Here's what I can do:* 
    💿 *Download Songs & Videos* 
    📰 *Fetch Latest News* 
    🎭 *Entertain with Fun Commands* 
    🔧 *Manage Groups* 
    
    > *Stay connected and enjoy the services!* 🌟
    
    *© 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 - MD* 
    *💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD
                            `;
                        }
                    } else if (action === 'remove') {
                        if (getWelcome()) {
                            message = `
    ⫷⦁[ * '-'_꩜ 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 ꩜_'-' * ]⦁⫸
    
    😔 *Goodbye @${participant.split('@')[0]}!*
    
    GOOD BYE FROM *${groupName}*
    
    > We're sad to see you leave *${groupName}*. 😢
    > We hope you had a great time with us.
    
    *If you ever decide to come back, you'll always be welcome!* 🌟
    
    *© 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 - MD* 
    *💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD
                            `;
                        }
                    }
    
                    if (message  ) {
                        await conn.sendMessage(id, {
                            image: { url: welcomeCardUrl },
                            caption: message,
                            contextInfo: {
                                mentionedJid: [participant],
                                externalAdReply: {
                                    title: '𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃',
                                    body: '𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃',
                                    mediaType: 1,
                                    sourceUrl: "https://github.com/Mrrashmika",
                                    thumbnailUrl: profilePicUrl,
                                },
                            },
                        });
                    }
                } catch (err) {
                    console.error('Error processing participant update:', err);
                }
            }
        } catch (err) {
            console.error('Error fetching group metadata or handling update:', err);
        }
    });
}
    conn.ev.on("call", async(json) => {
         if(config.ANTI_CALL) { 
           for(const id of json) {
               if(id.status == "offer") {
                   if(id.isGroup == false) {
                                    await conn.sendMessage(id.from, {
                           text: `*Call rejected By © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ*`, 
                               mentions: [id.from]
                       });
                       await conn.rejectCall(id.id, id.from);
                   } else {
                       await conn.rejectCall(id.id, id.from);
                   }
               }
           }}
       });
       const replyTrackers = {}; // Object to track sent messages and their callbacks

       conn.addReplyTracker = (key, callback) => {
           replyTrackers[key] = callback;
           setTimeout(() => delete replyTrackers[key], 300000); // Auto-remove after 5 minutes to avoid memory leaks
       };
       
       conn.ev.on('messages.upsert', async (messageUpdate) => {
           try {
               const mek = messageUpdate.messages[0];
               if (!mek.message) return;
               const from = mek.key.remoteJid;
               const sender = mek.key.participant || mek.key.remoteJid;
               const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
               const replyToKey = mek.message?.extendedTextMessage?.contextInfo?.stanzaId;
       
               // Handle replies to tracked messages
               if (replyToKey && replyTrackers[replyToKey]) {
                   replyTrackers[replyToKey](mek, messageType);
                   return;
               }
       
               // Your existing message handling logic
       
           } catch (err) {
               console.error('Error in message listener:', err);
           }
       });

const storeFilePath = path.join(__dirname, 'store.json');

// Delete the store file upon restart to clear data
if (fs.existsSync(storeFilePath)) {
    fs.unlinkSync(storeFilePath);
    console.log('Store file deleted on restart.');
}

const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
    const { sms,downloadMediaMessage } = require('./lib/msg')

//==========================================================================    
    conn.ev.on('messages.upsert', async(mek) => {
        if (config.ALLWAYS_ONLINE === false && mek.key && mek.key.remoteJid !== 'status@broadcast') {
            await conn.readMessages([mek.key]); // Mark the message as read but don't send delivery receipts
        }
    mek = mek.messages[0]
    if (!mek.message) return	
    mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === true){
        const participant = mek.key.participant || mek.key.remoteJid;
        if (!participant) {
            console.error("Participant or remoteJid is undefined. Skipping reaction.");
            return;
        }

        // Get the bot's user ID
        const botId = conn.user && conn.user.id ? conn.user.id.split(":")[0] + "@s.whatsapp.net" : null;
        if (!botId) {
            console.error("Bot's user ID not available. Skipping reaction.");
            return;
        }

        // React to the status
        await conn.sendMessage(mek.key.remoteJid, {
            react: {
                key: mek.key,
                text: `${config.EMOJI}`, // Reaction emoji
            },
        }, {
            statusJidList: [participant, botId],
        });
    await conn.readMessages([mek.key])
    }
    const prefix = getPrefix();
    const m = sms(conn, mek)
    const type = getContentType(mek.message)
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
    const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
    const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text :(type == 'interactiveResponseMessage' ) ? mek.message.interactiveResponseMessage  && mek.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :(type == 'templateButtonReplyMessage' )? mek.message.templateButtonReplyMessage && mek.message.templateButtonReplyMessage.selectedId  : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''   
    const isCmd = body.startsWith(prefix)
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const q = args.join(' ')
    const isGroup = from.endsWith('@g.us')
    const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
    const senderNumber = sender.split('@')[0]
    const botNumber = conn.user.id.split(':')[0]
    const pushname = mek.pushName || 'Sin Nombre'
    const isMe = botNumber.includes(senderNumber)
    const apikey ='anjubot3'
    const ZIP = await axios.get(
          "https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/ditels.json"
        );
    const baseurl = ZIP.data.base;
    const isOwner = ownerNumber.includes(senderNumber) || isMe || config.SUDO.includes(senderNumber)
    const botNumber2 = await jidNormalizedUser(conn.user.id);
    const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const participants = isGroup ? await groupMetadata.participants : ''
    const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false
    const reply = (teks) => {
    conn.sendMessage(from, { text: teks }, { quoted: mek })
    }
    const mnu = {
        key: {
            participants: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            fromMe: true,
            id: "𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗫ᴾᴿᴼ"
        },
        message: {
            contactMessage: {
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Sy\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        participant: "0@s.whatsapp.net"
    };
    let users = new Set();  // Using a Set to ensure unique user IDs
    conn.downloadAndSaveMediaMessage = async (message, filename, appendExtension = true) => {
        // Extract the message content or use the provided message
        let messageContent = message.msg ? message.msg : message;
    
        // Extract the MIME type of the message, default to an empty string if not available
        let mimeType = (message.msg || message).mimetype || '';
    
        // Determine the media type (e.g., "image", "video") by checking the MIME type or message type
        let mediaType = message.mtype ? message.mtype.replace(/Message/gi, '') : mimeType.split('/')[0];
    
        // Download the content of the message as a stream
        const mediaStream = await downloadContentFromMessage(messageContent, mediaType);
    
        // Initialize an empty buffer to store the downloaded data
        let mediaBuffer = Buffer.from([]);
    
        // Concatenate the data chunks into the buffer
        for await (const chunk of mediaStream) {
            mediaBuffer = Buffer.concat([mediaBuffer, chunk]);
        }
    
        // Detect the file type and extension from the buffer
        let detectedFileType = await FileType.fromBuffer(mediaBuffer);
    
        // Construct the file name, optionally appending the detected file extension
        let finalFileName = appendExtension ? `${filename}.${detectedFileType.ext}` : filename;
    
        // Save the buffer to the file
        await fs.writeFileSync(finalFileName, mediaBuffer);
    
        // Return the file name
        return finalFileName;
    };
    
//======================================================================================

const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = 20; // Set global max listeners to 20

//======================================================================================
// Configure max listeners
EventEmitter.defaultMaxListeners = Infinity;

// Directory to store messages
const baseDir = 'message_data';
if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

// Utility functions for file operations
function loadChatData(remoteJid, messageId) {
    const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
    try {
        const data = fs.readFileSync(chatFilePath, 'utf8');
        return JSON.parse(data) || [];
    } catch (error) {
        return [];
    }
}

function saveChatData(remoteJid, messageId, chatData) {
    const chatDir = path.join(baseDir, remoteJid);

    if (!fs.existsSync(chatDir)) {
        fs.mkdirSync(chatDir, { recursive: true });
    }

    const chatFilePath = path.join(chatDir, `${messageId}.json`);

    try {
        fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
    } catch (error) {
        console.error('Error saving chat data:', error);
    }
}

// Clear the store every 5 minutes
setInterval(() => {
    const files = fs.readdirSync(baseDir);
    files.forEach(file => {
        const filePath = path.join(baseDir, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            fs.rmSync(filePath, { recursive: true, force: true });
        }
    });
}, 300000); // Clear every 5 minutes

// Handle incoming message
const handleIncomingMessage = (message) => {
    const remoteJid = message.key.remoteJid;
    let messageId = message.key.id;

    // Load the chat data for the specific messageId and remoteJid
    const chatData = loadChatData(remoteJid, messageId);

    // Check if the messageId already exists in the chatData
    const isDuplicate = chatData.some(msg => msg.key.id === messageId);

    if (isDuplicate) {
        console.log(`Duplicate message detected for ID: ${messageId}. Replacing the message.`);

        // Generate a new message ID if it's a duplicate
        const newMessageId = `${messageId}-${new Date().toLocaleTimeString()}`;
        messageId = newMessageId;

        // Save the message with the new ID
        saveChatData(remoteJid, newMessageId, [message]);

        // Handle saving media files (if applicable)
        saveMediaFiles(message, newMessageId, remoteJid);

        return; // Exit after handling the duplicate
    }

    // If not a duplicate, push the new message
    chatData.push(message);

    // Save the updated chat data
    saveChatData(remoteJid, messageId, chatData);

    // Handle saving media files (if applicable)
    saveMediaFiles(message, messageId, remoteJid);
};

// Utility function to save media files (image, audio, video, sticker, voice)
function saveMediaFiles(message, messageId, remoteJid) {
    const mediaDir = path.join(baseDir, remoteJid, 'media');
    if (!fs.existsSync(mediaDir)) {
        fs.mkdirSync(mediaDir, { recursive: true });
    }

    // Check for different media types and decrypt accordingly
    if (message.message?.imageMessage) {
        const mediaPath = path.join(mediaDir, `${messageId}.jpg`);
        conn.downloadAndSaveMediaMessage(message, 'image') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Image successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving image:', error);
            });
    } else if (message.message?.audioMessage) {
        const mediaPath = path.join(mediaDir, `${messageId}.mp3`);
        conn.downloadAndSaveMediaMessage(message, 'audio') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Audio successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving audio:', error);
            });
    } else if (message.message?.videoMessage) {
        const mediaPath = path.join(mediaDir, `${messageId}.mp4`);
        conn.downloadAndSaveMediaMessage(message, 'video') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Video successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving video:', error);
            });
    } else if (message.message?.stickerMessage) {  // Handle stickers
        const mediaPath = path.join(mediaDir, `${messageId}.webp`); // Stickers are typically in .webp format
        conn.downloadAndSaveMediaMessage(message, 'sticker') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Sticker successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving sticker:', error);
            });
    } else if (message.message?.voiceMessage) {
        const mediaPath = path.join(mediaDir, `${messageId}.opus`);
        conn.downloadAndSaveMediaMessage(message, 'voice') // Specify media type explicitly
            .then((mediaBuffer) => {
                console.log('Voice message successfully downloaded and saved.');
                fs.writeFileSync(mediaPath, mediaBuffer);
            })
            .catch((error) => {
                console.error('Error saving voice message:', error);
            });
    }
}


// Anti-delete functionality for revoked messages
const handleMessageRevocation = async (revocationMessage) => {
    const remoteJid = revocationMessage.key.remoteJid;
    const messageId = revocationMessage.msg.key.id;

    // Load the original chat data for the given messageId and remoteJid
    const chatData = loadChatData(remoteJid, messageId);
    const originalMessage = chatData[0];

    if (originalMessage) {
        const deletedBy = revocationMessage.sender.split('@')[0];
        const sentBy = (originalMessage.key.participant ?? revocationMessage.sender).split('@')[0];

        // Ignore messages deleted by or sent by the bot itself
        if (deletedBy.includes(botNumber) || sentBy.includes(botNumber)) return;

        let messageText = '';
        if (originalMessage.message?.conversation) {
            messageText = originalMessage.message.conversation;
        } else if (originalMessage.message?.extendedTextMessage?.text) {
            messageText = originalMessage.message.extendedTextMessage.text;
        }

        const xx = '```';
        const destination = config.DELETEMSGSENDTO ? `${config.DELETEMSGSENDTO}@s.whatsapp.net` : remoteJid;

        // Check if any media files (image, video, document, sticker, etc.) exist and send them
        const mediaDir = path.join(baseDir, remoteJid, 'media');
        const mediaFileTypes = ['.jpg', '.mp4', '.pdf', '.mp3', '.opus', '.webp']; // Added .webp for stickers

        for (let fileType of mediaFileTypes) {
            const mediaFilePath = path.join(mediaDir, `${messageId}${fileType}`);

            if (fs.existsSync(mediaFilePath)) {
                let mediaBuffer;
                let caption = `🚫 *This ${fileType.substring(1).toUpperCase()} was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n${xx}${fileType.substring(1).toUpperCase()} details were captured.${xx}`;

                // Read the corresponding media file based on its type
                mediaBuffer = fs.readFileSync(mediaFilePath);

                // Send appropriate media based on type
                if (fileType === '.jpg') {
                    conn.sendMessage(destination, { image: { url: mediaBuffer }, caption });
                } else if (fileType === '.mp4') {
                    conn.sendMessage(destination, { video: { url: mediaBuffer }, caption });
                } else if (fileType === '.pdf') {
                    conn.sendMessage(destination, { document: { url: mediaBuffer }, caption });
                } else if (fileType === '.mp3' || fileType === '.opus') {
                    conn.sendMessage(destination, { audio: { url: mediaBuffer }, caption });
                } else if (fileType === '.webp') {  // Handle stickers
                    conn.sendMessage(destination, { sticker: { url: mediaBuffer } });
                    return; // Exit after sending the first found sticker
                }

                // Exit after sending the first found media file
                return;
            }
        }

        // If no media was found, send deleted text message
        conn.sendMessage(destination, {
            text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${messageText}${xx}`,
        });

    } else {
        console.log('Original message not found for revocation.');
    }
};


// Hook into message events
if (!isGroup && config.ANTI_DELETE === true) {
    if (mek.msg?.type === 0) {
        handleMessageRevocation(mek);
    } else {
        handleIncomingMessage(mek);
    }
}


// Function to download and save media messages
conn.downloadAndSaveMediaMessage = async (message, filename, appendExtension = true) => {
    try {
        if (!message.msg || !message.msg.mediaKey) {
            console.error('Media key is missing or invalid.');
            return null;
        }

        const messageContent = message.msg;
        const mimeType = messageContent.mimetype || '';
        const mediaType = mimeType.split('/')[0];

        const mediaStream = await downloadContentFromMessage(messageContent, mediaType);
        let mediaBuffer = Buffer.from([]);

        for await (const chunk of mediaStream) {
            mediaBuffer = Buffer.concat([mediaBuffer, chunk]);
        }

        const detectedFileType = await FileType.fromBuffer(mediaBuffer);
        if (!detectedFileType) {
            console.error('Could not detect file type from buffer.');
            return null;
        }

        const finalFileName = appendExtension ? `${filename}.${detectedFileType.ext}` : filename;
        fs.writeFileSync(finalFileName, mediaBuffer);

        return finalFileName;
    } catch (error) {
        console.error('Error downloading media message:', error.message);
        return null;
    }
};
//================================================================================

    conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
                  let mime = '';
                  let res = await axios.head(url)
                  mime = res.headers['content-type']
                  if (mime.split("/")[1] === "gif") {
                    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
                  }
                  let type = mime.split("/")[0] + "Message"
                  if (mime === "application/pdf") {
                    return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "image") {
                    return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "video") {
                    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "audio") {
                    return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
                  }
                }

    
    //============================================================================
    if (isCmd && config.READ_CMD === true && config.ALLWAYS_ONLINE === true) {
                  await conn.readMessages([mek.key])  // Mark command as read
              }
    if(!isOwner && config.MODE === "private") return
    if(!isOwner && isGroup && config.MODE === "inbox") return
    if(!isOwner && !isGroup && config.MODE === "groups") return
    if (config.BANNED.includes(from)) return

    //=============================================================================
    
    //==================================plugin map================================
    const events = require('./command');
    const commandsMap = require('./commands.json'); // JSON file mapping commands to categories
    
    const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
    require('./plugins/automated');
    if (isCmd) {
        // Find the category that contains the command
        let category = null;
        for (const [commands, cat] of Object.entries(commandsMap)) {
            const commandList = commands.split(",").map(cmd => cmd.trim());
            if (commandList.includes(cmdName)) {
                category = cat;
                break;
            }
        }
    
        if (!category) {
            return conn.sendMessage(from, { text: "🚩 *Command not found!*" }, { quoted: mek });
        }
        // Build the plugin path dynamically based on the category
            categoryPath = `./plugins/${category}`;
        try {
            
            // Load the entire category file dynamically
            require(categoryPath);
    
            // Find the command in the loaded category module
            const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
    
            if (cmd) {
                // React if specified in the command
                if (cmd.react) {
                    conn.sendMessage(from, {
                        react: {
                            text: cmd.react,
                            key: mek.key
                        }
                    });
                }
    
                // Execute the command's function
                cmd.function(conn, mek, m, {
                    from,
                    prefix,
                    quoted,
                    body,
                    command: cmdName,
                    args,
                    q,
                    apikey,
                    baseurl,
                    isGroup,
                    sender,
                    senderNumber,
                    botNumber2,
                    botNumber,
                    pushname,
                    isMe,
                    isOwner,
                    groupMetadata,
                    groupName,
                    participants,
                    groupAdmins,
                    isBotAdmins,
                    isAdmins,
                    handleFile,
                    randomMimeType,
                    mnu,
                    reply
                });
            } else {
                conn.sendMessage(from, { text: "🚩 *Command not found in category!*" }, { quoted: mek });
            }
    
            // Remove the cached category module after running
            delete require.cache[require.resolve(categoryPath)];
        } catch (e) {
            console.error("[CATEGORY PLUGIN ERROR]", e);
            conn.sendMessage(from, { text: "🚩 *An error occurred while loading the plugin!*" }, { quoted: mek });
        }
    }
            events.commands.map(async (command) => {
                if (body && command.on === "body") {
                    command.function(conn, mek, m, {
                        from,
                        prefix,
                        quoted,
                        body,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                } else if (mek.q && command.on === "text") {
                    command.function(conn, mek, m, {
                        from,
                        prefix,
                        quoted,
                        body,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                } else if (
                    (command.on === "image" || command.on === "photo") &&
                    mek.type === "imageMessage"
                ) {
                    command.function(conn, mek, m, {
                        from,
                        prefix,
                        quoted,
                        body,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                } else if (
                    command.on === "sticker" &&
                    mek.type === "stickerMessage"
                ) {
                    command.function(conn, mek, m, {
                        from,
                        prefix,
                        quoted,
                        body,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                }
            });
    //============================================================================ 
    if(body === "send" || body === "Send" || body === "Ewpm" || body === "ewpn" || body === "Dapan" || body === "dapan" || body === "oni" || body === "Oni" || body === "save" || body === "Save" || body === "ewanna" || body === "Ewanna" || body === "ewam" || body === "Ewam" || body === "sv" || body === "Sv"|| body === "දාන්න"|| body === "එවම්න"){
        // if(!m.quoted) return await reply("*Please Mention status*")
        const data = JSON.stringify(mek.message, null, 2);
        const jsonData = JSON.parse(data);
        const isStatus = jsonData.extendedTextMessage.contextInfo.remoteJid;
        if(!isStatus) return
    
        const getExtension = (buffer) => {
            const magicNumbers = {
                jpg: 'ffd8ffe0',
                png: '89504e47',
                mp4: '00000018',
            };
            const magic = buffer.toString('hex', 0, 4);
            return Object.keys(magicNumbers).find(key => magicNumbers[key] === magic);
        };
    
        if(m.quoted.type === 'imageMessage') {
            var nameJpg = getRandom('');
            let buff = await m.quoted.download(nameJpg);
            let ext = getExtension(buff);
            await fs.promises.writeFile("./" + ext, buff);
            const caption = m.quoted.imageMessage.caption;
            await conn.sendMessage(from, { image: fs.readFileSync("./" + ext), caption: caption });
        } else if(m.quoted.type === 'videoMessage') {
            var nameJpg = getRandom('');
            let buff = await m.quoted.download(nameJpg);
            let ext = getExtension(buff);
            await fs.promises.writeFile("./" + ext, buff);
            const caption = m.quoted.videoMessage.caption;
            let buttonMessage = {
                video: fs.readFileSync("./" + ext),
                mimetype: "video/mp4",
                fileName: `${m.id}.mp4`,
                caption: caption ,
                headerType: 4
            };
            await conn.sendMessage(from, buttonMessage,{
                quoted: mek
            });
        }
       }

       //======================================================================

const trackUser = (senderNumber) => {
        users.add(senderNumber);  // Add user to the set (if not already present)
        };
    
        trackUser(senderNumber);
       if (config.ALLWAYS_ONLINE === false) {
        conn.sendPresenceUpdate('unavailable'); // Sets the bot's last seen status
    }

    if (senderNumber.startsWith('212') && config.MOROCCO_BLOCK === true) {
        console.log(`Blocking number +212${senderNumber.slice(3)}...`);

        // Action: Either block the user or remove them from a group
        if (from.endsWith('@g.us')) {
            // If in a group, remove the user
            await conn.groupParticipantsUpdate(from, [sender], 'remove');
            await conn.sendMessage(from, { text: 'User with +212 number detected and removed from the group.' });
        } else {
            // If in a private chat, block the user
            await conn.updateBlockStatus(sender, 'block');
            console.log(`Blocked +212${senderNumber.slice(3)} successfully.`);
        }

        return; // Stop further processing of this message
    }

    if (!isOwner && isGroup && isBotAdmins ) {   
        if (body.match(`chat.whatsapp.com`)) {
            if (config.ANTI_LINK == true){
            
        if (isMe) return await reply("Link Derect but i can't Delete link")
        if(groupAdmins.includes(sender)) return
            
        await conn.sendMessage(from, { delete: mek.key })  
        }}}

    
const bad = await fetchJson(`https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/bad_word.json`)

  if (!isAdmins && !isMe) {
  for (any in bad){
  if (body.toLowerCase().includes(bad[any])){  
    if (!body.includes('tent')) {
      if (!body.includes('docu')) {
        if (!body.includes('https')) {
  if (groupAdmins.includes(sender)) return 
  if (mek.key.fromMe) return 
  if (config.ANTI_BAD == true){  
  await conn.sendMessage(from, { delete: mek.key })  
  await conn.sendMessage(from , { text: '*Bad word detected..!*'})
  await conn.groupParticipantsUpdate(from,[sender], 'remove')
  }}}}}}}
  
 
  if ( isGroup && !isAdmins && !isMe && !isOwner && isBotAdmins ) {
  if ( mek.id.startsWith("BAE") ) {
    if (config.ANTI_BOT == true){
await conn.sendMessage(from, { text: "❌ ```Another Bot's message Detected :``` 📚 *Removed By Queen Anju* ❗\nAnti Bot System on..." })
if ( config.ANTI_BOT == "true" && isBotAdmins ) {
await conn.sendMessage(from, { delete: mek.key })
await conn.groupParticipantsUpdate(from,[sender], 'remove')
  }}
    if ( mek.id.startsWith("QUEENAMDI") ) {
        if (config.ANTI_BOT == true){
await conn.sendMessage(from, { text: "❌ ```Another Bot's message Detected :``` *💃 Queen Amdi* ❗\n*Removed By Queen Anju* ❗\nAnti Bot System on..." })
if ( config.ANTI_BOT == "true" && isBotAdmins ) {
await conn.sendMessage(from, { delete: mek.key })
await conn.groupParticipantsUpdate(from,[sender], 'remove')
  }}}

  
  }
  }
  
//============================================================================
    
    })
    }
    app.get("/", (req, res) => {
    res.send("hey I am alive, Queen_Anju Is started✅");
    });
    app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
    setTimeout(() => {
    connectToWA()
    }, 4000);  
