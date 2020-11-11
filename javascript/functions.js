
// Création de la fonction qui retourne un nombre aléatoire entre 0 et 99
function randomNumber() {
	return Math.floor(Math.random() * (nombreCases));


}
//fonction pour remettre l'ancienne case à vide
function resetCase(laCase) {
	if (casesTotale[laCase]) {
		context.fillStyle = "white";
		context.fillRect(casesTotale[laCase].positionX, casesTotale[laCase].positionY, tailleCase, tailleCase);
		context.strokeStyle = 'purple';
		context.strokeRect(casesTotale[laCase].positionX, casesTotale[laCase].positionY, tailleCase, tailleCase); // Crée un case d'1/100 du plateau
	}
};

// fonction permettant l'affrontement des 2 joueurs lors du croissement
function croissement(caseJoueurMadara, caseJoueurHashirama) {
	if ((caseJoueurMadara == caseJoueurHashirama - 10) || (caseJoueurMadara == caseJoueurHashirama + 10) || (caseJoueurMadara == caseJoueurHashirama - 1) || (caseJoueurMadara == caseJoueurHashirama + 1)) {
		$("#block2").hide();
		$("#block1").hide();
		$("#fight1").show();
		$("#defendre1").show();
	}
};

// fonction permettant de s'approprier la puissance de l'arme ramassée ainsi que de remettre en place l'ancienne arme sur cette case
function remplacement(nouvelleCase, defPerso, defBoutton, weapon1, weapon2, weapon3, weapon4) {
	if ((casesTotale[nouvelleCase].numeroweapon === weapon1.numeroweapon) && (defPerso.degat == weapon2.dmg)) {
		defPerso.degat = weapon1.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon2.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon1.numeroweapon) && (defPerso.degat == weapon3.dmg)) {
		defPerso.degat = weapon1.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon3.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon1.numeroweapon) && (defPerso.degat == weapon4.dmg)) {
		defPerso.degat = weapon1.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon4.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon1.numeroweapon) && (defPerso.degat == 10)) {
		defPerso.degat = weapon1.dmg;
		$(defBoutton).html(defPerso.degat);
		casesTotale[nouvelleCase].numeroweapon = null;
	} // guan dao
	else if ((casesTotale[nouvelleCase].numeroweapon === weapon2.numeroweapon) && (defPerso.degat == weapon1.dmg)) {
		defPerso.degat = weapon2.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon1.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon2.numeroweapon) && (defPerso.degat == weapon3.dmg)) {
		defPerso.degat = weapon2.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon3.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon2.numeroweapon) && (defPerso.degat == weapon4.dmg)) {
		defPerso.degat = weapon2.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon4.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon2.numeroweapon) && (defPerso.degat == 10)) {
		defPerso.degat = weapon2.dmg;
		$(defBoutton).html(defPerso.degat);
		casesTotale[nouvelleCase].numeroweapon = null;
	} // parchemin explosif
	else if ((casesTotale[nouvelleCase].numeroweapon === weapon3.numeroweapon) && (defPerso.degat == weapon1.dmg)) {
		defPerso.degat = weapon3.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon1.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon3.numeroweapon) && (defPerso.degat == weapon2.dmg)) {
		defPerso.degat = weapon3.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon2.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon3.numeroweapon) && (defPerso.degat == weapon4.dmg)) {
		defPerso.degat = weapon3.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon4.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon3.numeroweapon) && (defPerso.degat == 10)) {
		defPerso.degat = weapon3.dmg;
		$(defBoutton).html(defPerso.degat);
		casesTotale[nouvelleCase].numeroweapon = null;
	} // épée kusanagi
	else if ((casesTotale[nouvelleCase].numeroweapon === weapon4.numeroweapon) && (defPerso.degat == weapon1.dmg)) {
		defPerso.degat = weapon4.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon1.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon4.numeroweapon) && (defPerso.degat == weapon2.dmg)) {
		defPerso.degat = weapon4.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon2.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon4.numeroweapon) && (defPerso.degat == weapon3.dmg)) {
		defPerso.degat = weapon4.dmg;
		casesTotale[nouvelleCase].numeroweapon = weapon3.numeroweapon;
		$(defBoutton).html(defPerso.degat);
	} else if ((casesTotale[nouvelleCase].numeroweapon === weapon4.numeroweapon) && (defPerso.degat == 10)) {
		defPerso.degat = weapon4.dmg;
		$(defBoutton).html(defPerso.degat);
		casesTotale[nouvelleCase].numeroweapon = null;
	}

};



