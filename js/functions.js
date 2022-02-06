'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');

  document.getElementById('tous').addEventListener('click', function(){
    cacherTous();
    afficherTous();
  });

  document.getElementById('li-tours').addEventListener('click', function(){
    cacherTous();
    afficherTous();
  });
  
  document.getElementById('tour1').addEventListener('click', function(){
    cacherTous();
    activerli('li-tour1');
    afficherTour('col-tour-1');
  });

  document.getElementById('li-tour1').addEventListener('click', function(){
    cacherTous();
    activerli('li-tour1');
    afficherTour('col-tour-1');    
  });

  document.getElementById('tour2').addEventListener('click', function(){
    cacherTous();
    activerli('li-tour2');
    afficherTour('col-tour-2');
  });

  document.getElementById('li-tour2').addEventListener('click', function(){
    cacherTous();
    activerli('li-tour2');
    afficherTour('col-tour-2');
  });

  document.getElementById('tour3').addEventListener('click', function(){
    cacherTous();
    activerli('li-tour2');
    afficherTour('col-tour-3');
  });

  document.getElementById('li-tour3').addEventListener('click', function(){
    cacherTous();
    activerli('li-tour3');
    afficherTour('col-tour-3');
  });


  document.getElementById('li-tour4').addEventListener('click', function(){
    cacherTous();
    activerli('li-tour4');
    afficherTour('col-tour-4');
  });

  document.getElementById('tour4').addEventListener('click', function(){
    cacherTous();
    activerli('li-tour4');
    afficherTour('col-tour-4');
  });

  function afficherTous() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('matches-tour-1').style.display = 'block';
    document.getElementById('matches-tour-2').style.display = 'block';
    document.getElementById('matches-tour-3').style.display = 'block';
    document.getElementById('matches-tour-4').style.display = 'block';
    document.getElementById('first-columns').style.display = 'flex';
    document.getElementById('second-columns').style.display = 'flex';
    document.getElementById('parent1').style.display = 'block';
    document.getElementById('all-matches').style.display = 'block';
    document.getElementById('tours_title').style.display = 'block';
    document.getElementById('tours-subtitle').style.display = 'block';
  }

  function afficherTour(nom) {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('all-matches').style.display = 'block';
    document.getElementById('tours_title').style.display = 'block';
    document.getElementById('tours-subtitle').style.display = 'block';
    document.getElementById('first-columns-par-tours').style.display = 'flex';
    activercol(nom);
    document.getElementById('first-columns-par-tours').style.width = '100%';
  }

  function activerli(active) {
    
    let tab = verifierli(active);

    document.getElementById(tab[0]).setAttribute('class', 'is-active');
    for (let index = 1; index < tab.length; index++) {
      document.getElementById(tab[index]).removeAttribute('class', 'is-active');
    }
  }

  function verifierli(li){ 
    let li0 = 'li-tours';
    let li1 = 'li-tour1';
    let li2 = 'li-tour2';
    let li3 = 'li-tour3';
    let li4 = 'li-tour4';
    
    switch(li) {
      case li0 : return [li0, li1, li2, li3, li4]; break;
      case li1 : return [li1, li0, li2, li3, li4]; break;
      case li2 : return [li2, li1, li0, li3, li4]; break;
      case li3 : return [li3, li1, li2, li0, li4]; break;
      case li4 : return [li4, li1, li2, li3, li0]; break;
    }
  }

  function activercol(active) {
    let tab = verifiercol(active);
    //console.log(tab[0]);
    document.getElementById(tab[0]).style.display = "block";
    for (let index = 1; index < tab.length; index++) {

      document.getElementById(tab[index]).style.display = "none";
    }
  }

  function verifiercol(col){
    let col1 = 'col-tour-1';
    let col2 = 'col-tour-2';
    let col3 = 'col-tour-3';
    let col4 = 'col-tour-4';
    
    switch(col) {
      case col1 : return [col1, col2, col3, col4]; break;
      case col2 : return [col2, col1, col3, col4]; break;
      case col3 : return [col3, col1, col2, col4]; break;
      case col4 : return [col4, col1, col2, col3]; break;
    }
  }

  function cacherTous() {
    document.getElementById('first-columns').style.display = 'none';
    document.getElementById('second-columns').style.display = 'none';
    document.getElementById('first-columns-par-tours').style.display = 'none';
    cacherPagesSepares();
  }

  function cacherPagesSepares() {
    document.getElementById('equipe_scotland').style.display = 'none';
    document.getElementById('equipe_scotland').style.display = 'none';
    document.getElementById('tours-subtitle-ec').style.display = 'none';
    document.getElementById('tours_title_equipe').style.display = 'none';
    document.getElementById('article_equipe_scot_last').style.display = 'none';
  }

  // PAGES EQUIPES
  document.getElementById('e-ecosse').addEventListener('click', function(){
      afficherPresentationEquipe();
  });
  
  document.getElementById('e-angleterre').addEventListener('click', function(){
      afficherPresentationEquipe();
  });

  document.getElementById('e-france').addEventListener('click', function(){
      afficherPresentationEquipe();
  });

  document.getElementById('e-irlande').addEventListener('click', function(){
      afficherPresentationEquipe();
  });

  document.getElementById('e-italie').addEventListener('click', function(){
      afficherPresentationEquipe();
  });

  document.getElementById('e-pays-galles').addEventListener('click', function(){
      afficherPresentationEquipe();
  });

  function afficherPresentationEquipe() {
    cacherTous();
    document.getElementById('tours_title').style.display = 'none';
    document.getElementById('tours-subtitle').style.display = 'none';
    document.getElementById('all-matches').style.display = 'none';
    document.getElementById('tours_title_equipe').style.display = 'block';
    document.getElementById('tours-subtitle-ec').style.display = 'block';
    document.getElementById('equipe_scotland').style.display = 'block';
    document.getElementById('capitaines_scot').style.display = 'block';
    document.getElementById('article_equipe_scot_last').style.display = 'block';
  }
})  ;

