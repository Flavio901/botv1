const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const brainly = require('brainly-scraper')
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const setting = JSON.parse(fs.readFileSync('./configuração/setting.json'))
//━━━━━━━━━━━━━━━[ SETTING.JSON ]━━━━━━━━━━━━━━━\\
const gember = fs.readFileSync("./lib/Menu7.jpg"); 
const thumb = fs.readFileSync("./media/fotos/thumb.jpg");

//━━━━━━━━━━━━━━━[  AUTO RESPON ]━━━━━━━━━━━━━━━\\

autorespon = true
autoread = true
autocomposing = true
autorecording = true
AutoRespon: true

//━━━━━━━━━━━━━━━[  PUBLIC ]━━━━━━━━━━━━━━━\\

publik = true

//━━━━━━━━━━━━━━━[EDIT DI SETTING.JSON]━━━━━━━━━━━━━━━\\

namabot = setting.BotName
namaowner = setting.OwnerName
nomorowner = setting.OwnerNumber

//━━━━━━━━━━━━━━━[ Sticker WM ]━━━━━━━━━━━━━━━\\

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif() 

//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  


module.exports = Kurumi = async (Kurumi, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : ',' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\
			mess = {
				daftar: `Desculpe mano, você ainda não se registrou como usuário ${namabot}.\nPor favor, registre-se digitando *.daftar*`,
				wait: 'Espera Toma um Chá ai brow🛐',
				banned: 'Haha desculpe, você foi banido... Se você quiser ser desbanido, entre em contato com o proprietário',
				success: 'FINALIZADO',
				error: {
					stick: 'Falha, ocorreu um erro ao converter a imagem em um adesivo',
					Iv: 'Link inválido'
				},
				only: {
					group: 'USE EM GRUPO!!!',
					premium: 'Este recurso é apenas para usuários Premium!!\nSe você quiser se tornar um usuário Premium\nPor favor, digite .owner',
					ownerG: 'VOCÊ NÃO É O DONO DO GRUPO!!!',
					ownerB: 'VOCÊ NÃO É MEU DONO!!!',
					admin: 'VOCÊ NÃO É UM ADMINISTRADOR DE GRUPO!!',
					Badmin: 'BOT NÃO É ADMIN!!!'
				}
			}
//━━━━━━━━━━━━━━━[ Terakhir ]━━━━━━━━━━━━━━━\\
			const botNumber = Kurumi.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = Kurumi.contacts[sender] != undefined ? Kurumi.contacts[sender].vname || Kurumi.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Kurumi.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
//━━━━━━━━━━━━━━━[ HARI HARI ]━━━━━━━━━━━━━━━\\
		var dates = moment().tz('America/Sao_Paulo').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Domingo"; break;
            case 1: hari = "Segunda-feira"; break;
            case 2: hari = "terça-feira"; break;
            case 3: hari = "quarta-feira"; break;
            case 4: hari = "quinta-feira"; break;
            case 5: hari = "sexta-feira"; break;
            case 6: hari = "sábado"; break;
        }
		switch(bulan) {
            case 0: bulan = "Janeiro"; break;
            case 1: bulan = "fevereiro"; break;
            case 2: bulan = "Março"; break;
            case 3: bulan = "abril"; break;
            case 4: bulan = "maio"; break;
            case 5: bulan = "junho"; break;
            case 6: bulan = "julho"; break;
            case 7: bulan = "agosto"; break;
            case 8: bulan = "setembro"; break;
            case 9: bulan = "Outubro"; break;
            case 10: bulan = "novembro"; break;
            case 11: bulan = "dezembro"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('America/Sao_Paulo').format('HH:mm:ss z')
			const timeWib = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
		const timeWit= moment().tz('America/Sao_Paulo').format('HH:mm:ss')
        const timeWita = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
        
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			Kurumi.sendMessage(from, teks, text, { thumbnail: gember, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Data ${Tanggal} - By FlavioJs`,body:"Kurumi [Beta ✓]",previewType:"PHOTO",thumbnail:gember,sourceUrl:`https://wa.me/558181718175`}}})
		}
		const reply2 = (teks) => {
Kurumi.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
			const sendMess = (hehe, teks) => {
				Kurumi.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Kurumi.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Kurumi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 LINK DETECTADO 」*\n Você foi detectado enviando um link de grupo, desculpe, tive que expulsá-lo`)
				setTimeout(() => {
				Kurumi.groupRemove(from, [kic]).catch((e) => { reply(`OS BOTS DEVEM SER ADMINISTRADORES`) })
				}, 0)
			   }
//━━━━━━━━━━━━━━━[WAKTU]━━━━━━━━━━━━━━━\\
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━\\

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `KurumiBot`, jpegThumbnail: fs.readFileSync(`./media/fotos/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/fotos/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `${namabot} \nRp. 999.999.999`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `By Guntur P`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           Kurumi.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/fotos/thumb.jpg"),
                                  "itemCount":100,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	Kurumi.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Kurumi.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Kurumi.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Kurumi.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Kurumi.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await Kurumi.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Kurumi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               Kurumi.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Kurumi.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      Kurumi.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Kurumi.contacts[from] != undefined ? Kurumi.contacts[from].vname || Kurumi.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By KurumiBot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Kurumi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
//━━━━━━━━━━━━━━━[ PUBLIC ]━━━━━━━━━━━━━━━\\
if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
//━━━━━━━━━━━━━━━[ UCAPAN WAKTU ]━━━━━━━━━━━━━━━\\
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
//━━━━━━━━━━━━━━━[ FAKE MENU BOT ]━━━━━━━━━━━━━━━\\
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `New Base KurumiBot`,
                 "title": `New Base Kurumi Bot`,
                 'jpegThumbnail': fs.readFileSync("./lib/Wahyuu.jpg"),
                        }
	                  } 
                     }
//━━━━━━━━━━━━━━━[ BUAT BIO BOT ]━━━━━━━━━━━━━━━\\
runi = process.uptime() 
           Kurumi.setStatus(`kurumi esta online`).catch((_)=>_);
          settingstatus = new Date() * 1;
//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
const jmn = moment.tz('America/Sao_Paulo').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
//━━━━━━━━━━━━━━━[ TEKS BUFFER ]━━━━━━━━━━━━━━━\\
const fakeText = (teks) => {
Kurumi.sendMessage(from, teks, text, {quoted: froxx})
}
//━━━━━━━━━━━━━━━[ Config ]━━━━━━━━━━━━━━━\\

switch(command) {
case 'help':
case 'menu':
if (isBanned) return reply('Aguarde Um pouco ai')
anu =`╭──────────────────────────
│
┠✎ *Ola eu sou A KurumiBot*
│
│       ❏ *Info Menu* ❏
│
*┠✎Prefixo* : Todos os Prefixo
*┠✎Versão* : 1.0.0
*┠✎Modo* : ${publik? "Público":"Self"}
*┠✎Premium* : ${isPremium? "Pobre":"Rico"}
│
│       ❏ *Informações* ❏
│
*┠✎Dono* : ${namaowner}
*┠✎Criador* : FlavioJs
*┠✎Api* : Baileys
│
│        ❏ *Kurumi [Beta ✓]* ❏
│
*┠✎Usuário Do Bot* : ${pushname}
│
│        ❒ *⌜Modo⌟* ❒
│
*┠✎${prefix}public*
*┠✎${prefix}self*
┠──────────────────────────
│
│        ❒ *⌜Download⌟* ❒
│
*┠✎${prefix}play Nome da música*
*┠✎${prefix}sticker*
│
└──────────────────────────`
sendButImage(from, anu,`Um Bot Simples Baixa musica e Faz Sticker @copyright 2022 By FlavioJs\n${Tanggal}`, thumb, [
            {buttonId: `${prefix}dono`, buttonText: {displayText: `Dono`, }, type: 1, },
            ]); 
break

case 'dono':
reply(`Clica em em cima 👆`)
break
                    case 's':
            case 'stickergif':
            case 'sticker':
            case 'stiker':
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await Kurumi.downloadAndSaveMediaMessage(encmedia)
                    ran = '666.webp'
                    await ffmpeg(`./${media}`)
                        .input(media)
                        .on('start', function (cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function (err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            reply('error')
                        })
                        .on('end', function () {
                            console.log('Finish')
                            Kurumi.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
                            fs.unlinkSync(media)
                            fs.unlinkSync(ran)
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await Kurumi.downloadAndSaveMediaMessage(encmedia)
                    ran = '999.webp'
                    await ffmpeg(`./${media}`)
                        .inputFormat(media.split('.')[1])
                        .on('start', function (cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function (err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                            reply(`Falha, no momento da conversão ${tipe} ke stiker`)
                        })
                        .on('end', function () {
                            console.log('Finish')
                            Kurumi.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
                            fs.unlinkSync(media)
                            fs.unlinkSync(ran)
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                } else {
                    reply(`Envie uma foto com uma legenda ${prefix}sticker\nDuração do adesivo do vídeo de 1 a 9 segundos`)
                }
                break
//══════════[ PLAY INFORMAÇÃO ]════════════════════════════//
case 'play':
if (isBanned) return reply('Aguarde Um pouco ai')
if (args.length ==0)return reply('Qual o título da música?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://akame-api.herokuapp.com/api/ytplay?nome=${bo}&apikey=kurumi`)
thmb = await getBuffer(ini.resultado.thumb)
ply1 =`Título: ${ini.resultado.título}\nVisualizações: ${ini.resultado.visualizações}\nCanal: ${ini.resultado.canal}`
ply2 =`Selecione a mídia abaixo`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️Audio 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'Video 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp3':
if (isBanned) return reply('Aguarde Um pouco ai')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://akame-api.herokuapp.com/api/ytplay?nome=${bo}&apikey=kurumi`)
mp3 = await getBuffer(ini.resultado.link)
Kurumi.sendMessage(from, mp3, audio)
break
case 'mp4':
if (isBanned) return reply('Aguarde Um pouco ai')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://akame-api.herokuapp.com/api/ytplaymp4?nome=${bo}&apikey=kurumi`)
mp4 = await getBuffer(ini.resultado.url)
Kurumi.sendMessage(from, mp4, video)
break
default:
if (budy.includes(`Assalamukkkggalaikum`)) {
Kurumi.sendMessage(from, 'Waalaikumsalam, tuben dahh salam', text, {quoted: mek})
                  }
if (budy.includes(`Bogggkkkt`)) {
Kurumi.sendMessage(from, 'Ada apa?, bot aktif kok', text, {quoted: mek})
                  }
if (budy.includes(`Tekkks`)) {
Kurumi.sendMessage(from, 'Hmmm', text, {quoted: mek})
                  }
}
if (budy.startsWith('x')){
try {
return Kurumi.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXTO]', 'red'), 'Kurumi', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}