function  getCategoriesPicturesPage() { // Render 12 Categories pictures(game2)
    btnHome.classList.add('visible_on');   
    let content = '';
    let x = '';
    let y = '';
    let z = '';
    let score = '';
    for(let i = 1; i <= 12; i++) {
        if(artistCategory[i - 1].play1) { //if category played change style and add button result
            z = 'green_shadow';
            score = `<button class="btn_score score_itemP${i - 1}">Результат</button>`;
            y = ' Прaвильных ответов: '+artistCategory[i - 1].rightAnswers1 + '/' + 10;
        }else { //if category not played
            y = 'Вы еще не играли в эту категорию';
            score = '';
            z = '';
        }
        x = `
        <div class="categories_artist_item unitP${i} ${z}">
            <h3 class="categories_non_pass">Категория ${i}</h3>  
            <p class="categories_subtitle">${y}</p> 
            ${score}    
        </div>
        `;    
        content += x;
    }
    artQuizStart.innerHTML = `
    <div class="categories_pictures">
        <h2 class="category_artist_title">Выберите категорию:</h2>
        <div class="categories_artist_container">
            ${content}
        </div>        
    </div>
    `;
    const categoriesPictures = document.querySelector('.categories_pictures');
    artQuizStart.addEventListener('click',getResultFunction);

    function getPictureGame(event) { // Choose Category 1-12
        for(let i = 0; i <= 12; i++) {
            if(event.target.classList.contains(`unitP${i + 1}`)) {
                getQuestionsPicture(i + 1);
            }
        }
    }

    function getResultFunction(event) { //Go to results
        for(let i = 0; i <= 12; i++) {
            if(event.target.classList.contains(`score_itemP${i - 1}`)) {
                getResultP(i);
            }
        }
    }

categoriesPictures.addEventListener('click', getPictureGame);
}
