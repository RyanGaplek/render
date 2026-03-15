module.exports = {
  apps: [
    // 1. Ini adalah "Pancingan" agar Render tidak mematikan server
    { 
      name: "Dummy-Web", 
      script: "python3", 
      args: "-m http.server 10000" 
    },
    // 2. Pasukan bot utama kamu
    { 
      name: "Tuyul-1", script: "bot.py", interpreter: "python3",
      env: { BOT_NAME: "peaxel25", API_KEY: "mr_live_G-cKobZd69qx_QCW_hQQa1fF1WQAyYnK" }
    },
    { 
      name: "Tuyul-2", script: "bot.py", interpreter: "python3",
      env: { BOT_NAME: "peaxel26", API_KEY: "mr_live_m_vSW6HrB9Iv1uCBucsJwZTLuDPE-mq3" }
    },
    { 
      name: "Tuyul-3", script: "bot.py", interpreter: "python3",
      env: { BOT_NAME: "peaxel27", API_KEY: "mr_live_FtfNNIVJMI1uZ14qdsqPhwxTIWUwqjVE" }
    },
    { 
      name: "Tuyul-4", script: "bot.py", interpreter: "python3",
      env: { BOT_NAME: "peaxel28", API_KEY: "mr_live_nL4-puQZ_VvbFC4Nkxjfz8bJrycoYxzo" }
    },
    { 
      name: "Tuyul-5", script: "bot.py", interpreter: "python3",
      env: { BOT_NAME: "peaxel29", API_KEY: "mr_live_OXq1Z4oY7xoWlzppv9vcfzsoUuicE-cl" }
    }
  ]
};