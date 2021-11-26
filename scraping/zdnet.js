//https://www.zdnet.fr/actualites/voici-ce-qui-a-provoque-la-panne-de-facebook-et-instagram-et-whatsapp-39930251.htm
var zdnet = document.querySelectorAll('p')

facebookdown = { 
  avis: []
}

for(i=0; i < zdnet.length; i++) {
    if( zdnet[i] != undefined && zdnet[i].innerText.length>25) {
        facebookdown.avis.push(zdnet[i].innerText);
    }
    
}



const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(facebookdown ), "zdnet.json", "text/plain");


lancerTelechargement()