// fonction permettant d'afficher une image de l'arme portée, à l'ancienne case, et affiche l'image du personnage pour la case suivante (nouvelleCase)
function letDown(weaponNb, weaponNb2, weaponNb3, weaponNb4, imageWeapon, imageWeapon2, imageWeapon3, imageWeapon4, nouvelleCase, ancienneCase, personnageId, playerImage) {
console.log(casesTotale);
	if ((casesTotale[personnageId.ancienneCase].numeroweapon === weaponNb.numeroweapon) && (casesTotale[personnageId.nouvelleCase].id !== "obstacle")) {
		casesTotale[personnageId.ancienneCase].id = "weapon";
		casesTotale[personnageId.nouvelleCase].id = personnageId.name;
		var image = new Image();
		image.src = imageWeapon;
		image.addEventListener('load', function () {
			;
			context.drawImage(image, casesTotale[ancienneCase].positionX, casesTotale[ancienneCase].positionY, tailleCase, tailleCase);
		}, false);
		let imagePlayer = new Image();
		imagePlayer.src = playerImage;
		imagePlayer.addEventListener('load', function () {
			;
			context.drawImage(imagePlayer, casesTotale[personnageId.nouvelleCase].positionX, casesTotale[personnageId.nouvelleCase].positionY, tailleCase, tailleCase);
		}, false);
		return image;
	} else if ((casesTotale[personnageId.ancienneCase].numeroweapon === weaponNb2.numeroweapon) && (casesTotale[personnageId.nouvelleCase].id !== "obstacle")) {
		casesTotale[personnageId.ancienneCase].id = "weapon";
		casesTotale[personnageId.nouvelleCase].id = personnageId.name;
		var image = new Image();
		image.src = imageWeapon2;
		image.addEventListener('load', function () {
			;
			context.drawImage(image, casesTotale[personnageId.ancienneCase].positionX, casesTotale[personnageId.ancienneCase].positionY, tailleCase, tailleCase);
		}, false);
		let imagePlayer = new Image();
		imagePlayer.src = playerImage;
		imagePlayer.addEventListener('load', function () {
			;
			context.drawImage(imagePlayer, casesTotale[personnageId.nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
		}, false);
		return image;

	} else if ((casesTotale[personnageId.ancienneCase].numeroweapon === weaponNb3.numeroweapon) && (casesTotale[personnageId.nouvelleCase].id !== "obstacle")) {
		casesTotale[personnageId.ancienneCase].id = "weapon";
		casesTotale[personnageId.nouvelleCase].id = personnageId.name;
		var image = new Image();
		image.src = imageWeapon3;
		image.addEventListener('load', function () {
			;
			context.drawImage(image, casesTotale[personnageId.ancienneCase].positionX, casesTotale[personnageId.ancienneCase].positionY, tailleCase, tailleCase);
		}, false);
		let imagePlayer = new Image();
		imagePlayer.src = playerImage;
		imagePlayer.addEventListener('load', function () {
			;
			context.drawImage(imagePlayer, casesTotale[personnageId.nouvelleCase].positionX, casesTotale[personnageId.nouvelleCase].positionY, tailleCase, tailleCase);
		}, false);
		return image;

	} else if ((casesTotale[personnageId.ancienneCase].numeroweapon === weaponNb4.numeroweapon) && (casesTotale[personnageId.nouvelleCase].id !== "obstacle")) {
		casesTotale[personnageId.ancienneCase].id = "weapon";
		casesTotale[personnageId.nouvelleCase].id = personnageId.name;
		var image = new Image();
		image.src = imageWeapon4;
		image.addEventListener('load', function () {
			;
			context.drawImage(image, casesTotale[personnageId.ancienneCase].positionX, casesTotale[personnageId.ancienneCase].positionY, tailleCase, tailleCase);
		}, false);
		let imagePlayer = new Image();
		imagePlayer.src = playerImage;
		imagePlayer.addEventListener('load', function () {
			;
			context.drawImage(imagePlayer, casesTotale[personnageId.nouvelleCase].positionX, casesTotale[personnageId.nouvelleCase].positionY, tailleCase, tailleCase);
		}, false);
		return image;
	}
}









