import { nacrtajIDodajUListu, repaint } from './modul1.js'
import { pathFindingAlgoritam} from './modul2.js'
import {proveraVelicineTerena,isPocetakPostavljen, isCiljPostavljen} from  './modul3Provere.js'
import {repaintSaListenerima} from  './modul4Klikovi.js'
let visina=20;//staticke, sluze za dve funkcije
let sirina=40;//staticke, sluze za dve funkcije
let najkraciPutNiz1=[]//staticka
let brojacZaStop=0;
let timeout='';
function glavna(najkraciPutNiz){
  //    brojacZaStop=1;
       console.log('pokrenuta glavna funkcija sa algoritmom');
    timeout = setTimeout(function(){
    pathFindingAlgoritam(niz, najkraciPutNiz)
    repaint(visina, sirina, niz)
    glavna(najkraciPutNiz);
    },30)
    }

let niz=nacrtajIDodajUListu(visina,sirina);
 niz[365].pocetak=true;
 niz[395].cilj=true;
//niz[117].prepreka=true;

repaint(visina, sirina, niz)
let divStart=document.getElementById('startDiv');////////////pocetak postavljanja starta, cilja i prepreka
divStart.addEventListener('click', function(){

    repaint(visina, sirina, niz)
    repaintSaListenerima(visina, sirina, niz, divStart.title)
})
let divCilj=document.getElementById('ciljDiv');
divCilj.addEventListener('click', function(){
    repaint(visina, sirina, niz)
    repaintSaListenerima(visina, sirina, niz, divCilj.title)
})
let divPrepreka=document.getElementById('preprekaDiv');
divPrepreka.addEventListener('click', function(){
    repaint(visina, sirina, niz)
    repaintSaListenerima(visina, sirina, niz, divPrepreka.title)
})

let dugmeVisinaSirina=document.getElementById('dugmeVS');
dugmeVisinaSirina.innerText='Podesi velicinu terena'
dugmeVisinaSirina.addEventListener('click', function(){
       visina=document.getElementById('visina').value;   
       sirina=document.getElementById('sirina').value;
      if(proveraVelicineTerena(visina, sirina)){
      niz = nacrtajIDodajUListu(Number(visina), Number(sirina));
      
      }
})

let dugmezapokretanje=document.getElementById('dugmeZaPokretanje')
dugmezapokretanje.innerText='Pokreni'
dugmezapokretanje.addEventListener('click', function(){
    if(isPocetakPostavljen(niz)&&isCiljPostavljen(niz)){
    glavna(najkraciPutNiz1)      
    }else{
        alert('pocetak ili cilj nisu postavljeni')
    }
})
let dugmeStop=document.getElementById('stop');
dugmeStop.addEventListener('click',function(){
    console.log('12345');
  //  brojacZaStop=0;
    clearTimeout(timeout)
})
let dugmeOcisti=document.getElementById('ocisti');
dugmeOcisti.addEventListener('click', function(){

        clearTimeout(timeout)
        najkraciPutNiz1=[];
        niz=nacrtajIDodajUListu(visina,sirina);
        repaint(visina, sirina, niz);
 
    console.log('djipur');
})

