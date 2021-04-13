const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require('node-fetch');

client.on("ready", () => {
    console.log("The fake Gen is online now!");
});

client.on("message", msg => {
    if (msg.content.toLowerCase() === "!gen_male_name") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/malename', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(json.name);
            })
            .catch(err => console.log(err));
    }
    if (msg.content.toLowerCase() === "!gen_female_name") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/femalename', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(json.name);
            })
            .catch(err => console.log(err));
    }
    if (msg.content.toLowerCase() === "!gen_fake_male") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/male/account', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(`${json.name} ${json.surname} ${json.age}`);
            })
            .catch(err => console.log(err));
    }
    if (msg.content.toLowerCase() === "!gen_fake_female") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/female/account', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(`${json.name} ${json.surname} ${json.age}`);
            })
            .catch(err => console.log(err));
    }
    if (msg.content.toLowerCase() === "!gen_surname") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/surname', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(`${json.name}`);
            })
            .catch(err => console.log(err));
    }
    if (msg.content.toLowerCase() === "!gen_age") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/age', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(`${json.age}`);
            })
            .catch(err => console.log(err));
    }
})

client.login("Token-Here");