'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');

  document.getElementById('tous').addEventListener('click', function(){
    afficherTous();
  });

  document.getElementById('li-tours').addEventListener('click', function(){
    afficherTous();
  });

  
  document.getElementById('tour1').addEventListener('click', function(){
    document.getElementById('menu').style.display = 'block';
    afficherTour1();
  });

  document.getElementById('li-tour1').addEventListener('click', function(){
    afficherTour1();
  });

  document.getElementById('tour2').addEventListener('click', function(){
    document.getElementById('menu').style.display = 'block';
    afficherTour2();
  });

  document.getElementById('li-tour2').addEventListener('click', function(){
    afficherTour2();
  });

  document.getElementById('tour3').addEventListener('click', function(){
    document.getElementById('menu').style.display = 'block';
    afficherTour3();
  });

  document.getElementById('li-tour3').addEventListener('click', function(){
    afficherTour3();
  });


  document.getElementById('li-tour4').addEventListener('click', function(){
    afficherTour4();
  });

  document.getElementById('tour4').addEventListener('click', function(){
    document.getElementById('menu').style.display = 'block';
    afficherTour4();
  });

  function afficherTous() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('matches-tour-1').style.display = 'block';
    document.getElementById('matches-tour-2').style.display = 'block';
    document.getElementById('matches-tour-3').style.display = 'block';
    document.getElementById('matches-tour-4').style.display = 'block';
    document.getElementById('parent1').style.display = 'block';
  }

  function afficherTour1() {
    activerli('li-tour1');
    activercol('matches-tour-1');
    document.getElementById('first-columns').style.width = '100%';
    document.getElementById('parent1').style.display = 'block';
  }

  function afficherTour2() {
    activerli('li-tour2');
    activercol('matches-tour-2');
    document.getElementById('first-columns').style.width = '100%';
    document.getElementById('parent1').style.display = 'block';

  }

  
  function afficherTour3() {
    activerli('li-tour3');
    activercol('matches-tour-3');
    document.getElementById('second-columns').style.width = '100%';
    document.getElementById('parent1').style.display = 'none';
  }

  
  function afficherTour4() {
    activerli('li-tour4');
    activercol('matches-tour-4');
    document.getElementById('second-columns').style.width = '100%';
    document.getElementById('parent1').style.display = 'none';
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
    console.log(tab[0]);
    document.getElementById(tab[0]).style.display = "block";
    for (let index = 1; index < tab.length; index++) {
      document.getElementById(tab[index]).style.display = "none";
    }
  }

  function verifiercol(col){
    let col1 = 'matches-tour-1';
    let col2 = 'matches-tour-2';
    let col3 = 'matches-tour-3';
    let col4 = 'matches-tour-4';
    
    switch(col) {
      case col1 : return [col1, col2, col3, col4]; break;
      case col2 : return [col2, col1, col3, col4]; break;
      case col3 : return [col3, col1, col2, col4]; break;
      case col4 : return [col4, col1, col2, col3]; break;
    }
  }
})  ;