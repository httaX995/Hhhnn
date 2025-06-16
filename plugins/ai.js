const { cmd, commands } = require("../lib/command");
const { fetchJson } = require("../lib/functions");
if (!cmd) return;
cmd(
  {
    pattern: "aig",
    desc: "Ai chat with gemini.",
    react: "🤖",
    category: "ai",
    use: ".gemini whats your name",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      from,
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
      if (!q) return reply(`Give me a quary`);
      let res = await fetchJson(
        `https://api.siputzx.my.id/api/ai/gemini-pro?content=${q}`
      );