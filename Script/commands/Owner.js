module.exports.config = {
 name: "owner",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Owner information command with styled box",
 commandCategory: "Information",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const ownerInfo = 
`
╔═════════════════════╗
║ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 
╠═════════════════════╣
║ 👤 𝗡𝗮𝗺𝗲 : 𝐒𝐇𝐀𝐇𝐀𝐃𝐀𝐓
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐚𝐧𝐢𝐤
║ 🎂 𝗔𝗴𝗲 : 𝟐𝟓
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝐝𝐢𝐩𝐥𝐨𝐦𝐚 𝐢𝐧 𝐀𝐠𝐫𝐢𝐜𝐮𝐥𝐭𝐮𝐫𝐞
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝐅𝐞𝐧𝐢
╠═════════════════════╣
║ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 
╠═════════════════════╣
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 
║ https://fb.com/100001088468923
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 : 
║ m.me/100001088468923
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : 
║ https://wa.me/018xxxxxxxx
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : 
║ https://t.me/yoursahu
╚═════════════════════╝`;

 return api.sendMessage(ownerInfo, event.threadID, event.messageID);
};