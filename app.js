require("dotenv").config(); //initialize dotenv
const express = require("express");
const app = express();

const { Client, Intents } = require("discord.js"); //import discord.js
const images = require("./images");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
}); //create new client

// require("discord-buttons")(client)
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.CLIENT_TOKEN);
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
  if (msg.content.toLowerCase() === "bloom") {
    const rndInt = Math.floor(Math.random() * 38) + 1;
    console.log(rndInt);
    msg.channel.send("Here's your card!"); //Replies to user command
    // const img = await getMeme(); //fetches an URL from the API
    const imgLink = images[rndInt];
    msg.channel.send({
      files: [
        {
          attachment: rndInt + ".jpg",
          name: "bloom.jpg",
          description: "bloom.jpg",
        },
      ],
    }); //send the image URL

    // msg.
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server listening at port %d", port);
});
