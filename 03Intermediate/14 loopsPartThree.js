//For in and For of loop
//const variables are usually used in ForEach, forof and forin loop

//For of is majorly used with the array
const names = ["Youtube", "Facebook", "Instagram", "Telegram", "Whatsapp"];

for(const n of names ){
    console.log(n);
}

//For in is majorly used with the objects
const symbol = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
    Tg : "Telegram",
    wp : "Whatsapp",
};

for(const i in symbol){
    // console.log(i);
    // console.log(symbol[i]);
    console.log(`Key is : ${i} and the Value is : ${symbol[i]}`);
}
// it gives us the keys as an output
//Accessing values from the key is easy but key from the value is not so easy
