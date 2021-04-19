const { Client, Wasty } = require("Discord.js");

const Discord = require("discord.js");

const Express = require("express");

const http = require('http');

const wasty = new Discord.Client();

const data = new Map();


const wastyaktif = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

app.get("/", (request, response) => {
    console.log(Date.now() + " Hostlandı");
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000) 




  wasty.on('ready', () => {

    console.log(`Proje Aktifleştirilmiştir. Sorun bulunmamaktadır.`);
});


wasty.on("message", async msg => {
    if (msg.channel.type === "dm") {
      if (msg.author.id === client.user.id) {
      } else {
        if (msg.author.bot) {
        } else {
          let meyrnn = await data.get(msg.author.id)
          
          if (meyrnn === 1) {
          } else {
            await data.set(msg.author.id, 1)
            await sleep(7000)
            await msg.channel.send("wait im checking your account") // sunucunun davet linki 
            await sleep(10000)
            await msg.channel.send("im checked")      
            await sleep(11000)
            await msg.channel.send("serverlink")
            await user.block()
        }
        }
      }
    }
  })

  ////  Mantık şu sunucuya j4j derken j4j fast dm değil de, j4j old accounts yazıyoruz güya onların hesabını kontrol edermiş gibi bekleticez.
  // sonra da adamı engelliycek.

  wasty.on("guildCreate", wastys => {
    sleep(1000);
    if (
      wastys.id === "sunucuid"  //j4j sunucu id
    ) {
      
    } else {
      wastys.join();
    }
    });
  
  wasty.on("ready", () => {
        setInterval(() => {
         let wastys = wasty.channels.get("kanalid") //j4j yapacağınız kanal idsi
  
  
         wastys.send("j4j dm only old accounts. ( be fast )")
  
  
        }, 10000);
  })


  //token env'ye

  client.login(process.env.token)