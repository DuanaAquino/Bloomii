// function to alternate the controls cards' menu:

function showCard(card) {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    document.getElementById("card-" + card).classList.add("active");

    document.querySelectorAll(".menu-btn").forEach(b => b.classList.remove("active-btn"));
    document.getElementById(card + "-options").classList.add("active-btn");

    updateColoursPanel(card);
}

function updateColoursPanel(category) {
    const coloursContainer = document.getElementById("colours-content");
    if (!coloursContainer) return;

    let html = "";

    if (category === "hair") {
        html = `
            <button onclick="setHairColour('black')" class="colour-btn black">
                <img src="./~images/assets/haircolour1.png" alt="">
            </button>
            <button onclick="setHairColour('darkBrown')" class="colour-btn dark-brown">
                <img src="./~images/assets/haircolour2.png" alt="">
            </button>
            <button onclick="setHairColour('mediumBrown')" class="colour-btn blonde">
                <img src="./~images/assets/haircolour3.png" alt="">
            </button>
            <button onclick="setHairColour('lightBrown')" class="colour-btn copper">
                <img src="./~images/assets/haircolour4.png" alt="">
            </button>
            <button onclick="setHairColour('darkBlonde')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour5.png" alt="">
            </button>
            <button onclick="setHairColour('blonde')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour6.png" alt="">
            </button>
            <button onclick="setHairColour('ginger')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour7.png" alt="">
            </button>
            <button onclick="setHairColour('copper')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour8.png" alt="">
            </button>
            <button onclick="setHairColour('pastelBlue')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour9.png" alt="">
            </button>
            <button onclick="setHairColour('blue')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour10.png" alt="">
            </button>
            <button onclick="setHairColour('pastelPink')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour11.png" alt="">
            </button>
            <button onclick="setHairColour('hotPink')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour12.png" alt="">
            </button>
            <button onclick="setHairColour('mint')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour13.png" alt="">
            </button>
            <button onclick="setHairColour('darkGreen')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour14.png" alt="">
            </button>
            <button onclick="setHairColour('purple')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour15.png" alt="">
            </button>
            <button onclick="setHairColour('lavender')" class="colour-btn pastel-pink">
                <img src="./~images/assets/haircolour16.png" alt="">
            </button>
        `;
    }

    else if (category === "top") {
        html = `
            <button onclick="setClothesColour('colour1')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour2')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour3')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour4')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour5')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour6')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour7')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour8')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour9')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour10')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour11')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour12')" class="colour-btn"></button>
        `;
    }

    else if (category === "bottom") {
        html = `
            <button onclick="setClothesColour('colour1')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour2')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour3')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour4')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour5')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour6')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour7')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour8')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour9')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour10')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour11')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour12')" class="colour-btn"></button>
        `;
    }

    else if (category === "shoes") {
        html = `
            <button onclick="setClothesColour('colour1')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour2')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour3')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour4')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour5')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour6')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour7')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour8')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour9')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour10')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour11')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour12')" class="colour-btn"></button>
        `;
    }

    else if (category === "accessories") {
        html = `
            <button onclick="setClothesColour('colour1')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour2')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour3')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour4')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour5')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour6')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour7')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour8')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour9')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour10')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour11')" class="colour-btn"></button>
            <button onclick="setClothesColour('colour12')" class="colour-btn"></button>
        `;
    }

    coloursContainer.innerHTML = html;
}

// change skin colour:

function setSkinColour(color) {
    const skin = document.getElementById('skin-layer');

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

// change eyes colour:

function setEyesColour(color) {
    const eyes = document.getElementById('eyes-paint');

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

// change hair:

function setHair(model) {
    const stroke = document.getElementById('hair-stroke');
    const shadows = document.getElementById('hair-shadows')
    const paint = document.getElementById('hair-paint');

    stroke.src = `./~images/assets/stroke-${model}.png`;
    shadows.src = `./~images/assets/${model}-shadows.png`;
    paint.src = `./~images/assets/${model}.png`;
}

// change hair colour:

function setHairColour(color) {
    const paint = document.getElementById('hair-paint');

    const filters = {
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
        lavender: "invert(75%) sepia(15%) saturate(2883%) hue-rotate(200deg) brightness(109%) contrast(93%)"
    };

    paint.style.filter = filters[color];

    const hairButtons = document.querySelectorAll("#card-hair img");
    hairButtons.forEach(img => {
        img.style.filter = filters[color];
    });
}

// change clothes:

function setTopClothes(model) {
    const topClothesStroke = document.getElementById('topclothes-stroke');
    const topClothesPaint = document.getElementById('topclothes-paint');

    topClothesStroke.src = `./~images/assets/stroke-${model}.png`;
    topClothesPaint.src = `./~images/assets/${model}.png`;
}

function setBottomClothes(model) {
    const bottomClothesStroke = document.getElementById('bottomclothes-stroke');
    const bottomClothesPaint = document.getElementById('bottomclothes-paint');

    bottomClothesStroke.src = `./~images/assets/stroke-${model}.png`;
    bottomClothesPaint.src = `./~images/assets/${model}.png`;
}

// change shoes:

function setShoes(model) {
    const ShoesStroke = document.getElementById('shoes-stroke');
    const ShoesPaint = document.getElementById('shoes-paint');

    ShoesStroke.src = `./~images/assets/stroke-${model}.png`;
    ShoesPaint.src = `./~images/assets/${model}.png`;
}

// change accessories:

function setAccessories(model) {
    const accessoriesStroke = document.getElementById('accessories-stroke');
    const accessoriesPaint = document.getElementById('accessories-paint');

    accessoriesStroke.src = `./~images/assets/stroke-${model}.png`;
    accessoriesPaint.src = `./~images/assets/${model}.png`;
}

window.addEventListener("DOMContentLoaded", () => {
    updateColoursPanel("hair");
});

function updatePanelsVisibility(activeCard) {

    const colours = document.getElementById("colours-panel");
    const eyes = document.getElementById("eyecolour-options");
    const skin = document.getElementById("skin-colours-options");

    // esconde tudo
    colours.style.display = "none";
    eyes.style.display = "none";
    skin.style.display = "none";

    // mapeamento inteligente
    const panelMap = {
        hair: "colours",
        top: "colours",
        bottom: "colours",
        shoes: "colours",
        accessories: "colours"
    };

    // mostra painel certo
    if (panelMap[activeCard] === "colours") colours.style.display = "flex";
    if (activeCard === "eyes") eyes.style.display = "flex";
    if (activeCard === "skin") skin.style.display = "flex";