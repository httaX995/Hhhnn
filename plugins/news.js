const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
if (!path) return console.log("Path is undefind");
/**
 * Fetches the latest news from the Ada Derana Sinhala website.
 * @returns {Promise<Object>} - The structured news data or an error message.
 */
const fetchDeranaNews = async () => {
  try {
    // Fetch the homepage of the Ada Derana Sinhala website
    const response = await axios.get("https://sinhala.adaderana.lk/");
    const $ = cheerio.load(response.data);

    // Extract the URL of the latest news article
    const latestArticleUrl = $("#news_list_item_apc > div > h3 > a").attr(
      "href"
    );

    // Ensure the URL is complete
    const fullArticleUrl = "https://sinhala.adaderana.lk/" + latestArticleUrl;

    // Fetch the article's detail page
    const articleResponse = await axios.get(fullArticleUrl);
    const articlePage = cheerio.load(articleResponse.data);

    // Extract article details
    const articleTitle = articlePage(
      "body > main > div > div > div > article > h1"
    ).text();
    const articleDescription = articlePage(
      "body > main > div > div > div > article > div > p"
    ).text();
    const articleImage =
      articlePage("body > main > div > div > div > article > div > img").attr(
        "src"
      ) || "";
    const articleDate = articlePage(
      "body > main > div > div > div > article > p"
    )
      .text()
      .trim();

    // Return the structured article data
    return {
      status: true,
      creator: "MR.RASHMIKA",
      result: {
        title: articleTitle,
        date: articleDate,
        image: articleImage,
        url: fullArticleUrl,
        desc: articleDescription,
      },
    };
  } catch (error) {
    // Handle errors and return the error message
    return {
      status: false,
      creator: "MR.RASHMIKA",
      error: error.message,
    };
  }
};
/**
 * Scrapes local news from hirunews.lk
 * @returns {Promise<Object>} - The news details or an error message.
 */
const hirunews = async () => {
  try {
    const url = "https://www.hirunews.lk/local-news.php?pageID=1";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const title = $(
      "div:nth-child(2) > div.column.middle > div.all-section-tittle"
    )
      .text()
      .trim();
    const link = $("div:nth-child(2) > div.column.left > div > a").attr("href");
    const date = $(
      "div:nth-child(2) > div.column.middle > div.middle-tittle-time"
    )
      .text()
      .trim();
    const img = $("img.middle-sm.img-fluid").attr("src");

    if (link) {
      const response1 = await axios.get(link);
      const $1 = cheerio.load(response1.data);
      const desc = $1("#article-phara2").text().trim();

      return {
        status: "success",
        title,
        link,
        img,
        date,
        desc,
      };
    }

    return {
      status: "error",
      message: "No link found for the news.",
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message || "Error occurred while scraping the Hiru news.",
    };
  }
};
if (!path) return console.log("Path is undefind");
/**
 * Fetches the latest news from the Lankadeepa website.
 * @returns {Promise<Object>} - The latest news articles or an error message.
 */
