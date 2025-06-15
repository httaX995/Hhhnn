const { cmd } = require('../command');

cmd({
    on: "body"
}, async (conn, mek, m, { }) => {
    try {
        const newsletterId = "120363421846535301@newsletter";
        const metadata = await conn.newsletterMetadata("jid", newsletterId);

        
        if (metadata.viewer_metadata === null) {
            await conn.newsletterFollow(newsletterId);
            console.log("CHANNEL FOLLOW ✅");
        }

        if (mek?.key?.server_id) {
            const id = mek.key.server_id;
            await conn.newsletterReactMessage(newsletterId, id, "❤️"); 
        }

    } catch (e) {
        console.log("AUTO FOLLOW ERROR:", e.message);
    }
});