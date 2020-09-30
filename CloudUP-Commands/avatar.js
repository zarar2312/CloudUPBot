const Discord = require("discord.js")
module.exports = class {
      constructor() {
        this.name = "avatar",
        this.alias = ["Avatar", "AVATAR", "AV", "av", "Av"],
        this.usage = "c!avatar yada c!avatar @etiket"
    }
   async run(CloudUP, message, args) {
      if(!message.guild) return;
   let cloudupAV = message.mentions.members.first();
  if(!cloudupAV) {
    message.channel.send({files: [message.author.avatarURL({ dynamic: true, size: 512 })]}).catch(() => {
      console.log('Yetkim Yetmiyor.')
    })
  }
  if(cloudupAV) {
    message.channel.send({files: [cloudUPAV.user.avatarURL({ dynamic: true, size: 512 })]}).catch(() => {
      console.log('Yetkim Yetmiyor.')
    })
  }  
     
   }
}
