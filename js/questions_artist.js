let counter = 0;
let timerID;

function getQuestionsArtist(round, numberQ) {//Render question page for game1

    getSound(5);
    let index;
    if(numberQ) {
        index = numberQ;
    }else {
        index = round;
        index = (index - 1) * 10;
    }  
    let arr = []; 
    let arr1 = [];
    arr[0] = images[index].author;
    for(let i = 1; i < 200; i++) {
        if(arr.length === 4) {break};
           let randNum = Math.round(Math.random() * (240 - 1) + 1);
        if(arr.includes(images[randNum].author)) {continue};
        if(randNum === 1) {
            randNum++;
        }
        if(randNum === 240) {
           randNum--;
        }
        arr.push(images[randNum].author);
    }

    for(let j = 0; j < 4; j++) {
        arr[j] = `<div class="variants_item answer${j}">${arr[j]}</div>`
    }
    arr1 = shuffle(arr);
    let sumAnswers = arr1.reduce((a, b) => {
        return a + b;
    })
   
    artQuizStart.innerHTML = `
    <div class="question_artist">

        <div class="title_container">
            <h2 class="picture_title">Кто автор этой картины?</h2>
            <div class="timer_line"></div>
        </div>
        
        <div class="question_artist">
            <div class="painting_container"></div>
            <div class="variants_questions">
            ${sumAnswers}
            </div>
        </div> 

        <button class="btn_back_to_categories">К категориям</button>  

    </div>
    `;
    let timerLine = document.querySelector('.timer_line');   

    function timer(value) { //Timer
        timerID = setInterval(() => {
            if(value === 0) {
                clearInterval(timerID);
                getSound(3);
                getArtistInformation(round, index, false);
            }
            timerLine.innerHTML = value;
            value--
        }, 1000);
    };

    if(options.timer) {
        timer(options.timerLevel);
    }
    const btnBackToCategories = document.querySelector('.btn_back_to_categories');
    
    let painting = document.querySelector('.painting_container');
    painting.style.backgroundImage = `url('./assets/full/${index}full.jpg')`;
    index++;
    const variantsQuestion = document.querySelector('.variants_questions');

    function getArtistAnswer(event) { //Render current answer window
        clearInterval(timerID);
        if(event.target.classList.contains('variants_item')) {
            if(event.target.classList.contains('answer0')) {
                counter++;
                event.target.style.background = 'green';
                storage[index - 1] = true;
                variantsQuestion.removeEventListener('click',getArtistAnswer);
                getSound(2);
                getArtistInformation(round, index, true); 
            }else {
                event.target.style.background = 'red';
                storage[index - 1] = false;
                variantsQuestion.removeEventListener('click', getArtistAnswer); 
                getSound(3);   
                getArtistInformation(round, index, false);
            }
        }     
    }

    function goToCategoriesArtist() { //Back to categories game1 + reset timer
        clearInterval(timerID);
        getCategoriesArtistPage();
    }

    variantsQuestion.addEventListener('click',getArtistAnswer);
    btnBackToCategories.addEventListener('click',goToCategoriesArtist);
}

function getArtistInformation(round, numberQuestion, answer) {
    let answerToQuestion;
    if(answer) {
        answerToQuestion='правильно'; 
    }else {
        answerToQuestion='неправильно';
    }
  
    const temporaryResult = document.querySelector('.result');
    if(round * 10 === numberQuestion) {
        artistCategory[round - 1].play = true;
        artistCategory[round - 1].rightAnswers = counter;
        temporaryResult.innerHTML = `
        <div class="temporary_result">
            <h2 class="title_modal">Поздравляю, Вы закончили ${round}-й раунд!</h2>
            <img class="little_picture" src="./assets/img/${numberQuestion-1}.jpg">
            <p>Вы ответили на ${counter}/10 вопросов</p>
            <button class="btn_nextRound">Продолжить</button>
        </div>
        `;
        counter = 0;
        getSound(4);
        const btnNextRound=document.querySelector('.btn_nextRound');
        btnNextRound.addEventListener('click',goToCategories);
    }else {
        temporaryResult.innerHTML=`
        <div class="temporary_result">
            <h2 class="title_modal">Вы ответили ${answerToQuestion}!</h2>
            <img class="little_picture" src="./assets/img/${numberQuestion - 1}.jpg">
            <p>Картина: ${images[numberQuestion - 1].name}</p>
            <p>Автор: ${images[numberQuestion - 1].author}</p>
            <button class="btn_next">Продолжить</button>
        </div>
        `;
     
        const btnNext=document.querySelector('.btn_next');
        btnNext.addEventListener('click',getNextQuest);
    }

    function getNextQuest(event) { //Go to next question game 1

        if(event.target.classList.contains('btn_next')) {
        const resultContainer = document.querySelector('.temporary_result');
        resultContainer.classList.add('fade_down');
        getQuestionsArtist(round, numberQuestion);
        }

    }
    
}

function goToCategories(event) { //Back to categories game 1

    if(event.target.classList.contains('btn_nextRound')) {
        const resultContainer = document.querySelector('.temporary_result');
        resultContainer.classList.add('fade_down');
        getCategoriesArtistPage();
    }

}

function shuffle(array) { 

    return array.sort(() => Math.random() - 0.5);

}