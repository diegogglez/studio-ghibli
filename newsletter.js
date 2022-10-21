// Creo el div de cada noticia

const newsInfo = [
  {
    source: 'https://www.elsoldemexico.com.mx/metropoli/cdmx/celebra-el-37-aniversario-de-studio-ghibli-con-la-orquesta-de-camara-de-bellas-artes-9041517.html',
    imgLink: './assets/37Aniversario.jpg', 
    title: '37 aniversario con Cámara de Bellas Artes',
    text: 'Nada mejor que visitar al vecino llamado Totoro o viajar para una aventura con Chihiro gracias a la espectacular música que acompaña las producciones de Studios Ghibli y celebrar su 37 aniversario en la CDMX.'
  },
  {
    source: 'https://alfabetajuega.com/cine/este-es-el-significado-del-nombre-de-studio-ghibli',
    imgLink: './assets/miyazaki.jpg', 
    title: 'El significado del nombre de Studio Ghibli',
    text: 'El legendario Studio Ghibli se ha hecho un nombre familiar. Sin embargo, el origen de su nombre sigue siendo un misterio, pero dos teorías podrían explicarlo. Hayao Miyazaki ha decidido que el nombre de su estudio de animación refleje sus principios, aunque nunca se ha confirmado a ciencia cierta cuál es el verdadero origen, hay una gran posibilidad de que posea dos raíces.'
  },
  {
    source: 'https://www.ecartelera.com/noticias/asi-por-dentro-ghibli-park-parque-tematico-studio-ghibli-70890/',
    imgLink: './assets/studio-ghibli-park.jpeg', 
    title: 'Así es por dentro Ghibli Park', 
    text: 'Studio Ghibli es un estudio de cine famoso por crear algunos de los animes más reconocidos del sector, como es el caso de "Mi vecino Totoro", "El castillo ambulante" o "El viaje de Chihiro". La empresa cuenta con un museo a las afueras de Tokio que ha acogido a sus fans desde que se inauguró en 2001, pero ha decidido dar un paso más allá abriendo su propio parque temático.'
  }

]

const newsLetterContainer = document.querySelector('.newsletter-container');
for (let news of newsInfo) {
  const newsCard = document.createElement('div');
  const newsImg = document.createElement('img');
  const newsTitle = document.createElement('h2');
  const newsTextContainer = document.createElement('div');
  const newsText = document.createElement('p');
  const newsSource = document.createElement('a');

  newsCard.classList.add('news-card');
  newsTitle.classList.add('news-title');
  newsTextContainer.classList.add('text-container');
  newsText.classList.add('text');
  
  newsImg.src = news.imgLink;
  newsTitle.textContent = news.title;
  newsText.textContent = news.text;
  newsSource.href = news.source;
 
  newsCard.appendChild(newsImg);
  newsCard.appendChild(newsTitle);
  newsCard.appendChild(newsTextContainer);
  newsTextContainer.appendChild(newsText);
  newsSource.appendChild(newsCard)
  newsLetterContainer.appendChild(newsSource);
}



