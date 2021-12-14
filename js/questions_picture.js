let counterP = 0;

function getQuestionsPicture(round, numberQ) { //Render question page for game1

    getSound(5);
    let index, timerID;
    if(numberQ) {
        index = numberQ;
    } else {
        index = round;
        index = (index - 1) * 10 + 120;
    }
    let arr = [];
    let arr1 = [];
    arr[0] = `<img src = "./assets/img/${index}.jpg" class="variants_picture answer${index}">`; 
    for(let i = 1; i < 4; i++) {
        let randNum = Math.round(Math.random() * (240 - 1) + 1);
        if(randNum === index) {
            if(randNum === 1) {
                randNum++;
            }
            if(randNum === 240) {
                randNum--;
            }
            randNum++;
        }
        arr[i] = `<img src = "./assets/img/${randNum}.jpg" class="variants_picture answer${randNum}">`;
    }
    
    arr1 = shuffle(arr);
    let sumAnswers = arr1.reduce((a, b) => {
        return a + b;
    })
    artQuizStart.innerHTML = `
    <div class="question_picture">
        <div class="title_container">
            <h2 class="picture_title">Какую картину написал ${images[index].author}?</h2>
            <div class="timer_line"></div>
        </div> 

        <div class="container_question_pictures">
        ${sumAnswers}
        </div>
                          
        <button class="btn_back_to_categoriesPicture">К категориям</button>     
    </div>
    `;
    let timerLine=document.querySelector('.timer_line');
        
    function timer(value) {  //Timer 

        timerID = setInterval(() => {
            if(value === 0) {
                clearInterval(timerID);
                getSound(3);
                getPictureInformation(round, index, false);
            }
            timerLine.innerHTML = value;
            value--
        }, 1000); 

    };

    if(options.timer) {
        timer(options.timerLevel);
    }
    const btnBackToCategoriesPicture = document.querySelector('.btn_back_to_categoriesPicture');

    function goToCategoriesPicture() { //Back to categories game1 + reset timer
        clearInterval(timerID);
        getCategoriesPicturesPage();
    }

   btnBackToCategoriesPicture.addEventListener('click', goToCategoriesPicture);
   const variantsQuestionPicture = document.querySelector('.container_question_pictures');
   index++;
   variantsQuestionPicture.addEventListener('click',getPictureAnswer);
   
    function getPictureAnswer(event) { //Render current answer window

        clearInterval(timerID);
        if(event.target.classList.contains('variants_picture')) {
            if(event.target.classList.contains(`answer${index - 1}`)) {
                counterP++;
                event.target.classList.add('border_green');
                storage[index - 1] = true;
                variantsQuestionPicture.removeEventListener('click', getPictureAnswer);
                getSound(2);
                getPictureInformation(round, index, true);
            }else {
                event.target.classList.add('border_red');
                storage[index-1] = false;
                variantsQuestionPicture.removeEventListener('click', getPictureAnswer);  
                getSound(3);  
                getPictureInformation(round, index, false);
            }
        }
    }
}

function getPictureInformation(round, numberQuestion, answer){ //Render modal temporaly result window  

    let answerToQuestion;
    if(answer) {
        answerToQuestion = 'правильно'; 
    }else {
        answerToQuestion = 'неправильно';
    }
    const temporaryResult = document.querySelector('.result');
    if(round * 10 + 120 === numberQuestion) {
        artistCategory[round - 1].play1 = true;
        artistCategory[round - 1].rightAnswers1 = counterP;
        temporaryResult.innerHTML = `
            <div class = "temporary_result">
                <h2 class = "title_modal">Поздравляю, Вы закончили ${round}-й раунд!</h2>
                <img class = "little_picture" src = "./assets/img/${numberQuestion - 1}.jpg">
                <p>Вы ответили на ${counterP}/10 вопросов</p>
                <button class = "btn_nextRoundP">Продолжить</button>
            </div>
        `;
        counterP = 0;
        getSound(4);
        const btnNextRoundP = document.querySelector('.btn_nextRoundP');
        btnNextRoundP.addEventListener('click', goToCategoriesP);
    }else {
        temporaryResult.innerHTML = `
        <div class="temporary_result">
            <h2 class="title_modal">Вы ответили ${answerToQuestion}!</h2>
            <img class="little_picture" src="./assets/img/${numberQuestion-1}.jpg">
            <p>Картина: ${images[numberQuestion - 1].name}</p>
            <p>Автор: ${images[numberQuestion - 1].author}</p>
            <button class = "btn_next">Продолжить</button>
        </div>
        `;
   
        const btnNext = document.querySelector('.btn_next');
        btnNext.addEventListener('click',getNextQuest);
    }

    function getNextQuest(event) { //Go to next question

        if(event.target.classList.contains('btn_next')) {
            const resultContainer = document.querySelector('.temporary_result');
            resultContainer.classList.add('fade_down');
            getQuestionsPicture(round,numberQuestion);
        }
        
    }

}

function goToCategoriesP(event) { //Back to categories game2

    if(event.target.classList.contains('btn_nextRoundP')) {
        const resultContainer = document.querySelector('.temporary_result');
        resultContainer.classList.add('fade_down');
        getCategoriesPicturesPage();
    }

}