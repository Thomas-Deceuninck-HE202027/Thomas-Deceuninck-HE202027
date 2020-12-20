let listeSon = [];
let choixDeTri = "Date";
let listeSonAlphabet = [];

/**
 * Récuperer les entrées du formulaire 1
 *
 * @author HE202027
 * @this (ajouterSonTabHtml)
 * @param (form)
 * @return false et ajoute un objet dans les 2 tableaux listeSon et listeSonAlphabet contenant les données du formulaire
 * et appelle la fonction "trier" pour finir
 * */
function ajouterSonTabHtml(form){
    for(let i=0;i<listeSon.length;i++){
        if (form.titre.value==listeSon[i].titre){alert ("titre de son déja utilisé");
            return false;}}
    let dernierSon = {titre:form.titre.value, lien:form.lien.value, raccourci:form.raccourci.value};
    listeSon.push(dernierSon);
    listeSonAlphabet.push(dernierSon);
    listeSonAlphabet.sort(function compare(a, b) {
        if (a.titre < b.titre) {return -1;}
        if (a.titre > b.titre) {return 1;}
        return 0;});
    trier();
    return false;
}

/**
 * Récuperer les entrées du formulaire 3
 *
 * @author HE202027
 * @this (retireSon)
 * @param (form)
 * @return false et retire un objet dans les 2 tableaux listeSon et listeSonAlphabet contenant les données du formulaire
 * et appelle la fonction "trier" pour finir
 * */
function retireSon(form){
    let j=0;
    for(let i=0; i<listeSon.length; i++){
        if(form.titre2.value==listeSon[i].titre){listeSon.splice(i,1);
        j=1;}
    }
    for(let i=0; i<listeSonAlphabet.length; i++){
        if(form.titre2.value==listeSonAlphabet[i].titre){listeSonAlphabet.splice(i,1);
            j=1;}
    }
    if (j==0){alert("titre non trouvé");}
    trier();
    return false;
}
/**
 * Récuperer les entrées du formulaire 2
 *
 * @author HE202027
 * @this (valeurTri)
 * @param (form)
 * @ change la valeur de la variable choixDeTri et appelle "trier"
 * */
function valeurTri(form){
    choixDeTri = form.tri.value;
    trier();
}
/**
 *
 * @author HE202027
 * @this (trier)
 * @param ()
 * @ efface la section html "affichage" et la recrée afin de la réécrire dynamiquement. on réécri les boutons audio permettant
 * de jouer les sons sur le site. ils sont recréer selon par ordre alphabéthique ou par date selon la valeur de choixDeTri.
 * */
function trier(){
    if(choixDeTri == "Date"){
        document.getElementsByTagName('section')[1].remove();
        var body = document.getElementsByTagName('body')[0];
        body.innerHTML += "<section id=\"affichage\"></section>"
        var section = document.getElementById("affichage");
        for(let i=0; i<listeSon.length; i++){
            section.innerHTML += "<figure><figcaption>"+listeSon[i].titre+"</figcaption> <audio src=\""+listeSon[i].lien+"\" controls></audio></figure>";
        }

    }
    if(choixDeTri == "Alphabet"){
        document.getElementsByTagName('section')[1].remove();
        var body = document.getElementsByTagName('body')[0];
        body.innerHTML += "<section id=\"affichage\"></section>"
        var section = document.getElementById("affichage");
        for(let i=0; i<listeSonAlphabet.length; i++){
            section.innerHTML += "<figure><figcaption>"+listeSonAlphabet[i].titre+"</figcaption> <audio src=\""+listeSonAlphabet[i].lien+"\" controls></audio></figure>";
        }
    }
    return false;
}



//trier(document.getElementById("form2"));

//let section = document.getElementsByTagName('section')[1];
//section.innerHTML += "<button id=\""+listeSon[listeSon.length-1].titre+"\" onclick=\"jouerUnSon("+listeSon[listeSon.length-1].titre+")\">" + listeSon[listeSon.length-1].titre + "</button><br>";
//document.getElementById("boutonTitre").onClick = jouerUnSon;


//function jouerUnSon(titre){
//console.log(this);
//let audio = new Audio(titre.lien+'.mp3');
//audio.play();
//}

//section.innerHTML += "<button id=\""+listeSon[i].titre+"\" onclick=\"jouerUnSon("+listeSon[i]+")\">" + listeSon[i].titre + "</button><br>";
//section.innerHTML += "<button id=\""+listeSonAlphabet[i].titre+"\" onclick=\"jouerUnSon("+listeSonAlphabet[i]+")\">" + listeSonAlphabet[i].titre + "</button><br>";
//section.innerHTML += "<figure><figcaption>"+listeSon[i].titre+"</figcaption> <audio src=\"audio/Cash - Caisse Enregistreuse - Copie.mp3\" controls></audio></figure>";
//section.innerHTML += "<button id=\""+listeSonAlphabet[i].titre+"\" onclick=\"jouerUnSon("+listeSonAlphabet[i]+")\">" + listeSonAlphabet[i].titre + "</button><br>";

