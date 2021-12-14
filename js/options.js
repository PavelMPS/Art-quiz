const optionPage = document.querySelector('.options_page');

function getOptions() {  // Render options page

    artQuizStart.innerHTML = `
    <div class="options_page">
        <h2 class="options_title">НАСТРОЙКИ:</h2>
        <div class="options_sound">
            <h3 class="options_subtitle">Звук:</h3>
            <div class="sound_container">
                <button class="btn_sound"></button>
                <input type="range" class="sound_bar" min="0" max="1" step=".05">
            </div>
        </div>
        <div class="options_time">
            <h3 class="options_subtitle">Игра на время:</h3>
            <div class="timer_container">
                <button class="btn_timer"></button>
                <input type="range" class="timer_bar" min="5" max="30" step="5" value="20">
                <div class="timer_watch">00:20</div>
            </div>
        </div>
        <button class="btn_save">СОХРАНИТЬ</button>
    </div>
    `
    const btnSave=document.querySelector('.btn_save');
    const btnSound=document.querySelector('.btn_sound');
    const btnTimer=document.querySelector('.btn_timer');
    let soundBar=document.querySelector('.sound_bar');
    let timerBar=document.querySelector('.timer_bar');

    if(options.play) { // Change sound style (on\off)
        document.querySelector('.btn_sound').classList.remove('sound_off');
        document.querySelector('.btn_sound').classList.add('sound_on');
    }else {
        document.querySelector('.btn_sound').classList.remove('sound_on');
        document.querySelector('.btn_sound').classList.add('sound_off');
    }

    if(options.timer) { // Change timer style (On\Off)
        document.querySelector('.btn_timer').classList.remove('timer_off');
        document.querySelector('.btn_timer').classList.add('timer_on');
    }else {
        document.querySelector('.btn_timer').classList.remove('timer_on');
        document.querySelector('.btn_timer').classList.add('timer_off');
    } 

    soundBar.value = options.soundLevel;
    timerBar.value = options.timerLevel;
    document.querySelector('.timer_watch').innerHTML = `00:${options.timerLevel}`;

    function changeSoundLevel() { // Change sound level 0-100
        options.soundLevel = soundBar.value;
    }

    function changeTimerLevel() { // Change timer time 5-30 second
        options.timerLevel = timerBar.value;
        document.querySelector('.timer_watch').innerHTML = `00:${timerBar.value}`;
    }   
    soundBar.addEventListener('change',changeSoundLevel);
    timerBar.addEventListener('change',changeTimerLevel);
    btnSave.addEventListener('click', getRenderStartPage);
    btnSound.addEventListener('click',changeSound);
    btnTimer.addEventListener('click',changeTimer);   
}

function changeTimer() { // On\Off timer

    if(options.timer) {
        options.timer = false;
        document.querySelector('.btn_timer').classList.remove('timer_on');
        document.querySelector('.btn_timer').classList.add('timer_off');
    }else {
        options.timer = true;
        document.querySelector('.btn_timer').classList.remove('timer_off');
        document.querySelector('.btn_timer').classList.add('timer_on');
    }       
}

function changeSound() { // On\Off sound

    if(options.play) {
        options.play = false;
        document.querySelector('.btn_sound').classList.remove('sound_on');
        document.querySelector('.btn_sound').classList.add('sound_off');
    }else {
        options.play = true;
        document.querySelector('.btn_sound').classList.remove('sound_off');
        document.querySelector('.btn_sound').classList.add('sound_on');
    }   
    getSound(1);
    
}

function getSound(sample) { // Play sound! 1-6 sounds
    if(options.play) {       
        let audio = new Audio();
        audio.preload = 'auto';
        audio.src = `./assets/sfx/${sample}.mp3`;
        audio.volume = options.soundLevel;
        audio.play();
    }  
}