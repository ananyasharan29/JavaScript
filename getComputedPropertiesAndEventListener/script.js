const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// Global object "window" has lot of property

// console.log(window.getComputedStyle(red).backgroundColor);

// getComputedStyle gives the property of CSS
// In Css, we write like this background-color, font-family
// but when we use getComputedStyle prperty, it is like this "backgraoundColor", "fontFamily"

// window object has lots of property one of them is getComputedStyle
// When you want to grab some of the style property from the particular element
// Just required to pass on that particular element


// Event Listener

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = getBGColor(getBGColor(pink));

// pink.addEventListener("mouseenter", () => {
//     center.style.backgroundColor = color;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.backgroundColor = color;
    });
};

// Style and getComputedStyle are two different things
// Style is what you use when impliment some style
//getComputedStyle is used when you want to grab any style

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));

