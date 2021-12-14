const artQuizStart = document.querySelector('.art-quiz');

function getRenderStartPage() { // Render start page

    clearInterval(timerID);
    artQuizStart.classList.remove('background_1'); 
    document.querySelector('.result').innerHTML = '';
    btnHome.classList.remove('visible_on');
    artQuizStart.innerHTML = `
    <div class="start_page">
        <div class="choosing_game">
            <div class="start_page_item1" id="game1">УГАДАЙ ХУДОЖНИКА</div>
            <div class="start_page_item2" id="game2">УГАДАЙ КАРТИНУ</div>
            <div class="start_page_item3" id="options">НАСТРОЙКИ</div>
        </div>       
    </div>
    `;
    
    function goToNext(event) { // Choose category or options
        
        if(event.target.classList.contains('start_page_item1')) {           
            getCategoriesArtistPage();           
        }
        if(event.target.classList.contains('start_page_item2')) {
            getCategoriesPicturesPage();
        }
        if(event.target.classList.contains('start_page_item3')) {                     
            getOptions();
        }       
    } 

    artQuizStart.addEventListener('click', goToNext);   
}

document.addEventListener('DOMContentLoaded', getRenderStartPage);