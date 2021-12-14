function getResult(categoryNumber) { //Render result page artist (game1)

    document.querySelector('.result').innerHTML = '';
    let summPictures = '';
    let picture, monoStyle;
    let i = (categoryNumber - 1) * 10;
    let z = i + 9;
    for(i; i <= z; i++) {
        if(storage[i]) {
            monoStyle = ''
        } else{monoStyle = 'mono_style'};
        picture = `
            <img class="result_img ${monoStyle} img${i}" src="./assets/img/${i}.jpg">
        `;
        summPictures += picture;
    }
    artQuizStart.innerHTML = `
    <div class="results_page">
        <h2 class="results_title">РЕЗУЛЬТАТЫ<h2>
        <h3>Категория ${categoryNumber}</h3>
        <div class="results_pictures">
            ${summPictures}
            <button class="btn_back_to_categories">К категориям</button> 
            <div class="information_artist"></div>
        </div>
    </div>
    `;
    const resultArtist = document.querySelector('.results_pictures');
    const btnBackToCategories = document.querySelector('.btn_back_to_categories');

    function getInfoArtist(event) {

        if(event.target.classList.contains('result_img')) {
            for(let i = 0; i < 12; i++) {
                if(event.target.classList.contains(`img${(categoryNumber - 1) * 10 + i}`)) {
                getInfoAboutPicture(i);
                }
            }
        }  

    }

    function getInfoAboutPicture(number) { // Get information about picture

        number = (categoryNumber - 1) * 10 + number;
        let informationWindowArtist = document.querySelector('.information_artist');
        informationWindowArtist.innerHTML = `
        <div class="info_window_artist">
            <p>Картина: ${images[number].name}</p>
            <p>Автор: ${images[number].author}</p>
            <p>Год написания: ${images[number].year}</p>
        </div>
        `;

    }

    btnBackToCategories.addEventListener('click', getCategoriesArtistPage);
    resultArtist.addEventListener('click', getInfoArtist);
}

function getResultP(categoryNumber) { //Render result page pictures (game2)
    document.querySelector('.result').innerHTML = '';
    let summPictures = '';
    let picture, monoStyle;
    let i = (categoryNumber - 1) * 10 + 120;
    let z = i + 9;
    for(i; i <= z; i++) {
        if(storage[i]) {
            monoStyle = ''
        }else{monoStyle = 'mono_style'};
        picture = `
            <img class="result_img ${monoStyle} img${i}"  src="./assets/img/${i}.jpg">
        `;
        summPictures += picture;
    }
    artQuizStart.innerHTML = `
    <div class="results_page">
        <h2 class="results_title">РЕЗУЛЬТАТЫ<h2>
        <h3>Категория ${categoryNumber}</h3>
        <div class="results_pictures">
            ${summPictures}
            <button class="btn_back_to_categoriesPicture">К категориям</button> 
            <div class="information_artist"></div>
        </div>
    </div>
    `;
    const btnBackToCategoriesPicture = document.querySelector('.btn_back_to_categoriesPicture');
    const resultArtist = document.querySelector('.results_pictures');

    function getInfoArtist(event) { 

        if(event.target.classList.contains('result_img')) {
            for(let i = 0; i < 12; i++) {
                if(event.target.classList.contains(`img${(categoryNumber - 1) * 10 + i + 120}`)) {
                    getInfoAboutPicture(i);
                }
            }
        } 

    }
 
    function getInfoAboutPicture(number) { // Get information about picture

        number = (categoryNumber - 1) * 10 + number;
        let informationWindowArtist = document.querySelector('.information_artist');
        informationWindowArtist.innerHTML = `
        <div class="info_window_artist">
            <p>Картина: ${images[number + 120].name}</p>
            <p>Автор: ${images[number + 120].author}</p>
            <p>Год написания: ${images[number + 120].year}</p>
        </div>
        `;

    }
    
    resultArtist.addEventListener('click', getInfoArtist);
    btnBackToCategoriesPicture.addEventListener('click', getCategoriesPicturesPage);
}