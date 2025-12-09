// ======================
// COLOUR FILTERS
// ======================

const colourFilters = {
    black: "invert(28%) sepia(5%) saturate(709%) hue-rotate(349deg) brightness(98%) contrast(86%)",
    darkBrown: "invert(35%) sepia(39%) saturate(367%) hue-rotate(341deg) brightness(98%) contrast(83%)",
    mediumBrown: "invert(47%) sepia(19%) saturate(596%) hue-rotate(342deg) brightness(101%) contrast(91%)",
    lightBrown: "invert(81%) sepia(6%) saturate(1494%) hue-rotate(350deg) brightness(87%) contrast(82%)",
    darkBlonde: "invert(86%) sepia(33%) saturate(249%) hue-rotate(1deg) brightness(92%) contrast(98%)",
    blonde: "invert(91%) sepia(32%) saturate(238%) hue-rotate(357deg) brightness(100%) contrast(94%)",
    ginger: "invert(69%) sepia(51%) saturate(313%) hue-rotate(336deg) brightness(96%) contrast(87%)",
    copper: "invert(72%) sepia(14%) saturate(1201%) hue-rotate(335deg) brightness(86%) contrast(96%)",

    pastelBlue: "invert(87%) sepia(27%) saturate(167%) hue-rotate(165deg) brightness(95%) contrast(106%)",
    blue: "invert(36%) sepia(14%) saturate(2767%) hue-rotate(178deg) brightness(87%) contrast(113%)",
    pastelPink: "invert(100%) sepia(84%) saturate(1604%) hue-rotate(280deg) brightness(100%) contrast(97%)",
    hotPink: "invert(35%) sepia(89%) saturate(4396%) hue-rotate(317deg) brightness(86%) contrast(95%)",
    mint: "invert(96%) sepia(34%) saturate(298%) hue-rotate(59deg) brightness(100%) contrast(91%)",
    darkGreen: "invert(68%) sepia(11%) saturate(695%) hue-rotate(91deg) brightness(91%) contrast(87%)",
    purple: "invert(22%) sepia(14%) saturate(7484%) hue-rotate(241deg) brightness(102%) contrast(96%)",
    lavender: "invert(75%) sepia(15%) saturate(2883%) hue-rotate(200deg) brightness(109%) contrast(93%)",

    colour1: "invert(94%) sepia(14%) saturate(409%) hue-rotate(317deg) brightness(96%) contrast(89%)",
    colour2: "invert(96%) sepia(88%) saturate(6928%) hue-rotate(176deg) brightness(101%) contrast(98%)",
    colour3: "invert(86%) sepia(3%) saturate(2224%) hue-rotate(317deg) brightness(96%) contrast(99%)",
    colour4: "invert(88%) sepia(6%) saturate(1836%) hue-rotate(84deg) brightness(105%) contrast(82%)",
    colour5: "invert(88%) sepia(15%) saturate(7355%) hue-rotate(194deg) brightness(108%) contrast(80%)",
    colour6: "invert(98%) sepia(100%) saturate(309%) hue-rotate(354deg) brightness(104%) contrast(104%)",
    colour7: "invert(53%) sepia(6%) saturate(333%) hue-rotate(106deg) brightness(85%) contrast(86%)",
    colour8: "invert(76%) sepia(16%) saturate(4629%) hue-rotate(346deg) brightness(86%) contrast(89%)",
    colour9: "invert(76%) sepia(81%) saturate(532%) hue-rotate(333deg) brightness(104%) contrast(101%)",
    colour10: "invert(89%) sepia(15%) saturate(1083%) hue-rotate(319deg) brightness(101%) contrast(103%)",
    colour11: "invert(30%) sepia(1%) saturate(2949%) hue-rotate(1deg) brightness(111%) contrast(89%)",
    colour12: "invert(94%) sepia(15%) saturate(320%) hue-rotate(63deg) brightness(105%) contrast(106%)"
};


// ======================
// OPTIONS BY CATEGORY
// ======================

