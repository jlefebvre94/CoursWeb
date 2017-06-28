//Je verifie dans la console que la page est chargée
$(document).ready(function(){
  console.log("la page est chargée");
});

//Clic sur le bouton envoyer du formulaire
$("#js-button-send").click(function(e){
  e.preventDefault() //permet de geler l'event

  //récuperation des valeurs des champs du formulaire
  var name = $("#nom").val();
  var salaire = $("#salaire").val();
  var poste = $("#poste").val();
  var manager = $("#manager").is(":checked");

/*
Verification des champs, si ils sont vide, on les secoues et on les entoure de rouge
puis on reinitialise au bout de 2 secondes
*/
  //Verification du champs nom
  if(name == ""){
    $("#nom").addClass("animated shake input--error");
    setTimeout(function(){
      $("#nom").removeClass("animated shake input--error");
    }
    ,2000);
  };

  //Verification du champs salaire
  if(salaire == ""){
    $("#salaire").addClass("animated shake input--error");
    setTimeout(function(){
      $("#salaire").removeClass("animated shake input--error");
    }
    ,2000);
  };

  //verification du champs poste
  if(poste == ""){
    $("#poste").addClass("animated shake input--error");
    setTimeout(function(){
      $("#poste").removeClass("animated shake input--error");
    }
    ,2000);
  };

  // on recupère les 2 parties du nom dans un tableau
  var tabNom = name.split(" ");
  if(tabNom.length > 2) {
    tabNom[1] = tabNom[1] + ' ' + tabNom[2];
  }

  //création de la variable utilisée pour indiqué si le personnel est manager ou non
  // par defaut, il ne l'est pas
  var valeurManager = "<i class=\"fa fa-times\" aria-hidden=\"true\" style=\"color:red\"></i>";
  //si il est manager on change l'icone
  if (manager == true ) {
    valeurManager = "<i class=\"fa fa-check\" aria-hidden=\"true\" style=\"color:green\"></i>";
  }

  //Ajout des lignes d'employés
  $("#table-employes").append(`<tr><td>${tabNom[1]}</td>
                                <td>${tabNom[0]}</td>
                                <td>${salaire}</td>
                                <td>${poste}</td>
                                <td>${valeurManager}</td>
                                <td><button type="button" class="js-delete">Supprimer</button></tr>`);
  //$(this).html("tu m'as cliqué"`);

  //Suppression de la ligne quand on clic sur le bouton supprimer
  $("#table-employes").on("click",".js-delete",function(){
    $(this).closest('tr').remove();
  });

});
