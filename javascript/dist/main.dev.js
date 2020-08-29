"use strict";

$(document).ready(function () {
  // insérer les points de vie et attaque par défaut des personnages
  $('#vie1').text(personnage1.vie);
  $('#vie2').text(personnage2.vie);
  $('#attaque1').text(personnage1.degat);
  $('#attaque2').text(personnage2.degat); // on cache les bouttons de combat par défaut

  $("#fight1").hide();
  $("#defendre1").hide();
  $("#fight2").hide();
  $("#defendre2").hide(); // nombres de mouvement au deux joueurs

  var nbMove = 0;
  var nbMove2 = 0; //madara commence

  $("#block2").hide();
  $("#block1").show(); //fonction pour toucher l'arme sur la case et bénéficier de sa puissance, tout en remettant le nouveau numéro de l'ancienne arme possédée sur le case.

  function remplacement(nouvelleCase, defPerso, defBoutton, weapon1, weapon2, weapon3, weapon4) {
    if (casesTotale[nouvelleCase].numeroweapon === weapon1.numeroweapon && defPerso.degat == weapon2.dmg) {
      defPerso.degat = weapon1.dmg;
      casesTotale[nouvelleCase].numeroweapon = weapon2.numeroweapon;
      $(defBoutton).html(defPerso.degat);
    } else if (casesTotale[nouvelleCase].numeroweapon === weapon1.numeroweapon && defPerso.degat == weapon3.dmg) {
      defPerso.degat = weapon1.dmg;
      casesTotale[nouvelleCase].numeroweapon = weapon3.numeroweapon;
      $(defBoutton).html(defPerso.degat);
    } else if (casesTotale[nouvelleCase].numeroweapon === weapon1.numeroweapon && defPerso.degat == weapon4.dmg) {
      defPerso.degat = weapon1.dmg;
      casesTotale[nouvelleCase].numeroweapon = weapon4.numeroweapon;
      $(defBoutton).html(defPerso.degat);
    } else if (casesTotale[nouvelleCase].numeroweapon === weapon1.numeroweapon && defPerso.degat == 10) {
      defPerso.degat = weapon1.dmg;
      $(defBoutton).html(defPerso.degat);
      casesTotale[nouvelleCase].numeroweapon = null;
    } // guan dao
    else if (casesTotale[nouvelleCase].numeroweapon === weapon2.numeroweapon && defPerso.degat == weapon1.dmg) {
        defPerso.degat = weapon2.dmg;
        casesTotale[nouvelleCase].numeroweapon = weapon1.numeroweapon;
        $(defBoutton).html(defPerso.degat);
      } else if (casesTotale[nouvelleCase].numeroweapon === weapon2.numeroweapon && defPerso.degat == weapon3.dmg) {
        defPerso.degat = weapon2.dmg;
        casesTotale[nouvelleCase].numeroweapon = weapon3.numeroweapon;
        $(defBoutton).html(defPerso.degat);
      } else if (casesTotale[nouvelleCase].numeroweapon === weapon2.numeroweapon && defPerso.degat == weapon4.dmg) {
        defPerso.degat = weapon2.dmg;
        casesTotale[nouvelleCase].numeroweapon = weapon4.numeroweapon;
        $(defBoutton).html(defPerso.degat);
      } else if (casesTotale[nouvelleCase].numeroweapon === weapon2.numeroweapon && defPerso.degat == 10) {
        defPerso.degat = weapon2.dmg;
        $(defBoutton).html(defPerso.degat);
        casesTotale[nouvelleCase].numeroweapon = null;
      } // parchemin explosif
      else if (casesTotale[nouvelleCase].numeroweapon === weapon3.numeroweapon && defPerso.degat == weapon1.dmg) {
          defPerso.degat = weapon3.dmg;
          casesTotale[nouvelleCase].numeroweapon = weapon1.numeroweapon;
          $(defBoutton).html(defPerso.degat);
        } else if (casesTotale[nouvelleCase].numeroweapon === weapon3.numeroweapon && defPerso.degat == weapon2.dmg) {
          defPerso.degat = weapon3.dmg;
          casesTotale[nouvelleCase].numeroweapon = weapon2.numeroweapon;
          $(defBoutton).html(defPerso.degat);
        } else if (casesTotale[nouvelleCase].numeroweapon === weapon3.numeroweapon && defPerso.degat == weapon4.dmg) {
          defPerso.degat = weapon3.dmg;
          casesTotale[nouvelleCase].numeroweapon = weapon4.numeroweapon;
          $(defBoutton).html(defPerso.degat);
        } else if (casesTotale[nouvelleCase].numeroweapon === weapon3.numeroweapon && defPerso.degat == 10) {
          defPerso.degat = weapon3.dmg;
          $(defBoutton).html(defPerso.degat);
          casesTotale[nouvelleCase].numeroweapon = null;
        } // épée kusanagi
        else if (casesTotale[nouvelleCase].numeroweapon === weapon4.numeroweapon && defPerso.degat == weapon1.dmg) {
            defPerso.degat = weapon4.dmg;
            casesTotale[nouvelleCase].numeroweapon = weapon1.numeroweapon;
            $(defBoutton).html(defPerso.degat);
          } else if (casesTotale[nouvelleCase].numeroweapon === weapon4.numeroweapon && defPerso.degat == weapon2.dmg) {
            defPerso.degat = weapon4.dmg;
            casesTotale[nouvelleCase].numeroweapon = weapon2.numeroweapon;
            $(defBoutton).html(defPerso.degat);
          } else if (casesTotale[nouvelleCase].numeroweapon === weapon4.numeroweapon && defPerso.degat == weapon3.dmg) {
            defPerso.degat = weapon4.dmg;
            casesTotale[nouvelleCase].numeroweapon = weapon3.numeroweapon;
            $(defBoutton).html(defPerso.degat);
          } else if (casesTotale[nouvelleCase].numeroweapon === weapon4.numeroweapon && defPerso.degat == 10) {
            defPerso.degat = weapon4.dmg;
            $(defBoutton).html(defPerso.degat);
            casesTotale[nouvelleCase].numeroweapon = null;
          }
  }

  ; // fonction permettant d'afficher une image de l'arme portée, à l'ancienne case, et affiche l'image du personnage pour la case suivante (nouvelleCase)

  function letDown(weaponNb, weaponNb2, weaponNb3, weaponNb4, imageWeapon, imageWeapon2, imageWeapon3, imageWeapon4, nouvelleCase, ancienneCase, personnageId, playerImage) {
    if (casesTotale[ancienneCase].numeroweapon === weaponNb.numeroweapon && casesTotale[nouvelleCase].id !== "obstacle") {
      casesTotale[ancienneCase].id = "weapon";
      casesTotale[nouvelleCase].id = personnageId.name;
      var image = new Image();
      image.src = imageWeapon;
      image.addEventListener('load', function () {
        ;
        context.drawImage(image, casesTotale[ancienneCase].positionX, casesTotale[ancienneCase].positionY, tailleCase, tailleCase);
      }, false);
      var imagePlayer = new Image();
      imagePlayer.src = playerImage;
      imagePlayer.addEventListener('load', function () {
        ;
        context.drawImage(imagePlayer, casesTotale[nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
      }, false);
      return image;
    } else if (casesTotale[ancienneCase].numeroweapon === weaponNb2.numeroweapon && casesTotale[nouvelleCase].id !== "obstacle") {
      casesTotale[ancienneCase].id = "weapon";
      casesTotale[nouvelleCase].id = personnageId.name;
      var image = new Image();
      image.src = imageWeapon2;
      image.addEventListener('load', function () {
        ;
        context.drawImage(image, casesTotale[ancienneCase].positionX, casesTotale[ancienneCase].positionY, tailleCase, tailleCase);
      }, false);

      var _imagePlayer = new Image();

      _imagePlayer.src = playerImage;

      _imagePlayer.addEventListener('load', function () {
        ;
        context.drawImage(_imagePlayer, casesTotale[nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
      }, false);

      return image;
    } else if (casesTotale[ancienneCase].numeroweapon === weaponNb3.numeroweapon && casesTotale[nouvelleCase].id !== "obstacle") {
      casesTotale[ancienneCase].id = "weapon";
      casesTotale[nouvelleCase].id = personnageId.name;
      var image = new Image();
      image.src = imageWeapon3;
      image.addEventListener('load', function () {
        ;
        context.drawImage(image, casesTotale[ancienneCase].positionX, casesTotale[ancienneCase].positionY, tailleCase, tailleCase);
      }, false);

      var _imagePlayer2 = new Image();

      _imagePlayer2.src = playerImage;

      _imagePlayer2.addEventListener('load', function () {
        ;
        context.drawImage(_imagePlayer2, casesTotale[nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
      }, false);

      return image;
    } else if (casesTotale[ancienneCase].numeroweapon === weaponNb4.numeroweapon && casesTotale[nouvelleCase].id !== "obstacle") {
      casesTotale[ancienneCase].id = "weapon";
      casesTotale[nouvelleCase].id = personnageId.name;
      var image = new Image();
      image.src = imageWeapon4;
      image.addEventListener('load', function () {
        ;
        context.drawImage(image, casesTotale[ancienneCase].positionX, casesTotale[ancienneCase].positionY, tailleCase, tailleCase);
      }, false);

      var _imagePlayer3 = new Image();

      _imagePlayer3.src = playerImage;

      _imagePlayer3.addEventListener('load', function () {
        ;
        context.drawImage(_imagePlayer3, casesTotale[nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
      }, false);

      return image;
    }
  } // fonction de déplacement pour le personnage Madara


  function deplacement(nb, nb2, boutton, hide, hide2, hide3) {
    $(boutton).click(function () {
      if (nbMove > 2) {
        $("#block2").show();
        $("#block1").hide();
        $("#gauche2").show();
        $("#haut2").show();
        $("#droite2").show();
        $("#bas2").show();
        nbMove2 = 0;
        return;
      } // cacher les 3 autres bouttons, une fois la 1ère cliqué


      $(hide).hide();
      $(hide2).hide();
      $(hide3).hide(); //redéfinition des nouvelles caractéristiques 

      var nouvelleCase = personnage1.Case - nb;
      var ancienneCase = nouvelleCase + nb2;
      var caseMadara = casesTotale[nouvelleCase].numerocase;
      personnage1.Case = nouvelleCase;
      console.log(ancienneCase);
      console.log(personnage1);
      console.log(personnage1.Case);
      console.log(casesTotale);
      remplacement(nouvelleCase, personnage1, "#attaque1", weapon1, weapon2, weapon3, weapon4);
      letDown(weapon1, weapon2, weapon3, weapon4, "kunai.jpg", "guan_dao.jpg", "Parchemin_explosif.png", "kusanagi.jpg", nouvelleCase, ancienneCase, personnage1, "madara.jpg");

      if (casesTotale[nouvelleCase].id == 'obstacle') {
        personnage1.Case = ancienneCase;
        console.log('obstacle');
        $("#block1").hide();
        $("#block2").show();
        $("#gauche2").show();
        $("#haut2").show();
        $("#droite2").show();
        $("#bas2").show();
        nbMove2 = 0;
        return;
      } else if (casesTotale[nouvelleCase].id === "weapon" && personnage1.degat !== 10) {
        resetCase(ancienneCase);
        casesTotale[ancienneCase].id = 'casevide';
        casesTotale[nouvelleCase].id = personnage1.name;
        var image = new Image();
        image.src = "madara.jpg";
        image.addEventListener('load', function () {
          ;
          context.drawImage(image, casesTotale[nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
        }, false);
      } else if (casesTotale[nouvelleCase].id === "casevide" && casesTotale[ancienneCase].id === "Madara" || casesTotale[nouvelleCase].id === "weapon" && personnage1.degat == 10) {
        resetCase(ancienneCase);
        casesTotale[nouvelleCase].id = personnage1.name;
        casesTotale[ancienneCase].id = 'casevide';
        var image = new Image();
        image.src = "madara.jpg";
        image.addEventListener('load', function () {
          ;
          context.drawImage(image, casesTotale[nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
        }, false);
      } // Lancement du système de combat, lorsque nos 2 protagonistes se croisent


      croissement(personnage1.Case, personnage2.Case);
      nbMove++;
    });
  }

  ; // fonction de déplacement pour le joueur Hashirama

  function deplacement2(nb, nb2, boutton2, hides, hides2, hides3) {
    $(boutton2).click(function () {
      if (nbMove2 > 2) {
        $("#block2").hide();
        $("#block1").show();
        $("#gauche1").show();
        $("#haut1").show();
        $("#droite1").show();
        $("#bas1").show();
        nbMove = 0;
        return;
      }

      $(hides).hide();
      $(hides2).hide();
      $(hides3).hide();
      var nouvelleCase2 = personnage2.Case - nb;
      var ancienneCase = nouvelleCase2 + nb2;
      var caseHashirama = casesTotale[nouvelleCase2].numerocase;
      personnage2.Case = nouvelleCase2;
      remplacement(nouvelleCase2, personnage2, "#attaque2", weapon1, weapon2, weapon3, weapon4);
      letDown(weapon1, weapon2, weapon3, weapon4, "kunai.jpg", "guan_dao.jpg", "Parchemin_explosif.png", "kusanagi.jpg", nouvelleCase2, ancienneCase, personnage2, "hashirama.jpg");

      if (casesTotale[nouvelleCase2].id == 'obstacle') {
        personnage2.Case = ancienneCase;
        console.log('obstacle');
        $("#block2").hide();
        $("#block1").show();
        $("#gauche1").show();
        $("#haut1").show();
        $("#droite1").show();
        $("#bas1").show();
        nbMove = 0;
        return;
      } else if (casesTotale[nouvelleCase2].id === "weapon" && personnage2.degat !== 10) {
        resetCase(ancienneCase);
        casesTotale[ancienneCase].id = 'casevide';
        casesTotale[nouvelleCase2].id = personnage2.name;
        var image = new Image();
        image.src = "hashirama.jpg";
        image.addEventListener('load', function () {
          ;
          context.drawImage(image, casesTotale[nouvelleCase2].positionX, casesTotale[nouvelleCase2].positionY, tailleCase, tailleCase);
        }, false);
      } else if (casesTotale[nouvelleCase2].id === "casevide" && casesTotale[ancienneCase].id === personnage2.name || casesTotale[nouvelleCase2].id === "weapon" && personnage2.degat == 10) {
        resetCase(ancienneCase);
        casesTotale[nouvelleCase2].id = personnage2.name;
        casesTotale[ancienneCase].id = 'casevide';
        var image = new Image();
        image.src = "hashirama.jpg";
        image.addEventListener('load', function () {
          ;
          context.drawImage(image, casesTotale[nouvelleCase2].positionX, casesTotale[nouvelleCase2].positionY, tailleCase, tailleCase);
        }, false);
      }

      croissement(personnage1.Case, personnage2.Case);
      nbMove2++;
    });
  }

  ; // mise en fin de tour, pour chaque boutton correspondant 

  $("#turn1").click(function () {
    $("#block1").hide();
    $("#block2").show();
    $("#gauche2").show();
    $("#haut2").show();
    $("#droite2").show();
    $("#bas2").show();
    nbMove2 = 0;
  });
  $("#turn2").click(function () {
    $("#block2").hide();
    $("#block1").show();
    $("#gauche1").show();
    $("#haut1").show();
    $("#droite1").show();
    $("#bas1").show();
    nbMove = 0;
  }); // mise en oeuvre des bouttons de déplacements de madara
  // deplacement(10, 10, '#haut1', '#bas1', '#gauche1', '#droite1');
  // deplacement(1, 1, '#gauche1', '#bas1', '#haut1', '#droite1');
  // deplacement((-1), (-1), '#droite1', '#bas1', '#gauche1', '#haut1');
  // deplacement((-10), (-10), '#bas1', '#haut1', '#gauche1', '#droite1');
  // mise en oeuvre des bouttons de déplacements de hashirama
  // deplacement2(10, 10, '#haut2', '#bas2', '#gauche2', '#droite2');
  // deplacement2(1, 1, '#gauche2', '#bas2', '#haut2', '#droite2');
  // deplacement2((-1), (-1), '#droite2', '#bas2', '#gauche2', '#haut2');
  // deplacement2((-10), (-10), '#bas2', '#haut2', '#gauche2', '#droite2');
  // Définition des différentes actions, selon les bouttons cliquées

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