window.onload = function () {
  // Parses the document body and
  // inserts <img> tags in place of Unicode Emojis
  twemoji.parse(
    document.body,
    { folder: "svg", ext: ".svg" } // This is to specify to Twemoji to use SVGs and not PNGs
  );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const titles = [
  "i work out",
  "funny",
  "Kara Kara Kara no Kara",
  "26047",
  "Can I Friend You On Bassbook? Lol",
  "im gay",
  "cognrjatulations !!!",
  "futanari",
  "ubuntu (ew)",
  "phantoms are annoying",
  "/give @a hugs 999999",
  "[Object object]",
  "please add command support vendy",
  "mrekk",
  "women fear me",
  "fish fear me",
  "men turn their eyes away from me",
  "as i walk no beast dares makes a sound",
  "i am alone in this barren earth",
  "uptown funk you up",
  "stackoverflow my beloved",
  "*thrusts into you*",
  "also what are these for?",
  "its morbing time",
  "bungling bungus",
  "rate this base.apk Architecture splits: \nconfig.arm64_v8a.apk \nconfig.armeabi_v7a.apk \nconfig.x86_64.apk \n config.x86.apk \n DPI splits: \n config.hdpi.apk \n config.xxhdpi.apk \n Language splits: \nconfig.de.apk \n config.en.apk",
  "Now explode",
  "“message logger when”",
  "A wild ⛧artificialmusik appeared.",
  "IS THAT A MOTHERUCFKCING JOJOI REFERENCE???//?",
  "Cats are not ducks",
  "just farted",
  "ReeK - Making Zurek While Getting A Flandre Fumo Shoved Up My A-",
  "what the fuck is an lsp log",
  "'ewwo evewypony",
  "also, what the fuck is a mustard",
  "727",
  "WYFSI",
  "that time i reincarnated as a toilet in another world",
  "vim >>>>>> emacs",
  "also try out archlinux.org",
  "how to print [[this, this, and, this, all, together as a single string]]?",
  "😢",
  "None.",
  "deez nuts",
  "trolley",
  "i want to live in piece",
  "fill me with happiness",
  "you're downbad",
  "do not use code nopo",
];

/*const funnysentence = [
  'when i was 13 i sent a pic of my feet covered in peanut butter and sent it to my crush and texted him "hope you dont have a peanut allergy"',
  "that could be us\nfat amoungus baby role play?",
  "🤯",
  "this is why your parents change the subject when people ask about you",
  '<a href="https://en.m.wikipedia.org/wiki/Trollface">https://en.m.wikipedia.org/wiki/Trollface</a>',
  "hololive more like homosexual sex",
];*/

document.title = titles[Math.floor(Math.random() * titles.length)];

//button bs
let audio, bool;
if (new Date().getMonth() === 9) {
  console.log("boo");
  audio = new Audio("boo.mp3");
} else if (new Date().getMonth() === 11) {
  console.log("chrismas! i am so happy about this information!");
  audio = new Audio("hehemiku.mp3");
} else {
  audio = new Audio("for-maeve.mp3");
}
function no() {
  bool = !bool;
  if (bool) {
    audio.play();
  } else {
    audio.pause();
  }
}

async function load(url) {
  return await (await fetch(url)).json();
}

load(
  "https://literallyafuckingjsonfile.literallyafuckingjsonfile.workers.dev/"
).then((data) => {
  const funnyLaughingDiscordMessageToDisplayIEnjoy =
    data[getRandomInt(0, data.length - 1)];

  fetch(
    `https://dp.nea.moe/avatar/${funnyLaughingDiscordMessageToDisplayIEnjoy.from}.json`
  )
    .then((it) => it.json())
    .then((authorData) => {
      const dm = document.getElementById("dm");
      dm.innerHTML = `<div class="funny">
    <div class="avatar">
      <img src="${authorData.avatar}" class="imgdc" alt="${authorData.username}">
    </div>
    <div class="messagecontent">
      <div>
        <span class="discord-author-username">${authorData.username}</span>
        <span class="discord-message-timestamp">11/29/2022</span>
      </div>
      <div class="discord-message-body">
        ${funnyLaughingDiscordMessageToDisplayIEnjoy.text}
    </div>
    </div>
  </div>
`;
      twemoji.parse(dm);
    });
});
