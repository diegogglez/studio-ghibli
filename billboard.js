fetch('https://ghibliapi.herokuapp.com/films')
.then((films) => films.json())
.then((films) => renderBillboard(films));


const billboard$$ = document.createElement('div');
billboard$$.className = 'billboard';
document.body.appendChild(billboard$$);

function renderBillboard(films){
    console.log(films);

    for (const film of films) {
        const poster$$ = document.createElement('div');
        const titleSpanish$$ = document.createElement('h3');
        const titleJapanese$$ = document.createElement('h5');
        const image$$  = document.createElement('img');
        const info$$ = document.createElement('div')
        const description$$ = document.createElement('p'); 

         
        poster$$.className = 'poster';
        titleJapanese$$.className = 'titleJapanese';
        titleSpanish$$.className = 'titleSpanish';
        image$$.className = 'image';
        info$$.className = 'info';
        description$$.className = 'description';


        titleSpanish$$.textContent = film.title;
        titleJapanese$$.textContent = film.original_title;
        image$$.src = film.image;
        description$$.textContent = film.description;




        poster$$.appendChild(titleSpanish$$);
        poster$$.appendChild(titleJapanese$$);
        poster$$.appendChild(image$$);
        poster$$.appendChild(info$$);
        info$$.appendChild(description$$);
        billboard$$.appendChild(poster$$)
        
    }
}