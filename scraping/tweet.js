//https://twitter.com/kevinlimonier/status/1445130431704281092
//https://twitter.com/search?q=piratage%20facebook&src=typed_query&f=top
var tweets1 = document.querySelectorAll('.css-901oao')
var tweets2 = document.querySelectorAll('.css-1dbjc4n')

facebookdown = { 
  avis: []
}

for(i=0; i < tweets1.length; i++) {
    if(tweets1[i] != undefined && tweets1[i].innerText.length>25) {
        facebookdown.avis.push(tweets1[i].innerText);
    }
    
}

for(i=0; i < tweets2.length; i++) {
    if(tweets2[i] != undefined && tweets2[i].innerText.length>25) {
        facebookdown.avis.push(tweets2[i].innerText);
    }
    
}

const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(facebookdown ), "tweets.json", "text/plain");


lancerTelechargement()