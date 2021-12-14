let storage, artistCategory, options;

function setLocalStorage() {
    if(!localStorage.getItem('category')) {
        artistCategory = [
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
            {
                play: false,
                play1: false,
                rightAnswers: 0,
                rightAnswers1: 0,
            },
        ]
    }
    if(!localStorage.getItem('options')) {
        options = {
            play: false,
            timer: false,
            soundLevel: 0.5,
            timerLevel: 20,  
        }
    }
    localStorage.setItem('rightAnswers',JSON.stringify(storage));
    localStorage.setItem('category',JSON.stringify(artistCategory));
    localStorage.setItem('options',JSON.stringify(options));
}

function getLocalStorage() {
    if(localStorage.getItem('rightAnswers')) {
        storage = JSON.parse(localStorage.getItem('rightAnswers'));
        
    }else{
        storage = [
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,]; 
    }

    if(localStorage.getItem('category')) {
       artistCategory = JSON.parse(localStorage.getItem('category'));
    
    }else{
        artistCategory = [
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers:0,
            rightAnswers1:0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers:0,
            rightAnswers1:0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        {
            play: false,
            play1: false,
            rightAnswers: 0,
            rightAnswers1: 0,
        },
        ]
    }

    if(localStorage.getItem('options')) {
        options = JSON.parse(localStorage.getItem('options'));
    }else {
        options = {
        play: false,
        timer: false,
        soundLevel: 0.5,
        timerLevel: 20,  
        }
    }
    
}

window.addEventListener('beforeunload',setLocalStorage);
window.addEventListener('load',getLocalStorage);