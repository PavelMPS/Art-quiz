const btnHome=document.querySelector('.btn_home');

function getCategoriesArtistPage() { //Render 12 Categories Artists(game1)
    btnHome.classList.add('visible_on');   
    let content = '';
    let x = '';
    let y = '';
    let z = '';
    let score = '';
    for(let i = 1; i <= 12; i++) {
        if(artistCategory[i - 1].play) { //if category played change style and add button result
            z = 'green_shadow';
            score = `<button class="btn_score score_item${i - 1}">Результат</button>`;
            y = ' Прaвильных ответов: ' + artistCategory[i - 1].rightAnswers + '/' + 10;
        }else { //if category not played
            y = 'Вы еще не играли в эту категорию';
            score = '';
            z = '';
        }
        x = `
        <div class="categories_artist_item unit${i} ${z}">
            <h3 class="categories_non_pass">Категория ${i}</h3>  
            <p class="categories_subtitle">${y}</p> 
            ${score}    
        </div>
        `;    
        content += x;
    }
    artQuizStart.innerHTML = `
    <div class="categories_artist">
        <h2 class="category_artist_title">Выберите категорию:</h2>
        <div class="categories_artist_container">
            ${content}
        </div>        
    </div>
    `;
    const categoriesArtist = document.querySelector('.categories_artist');
    artQuizStart.addEventListener('click',getResultFunction);

    function getArtistGame(event) { // Choose Category 1-12
        for(let i = 0; i <= 12; i++) {
            if(event.target.classList.contains(`unit${i + 1}`)) {
                getQuestionsArtist(i + 1);
            }
        }      
    }
    function getResultFunction(event) { //Go to results
        for(let i = 0; i <= 12; i++) {
            if(event.target.classList.contains(`score_item${i - 1}`)) {
            getResult(i);
            }
        }
    }
    categoriesArtist.addEventListener('click', getArtistGame);
}

btnHome.addEventListener('click',getRenderStartPage);