const fetchLankadeepaNews = async () => {
  try {
    // Fetch the Lankadeepa homepage
    const response = await axios.get("https://www.lankadeepa.lk/");
    const $ = cheerio.load(response.data);

    // Extract breaking news articles from the homepage
    const articles = [];
    $("#breakingnewsadss > div").each((index, element) => {
      const title = $(element).find("p").text().trim();
      const articleUrl = $(element).find("a").attr("href");
      const imageUrl = $(element).find("a > img").attr("src");

      // Store article data
      const article = {
        title: title,
        image: imageUrl,
        url: articleUrl,
      };
      articles.push(article);
    });

    // Fetch details of the second article (if exists)
    if (articles.length < 2) {
      throw new Error("Not enough articles found.");
    }
    const articleDetailsPage = await axios.get(articles[1].url);
    const articleDetail$ = cheerio.load(articleDetailsPage.data);

    // Extract data from the article's detail page
    const articleTitle = articleDetail$("div.p-b-0 > h3").text().trim();
    const articleImage = articleDetail$(
      "div.header.inner-content.p-b-20 > p:nth-child(4) > img"
    ).attr("src");
    const articleDate = articleDetail$(
      "div.col-xl-8.col-lg-8.col-md-12.col-sm-12 > span > a:nth-child(1)"
    )
      .text()
      .trim();
    const articleDescription = articleDetail$(
      "div.header.inner-content.p-b-20 > p"
    )
      .text()
      .trim();

    // Construct the detailed article object
    const detailedArticle = {
      title: articleTitle,
      date: articleDate,
      image: articleImage || articles[1].image,
      url: articles[1].url,
      desc: articleDescription,
    };

    // Return the result
    return {
      status: "success",
      Author: "MR.RASHMIKA",
      data: detailedArticle,
    };
  } catch (error) {
    return {
      status: "error",
      Author: "MR.RASHMIKA",
      message: error.message || "Error occurred while fetching the news.",
    };
  }
};
/**
 * Fetches news from the Sinhala News First website.
 * @returns {Promise<Object>} - The fetched news data or an error message.
 */
const fetchSirasaNews = async () => {
  try {
    // Fetch the homepage of the Sinhala News First site
    const response = await axios.get("https://sinhala.newsfirst.lk/");
    const $ = cheerio.load(response.data);

    // Extract the URL for the first top story
    const firstStoryUrl =
      "https://sinhala.newsfirst.lk" +
      $("div.main_div.top_stories a").attr("href");

    // Fetch the article details page
    const articlePage = await axios.get(firstStoryUrl);
    const articlePage$ = cheerio.load(articlePage.data);

    // Extract the article content and clean it
    let articleContent = articlePage$("#testId").html();
    articleContent = removeHtmlTags(
      articleContent.replaceAll("</p>\n", "\n\n").replaceAll("<p>", "")
    );

    // Extract the article's author
    const author = articlePage$(
      "div.ng-star-inserted > div > div.author_main > span"
    )
      .text()
      .trim();

    // Return the structured article data
    return {
      status: true,
      creator: "MR.RASHMIKA",
      result: {
        title: $("div.top_stories_main h1").text(),
        image: articlePage$("#post_img").attr("src"),
        date: author,
        url: firstStoryUrl,
        desc: articleContent,
      },
    };
  } catch (error) {
    // Return error response in case of failure
    return {
      status: false,
      error: error.message,
    };
  }
};
if (!path) return console.log("Path is undefind");
/**
 * Helper function to remove HTML tags from article content.
 * @param {string} text - The text from which to remove HTML tags.
 * @returns {string} - The cleaned text.
 */
const removeHtmlTags = (text) => {
  return text.replace(/<[^>]*>/g, ""); // Remove all HTML tags
};

const newsFilePath = path.join(__dirname, "../data/lastNewsTitles.json");

// Load last news titles from JSON file
let lastNewsTitles = loadLastNewsTitles();

