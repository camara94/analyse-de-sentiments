//https://www.bbc.com/afrique/monde-58816128
var datacenterMagazine = document.querySelectorAll('li')
h1 = document.querySelectorAll('h1')
var bbc = document.querySelectorAll('div')

facebookdown = { 
  avis: []
}

for(i=0; i < h1.length; i++) {
    if( h1[i] != undefined && h1[i].innerText.length>25) {
        facebookdown.avis.push(h1[i].innerText);
    }
    
}


for(i=0; i < bbc.length; i++) {
    if( bbc[i] != undefined && bbc[i].innerText.length>25) {
        facebookdown.avis.push(bbc[i].innerText);
    }
    
}


const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(facebookdown), "bbc.json", "text/plain");


lancerTelechargement()