let listeSon = [];
let choixDeTri = "Date";
let listeSonAlphabet = [];


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
    //trier(document.getElementById("form2"));

    //let section = document.getElementsByTagName('section')[1];
    //section.innerHTML += "<button id=\""+listeSon[listeSon.length-1].titre+"\" onclick=\"jouerUnSon("+listeSon[listeSon.length-1].titre+")\">" + listeSon[listeSon.length-1].titre + "</button><br>";
    //document.getElementById("boutonTitre").onClick = jouerUnSon;
    return false;
}

function jouerUnSon(titre){
    //console.log(this);
    //let audio = new Audio(titre.lien+'.mp3');
    //audio.play();
}

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

function valeurTri(form){
    choixDeTri = form.tri.value;
    trier();
}

function trier(){
    if(choixDeTri == "Date"){
        document.getElementsByTagName('section')[1].remove();
        var body = document.getElementsByTagName('body')[0];
        body.innerHTML += "<section id=\"affichage\"></section>"
        var section = document.getElementById("affichage");
        for(let i=0; i<listeSon.length; i++){
            //section.innerHTML += "<button id=\""+listeSon[i].titre+"\" onclick=\"jouerUnSon("+listeSon[i]+")\">" + listeSon[i].titre + "</button><br>";
            section.innerHTML += "<figure><figcaption>"+listeSon[i].titre+"</figcaption> <audio src=\""+listeSon[i].lien+"\" controls></audio></figure>";
            //section.innerHTML += "<figure><figcaption>"+listeSon[i].titre+"</figcaption> <audio src=\"audio/Cash - Caisse Enregistreuse - Copie.mp3\" controls></audio></figure>";
        }

    }
    if(choixDeTri == "Alphabet"){
        document.getElementsByTagName('section')[1].remove();
        var body = document.getElementsByTagName('body')[0];
        body.innerHTML += "<section id=\"affichage\"></section>"
        var section = document.getElementById("affichage");
        for(let i=0; i<listeSonAlphabet.length; i++){
            //section.innerHTML += "<button id=\""+listeSonAlphabet[i].titre+"\" onclick=\"jouerUnSon("+listeSonAlphabet[i]+")\">" + listeSonAlphabet[i].titre + "</button><br>";
            section.innerHTML += "<figure><figcaption>"+listeSonAlphabet[i].titre+"</figcaption> <audio src=\""+listeSonAlphabet[i].lien+"\" controls></audio></figure>";
        }
    }
    return false;
}