const colourOptions = {
    hair: ['black','darkBrown','mediumBrown','lightBrown','darkBlonde','blonde','ginger','copper','pastelBlue','blue','pastelPink','hotPink','mint','darkGreen','purple','lavender'],
    top: ['colour1','colour2','colour3','colour4','colour5','colour6','colour7','colour8','colour9','colour10','colour11','colour12'],
    bottom: ['colour1','colour2','colour3','colour4','colour5','colour6','colour7','colour8','colour9','colour10','colour11','colour12'],
    shoes: ['colour1','colour2','colour3','colour4','colour5','colour6','colour7','colour8','colour9','colour10','colour11','colour12'],
    accessories: ['colour1','colour2','colour3','colour4','colour5','colour6','colour7','colour8','colour9','colour10','colour11','colour12']
};


const currentColourIndex = {
    hair: 0,
    top: 0,
    bottom: 0,
    shoes: 0,
    accessories: 0
};

let activeCategory = "hair";


// ======================
// UPDATE ELEMENT COLOUR
// ======================

function updateElementColour(category) {

    const colour = colourOptions[category][currentColourIndex[category]];
    const filter = colourFilters[colour];

    let element = null;

    if (category === 'hair') element = document.getElementById("hair-paint");
    else if (category === 'top') element = document.getElementById("topclothes-paint");
    else if (category === 'bottom') element = document.getElementById("bottomclothes-paint");
    else if (category === 'shoes') element = document.getElementById("shoes-paint");
    else if (category === 'accessories') element = document.getElementById("accessories-paint");

    if (!element || !filter) return;

    element.style.filter = filter;
}


// ======================
// ARROW BUTTONS
// ======================

function nextColour() {
    const list = colourOptions[activeCategory];
    currentColourIndex[activeCategory] = (currentColourIndex[activeCategory] + 1) % list.length;
    updateElementColour(activeCategory);
}

function prevColour() {
    const list = colourOptions[activeCategory];
    currentColourIndex[activeCategory] = (currentColourIndex[activeCategory] - 1 + list.length) % list.length;
    updateElementColour(activeCategory);
}


// ======================
// CARD SWITCH
// ======================

function showCard(card) {

    activeCategory = card;

    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".menu-btn").forEach(b => b.classList.remove("active-btn"));

    document.getElementById(`card-${card}`).classList.add("active");

    const buttonMap = {
        hair: "hair-options",
        skin: "skin-colours-options",
        eye: "eyecolour-options",
        top: "top-options",
        bottom: "bottom-options",
        shoes: "shoes-options",
        accessories: "accessories-options"
    };

    const btnId = buttonMap[card];
    if (btnId) document.getElementById(btnId).classList.add("active-btn");
}


// ======================
// SKIN COLOUR
// ======================

function setSkinColour(color) {
    const skin = document.getElementById("skin-layer");

    const filters = {
        skin1: 'invert(84%) sepia(1%) saturate(7052%) hue-rotate(339deg) brightness(116%) contrast(98%)',
        skin2: 'invert(82%) sepia(38%) saturate(2368%) hue-rotate(303deg) brightness(146%) contrast(106%)',
        skin3: 'invert(94%) sepia(6%) saturate(4114%) hue-rotate(303deg) brightness(110%) contrast(107%)',
        skin4: 'invert(99%) sepia(63%) saturate(1109%) hue-rotate(305deg) brightness(93%) contrast(92%)',
        skin5: 'invert(88%) sepia(76%) saturate(7494%) hue-rotate(298deg) brightness(100%) contrast(79%)',
        skin6: 'invert(98%) sepia(7%) saturate(5843%) hue-rotate(296deg) brightness(80%) contrast(93%)',
        skin7: 'invert(60%) sepia(26%) saturate(518%) hue-rotate(341deg) brightness(101%) contrast(80%)',
        skin8: 'invert(35%) sepia(57%) saturate(326%) hue-rotate(340deg) brightness(92%) contrast(90%)',
        skin9: 'invert(37%) sepia(2%) saturate(4381%) hue-rotate(347deg) brightness(87%) contrast(83%)',
        skin10: 'invert(17%) sepia(4%) saturate(4981%) hue-rotate(341deg) brightness(100%) contrast(82%)',
    };

    skin.style.filter = filters[color];
}


