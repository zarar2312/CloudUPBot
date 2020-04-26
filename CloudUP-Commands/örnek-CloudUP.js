const Discord = require("discord.js")


// Modüller bu yukarıya gelecektir.

module.exports = class {
      constructor() {
        this.name = "",// Komutun ismi buradan çalıştırır.
        this.alias = [""],// Daha farklı yazanlar için çeşitlendirme.
        this.usage = ""// Nasıl kullanılacağını girebilirsin.
    }
   async run(client, message, args) {
     
     message.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle(`Bir hata oldu!`)
      .setDescription(''+ message.author +' **__Senin suçun yok bilader.__**')
      .setFooter(`${message.author.username}`,message.author.avatarURL)
      .setColor('BLACK')).then(m => m.delete(14000))
     
   }
}
