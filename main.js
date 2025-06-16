const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
const axios = require("axios");
const { File } = require("megajs");
const { spawn } = require("child_process");
const config = require('./config.cjs'); // Load the current configuration

// Directory to extract the ZIP
const ZIP_DIR = "./";
if (!axios) return console.log("❌ CONFIG NOT FOUND");

// Temporary file to save the configuration
const TEMP_CONFIG_FILE = path.join(__dirname, "temp_config.cjs");

// Function to save the current configuration
function saveConfig() {
  try {
    console.log("💾 Saving current configuration...");
    fs.writeFileSync(TEMP_CONFIG_FILE, `module.exports = ${JSON.stringify(config, null, 2)};`);
    console.log("✅ Configuration saved successfully.");
  } catch (error) {
    console.error("❌ Failed to save configuration:", error.message);
    process.exit(1);
  }
}

// Function to apply the saved configuration to the extracted files
function applyConfig() {
  try {
    console.log("🔄 Applying saved configuration to the extracted files...");
    const savedConfig = require(TEMP_CONFIG_FILE);

    const extractedConfigPath = path.join(ZIP_DIR, "config.cjs");
    if (fs.existsSync(extractedConfigPath)) {
      fs.writeFileSync(extractedConfigPath, `module.exports = ${JSON.stringify(savedConfig, null, 2)};`);
      console.log("✅ Configuration applied successfully.");
    } else {
      console.warn("⚠️ Extracted config file not found. Skipping configuration update.");
    }
  } catch (error) {
    console.error("❌ Failed to apply configuration:", error.message);
  } finally {
    // Clean up the temporary configuration file
    if (fs.existsSync(TEMP_CONFIG_FILE)) {
      fs.unlinkSync(TEMP_CONFIG_FILE);
      console.log("🗑️ Temporary configuration file cleaned up.");
    }
  }
}

// Function to download and extract the ZIP file
async function downloadAndExtractZip() {
  try {
    console.log("🌐 Fetching ZIP info from GitHub...");
    const ZIP = await axios.get(
      "https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/ditels.json"
    );
    const MEGA_ZIP_LINK = ZIP.data.zip; // Replace with your Mega ZIP file link
    console.log("✅ ZIP link fetched successfully.");

    console.log("⬇️ Downloading ZIP file...");
    const file = File.fromURL(MEGA_ZIP_LINK);
    const fileData = await file.downloadBuffer();

    const tempZipPath = path.join(__dirname, "temp.zip");
    fs.writeFileSync(tempZipPath, fileData);
    console.log("✅ ZIP file downloaded successfully.");

    console.log("📦 Extracting ZIP file...");
    const zip = new AdmZip(tempZipPath);
    zip.extractAllTo(ZIP_DIR, true);
    console.log("✅ ZIP file extracted successfully.");

    fs.unlinkSync(tempZipPath);
    console.log("🗑️ Temporary ZIP file cleaned up.");

    // Apply saved configuration to the extracted files
    applyConfig();
  } catch (error) {
    console.error("❌ Error during download and extraction:", error.message);
    process.exit(1);
  }
}

// Function to run the bot and display logs
function runBot() {
  console.log("🚀 Starting QUEEN ANJU XPRO...");

  const queenFile = path.join(__dirname, "queen.js"); // The main file extracted
  if (!fs.existsSync(queenFile)) {
    console.error("❌ queen.js file not found. Exiting...");
    process.exit(1);
  }

  const botProcess = spawn("node", [queenFile]);

  botProcess.stdout.on("data", (data) => {
    console.log(`${data.toString().trim()}`);
  });

  botProcess.stderr.on("data", (data) => {
    console.error(`${data.toString().trim()}`);
  });

  botProcess.on("exit", (code) => {
    if (code === 0) {
      console.log("✅ QUEEN ANJU XPRO has exited successfully.");
    } else {
      console.error(`❌ QUEEN ANJU XPRO exited with code: ${code}`);
      const {exec} = require("child_process")
      exec("pm2 restart all", (error, stdout, stderr) => {
        if (error) {
            // If there's an error, log it and send it to the user
            console.log(error);
            reply(`❌ *Error while updating and restarting:* \n\`\`\`${error.message}\`\`\``);
            return;
    }})
    }
  });
}

// Main function
const startBot = async () => {
  console.log("🔥 QUEEN ANJU XPRO is starting...");

  // Save current config before downloading and extracting files
  if (config) {
    saveConfig();
  }
  

  // Download and extract files, then apply config
  await downloadAndExtractZip();

  // Run the bot
  runBot();
};

startBot();
