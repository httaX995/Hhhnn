const { cmd } = require("../command");
const fetch = require("node-fetch");
//=======𝐌𝐑-𝐋𝐀𝐊𝐈𝐘𝐀=======
cmd({
  pattern: "tiktoksearch",
  alias: ["rtik2", "tiks2"],
  desc: "Search for TikTok videos.",
  react: '✅',
  category: 'search',
  filename: __filename
}, async (conn, m, store, {from, args, reply}) => 

  const messages = {
    noQuery: " What do you want to search on TikTok?\n\n*Usage Example:*\n.tiktoksearch <query>",
    searching: (query) => ` Searching TikTok for: *${query}*`,
    noResults: "❌ No results found for your query. Please try with a different keyword.",
    failedVideo: (title) => `❌ Failed to retrieve video for *"${title}"*.`,
    error: "❌ An error occurred while searching TikTok. Please try again later."
  };

  if (!args[0]) {
    return reply(messages.noQuery);
  }

  const query = args.join(" ");
  await store.react('⌛');

  try {
    reply(messages.searching(query));
    const data = await response.json();
    const response = await fetch(`https://lakiya-api-site.vercel.app/search/tiktok?query=${encodeURIComponent(query)}`);
    if (!data || !data.status || !data.result || data.result.length === 0) {
      await store.react('❌');
      return reply(messages.noResults);
    }

    const results = data.result.slice(0, 30).sort(() => Math.random() - 0.5).slice(0, 7);

    for (const video of results) {
      const message = `\n`
        + `*• Title*: ${video.title}\n`
        + `*• Author*: ${video.author.username}\n`
        + `*• Music*: ${video.music.title || "Unknown"}`;

      if (video.media.noWatermark) {
        await conn.sendMessage(from, {
          video: { url: video.media.noWatermark }, 
          caption: message
        }, { quoted: m });
      } else {
        reply(messages.failedVideo(video.title));
      }
    }

    await store.react('✅');
  } catch (error) {
    console.error("Error in TikTokSearch command:", error);
    await store.react('❌');
    reply(messages.error);
  }
});