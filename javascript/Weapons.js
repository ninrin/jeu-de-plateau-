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
let weapon3 = new Weapons(2, "parchemin explosif", 40, "Parchemin_Explosif.png");
let weapon4 = new Weapons(3, "épée de kusanagi", 50, "kusanagi.jpg");

// appelle de la méthode setUp pour placer aléatoirement les armes
weapon1.setUp();
weapon2.setUp();
weapon3.setUp();	
weapon4.setUp();