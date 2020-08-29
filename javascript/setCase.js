
// Création de la fonction qui retourne un nombre aléatoire entre 0 et 99
function randomNumber() {
	return Math.floor(Math.random() * (nombreCases));
}
function resetCase(laCase) {
	if (casesTotale[laCase]) {
		context.fillStyle = "white";
		context.fillRect(casesTotale[laCase].positionX, casesTotale[laCase].positionY, tailleCase, tailleCase);
		context.strokeStyle = 'purple';
		context.strokeRect(casesTotale[laCase].positionX, casesTotale[laCase].positionY, tailleCase, tailleCase); // Crée un case d'1/100 du plateau
	}
};
function croissement(caseJoueurMadara, caseJoueurHashirama) {
	if ((caseJoueurMadara == caseJoueurHashirama - 10) || (caseJoueurMadara == caseJoueurHashirama + 10) || (caseJoueurMadara == caseJoueurHashirama - 1) || (caseJoueurMadara == caseJoueurHashirama + 1)) {
		$("#block2").hide();
		$("#block1").hide();
		$("#fight1").show();
		$("#defendre1").show();
	}
};
function deplacements(nb, nb2, boutton, hide, hide2, hide3, autreJoueur) {
	$(boutton).click(function () {
		if (self.nbMove > 2) {
			$(autreJoueur.block).show();
			$(self.block).hide();
			$(autreJoueur.gauche).show();
			$(autreJoueur.droite).show();
			$(autreJoueur.haut).show();
			$(autreJoueur.bas).show()
			autreJoueur.nbMove = 0;
			return;
		}
		$(hide).hide();
		$(hide2).hide();
		$(hide3).hide();
		self.nouvelleCase = self.Case - nb; 
		self.ancienneCase = self.nouvelleCase + nb2;
		self.Case = self.nouvelleCase;
		if (casesTotale[self.nouvelleCase].id == 'obstacle') {
			$(self.block).hide();
			$(autreJoueur.block).show();
			$(autreJoueur.gauche).show();
			$(autreJoueur.haut).show();
			$(autreJoueur.droite).show();
			$(autreJoueur.bas).show();
			autreJoueur.nbMove = 0;
		}  else if ((casesTotale[self.nouvelleCase].id === "weapon") && (self.degat !== 10)) {
			resetCase(ancienneCase);
			casesTotale[ancienneCase].id = 'casevide';
			casesTotale[nouvelleCase].id = self.name;
			var image = new Image();
			image.src = self.img;
			image.addEventListener('load', function () {
				;
				context.drawImage(image, casesTotale[self.nouvelleCase].positionX, casesTotale[self.nouvelleCase].positionY, tailleCase, tailleCase);
			}, false)
		} else if (((casesTotale[self.nouvelleCase].id === "casevide") && (casesTotale[self.ancienneCase].id === self.name)) || ((casesTotale[self.nouvelleCase].id === "weapon") && (self.degat == 10))) {
			resetCase(self.ancienneCase);
			casesTotale[self.nouvelleCase].id = self.name;
			casesTotale[self.ancienneCase].id = 'casevide';
			var image = new Image();
			image.src = self.img;
			image.addEventListener('load', function () {
				;
				context.drawImage(image, casesTotale[self.nouvelleCase].positionX, casesTotale[self.nouvelleCase].positionY, tailleCase, tailleCase);
			}, false)
		}
		croissement(self.Case, autreJoueur.Case);
		self.nbMove++;
	});
}
// Création des caractéristiques des personnages
class Personnage {
	constructor(name, img, gauche, droite, haut, bas, block) {
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
		this.nbMove = 0;
	}
	set(autreJoueur) { // set la case et ajoute l'image du personnage sur cette case
		while (this.Case == null) {
			var self = this;
			this.Case = randomNumber();
			if ((casesTotale[this.Case].id === "casevide") && (casesTotale[this.Case].id !== 'weapon') && (casesTotale[this.Case].id !== 'obstacle') && ((this.Case !== autreJoueur.Case - 10) && (this.Case !== autreJoueur.Case + 10) && (this.Case !== autreJoueur.Case + 1) && (this.Case !== autreJoueur.Case - 1))) {
				casesTotale[this.Case].id = this.name;

				let image = new Image();
				image.src = this.img;

				image.addEventListener('load', function () {
					context.drawImage(image, casesTotale[self.Case].positionX, casesTotale[self.Case].positionY, tailleCase, tailleCase);
				}, false);
				// let positionJoueur1 = casesTotale[this.Case].numerocase;
			} else {
				this.Case = null;
			}
		};

	}
	deplacement(autreJoueur) {
		let self = this;
		deplacements(1, 1, self.gauche, self.droite, self.haut, self.bas, autreJoueur);

		}
}

	const personnage1 = new Personnage("Madara", "Madara.jpg", '#gauche1', '#droite1', '#haut1', '#bas1', "#block1");
	const personnage2 = new Personnage("Hashirama", "hashirama.jpg", '#gauche2', '#droite2', '#haut2', '#bas2', "#block2");
	personnage1.set(personnage2);
	personnage2.set(personnage1);
	personnage1.deplacement(personnage2);
	


	const nombreObstacles = 10; // On veut 10 obstacles sur le plateau

	// création des cases obstacles
	for(let i = 0; i <nombreObstacles; i++) {
	let numeroCaseAleatoire = randomNumber();
	if (casesTotale[numeroCaseAleatoire].id != "casevide") {
		--i;
	} else {
		casesTotale[numeroCaseAleatoire].id = "obstacle"; // si sa tombe sur une case vide, alors obstacle.
	}
}

// fonction pour placer les objets 
function setObject(type, imageName) {
	for (let i = 0; i < nombreCases; i++) {
		(function (i) { //function auto-invoke
			if (casesTotale[i].id === type) {
				console.log(casesTotale[i].positionX + "/" + casesTotale[i].positionY);
				let set = new Image();
				set.src = imageName;
				set.addEventListener('load', function () {
					context.drawImage(set, casesTotale[i].positionX, casesTotale[i].positionY, tailleCase, tailleCase);
				}, false);
			}
		})(i);
	};
};

setObject('obstacle', 'NOIR.png');


// Définition des caractéristiques des armes
class Weapons {
	constructor(numero, nom, dmg, img) {
		this.numeroweapon = numero;
		this.nom = nom;
		this.dmg = dmg;
		this.img = img;
		this.case = null;

	}
	setUp() {
		while (this.case == null) {
			this.case = randomNumber();
			if (casesTotale[this.case].id == "obstacle" || casesTotale[this.case].id !== "casevide") {
				this.case = null
			} else {
				var self = this;
				casesTotale[this.case].id = "weapon";
				casesTotale[this.case].numeroweapon = this.numeroweapon;
				let set = new Image();
				set.src = this.img;
				set.addEventListener('load', function () {
					context.drawImage(set, casesTotale[self.case].positionX, casesTotale[self.case].positionY, tailleCase, tailleCase);
				}, false);
			}
			console.log(casesTotale[this.case]);

		}


	}


}



// création des 4 armes
let weapon1 = new Weapons(0, "kunai", 20, "kunai.jpg");
let weapon2 = new Weapons(1, "guan dao", 30, "guan_dao.jpg");
let weapon3 = new Weapons(2, "parchemin explosif", 40, "Parchemin_explosif.png");
let weapon4 = new Weapons(3, "épée de kusanagi", 50, "kusanagi.jpg");
weapon1.setUp();
weapon2.setUp();
weapon3.setUp();
weapon4.setUp();


