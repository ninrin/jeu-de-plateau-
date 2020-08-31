"use strict";

$(document).ready(function () {
  // instantation pour les 2 personnages
  var personnage1 = new Personnage("Madara", "Madara.jpg", '#gauche1', '#droite1', '#haut1', '#bas1', "#block1", "#attaque1");
  var personnage2 = new Personnage("Hashirama", "hashirama.jpg", '#gauche2', '#droite2', '#haut2', '#bas2', "#block2", "#attaque2"); // On appelle les methode de mise en placement et de déplacement des 2 joueurs.

  personnage1.set(personnage2);
  personnage2.set(personnage1);
  personnage1.deplacement(personnage2);
  personnage2.deplacement(personnage1); // insérer les points de vie et attaque par défaut des personnages

  $('#vie1').text(personnage1.vie);
  $('#vie2').text(personnage2.vie);
  $('#attaque1').text(personnage1.degat);
  $('#attaque2').text(personnage2.degat); // on cache les bouttons de combat/défense par défaut pour les 2 joueurs

  $("#fight1").hide();
  $("#defendre1").hide();
  $("#fight2").hide();
  $("#defendre2").hide(); //madara commence en cachant le block d'hashirama

  $("#block2").hide();
  $("#block1").show(); // mise en fin de tour, pour chaque boutton "passer son tour" correspondant.

  $("#turn1").click(function () {
    $("#block1").hide();
    $("#block2").show();
    $("#gauche2").show();
    $("#haut2").show();
    $("#droite2").show();
    $("#bas2").show();
    personnage2.nbMove = 0;
  });
  $("#turn2").click(function () {
    $("#block2").hide();
    $("#block1").show();
    $("#gauche1").show();
    $("#haut1").show();
    $("#droite1").show();
    $("#bas1").show();
    personnage1.nbMove = 0;
  }); // Définition des différentes actions, selon les bouttons cliquées

  $('#fight1, #defendre1, #fight2, #defendre2').click(function () {
    if (this.id == 'fight1') {
      personnage2.vie = personnage2.vie - personnage1.degat;
      $("#vie2").html(personnage2.vie);
      $("#fight1").hide();
      $("#defendre1").hide();
      $("#fight2").show();
      $("#defendre2").show();

      if (personnage2.vie <= 0) {
        // fin du jeu si...
        alert("Madara est le vainqeur!");
        $("#container").hide();
      }
    } else if (this.id == 'defendre1') {
      personnage1.vie = personnage1.vie + personnage2.degat / 2;
      $("#fight1").hide();
      $("#defendre1").hide();
      $("#fight2").show();
      $("#defendre2").show();
    } else if (this.id == 'fight2') {
      $("#vie1").html(personnage1.vie = personnage1.vie - personnage2.degat);
      $("#fight1").show();
      $("#defendre1").show();
      $("#fight2").hide();
      $("#defendre2").hide();

      if (personnage1.vie <= 0) {
        // fin du jeu si...
        alert('Hashirama est le vainqueur!');
        $("#container").hide();
      }
    } else if (this.id == 'defendre2') {
      personnage2.vie = personnage2.vie + personnage1.degat / 2;
      $("#fight1").show();
      $("#fight2").hide();
      $("#defendre2").hide();
    }
  });
});