const textarea = document.getElementById('type-box');
const char_element = document.getElementById('char');
const twitter_element = document.getElementById('twitter-number');
const insta_element = document.getElementById('insta-number');
const word_element = document.getElementById('word');



let x_char_limit = 280;
let insta_char_limit = 160;




const charCounter = (e) => {
    char_element.innerHTML = e.target.value.length;
}


let space_length_number = 0;

const wordCounter = (e) => {
    let str = e.target.value;
    str = str.trim();

    if (str==='') {
        space_length_number = 0;
    } else if (str.indexOf(' ')=== -1) {
        space_length_number = 1;
    } else {
        const words = str.split(/\s+/);
        space_length_number = words.length;
    }
    word_element.innerText = space_length_number;
}




const twitterCounter = (e) => {
    twitter_element.innerHTML = x_char_limit - e.target.value.length;
    changeColor( e.target.value.length);
}

const instaCounter = (e) => {
    insta_element.innerHTML = insta_char_limit - e.target.value.length;
    changeInstaColor(e.target.value.length);
}

const changeColor = (count) => {
    if (count > 280) {
        twitter_element.classList.add('redcolor');
    } else {
        twitter_element.classList.remove('redcolor');
    }
}

const changeInstaColor = (count) => {
    if (count > 160) {
        insta_element.classList.add('redcolor');
    } else {
        insta_element.classList.remove('redcolor');
    }
}


textarea.addEventListener('input', (e) => {
    charCounter(e);
    twitterCounter(e);
    instaCounter(e);
    wordCounter(e);

})
