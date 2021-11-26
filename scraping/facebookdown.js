//https://www.facebook.com/hashtag/facebookdown
var doc = document.querySelectorAll('.kvgmc6g5')

facebookdown = { 
  avis: []
}

for(i=0; i < doc.length; i++) {
    if(doc[i] != undefined && doc[i].innerText.length>25) {
        facebookdown.avis.push(doc[i].innerText);
    }
    
}

const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(facebookdown ), "facebookdown1_1.json", "text/plain");


lancerTelechargement()