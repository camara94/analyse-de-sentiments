//https://datacenter-magazine.fr/panne-facebook-une-cascade-de-consequences/
var datacenterMagazine = document.querySelectorAll('li')
var para = document.querySelectorAll('p')

facebookdown = { 
  avis: []
}

for(i=0; i < para.length; i++) {
    if( para[i] != undefined && para[i].innerText.length>25) {
        facebookdown.avis.push(para[i].innerText);
    }
    
}


for(i=0; i < datacenterMagazine.length; i++) {
    if( datacenterMagazine[i] != undefined && datacenterMagazine[i].innerText.length>25) {
        facebookdown.avis.push(datacenterMagazine[i].innerText);
    }
    
}


const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(facebookdown), "datacenter_magazine.json", "text/plain");


lancerTelechargement()