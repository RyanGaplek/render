module.exports = {
  apps: [
    { 
      name: "peaxel25", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "Peaxel25", 
        API_KEY: process.env.API_25
      }
    },
    { 
      name: "peaxel26", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "Peaxel26", 
        API_KEY: process.env.API_26
      }
    },
    { 
      name: "peaxel27", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "Peaxel27", 
        API_KEY: process.env.API_27
      }
    },
    { 
      name: "peaxel28", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "Peaxel28", 
        API_KEY: process.env.API_28
      }
    },
    { 
      name: "peaxel29", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "Peaxel29", 
        API_KEY: process.env.API_29
      }
    }
  ]
};
