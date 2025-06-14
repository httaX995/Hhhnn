const config = require("../settings/config.cjs");
const recentUpdates = new Set();
if (!config) return;
module.exports.dynamicWelcome = async (conn, update) => {
  const { id, participants, action } = update;

  try {
    const groupMetadata = await conn.groupMetadata(id);
    const groupName = groupMetadata.subject;

    for (const participant of participants) {
      if (recentUpdates.has(participant)) continue; // Skip duplicate messages
      recentUpdates.add(participant);

      // Automatically clear entry after 10 seconds to prevent bloating
      setTimeout(() => recentUpdates.delete(participant), 10000);

      let message = "";
      let profilePicUrl = `https://cdn.discordapp.com/embed/avatars/0.png`;

      try {
        profilePicUrl = await conn.profilePictureUrl(participant, "image");
      } catch (err) {}

      const welcomeCardUrl = `https://api.popcat.xyz/welcomecard?background=https://cdn.popcat.xyz/welcome-bg.png&text1=${encodeURIComponent(
        groupName
      )}&text2=${encodeURIComponent(
        `@${participant.split("@")[0]}`
      )}&text3=Thank+You+For+Joining+Us❤️&avatar=${encodeURIComponent(
        profilePicUrl
      )}`;

      if (action === "add") {
        message = `
⫷⦁[ * '-'_꩜ 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 ꩜_'-' * ]⦁⫸

*Hey @${participant.split("@")[0]}!* 👋

WELCOME TO *${groupName}*

> 🟢 *Queen Anju WhatsApp Bot* is up and running!
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
      } else if (action === "remove") {
        message = `
⫷⦁[ * '-'_꩜ 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 ꩜_'-' * ]⦁⫸

😔 *Goodbye @${participant.split("@")[0]}!* 

GOOD BYE FROM *${groupName}*

> We're sad to see you leave *${groupName}*. 😢
> We hope you had a great time with us.

*If you ever decide to come back, you'll always be welcome!* 🌟

*© 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 - MD* 
*💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD
                    `;
      }

      if (message && config.WELCOME) {
        await conn.sendMessage(id, {
          image: { url: welcomeCardUrl },
          caption: message,
          contextInfo: {
            mentionedJid: [participant],
            externalAdReply: {
              title: "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃",
              body: "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃",
              mediaType: 1,
              sourceUrl: "https://github.com/Mrrashmika",
              thumbnailUrl: profilePicUrl,
            },
          },
        });
      }
    }
  } catch (err) {
    console.error("Error fetching group metadata or handling update:", err);
  }
};
if (!config) return;
