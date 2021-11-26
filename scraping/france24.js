//https://www.france24.com/fr/%C3%A9co-tech/20211004-panne-mondiale-pour-facebook-instagram-whatsapp-et-messenger
var france24 = document.querySelectorAll('p')

facebookdown = { 
  avis: []
}

for(i=0; i < france24.length; i++) {
    if(france24[i] != undefined && france24[i].innerText.length>25) {
        facebookdown.avis.push(france24[i].innerText);
    }
    
}



const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(facebookdown ), "france24.json", "text/plain");


lancerTelechargement()