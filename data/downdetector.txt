//https://downdetector.fr/statut/facebook/

var downdetector = document.querySelectorAll('p')

facebookdown = { 
  avis: []
}

for(i=0; i < downdetector.length; i++) {
    if( downdetector[i] != undefined && downdetector[i].innerText.length>25) {
        facebookdown.avis.push(downdetector[i].innerText);
    }
    
}



const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(facebookdown), "downdetector.json", "text/plain");


lancerTelechargement()