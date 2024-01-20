function afficherModal() {
    document.getElementById('modal').style.display = 'flex';
}
function afficherModal1() {
    document.getElementById('modal1').style.display = 'flex';
}
function afficherModal2() {
    document.getElementById('modal2').style.display = 'flex';
}

function afficherModal3() {
    document.getElementById('modal3').style.display = 'flex';
}

function afficherModal4() {
    document.getElementById('modal4').style.display = 'flex';
}

function afficherModal5() {
    document.getElementById('modal5').style.display = 'flex';
}

function fermerModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal1').style.display = 'none';
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('modal3').style.display = 'none';
    document.getElementById('modal4').style.display = 'none';
    document.getElementById('modal5').style.display = 'none';
    document.getElementById('modal6').style.display = 'none';
}

let NumberLeft = document.getElementsByClassName('number-left');
let NumberRight = document.getElementsByClassName('number-right');
let nmbr = document.querySelector('.number-quantity');

function augmenter() {
    let valeur = parseInt(nmbr.value, 10); // Convertir en nombre
    nmbr.value = valeur + 1;
    console.log(nmbr.value);
}

function diminuer() {
    let valeur = parseInt(nmbr.value, 10);
    if (valeur > 0) {
        nmbr.value = valeur - 1;
        console.log(nmbr.value);
    }
}
function transferer(){
    window.location.href = 'payments.html';
}

function afficherTailleEcran() {
    const largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const hauteurEcran = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(`Largeur de l'écran : ${largeurEcran}px`);
    // console.log(`Hauteur de l'écran : ${hauteurEcran}px`);
  }
  window.addEventListener('resize', afficherTailleEcran);
  let isNextContainerVisible = false;

  document.querySelector('.cta').addEventListener('click', function() {
      isNextContainerVisible = !isNextContainerVisible;
      if (isNextContainerVisible) {
          document.querySelector('.carousel-next-container').style.display = 'block';
          document.querySelector('.carousel-container').style.display = 'none';
      } else {
          document.querySelector('.carousel-next-container').style.display = 'none';
          document.querySelector('.carousel-container').style.display = 'block';
      }
  });
  
  document.querySelector('.cssbuttons-io-button').addEventListener('click', function() {
        document.querySelector('#modal').style.display ='none';
       

});

document.querySelector('.add-cart').addEventListener('click', function(){
    event.preventDefault();
      let a = document.querySelector('.contenu');
      let b = document.querySelector('.listeAchat');
      let c = document.querySelector('.contenu2');
         a.style.display = 'flex';
         b.style.display = 'flex';
         c.style.display = 'none';
});


