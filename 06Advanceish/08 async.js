// Event Loop is the loop which looks for the events

const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout(() => {
        console.log("Yaaahhhooooo");
    }, 3000);
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};

// uno();
// dos();
// tres();

uno();
tres();
dos();