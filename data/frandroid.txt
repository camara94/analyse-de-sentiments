https://www.frandroid.com/android/1085647_voici-ce-qui-a-cause-la-panne-massive-de-facebook-instagram-et-whatsapp#:~:text=Facebook%20indique%20ainsi%20que%20sa,diff%C3%A9rents%20serveurs%20du%20groupe%20am%C3%A9ricain.
var frandroid = document.querySelectorAll('p')

facebookdown = { 
  avis: []
}

for(i=0; i < frandroid.length; i++) {
    if( frandroid[i] != undefined && frandroid[i].innerText.length>25) {
        facebookdown.avis.push(frandroid[i].innerText);
    }
    
}



const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(facebookdown), "frandroid.json", "text/plain");


lancerTelechargement()