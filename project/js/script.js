
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelectorAll('.promo__adv img');
const bg = document.querySelector('.promo__bg');
const genre = bg.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');
const addForm = document.querySelector('form.add');
const addInput = document.querySelector('.adding__input');
const checkbox = document.querySelector('[type="checkbox"]');



addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favourite = checkbox.checked;
 
    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        movieDB.movies.push(newFilm);
        sortArray(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
    }

        if(favourite) {
            console.log('Добавляем любимый фильм');
        }

    event.target.reset();

});



const deleteAdv = (arr) => {
    adv.forEach(item => {
        item.remove();
    });
};

deleteAdv(adv);



const makeChanges = () => {
    genre.textContent = 'ФАНТАСТИКА';

    bg.style.backgroundImage = "url('img/bg.jpg')";
};

makeChanges();




const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const sortArray = (arr) => {
    arr.sort();

};



function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArray(films);

    films.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
});

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
        });
    });
}

createMovieList(movieDB.movies, movieList);



});
