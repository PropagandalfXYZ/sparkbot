const Discord = require('discord.js')
const client = new Discord.Client()
client.login("NTM2MTI1ODQxNDI0MjUyOTI5.D11BVA.GJg04STVX66Gw30n4G6daKWBRWk")


client.on("ready",() => {
    client.user.setActivity("Coded by Propagandalf",{type:"STREAMING", url: "https://propagandalf.xyz"}).catch(console.error);
});


client.on('message', msg => {
  if (msg.content === '!hilfe') {
    msg.channel.send({embed: {
      color: 25500,
      title: "Hilfe",
      description: "**Alle Commands:**\n!hilfe -- zeigt diese Seite\n !ping -- Latenztest\n !ct -- Website von Coding-Treff\n !propagandalf -- Website des Bot-Developers\n !author -- Bot-Developer\n\n"
    }});  
  }
});
client.on('message', msg => {
  if (msg.content === '!ct') {
   msg.author.send('https://coding-treff.de')
  }
});
client.on('message', msg => {
  if (msg.content === '!propagandalf') {
   msg.author.send('https://propagandalf.xyz\n:heart:')
  }
});
client.on('message', message => {
  if(message.content.startsWith("!ping")) {
          message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
  }
});
client.on('message', msg => {
  if (msg.content === '!author') {
   msg.reply('Ich wurde von <@444793611360534528> erschaffen. Seine Website erreichst du unter https://propagandalf.xyz')
  }
});