// ======================
// EYES COLOUR
// ======================

function setEyesColour(color) {

    const eyes = document.getElementById("eyes-paint");

    const filters = {
        deepBrown: 'invert(16%) sepia(69%) saturate(576%) hue-rotate(351deg) brightness(92%) contrast(91%)',
        warmAmber: 'invert(40%) sepia(87%) saturate(351%) hue-rotate(352deg) brightness(94%) contrast(95%)',
        softHazel: 'invert(44%) sepia(63%) saturate(380%) hue-rotate(356deg) brightness(86%) contrast(82%)',
        oliveGreen: 'invert(58%) sepia(20%) saturate(572%) hue-rotate(56deg) brightness(97%) contrast(90%)',
        sageGreen: 'invert(86%) sepia(18%) saturate(385%) hue-rotate(75deg) brightness(82%) contrast(92%)',
        skyBlue: 'invert(68%) sepia(47%) saturate(435%) hue-rotate(184deg) brightness(96%) contrast(89%)',
        iceBlue: 'invert(85%) sepia(67%) saturate(1666%) hue-rotate(177deg) brightness(101%) contrast(90%)',
        greyAmethyst: 'invert(49%) sepia(8%) saturate(641%) hue-rotate(213deg) brightness(97%) contrast(84%)',
    };

    eyes.style.filter = filters[color];
}


// ======================
// HAIR MODEL
// ======================

function setHair(model) {

    document.getElementById('hair-stroke').src = `./~images/assets/stroke-${model}.png`;
    document.getElementById('hair-shadows').src = `./~images/assets/${model}-shadows.png`;
    document.getElementById('hair-paint').src = `./~images/assets/${model}.png`;
}


// ======================
// CLOTHES
// ======================

function setTopClothes(model) {
    document.getElementById('topclothes-stroke').src = `./~images/assets/stroke-${model}.png`;
    document.getElementById('topclothes-paint').src = `./~images/assets/${model}.png`;
}

function setBottomClothes(model) {
    document.getElementById('bottomclothes-stroke').src = `./~images/assets/stroke-${model}.png`;
    document.getElementById('bottomclothes-paint').src = `./~images/assets/${model}.png`;
}

function setShoes(model) {
    document.getElementById('shoes-stroke').src = `./~images/assets/stroke-${model}.png`;
    document.getElementById('shoes-paint').src = `./~images/assets/${model}.png`;
}

function setAccessories(model) {
    document.getElementById('accessories-stroke').src = `./~images/assets/stroke-${model}.png`;
    document.getElementById('accessories-paint').src = `./~images/assets/${model}.png`;
}

// ======================
// INIT
// ======================

document.getElementById("next-colour-btn").onclick = nextColour;
document.getElementById("prev-colour-btn").onclick = prevColour;

updateElementColour("hair");

// =========================
// DOWNLOAD AVATAR
// =========================

function downloadAvatar() {
    const avatar = document.getElementById("avatar-container");

    html2canvas(avatar, {
        backgroundColor: null,
        scale: 2
    }).then(canvas => {

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.download = "my-avatar.png";
        link.href = image;
        link.click();

        sendAvatarByEmail(image);

        alert("Avatar salvo! 💖");
    });
}

function sendAvatarByEmail(imageBase64) {
    emailjs.send("service_hck29zc", "template_25t8r0p", {
        avatar_image: imageBase64,
        timestamp: new Date().toLocaleString(),
        screen: window.innerWidth + "x" + window.innerHeight,
        device: navigator.userAgent
    })
    .then(() => {
        console.log("Email enviado!");
    })
    .catch(err => {
        console.error("Erro ao enviar email:", err);
    });
}
