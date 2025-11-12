// change skin colour:

function setSkinColour(color) {
    const skin = document.getElementById('skin-layer');

    const group1 = ['skin1', 'skin2', 'skin3', 'skin4', 'skin5', 'skin6', 'skin7'];
    const group2 = ['skin8', 'skin9', 'skin10'];

    if (group1.includes(color)) {
        skin.src = './~images/assets/skin-base.png';
    } else if (group2.includes(color)) {
        skin.src = './~images/assets/skin-base2.png';
    }
    const filters = {
        skin1: 'invert(91%) sepia(5%) saturate(1221%) hue-rotate(329deg) brightness(108%) contrast(98%)',
        skin2: 'invert(97%) sepia(8%) saturate(2647%) hue-rotate(300deg) brightness(101%) contrast(106%)',
        skin3: 'invert(97%) sepia(30%) saturate(972%) hue-rotate(302deg) brightness(101%) contrast(96%)',
        skin4: 'invert(85%) sepia(24%) saturate(449%) hue-rotate(340deg) brightness(94%) contrast(89%)',
        skin5: 'invert(72%) sepia(12%) saturate(1212%) hue-rotate(321deg) brightness(92%) contrast(98%)',
        skin6: 'invert(65%) sepia(7%) saturate(2066%) hue-rotate(323deg) brightness(91%) contrast(90%)',
        skin7: 'invert(73%) sepia(4%) saturate(2958%) hue-rotate(341deg) brightness(87%) contrast(80%)',
        skin8: 'invert(37%) sepia(11%) saturate(1696%) hue-rotate(340deg) brightness(97%) contrast(86%)',
        skin9: 'invert(26%) sepia(38%) saturate(234%) hue-rotate(341deg) brightness(102%) contrast(87%)',
        skin10: 'invert(8%) sepia(4%) saturate(5851%) hue-rotate(337deg) brightness(94%) contrast(87%)',
    };

    skin.style.filter = filters[color];
}

// change eyes colour:

