const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.hituet = 0
global.gopayno = "6283845409710"
global.danano = "6283845409710"
global.shopeepayno = "6283845409710"
global.creator = "6283845409710@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.fake = `📍𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 kian 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑`
global.sessionName = 'fangz'
global.packname = ``
global.author = `×͜× ▭▬▭▬▭▬ 👑 ▭▬▭▬▭▬ ×͜×\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 MODZ BOTZ\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 KIAN : 6283845409710\nﾒ 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 : MODZ BOTZ OFC\n⊟————————⊟`
global.antilink = true
global.antiwame = true
global.autodltt = false
global.autosticker = false
global.ownerNomor = '6283845409710'
global.ownerName = 'Creator bot'
global.ownerNumber = ["6283845409710@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: 'Tunggu Sebentar Ya Kak...',
    succes: 'Nih Kak',
    admin: 'Fitur Khusus Admin Grub',
    botAdmin: 'Jadi Kan Bot Sebagai Admin Terlebih Dahulu',
    owner: 'Maaf Fitur Ini Khusus Owner Dan Premium',
    group: 'Fitur Hanya Bisa Untuk Grub',
    private: 'Fitur Hanya Bisa Untuk Private Chat',
    bot: 'Khusus Bot',
    error: 'Maaf Error Mungkin Masih Perbaikan...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
