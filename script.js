let screenWidth = window.innerWidth;
let discordText = document.querySelector('.discord-h1');
let tiktokText = document.querySelector('.tiktok-h1');

if(window.innerWidth <= 1140) {
    discordText.innerHTML = 'Join <span style=color:#707bf7>discord</span>'
} else{
    discordText.innerHTML = 'Join the discord community'
};

if(window.innerWidth <= 740) {
    tiktokText.innerHTML = 'DI on <span style=color:#4dd6d2>tiktok'
} else{
    tiktokText.innerHTML = 'Dark Island on tiktok'
};

let discordBtn = document.querySelector('.discord-btn');
let patreonBtn = document.querySelector('.patreon-btn');
let tiktokBtn = document.querySelector('.tiktok-btn');

discordBtn.addEventListener('click', function() {
    window.location = 'https://discord.gg/thedarkisland';
});
patreonBtn.addEventListener('click', function() {
    window.location = 'https://www.patreon.com/darkislandgame';
});
tiktokBtn.addEventListener('click', function() {
    window.location = 'https://www.tiktok.com/@darkfantasyisland?_t=8qgv2YlB8AY&_r=1';
});
