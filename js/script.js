// ********** INDEX **********

function heroShow(imageID) {
    document.getElementById(imageID).style.display = 'block';
}

function heroHide(imageID) {
    document.getElementById(imageID).style.display = 'none';
}

// artist-turned hover

document.getElementById('artist-turned').addEventListener(
    'mouseover', e => {heroShow('watercolor');}
)

document.getElementById('artist-turned').addEventListener(
    'mouseout', e => {heroHide('watercolor');}
)

// product designer hover

document.getElementById('product-designer').addEventListener(
    'mouseover', e => {heroShow('hcd');}
)

document.getElementById('product-designer').addEventListener(
    'mouseout', e => {heroHide('hcd');}
)

// based in california hover

document.getElementById('based-in').addEventListener(
    'mouseover', e => {heroShow('california');}
)

document.getElementById('based-in').addEventListener(
    'mouseout', e => {heroHide('california');}
)