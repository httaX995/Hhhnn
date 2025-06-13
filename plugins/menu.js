const path = require("path");
let config = require("../settings/config.cjs"); // Load current config
const { cmd, commands } = require("../Utils/command");
const os = require("os");
const { runtime, fetchJson } = require("../Utils/functions");
const {
  BufferJSON,
  Browsers,
  WA_DEFAULT_EPHEMERAL,
  makeWASocket,
  generateWAMessageFromContent,
  proto,
  getBinaryNodeChildren,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  downloadContentFromMessage,
} = require("anju-xpro-baileys");
const prefix = config.PREFIX;

if (!cmd) return;
cmd(
  {
    pattern: "menu",
    desc: "To get the menu.",
    react: "😚",
    category: "main",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      kee,
      from,
      users,
      quoted,
      body,
      isCmd,
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
      reply,
    }
  ) => {
    try {
      let img = await fetchJson(
        `https://gist.githubusercontent.com/Mrrashmika/cd518b3ff6aa96df20fffee8b86a4417/raw`
      );

      let menumsg = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 🧚‍♂️⃟🩵
✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
`;
      const buttons = [
        {
          buttonId: `${prefix}list 14`,
          buttonText: { displayText: "Reaction Zone 🎭" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 4`,
          buttonText: { displayText: "Search Power 🔍" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 15`,
          buttonText: { displayText: "Hentai Zone 🔞" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 5`,
          buttonText: { displayText: "Download Zone ⬇️" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 13`,
          buttonText: { displayText: "Movie Zone 🎬" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 9`,
          buttonText: { displayText: "Group Games 🎮" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 1`,
          buttonText: { displayText: "Owner Commands 👑" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 2`,
          buttonText: { displayText: "Convert Options 🔄" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 11`,
          buttonText: { displayText: "Settings ⚙️" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 12`,
          buttonText: { displayText: "NSFW Zone 🍑" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 7`,
          buttonText: { displayText: "Main Hub 🚀" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 6`,
          buttonText: { displayText: "Fun & Games 🎲" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 8`,
          buttonText: { displayText: "Logo Menu 🖌️" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 3`,
          buttonText: { displayText: "AI Fun 🤖" },
          type: 1,
        },
        {
          buttonId: `${prefix}list 10`,
          buttonText: { displayText: "Useful Tools 🛠️" },
          type: 1,
        },
      ];
      const buttonMessage = {
        image: { url: img.allmenu },
        caption: menumsg,
        footer: config.FOOTER,
        buttons: buttons,
        headerType: 4,
      };
      return await conn.buttonMessage2(from, buttonMessage);
    } catch (e) {
      console.error(e);
      reply(`${e}`);
    }
  }
);

//=====================================================================================

if (!cmd) return;
cmd(
  {
    pattern: "list",
    desc: "To get the menu.",
    category: "main",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      kee,
      from,
      users,
      quoted,
      body,
      isCmd,
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
      reply,
    }
  ) => {
    try {
      let img = await fetchJson(
        `https://gist.githubusercontent.com/Mrrashmika/cd518b3ff6aa96df20fffee8b86a4417/raw`
      );

      let ownerMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "owner") {
          if (!commands[i].dontAddCommandList) {
            ownerMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}\n┃\n`;
          }
        }
      }

      let convertMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "convert") {
          if (!commands[i].dontAddCommandList) {
            convertMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let downloadMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "download") {
          if (!commands[i].dontAddCommandList) {
            downloadMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let mainHub = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗠𝗔𝗜𝗡 𝗛𝗨𝗕 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "main") {
          if (!commands[i].dontAddCommandList) {
            mainHub += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}\n┃\n`;
          }
        }
      }

      let logoMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "anime") {
          if (!commands[i].dontAddCommandList) {
            logoMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}\n┃\n`;
          }
        }
      }

      let funMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "fun") {
          if (!commands[i].dontAddCommandList) {
            funMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let groupMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "group") {
          if (!commands[i].dontAddCommandList) {
            groupMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}\n┃\n`;
          }
        }
      }

      let aiMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "ai") {
          if (!commands[i].dontAddCommandList) {
            aiMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let searchMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "search") {
          if (!commands[i].dontAddCommandList) {
            searchMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let usefulTools = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵


✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "other") {
          if (!commands[i].dontAddCommandList) {
            usefulTools += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let settingsMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃
┃ .setprefix  *Example:* .setprefix !
┃  Set a custom prefix for your bot.
┃ 
┃ .setnews  *Example:* .setnews 123456789@s.whatsapp.net
┃  Set the news jid.
┃ 
┃ .setreact  *Example:* .setreact 👍
┃  Set a custom reaction emoji for the bot.
┃ 
┃ .btnmsg  *Example:* .btnmsg on
┃  Toggle Button messages for the bot.
┃ 
┃ .autoreadstatus  *Example:* .autoreadstatus on
┃  Toggle automatic message reading.
┃ 
┃ .setmode  *Example:* .setmode inbox
┃  Change the bot’s operating mode.
┃ 
┃ .setbotnumber  *Example:* .setbotnumber +123456789
┃  Set the bot's contact number.
┃ 
┃ .autovoice  *Example:* .autovoice on
┃  Toggle auto-voice messages for the bot.
┃ 
┃ .autosticker  *Example:* .autosticker off
┃  Enable or disable automatic stickers.
┃ 
┃ .autoreply  *Example:* .autoreply on
┃  Set a custom autoreply message.
┃ 
┃ .autoreact  *Example:* .autoreact on
┃  Toggle auto-reaction on messages.
┃ 
┃ .welcome  *Example:* .welcome on
┃  Enable or disable welcome messages for new users.
┃ 
┃ .antibad  *Example:* .antibad on
┃  Enable or disable anti-bad word filter.
┃ 
┃ .antibot  *Example:* .antibot on
┃  Enable or disable anti-bot protection.
┃ 
┃ .antilink  *Example:* .antilink on
┃  Enable or disable anti-link feature.
┃ 
┃ .anticall  *Example:* .anticall on
┃  Enable or disable anti-call protection.
┃ 
┃ .antidelete  *Example:* .antidelete on
┃  Enable or disable anti-delete feature.
┃ 
┃ .allwaysonline  *Example:* .allwaysonline on
┃  Keep the bot always online.
┃ 
┃ .moroccoblock  *Example:* .moroccoblock on
┃  Block users from Morocco.
┃ 
┃ .readcmd  *Example:* .readcmd on
┃  Enable or disable reading incoming commands.
┃ 
┃ .autotyping  *Example:* .autotyping on
┃  Enable auto-typing status for the bot.
┃ 
┃ .autorecording  *Example:* .autorecording on
┃  Enable or disable automatic recording.
┃ 
┃ .autonews  *Example:* .autonews on
┃  Enable or disable automatic news updates.
┃ 
┃ .ownerreact  *Example:* .ownerreact on
┃  Set the bot to react to the owner’s messages.
┃ 
┃ .setmovie  *Example:* .setmovie 123456789@s.whatsapp.net
┃  Set a custom jid for movie send.
┃ 
┃ .resetmovie  *Example:* .resetmovie
┃  Reset the movie to default.
┃ 
┃ .ban  *Example:* .ban 123456789@s.whatsapp.net
┃  Ban a user from interacting with the bot.
┃ 
┃ .unban  *Example:* .unban 123456789@s.whatsapp.net
┃  Unban a previously banned user.
┃ 
┃ .addsudo  *Example:* .addsudo 123456789
┃  Add a user as a superuser.
┃ 
┃ .delsudo  *Example:* .delsudo 123456789
┃  Remove a superuser from the list.
┃
┗━━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

      let movieMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "movie") {
          if (!commands[i].dontAddCommandList) {
            movieMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let nsfwMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "nsfw") {
          if (!commands[i].dontAddCommandList) {
            nsfwMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let reactMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "reacts") {
          if (!commands[i].dontAddCommandList) {
            reactMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let hentaiMenu = `
🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗛𝗘𝗡𝗧𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵

✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require("../../package.json").version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("../../package.json").version}
┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━
┃`;
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].category === "hentai") {
          if (!commands[i].dontAddCommandList) {
            hentaiMenu += `
┃*👨🏼‍🚀Command :* ${commands[i].pattern}
┃*💭Desc :* ${commands[i].desc}
┃*🙇🏻‍♂️Use:* ${commands[i].use}\n┃\n`;
          }
        }
      }

      let messageType = q;

      if (messageType === "1") {
        // Handle option 1 (Audio File)
        await conn.sendMessage(from, {
          image: { url: img.ownermenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: ownerMenu,
        });
      } else if (messageType === "2") {
        // Handle option 2 (Document File)
        await conn.sendMessage(from, {
          image: { url: img.convertmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: convertMenu,
        });
      } else if (messageType === "3") {
        await conn.sendMessage(from, {
          image: { url: img.aimenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: aiMenu,
        });
      } else if (messageType === "4") {
        await conn.sendMessage(from, {
          image: { url: img.searchmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: searchMenu,
        });
      } else if (messageType === "5") {
        await conn.sendMessage(from, {
          image: { url: img.dlmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: downloadMenu,
        });
      } else if (messageType === "6") {
        await conn.sendMessage(from, {
          image: { url: img.funmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: funMenu,
        });
      } else if (messageType === "7") {
        await conn.sendMessage(from, {
          image: { url: img.mainmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: mainHub,
        });
      } else if (messageType === "9") {
        await conn.sendMessage(from, {
          image: { url: img.groupmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: groupMenu,
        });
      } else if (messageType === "10") {
        await conn.sendMessage(from, {
          image: { url: img.usefulmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: usefulTools,
        });
      } else if (messageType === "12") {
        await conn.sendMessage(from, {
          image: { url: img.nsfwmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: nsfwMenu,
        });
      } else if (messageType === "11") {
        await conn.sendMessage(from, {
          image: { url: img.settingmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: settingsMenu,
        });
      } else if (messageType === "8") {
        await conn.sendMessage(from, {
          image: { url: img.logomenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: logoMenu,
        });
      } else if (messageType === "13") {
        await conn.sendMessage(from, {
          image: { url: img.moviemenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: movieMenu,
        });
      } else if (messageType === "14") {
        await conn.sendMessage(from, {
          image: { url: img.reactmenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: reactMenu,
        });
      } else if (messageType === "15") {
        await conn.sendMessage(from, {
          image: { url: img.hentaimenu }, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: hentaiMenu,
        });
      }

      // React to the successful completion of the task
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
