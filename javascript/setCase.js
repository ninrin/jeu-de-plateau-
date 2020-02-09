var Warriors = [];

var	caseJoueur1 = randomNumber();
	caseJoueur2 = randomNumber();

// Création des caractéristiques des personnages
function personnage(numero, name, vie, attaque, nbCase){
	this.numero = numero;
	this.name = name;
	this.vie = 100;
	this.attaque = 10;
	this.nbCase = 0;	
};

var personnage1 = new personnage (0, "Madara", 100);
var personnage2 = new personnage (1, "Hashirama", 100);

Warriors.push(personnage1, personnage2);

const nombreObstacles = 10; // On veut 10 obstacles sur le plateau

// Création de la fonction qui retourne un nombre aléatoire entre 0 et 99
function randomNumber() {
	return Math.floor(Math.random() * (nombreCases - 1));
}

// création des cases obstacles
for (let i = 0; i < nombreObstacles; i++) {
	let numeroCaseAleatoire = randomNumber();
	if (casesTotale[numeroCaseAleatoire].id != "casevide") {
		--i; 
	} else {
		casesTotale[numeroCaseAleatoire].id = "obstacle"; // si sa tombe sur une case vide, alors obstacle.
	}	
}

// fonction pour placer les objets 
function setObject( type, imageName) {
	for (let i = 0; i < nombreCases; i++) {
		(function(i) { //function auto-invoke
			if (casesTotale[i].id === type ) {
					console.log(casesTotale[i].positionX + "/" + casesTotale[i].positionY);
					let set = new Image();
					set.src = imageName;
					set.addEventListener('load', function() {
							context.drawImage(set, casesTotale[i].positionX, casesTotale[i].positionY);
						}, false);
			}
		})(i);
	};
};

// fonction permmetant de définir les id des cases, aléatoirement, avant le placement des objets selon ces id
function setCase( nombreX, typeDef){	
	for (var i = 0; i < nombreX; i++) {
		var numeroCaseAleatoire = randomNumber();
		if (casesTotale[numeroCaseAleatoire].id ==  "obstacle" || casesTotale[numeroCaseAleatoire].id !==  "casevide")  {
			i--;
		} else {
			casesTotale[numeroCaseAleatoire].id = typeDef;
		}
	}

};

setObject('obstacle', 'NOIR.png');


var Weapons= [];

// Définition des caractéristiques des armes
function weapons(numero, nom, dmg){
  this.numeroweapon= numero;
  this.nom= nom;
  this.dmg = dmg; 
};

// création des 4 armes
var weapon1 = new weapons (1, "kunai", 20);
var weapon2 = new weapons (2, "guan dao", 30);
var weapon3 = new weapons (3, "parchemin explosif", 40);
var weapon4 = new weapons (4, "épée de kusanagi", 50);

Weapons.push(weapon1,weapon2,weapon3,weapon4);
var nombreweapons = 4;

// fonction de création des armes
function creerArmes(){
	for(var i = 0; i < nombreweapons; i++) {
		let numeroCaseAleatoire = randomNumber();
		if (casesTotale[numeroCaseAleatoire].id === "casevide") { // si case vide, alors la case à une id et un numéro de l'arme
			casesTotale[numeroCaseAleatoire].id = "weapon";
			casesTotale[numeroCaseAleatoire].numeroweapon = i;
		}else if (casesTotale[numeroCaseAleatoire].id = "weapon") {
					i--;
		}		
};	

// on place place les nom des armes associés à la case
for(i = 0; i < nombreCases; i++) {		
	if((casesTotale[i].id === "weapon") && (casesTotale[i].numeroweapon === 0)) {	
		casesTotale[i].weaponName = weapon1.nom;
	}else if ((casesTotale[i].id === "weapon") && (casesTotale[i].numeroweapon === 1)) {	
		casesTotale[i].weaponName = weapon2.nom;
	}else if ((casesTotale[i].id === "weapon") && (casesTotale[i].numeroweapon === 2)) {	
		casesTotale[i].weaponName = weapon3.nom;
	}else if ((casesTotale[i].id === "weapon") && (casesTotale[i].numeroweapon === 3)) {	
		casesTotale[i].weaponName = weapon4.nom;
	}									
};
		

// fonction pour le positionnement des armes sur le plateau
function setObjectweapon(type, imageName) {	
	for (var i = 0; i < nombreCases; i++) {
		(function(i) {
			if (casesTotale[i].weaponName === type ) {
				console.log(casesTotale[i].positionX + "/" + casesTotale[i].positionY);
				var set = new Image();
				set.src = imageName;
				set.addEventListener('load', function() {
					context.drawImage(set, casesTotale[i].positionX, casesTotale[i].positionY);
				}, false);
			}
		})(i);
	}
};

// éxecution du fonction pour le placement des armes sur le plateau
setObjectweapon(weapon1.nom, "kunai.jpg");
setObjectweapon(weapon2.nom, "guan_dao.jpg");
setObjectweapon(weapon3.nom, "Parchemin_explosif.png");
setObjectweapon(weapon4.nom, "kusanagi.jpg");

};

creerArmes();	

// insérer les personnages sur le plateau	
while(caseJoueur1){
	if ((casesTotale[caseJoueur1].id === "casevide") && (casesTotale[caseJoueur1].id !== 'weapon') && (casesTotale[caseJoueur1].id !== 'obstacle')&& ((caseJoueur1 !== caseJoueur2 - 10) && (caseJoueur1 !== caseJoueur2  + 10) && (caseJoueur1 !== caseJoueur2 + 1) && (caseJoueur1 !== caseJoueur2 - 1))){
		casesTotale[caseJoueur1].id = personnage1.name;
		CasePerso1 = casesTotale[caseJoueur1].numerocase;			
		Warriors[0].nbCase = CasePerso1;

		var image = new Image();
		image.src = "madara.jpg";
		image.addEventListener('load', function() {;
			context.drawImage(image, casesTotale[caseJoueur1].positionX, casesTotale[caseJoueur1].positionY, tailleCase, tailleCase);
		}, false);
		var positionJoueur1 = casesTotale[caseJoueur1].numerocase;
		break;
	    }
};

	
while(caseJoueur2){
	if ((casesTotale[caseJoueur2].id === "casevide") && (casesTotale[caseJoueur2].id !== 'weapon') && (casesTotale[caseJoueur2].id !== 'obstacle')){
		casesTotale[caseJoueur2].id = personnage2.name;
		CasePerso2 = casesTotale[caseJoueur2].numerocase;			
		Warriors[1].nbCase = CasePerso2;
	 
		var images = new Image();
		images.src = "hashirama.jpg";
		images.addEventListener('load', function() {;
			context.drawImage(images, casesTotale[caseJoueur2].positionX, casesTotale[caseJoueur2].positionY, tailleCase, tailleCase);
		}, false);
		var positionJoueur2 = casesTotale[caseJoueur2].numerocase;
		break;
	}   
};
	
	