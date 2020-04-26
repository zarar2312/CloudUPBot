const { Client, RichEmbed } = require("discord.js");

const CloudUP = new Client({ disableEveryone: true });

const { CommandHandler } = require("djs-commands");// Komut Modülü

const CH = new CommandHandler({
    folder: __dirname + "/CloudUP-Commands/",
  timeout: 1.4,
  prefix: ["c!", "C!", "."]
});

CloudUP.on("message", async (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;

    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);

    if(!cmd) return;

    try{

        cmd.run(client,message,args)

    }catch(e){
        console.log(e)
    }
  console.log(`${message.author.tag} adlı kullanıcı ${command} adlı kodu kullandı! Komutu kullandığı kanal: ${message.channel.name} || Sunucu: ${message.guild.name}`)
});



CloudUP.login(process.env.CLIENT_TOKEN).catch(console.error);
