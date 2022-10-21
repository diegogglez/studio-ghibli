// Creo el div de cada noticia

const newsInfo = [
  {imgLink: './assets/37Aniversario.jpg', title: 'Celebra el 37 aniversario con Cámara de Bellas Artes'},
  {imgLink: './assets/miyazaki.jpg', title: 'Celebra el 37 aniversario con Cámara de Bellas Artes'},
  {imgLink: './assets/studio-ghibli-park.jpeg', title: 'Celebra el 37 aniversario con Cámara de Bellas Artes'},

]

const newsLetterContainer = document.querySelector('.newsletter-container');
for (let news of newsInfo) {
  const newsContainer = document.createElement('div');
  const newsImgContainer = document.createElement('div');
  const newsImg = document.createElement('img');
  const newsTitle = document.createElement('h2');

  newsContainer.classList.add('news-card');
  newsTitle.classList.add('news-title');

  //const newsText = document.createElement('p');
  newsImg.src = news.imgLink;
  newsTitle.textContent = news.title;

  newsImgContainer.appendChild(newsImg);
  newsContainer.appendChild(newsImgContainer);
  newsContainer.appendChild(newsTitle);
  newsLetterContainer.appendChild(newsContainer);
  
}



