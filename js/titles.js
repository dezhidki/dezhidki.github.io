const TITLES = [
    "command not found",
        "<i>[HORSING INTENSIFIES]</i>",
        "h as in highfalutin",
        "a.k.a. big boi",
        "h as in <a href='https://github.com/denikson'>🐴</a>",
        "𝕨 𝕠 𝕒 𝕙",
        "aka <a href='http://🐴.to'>🐴.to</a>",
        "magic-driven development",
        "not an actual sh script",
        "voi elämä",
        "forsooth!",
        "<i>[</i><a href='https://github.com/denikson'>🐴</a> <i>INTENSIFIES]</i>"
];

window.document.getElementById("subtitle").innerHTML = TITLES[Math.floor(Math.random() * TITLES.length)];