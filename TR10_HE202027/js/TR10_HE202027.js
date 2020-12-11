let listeSon = [];


function ajouterSonTabHtml(form){
    let dernierSon = {titre:form.titre.value, lien:form.lien.value, raccourci:form.raccourci.value};
    listeSon.push(dernierSon);
    console.log(listeSon);

    let section = document.getElementsByTagName('section')[1];
    section.innerHTML += "<button id=\"boutonTitre\">" + listeSon[listeSon.length-1].titre + "</button><br>";
    //document.getElementById("boutonTitre").onClick = jouerUnSon;
return false
}

function jouerUnSon(){


}


