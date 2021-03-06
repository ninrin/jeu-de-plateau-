"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Création de la fonction qui retourne un nombre aléatoire entre 0 et 99
function randomNumber() {
  return Math.floor(Math.random() * nombreCases);
} //fonction pour remettre l'ancienne case à vide


function resetCase(laCase) {
  if (casesTotale[laCase]) {
    context.fillStyle = "white";
    context.fillRect(casesTotale[laCase].positionX, casesTotale[laCase].positionY, tailleCase, tailleCase);
    context.strokeStyle = 'purple';
    context.strokeRect(casesTotale[laCase].positionX, casesTotale[laCase].positionY, tailleCase, tailleCase); // Crée un case d'1/100 du plateau
  }
}

; // fonction permettant l'affrontement des 2 joueurs lors du croissement

function croissement(caseJoueurMadara, caseJoueurHashirama) {
  if (caseJoueurMadara == caseJoueurHashirama - 10 || caseJoueurMadara == caseJoueurHashirama + 10 || caseJoueurMadara == caseJoueurHashirama - 1 || caseJoueurMadara == caseJoueurHashirama + 1) {
    $("#block2").hide();
    $("#block1").hide();
    $("#fight1").show();
    $("#defendre1").show();
  }
}

; // fonction permettant de s'approprier la puissance de l'arme ramassée ainsi que de remettre en place l'ancienne arme sur cette case

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
  console.log(casesTotale);

  if (casesTotale[personnageId.ancienneCase].numeroweapon === weaponNb.numeroweapon && casesTotale[personnageId.nouvelleCase].id !== "obstacle") {
    casesTotale[personnageId.ancienneCase].id = "weapon";
    casesTotale[personnageId.nouvelleCase].id = personnageId.name;
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
      context.drawImage(imagePlayer, casesTotale[personnageId.nouvelleCase].positionX, casesTotale[personnageId.nouvelleCase].positionY, tailleCase, tailleCase);
    }, false);
    return image;
  } else if (casesTotale[personnageId.ancienneCase].numeroweapon === weaponNb2.numeroweapon && casesTotale[personnageId.nouvelleCase].id !== "obstacle") {
    casesTotale[personnageId.ancienneCase].id = "weapon";
    casesTotale[personnageId.nouvelleCase].id = personnageId.name;
    var image = new Image();
    image.src = imageWeapon2;
    image.addEventListener('load', function () {
      ;
      context.drawImage(image, casesTotale[personnageId.ancienneCase].positionX, casesTotale[personnageId.ancienneCase].positionY, tailleCase, tailleCase);
    }, false);

    var _imagePlayer = new Image();

    _imagePlayer.src = playerImage;

    _imagePlayer.addEventListener('load', function () {
      ;
      context.drawImage(_imagePlayer, casesTotale[personnageId.nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
    }, false);

    return image;
  } else if (casesTotale[personnageId.ancienneCase].numeroweapon === weaponNb3.numeroweapon && casesTotale[personnageId.nouvelleCase].id !== "obstacle") {
    casesTotale[personnageId.ancienneCase].id = "weapon";
    casesTotale[personnageId.nouvelleCase].id = personnageId.name;
    var image = new Image();
    image.src = imageWeapon3;
    image.addEventListener('load', function () {
      ;
      context.drawImage(image, casesTotale[personnageId.ancienneCase].positionX, casesTotale[personnageId.ancienneCase].positionY, tailleCase, tailleCase);
    }, false);

    var _imagePlayer2 = new Image();

    _imagePlayer2.src = playerImage;

    _imagePlayer2.addEventListener('load', function () {
      ;
      context.drawImage(_imagePlayer2, casesTotale[personnageId.nouvelleCase].positionX, casesTotale[personnageId.nouvelleCase].positionY, tailleCase, tailleCase);
    }, false);

    return image;
  } else if (casesTotale[personnageId.ancienneCase].numeroweapon === weaponNb4.numeroweapon && casesTotale[personnageId.nouvelleCase].id !== "obstacle") {
    casesTotale[personnageId.ancienneCase].id = "weapon";
    casesTotale[personnageId.nouvelleCase].id = personnageId.name;
    var image = new Image();
    image.src = imageWeapon4;
    image.addEventListener('load', function () {
      ;
      context.drawImage(image, casesTotale[personnageId.ancienneCase].positionX, casesTotale[personnageId.ancienneCase].positionY, tailleCase, tailleCase);
    }, false);

    var _imagePlayer3 = new Image();

    _imagePlayer3.src = playerImage;

    _imagePlayer3.addEventListener('load', function () {
      ;
      context.drawImage(_imagePlayer3, casesTotale[personnageId.nouvelleCase].positionX, casesTotale[personnageId.nouvelleCase].positionY, tailleCase, tailleCase);
    }, false);

    return image;
  }
} // Création des caractéristiques des personnages


var Personnage =
/*#__PURE__*/
function () {
  function Personnage(name, img, gauche, droite, haut, bas, block, attaque) {
    _classCallCheck(this, Personnage);

    this.name = name;
    this.degat = 10;
    this.vie = 100;
    this.Case = null;
    this.nouvelleCase = 0;
    this.ancienneCase = 0;
    this.img = img;
    this.gauche = gauche;
    this.droite = droite;
    this.haut = haut;
    this.bas = bas;
    this.block = block;
    this.attaque = attaque;
    this.nbMove = 0;
  }

  _createClass(Personnage, [{
    key: "set",
    value: function set(autreJoueur) {
      var _this = this;

      // set la case et ajoute l'image du personnage sur cette case
      while (this.Case == null) {
        var self = this;
        this.Case = randomNumber();

        if (casesTotale[this.Case].id === "casevide" && casesTotale[this.Case].id !== 'weapon' && casesTotale[this.Case].id !== 'obstacle' && this.Case !== autreJoueur.Case - 10 && this.Case !== autreJoueur.Case + 10 && this.Case !== autreJoueur.Case + 1 && this.Case !== autreJoueur.Case - 1) {
          (function () {
            casesTotale[_this.Case].id = _this.name;
            var image = new Image();
            image.src = _this.img;
            image.addEventListener('load', function () {
              context.drawImage(image, casesTotale[self.Case].positionX, casesTotale[self.Case].positionY, tailleCase, tailleCase);
            }, false);
          })();
        } else {
          this.Case = null;
        }
      }

      ;
    }
  }, {
    key: "deplacement",
    value: function deplacement(autreJoueur) {
      var self = this; // fonction interne, permettant le deplacement des personnages ainsi que les differents scénarios possible. 

      function deplacements(nb, nb2, hide, hide2, hide3) {
        if (self.nbMove > 2) {
          // cache le block des flèches de déplacement du joueur lorsque les 3 mouvements ont été utilisé, et laisse place à celui de l'adversaire
          $(autreJoueur.block).show();
          $(self.block).hide();
          $(autreJoueur.gauche).show();
          $(autreJoueur.droite).show();
          $(autreJoueur.haut).show();
          $(autreJoueur.bas).show();
          autreJoueur.nbMove = 0;
          return;
        } // cache les 3 autres flèches, pour forcer le déplacemnt en ligne droite.


        $(hide).hide();
        $(hide2).hide();
        $(hide3).hide(); // déinition des propriétés

        self.nouvelleCase = self.Case - nb;
        console.log(self.nouvelleCase);
        self.ancienneCase = self.nouvelleCase + nb2;
        console.log(self.ancienneCase);
        self.Case = self.nouvelleCase;
        console.log(self.Case);

        if (self.nouvelleCase < 0 || self.nouvelleCase > 100 || casesTotale[self.nouvelleCase].id == 'obstacle') {
          self.Case = self.ancienneCase;
          $(self.block).hide();
          $(autreJoueur.block).show();
          $(autreJoueur.gauche).show();
          $(autreJoueur.haut).show();
          $(autreJoueur.droite).show();
          $(autreJoueur.bas).show();
          autreJoueur.nbMove = 0;
          return;
        } else if (casesTotale[self.nouvelleCase].id === "weapon" && self.degat !== 10) {
          resetCase(self.ancienneCase);
          casesTotale[self.ancienneCase].id = 'casevide';
          casesTotale[self.nouvelleCase].id = self.name;
          var image = new Image();
          image.src = self.img;
          image.addEventListener('load', function () {
            ;
            context.drawImage(image, casesTotale[self.nouvelleCase].positionX, casesTotale[self.nouvelleCase].positionY, tailleCase, tailleCase);
          }, false);
        } else if (casesTotale[self.nouvelleCase].id === "casevide" && casesTotale[self.ancienneCase].id === self.name || casesTotale[self.nouvelleCase].id === "weapon" && self.degat == 10) {
          resetCase(self.ancienneCase);
          casesTotale[self.nouvelleCase].id = self.name;
          casesTotale[self.ancienneCase].id = 'casevide';
          var image = new Image();
          image.src = self.img;
          image.addEventListener('load', function () {
            ;
            context.drawImage(image, casesTotale[self.nouvelleCase].positionX, casesTotale[self.nouvelleCase].positionY, tailleCase, tailleCase);
          }, false);
        }

        remplacement(self.nouvelleCase, self, self.attaque, weapon1, weapon2, weapon3, weapon4);
        letDown(weapon1, weapon2, weapon3, weapon4, "kunai.jpg", "guan_dao.jpg", "Parchemin_explosif.png", "kusanagi.jpg", self.nouvelleCase, self.ancienneCase, self, self.img);
        croissement(self.Case, autreJoueur.Case);
        self.nbMove++;
      }

      ;
      $(self.gauche).click(function () {
        deplacements(1, 1, self.droite, self.haut, self.bas);
      });
      $(self.droite).click(function () {
        deplacements(-1, -1, self.gauche, self.haut, self.bas);
      });
      $(self.haut).click(function () {
        deplacements(10, 10, self.gauche, self.bas, self.droite);
      });
      $(self.bas).click(function () {
        deplacements(-10, -10, self.droite, self.gauche, self.haut);
      });
    }
  }]);

  return Personnage;
}(); // instantation pour les 2 personnages


var personnage1 = new Personnage("Madara", "Madara.jpg", '#gauche1', '#droite1', '#haut1', '#bas1', "#block1", "#attaque1");
var personnage2 = new Personnage("Hashirama", "hashirama.jpg", '#gauche2', '#droite2', '#haut2', '#bas2', "#block2", "#attaque2");
var nombreObstacles = 10; // On veut 10 obstacles sur le plateau
// création des cases obstacles

for (var i = 0; i < nombreObstacles; i++) {
  var numeroCaseAleatoire = randomNumber();

  if (casesTotale[numeroCaseAleatoire].id != "casevide") {
    --i;
  } else {
    casesTotale[numeroCaseAleatoire].id = "obstacle"; // si ça tombe sur une case vide, alors id = obstacle.

    context.fillStyle = "grey";
    context.fillRect(casesTotale[numeroCaseAleatoire].positionX, casesTotale[numeroCaseAleatoire].positionY, tailleCase, tailleCase);
    context.strokeStyle = 'purple';
    context.strokeRect(casesTotale[numeroCaseAleatoire].positionX, casesTotale[numeroCaseAleatoire].positionY, tailleCase, tailleCase);
  }
} // Définition des caractéristiques des armes


var Weapons =
/*#__PURE__*/
function () {
  function Weapons(numero, nom, dmg, img) {
    _classCallCheck(this, Weapons);

    this.numeroweapon = numero;
    this.nom = nom;
    this.dmg = dmg;
    this.img = img;
    this["case"] = null;
  }

  _createClass(Weapons, [{
    key: "setUp",
    value: function setUp() {
      var _this2 = this;

      while (this["case"] == null) {
        this["case"] = randomNumber();

        if (casesTotale[this["case"]].id == "obstacle" || casesTotale[this["case"]].id !== "casevide") {
          this["case"] = null;
        } else {
          var self;

          (function () {
            self = _this2;
            casesTotale[_this2["case"]].id = "weapon";
            casesTotale[_this2["case"]].numeroweapon = _this2.numeroweapon;
            var set = new Image();
            set.src = _this2.img;
            set.addEventListener('load', function () {
              context.drawImage(set, casesTotale[self["case"]].positionX, casesTotale[self["case"]].positionY, tailleCase, tailleCase);
            }, false);
          })();
        }

        console.log(casesTotale[this["case"]]);
      }
    }
  }]);

  return Weapons;
}(); // création des 4 armes


var weapon1 = new Weapons(0, "kunai", 20, "kunai.jpg");
var weapon2 = new Weapons(1, "guan dao", 30, "guan_dao.jpg");
var weapon3 = new Weapons(2, "parchemin explosif", 40, "Parchemin_explosif.png");
var weapon4 = new Weapons(3, "épée de kusanagi", 50, "kusanagi.jpg"); // appelle de la méthode setUp pour placer aléatoirement les armes

weapon1.setUp();
weapon2.setUp();
weapon3.setUp();
weapon4.setUp();