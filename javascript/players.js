// Création des caractéristiques des personnages
class Personnage {
	constructor(name, img, gauche, droite, haut, bas, block, attaque) {
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
			} else {
				this.Case = null;
			}
		};
	}

	deplacement(autreJoueur) {
		let self = this;
		// fonction interne, permettant le deplacement des personnages ainsi que les differents scénarios possible. 
		function deplacements(nb, nb2, hide, hide2, hide3) {
			if (self.nbMove > 2) { // cache le block des flèches de déplacement du joueur lorsque les 3 mouvements ont été utilisé, et laisse place à celui de l'adversaire
				$(autreJoueur.block).show();
				$(self.block).hide();
				$(autreJoueur.gauche).show();
				$(autreJoueur.droite).show();
				$(autreJoueur.haut).show();
				$(autreJoueur.bas).show()
				autreJoueur.nbMove = 0;
				return;
			}
			// cache les 3 autres flèches, pour forcer le déplacemnt en ligne droite.
			$(hide).hide();
			$(hide2).hide();
			$(hide3).hide();

			// déinition des propriétés
			self.nouvelleCase = self.Case - nb; console.log(self.nouvelleCase);
			self.ancienneCase = self.nouvelleCase + nb2; console.log(self.ancienneCase);
			self.Case = self.nouvelleCase; console.log(self.Case);
		
			if ((self.nouvelleCase < 0) || (self.nouvelleCase > 100) || (casesTotale[self.nouvelleCase].id == 'obstacle')) {
				self.Case = self.ancienneCase;
				$(self.block).hide();
				$(autreJoueur.block).show();
				$(autreJoueur.gauche).show();
				$(autreJoueur.haut).show();
				$(autreJoueur.droite).show();
				$(autreJoueur.bas).show();
				autreJoueur.nbMove = 0;
				return;
			} else if ((casesTotale[self.nouvelleCase].id === "weapon") && (self.degat !== 10)) { // remet l'ancienne case à vide et le nouveau au personnage si l'adversaire possède une arme et va aller sur une autre arme
				resetCase(self.ancienneCase);
				casesTotale[self.ancienneCase].id = 'casevide';
				casesTotale[self.nouvelleCase].id = self.name;
				var image = new Image();
				image.src = self.img;
				image.addEventListener('load', function () {
					;
					context.drawImage(image, casesTotale[self.nouvelleCase].positionX, casesTotale[self.nouvelleCase].positionY, tailleCase, tailleCase);
				}, false)
				// remet l'ancienne case à vide et le nouveau au personnage si il ne possède pas d'arme
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
			remplacement(self.nouvelleCase, self, self.attaque, weapon1, weapon2, weapon3, weapon4);
			letDown(weapon1, weapon2, weapon3, weapon4, "kunai.jpg", "guan_dao.jpg", "Parchemin_explosif.png", "kusanagi.jpg", self.nouvelleCase, self.ancienneCase, self, self.img)

			croissement(self.Case, autreJoueur.Case);
			self.nbMove++;
		};

		$(self.gauche).click(function () {
			deplacements(1, 1, self.droite, self.haut, self.bas);
		});
		 $(self.droite).click(function () {
			deplacements((-1), (-1), self.gauche, self.haut, self.bas);
		}); 
		$(self.haut).click(function () {
			deplacements(10, 10, self.gauche, self.bas, self.droite);
		}); 
		$(self.bas).click(function () {
			deplacements((-10), (-10), self.droite, self.gauche, self.haut);
		});
	
	}

}


// instantation pour les 2 personnages
const personnage1 = new Personnage("Madara", "madara.jpg", '#gauche1', '#droite1', '#haut1', '#bas1', "#block1", "#attaque1");
const personnage2 = new Personnage("Hashirama", "hashirama.jpg", '#gauche2', '#droite2', '#haut2', '#bas2', "#block2","#attaque2");