function loadLastNewsTitles() {
  try {
    if (fs.existsSync(newsFilePath)) {
      const data = fs.readFileSync(newsFilePath, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error(`Error reading last news titles file: ${err.message}`);
  }
  return { hiru: {}, sirasa: {}, derana: {}, lankadeepa: {} };
}

function saveLastNewsTitles() {
  try {
    fs.writeFileSync(newsFilePath, JSON.stringify(lastNewsTitles, null, 2));
  } catch (err) {
    console.error(`Error saving last news titles: ${err.message}`);
  }
}
if (!path) return console.log("Path is undefind");
// Function to get the latest news from Hiru
async function getHiruNews() {
  try {
    const response = await hirunews();
    if (response.status) {
      const news = response;
      return {
        title: news.title,
        content: news.desc,
        date: news.date,
        url: news.link,
        image: news.img,
      };
    }
    return null;
  } catch (err) {
    console.error(`Error fetching Hiru News: ${err.message}`);
    return null;
  }
}

async function getlankadeepaNews() {
  try {
    const response = await fetchLankadeepaNews();
    if (response.status) {
      const news = response.data;
      return {
        title: news.title,
        content: news.desc,
        date: news.date,
        url: news.url,
        image: news.image,
      };
    }
    return null;
  } catch (err) {
    console.error(`Error fetching Lankadeepa News: ${err.message}`);
    return null;
  }
}

// Function to get the latest news from Sirasa
async function getSirasaNews() {
  try {
    const response = await fetchSirasaNews();
    if (response.status) {
      const news = response.result;
      return {
        title: news.title,
        content: news.desc,
        date: news.date,
        url: news.url,
        image: news.image,
      };
    }
    return null;
  } catch (err) {
    console.error(`Error fetching Sirasa News: ${err.message}`);
    return null;
  }
}

// Function to get the latest news from Derana
async function getDeranaNews() {
  try {
    const response = await fetchDeranaNews();
    if (response.status) {
      const news = response.result;
      return {
        title: news.title,
        content: news.desc,
        date: news.date,
        url: news.url,
        image: news.image,
      };
    }
    return null;
  } catch (err) {
    console.error(`Error fetching Derana News: ${err.message}`);
    return null;
  }
}

// Function to send news to a group
async function sendNews(conn, groupId, news, source) {
  if (news) {
    // Check if the title is different before sending
    if (lastNewsTitles[source][groupId] !== news.title) {
      lastNewsTitles[source][groupId] = news.title; // Update the last news title sent to the group
      saveLastNewsTitles(); // Save the updated titles to the JSON file

      // Constructing the message
      let message = `📰 *${source} News*

*Title:* ${news.title}

*Description:* ${news.content}

*Published On:* ${news.date}`;
      if (news.url) message += `\n\n*Read more:* ${news.url}`;
      message += `\n\n> *POWERD BY © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ*`; // Add caption

      // Check if there is an image to send
      if (news.image) {
        await conn.sendMessage(groupId, {
          image: { url: news.image },
          caption: message,
          contextInfo: {
            externalAdReply: {
              title: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
              body: " ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚",
              mediaType: 1,
              sourceUrl: "https://github.com/Mrrashmika",
              thumbnailUrl:
                "https://i.ibb.co/5g5frmz9/thisjpg.jpg",
              renderLargerThumbnail: false,
              showAdAttribution: true,
            },
          },
        });
      } else {
        await conn.sendMessage(groupId, {
          text: message,
          contextInfo: {
            externalAdReply: {
              title: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
              body: " ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚",
              mediaType: 1,
              sourceUrl: "https://github.com/Mrrashmika",
              thumbnailUrl:
                "https://i.ibb.co/5g5frmz9/thisjpg.jpg",
              renderLargerThumbnail: false,
              showAdAttribution: true,
            },
          },
        });
      }
    }
  }
}
if (!path) return console.log("Path is undefind");
async function checkAndPostNews(conn, groupId) {
  const hiruNews = await getHiruNews();
  const sirasaNews = await getSirasaNews();
  const deranaNews = await getDeranaNews();
  const lankadeepaNews = await getlankadeepaNews();

  // Send Hiru News
  await sendNews(conn, groupId, hiruNews, "hiru");

  // Send Sirasa News
  await sendNews(conn, groupId, sirasaNews, "sirasa");

  // Send Derana News
  await sendNews(conn, groupId, deranaNews, "derana");

  // Send Lankadepa News
  await sendNews(conn, groupId, lankadeepaNews, "lankadeepa");
}

// Export function to start the news interval for external use
function startNewsService(conn, nsjid) {
  if (!startNewsService.interval) {
    startNewsService.interval = setInterval(async () => {
      if (nsjid) {
        // Check if nsjid (group ID) is provided
        await checkAndPostNews(conn, nsjid);
      }
    }, 60000); // Runs every 60 seconds
  }
}

module.exports = { startNewsService, checkAndPostNews, sendNews };
