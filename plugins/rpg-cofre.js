let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 86400000 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `𝒀𝒂 𝒓𝒆𝒄𝒍𝒂𝒎𝒂𝒔𝒕𝒆 𝒕𝒖 𝒄𝒐𝒇𝒓𝒆 ⚗️\n𝑽𝒖𝒆𝒍𝒗𝒆 𝒆𝒏 *${msToTime(time - new Date())}* 𝑷𝒂𝒓𝒂 𝒗𝒐𝒍𝒗𝒆𝒓 𝒂 𝒓𝒆𝒄𝒍𝒂𝒎𝒂𝒓`

let img = 'https://img.freepik.com/vector-gratis/cofre-monedas-oro-piedras-preciosas-cristales-trofeo_107791-7769.jpg?w=2000'
let dia = Math.floor(Math.random() * 30)
let tok = Math.floor(Math.random() * 10)
let gata = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += gata
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp
  
let texto = `
╭━━🎉━🎉━🎉━━⬣
┃✨ 𝑶𝒃𝒕𝒊𝒆𝒏𝒆𝒏 𝒆𝒍 𝒄𝒐𝒇𝒓𝒆!!
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚗️ *${dia} 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔* 💎
┃⚗️ *${tok} 𝑻𝒐𝒌𝒆𝒏𝒔* 🪙
┃⚗️ *${gata} 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔* 🐈
┃⚗️ *${expp} 𝑬𝒙𝒑* ⚡
╰━━〔 𓃠 *${vs}* 〕━━⬣`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

await conn.sendButton(m.chat, texto, wm, img, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́☘️', '/menu'] ], fkontak, m)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['coffer', 'cofre', 'abrircofre', 'cofreabrir'] 
handler.register = true
handler.level = 5
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
