const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')

require('./Kurumi.js')
nocache('./Kurumi.js', module => console.log(`${module} telah di update!`))

const starts = async (Kurumi = new WAConnection()) => {
    Kurumi.logger.level = 'warn'
    Kurumi.version = [2,2143,3]
    Kurumi.browserDescription = ['Kurumi Bot','Chrome', '3.0']
    console.log(banner)
    Kurumi.on('qr', () => {
        console.log(color('[ME ESCANEI]','red'), color('AGUARDANDO A VERIFICAÇÃO🔍'))
    })
    Kurumi.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Informações de login atualizadas')
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
    Kurumi.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./KurumiSession.json') && Kurumi.loadAuthInfo('./KurumiSession.json')
    Kurumi.on('connecting', () => {
        start('2', 'Conectar...')
    })
    Kurumi.on('open', () => {
        success('2', 'Conectar')
    })
    await Kurumi.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./KurumiSession.json', JSON.stringify(Kurumi.base64EncodedAuthInfo(), null, '\t'))

    Kurumi.on('chat-update', async (message) => {
        require('./Kurumi.js')(Kurumi, message)
    })
Kurumi.on("group-participants-update", async (anu) => {
    try {
      groupMet = await Kurumi.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await Kurumi.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await Kurumi.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(Kurumi.user.jid)) {
        Kurumi.sendMessage(anu.jid, "Obrigado Por Me Adicionar em Seu Grupo Sou Um Bot digite !help/!menu Para Ver Meus Comandos", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(Kurumi.user.jid)) {
             const mdata = await Kurumi.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await Kurumi.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await Kurumi.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = Kurumi.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
                teks = `Ola @${num.split('@')[0]}, \nStatus: ┌Numero: *${num.split('@')[0]}*\n├Bɪᴏ* : *${thu.status}*\n└Membros : ${memeg}*\n\nBem-vindo ao ${mdata.subject}`
                tekss = `*${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`#help`,buttonText:{displayText:'Menu'},type:1}]
                welcomeButt = { contentText: `${teks} `, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                Kurumi.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(Kurumi.user.jid)) {
                const mdata = await Kurumi.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await Kurumi.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = Kurumi.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Deus Vai Na Paz pequeno gafanhoto* 👋 @${num.split('@')[0]}`
                goodbyeBut = [{buttonId:` `,buttonText:{displayText:'Adeus Fardo'}, type:1}]
                goodbyeButt = { contentText: `${out}`, footerText: `Hmmm`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                Kurumi.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
        } catch (e) {
            console.log('Error :', e)
        }
    })
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Modulo', `'${module}'`, 'agora esta sendo observado para mudanças')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
