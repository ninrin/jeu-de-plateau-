$(document).ready(function(){	
	// insérer les points de vie et attaque par défaut des personnages
	$('#vie1').html(personnage1.vie);
	$('#vie2').html(personnage2.vie);
	$('#attaque1').html(personnage1.attaque);
	$('#attaque2').html(personnage2.attaque);

	// on cache les bouttons de combat par défaut
	$("#fight1").hide();	
	$("#defendre1").hide();
	$("#fight2").hide();	
	$("#defendre2").hide();



	// nombres de mouvement au deux joueurs
	let nbMove= 0;
	let nbMove2= 0;

	//madara commence
	$("#block2").hide();
	$("#block1").show();

	//fonction pour remplacer l'arme ramassée sur le plateau, pour bénéficier de sa puissance
	function remplacement(defCase, defPerso, defBoutton){
		if (casesTotale[defCase].numeroweapon === 0) {
			defPerso.attaque = weapon1.dmg;
			 $(defBoutton).html(defPerso.attaque);
		} else if (casesTotale[defCase].numeroweapon === 1) {
			defPerso.attaque = weapon2.dmg;
			 $(defBoutton).html(defPerso.attaque);
		 } else if (casesTotale[defCase].numeroweapon === 2) {
			 defPerso.attaque = weapon3.dmg;
			 $(defBoutton).html(defPerso.attaque);
		} else if (casesTotale[defCase].numeroweapon === 3) {
			defPerso.attaque = weapon4.dmg;
			 $(defBoutton).html(defPerso.attaque);
		} 
			
	};


	// Reset l'ancienne case, portant le joueur
	function resetCase(laCase){
		if (casesTotale[laCase]) {
			console.log(casesTotale[laCase].positionX + "/" + casesTotale[laCase].positionY);
			var set = new Image();
			set.src = "blanc.png";
			set.addEventListener('load', function() {
				context.drawImage(set, casesTotale[laCase].positionX, casesTotale[laCase].positionY);
		  }, false);
		}
	};

	// Lancement du système de combat, lorsque nos 2 protagonistes se croisent
	function croissement(caseJoueurMadara, caseJoueurHashirama){
		if((caseJoueurMadara == caseJoueurHashirama - 10) || (caseJoueurMadara == caseJoueurHashirama  + 10) || (caseJoueurMadara == caseJoueurHashirama - 1) || (caseJoueurMadara == caseJoueurHashirama + 1)){
			$("#block2").hide();
			$("#block1").hide();	
			$("#fight1").show();	
			$("#defendre1").show();			
		}
	};





	// fonction de déplacement pour le personnage Madara
	function deplacement(nb, nb2,boutton,hide,hide2,hide3, nbProchain){
		$(boutton).click(function(){	
			if( nbMove > 2) {
				$("#block2").show();
				$("#block1").hide();		
				$("#gauche2").show();
				$("#haut2").show();
				$("#droite2").show();
				$("#bas2").show()
				nbMove2= 0;
				return;
			}
			// cacher les 3 autres bouttons, une fois la 1ère cliqué
			$(hide).hide();
			$(hide2).hide();
			$(hide3).hide();
			//redéfinition des nouvelles caractéristiques 
			var nouvelleCase = caseJoueur1 - nb;
			var ancienneCase = nouvelleCase + nb2;
			caseJoueur1 = nouvelleCase
			console.log(ancienneCase);
			console.log(nouvelleCase);
			console.log(caseJoueur1);
			var caseMadara = casesTotale[nouvelleCase].numerocase;			
			Warriors[0].positionX = casesTotale[nouvelleCase].positionX;
			Warriors[0].positionY = casesTotale[nouvelleCase].positionY;
			if((casesTotale[nouvelleCase].id === "casevide")|| (casesTotale[nouvelleCase].id === "weapon")){
				Warriors[0].nbCase = caseMadara;
				var image = new Image();
				image.src = "madara.jpg";
				image.addEventListener('load', function() {;
					context.drawImage(image, casesTotale[nouvelleCase].positionX, casesTotale[nouvelleCase].positionY, tailleCase, tailleCase);
				}, false)
			}else if (casesTotale[caseJoueur1 - nbProchain].id = 'obstacle')  {
				caseJoueur1 = ancienneCase;
				$("#block1").hide();
				
				$("#block2").show();
				$("#gauche2").show();
				$("#haut2").show();
				$("#droite2").show();
				$("#bas2").show();					
				nbMove2= 0;
				return;	
			} 

			// remplace l'arme ramassée sur le plateau, pour bénéficier de sa puissance
			remplacement(nouvelleCase, personnage1, "#attaque1");
			
			// remet l'ancienne case en case vide
			casesTotale[ancienneCase].id = 'casevide';
			resetCase(ancienneCase);

			// on renomme l'id de la nouvelle case avec celui du personnage
			casesTotale[nouvelleCase].id = personnage1.name;

			// Lancement du système de combat, lorsque nos 2 protagonistes se croisent
			croissement (caseJoueur1, caseJoueur2);
			nbMove++;
		})
	};


	// fonction de déplacement pour le joueur Hashirama
	function deplacement2(nb, nb2 ,boutton2,hides,hides2,hides3, nbProchain){
		$(boutton2).click(function(){	
			if( nbMove2 > 2) {
				$("#block2").hide();
				$("#block1").show();
				$("#gauche1").show();
				$("#haut1").show();
				$("#droite1").show();
				$("#bas1").show();	
				nbMove= 0;
				return;			
			}
			$(hides).hide();
			$(hides2).hide();
			$(hides3).hide();


			var nouvelleCase2 = caseJoueur2 - nb;
			var ancienneCase = nouvelleCase2 + nb2;		
			var caseHashirama = casesTotale[nouvelleCase2].numerocase;		
			Warriors[1].positionX = casesTotale[nouvelleCase2].positionX;
			Warriors[1].positionY = casesTotale[nouvelleCase2].positionY;
			console.log(ancienneCase);
			console.log(nouvelleCase2);
			console.log(caseJoueur2);
			caseJoueur2 = nouvelleCase2;
			if ((casesTotale[nouvelleCase2].id === "casevide")|| (casesTotale[nouvelleCase2].id === "weapon")){
					Warriors[1].nbCase = caseHashirama;
					var image = new Image();
					image.src = "hashirama.jpg";
					image.addEventListener('load', function() {;
						context.drawImage(image, casesTotale[nouvelleCase2].positionX, casesTotale[nouvelleCase2].positionY, tailleCase, tailleCase);
					}, false);
			} else if (casesTotale[caseJoueur2 - nbProchain].id = 'obstacle')  {
						caseJoueur2 = nouvelleCase2 + nb2;
						$("#block2").hide();
						$("#block1").show();
						$("#gauche1").show();
						$("#haut1").show();
						$("#droite1").show();
						$("#bas1").show();	
						nbMove= 0;
						return;
			} 

			remplacement(nouvelleCase2, personnage2, "#attaque2");
			casesTotale[ancienneCase].id = 'casevide';
			resetCase(ancienneCase);
			croissement (caseJoueur1, caseJoueur2);
			nbMove2++;

		})

	};

	// mise en fin de tour, pour chaque boutton correspondant 

	$("#turn1").click(function(){	
		$("#block1").hide();
		$("#block2").show();
		$("#gauche2").show();
		$("#haut2").show();
		$("#droite2").show();
		$("#bas2").show();	
		nbMove2 = 0;
	});



	$("#turn2").click(function(){	
		$("#block2").hide();
		$("#block1").show();
		$("#gauche1").show();
		$("#haut1").show();
		$("#droite1").show();
		$("#bas1").show();	
		nbMove= 0;
	});


	// mise en oeuvre des bouttons de déplacements de madara
	deplacement(10, 10, '#haut1', '#bas1', '#gauche1', '#droite1', 10);		
	deplacement(1, 1, '#gauche1','#bas1', '#haut1', '#droite1',1);
	deplacement((-1), (-1), '#droite1', '#bas1', '#gauche1', '#haut1', (-1));
	deplacement((-10), (-10),'#bas1','#haut1', '#gauche1', '#droite1', (-10));

	// mise en oeuvre des bouttons de déplacements de hashirama
	deplacement2(10, 10, '#haut2', '#bas2', '#gauche2', '#droite2', 10);
	deplacement2(1, 1, '#gauche2', '#bas2', '#haut2', '#droite2',1);
	deplacement2((-1), (-1), '#droite2' , '#bas2', '#gauche2', '#haut2', (-1));
	deplacement2((-10), (-10), '#bas2', '#haut2', '#gauche2', '#droite2', (-10));



	// Définition des différentes actions, selon les bouttons cliquées
	$('#fight1, #defendre1, #fight2, #defendre2').click(function () {
		if (this.id == 'fight1') {   
			personnage2.vie = personnage2.vie - personnage1.attaque;
			$("#vie2").html(personnage2.vie);
			$("#fight1").hide();
			$("#defendre1").hide();
			$("#fight2").show();
			$("#defendre2").show();
			if (personnage2.vie <= 0) { // fin du jeu si...
				alert("Madara est le vainqeur!");
				$("#container").hide();
			}
	   } else if (this.id == 'defendre1') {		
			personnage1.vie= personnage1.vie + personnage2.attaque/2;
			$("#fight1").hide();
			$("#defendre1").hide();
			$("#fight2").show();
			$("#defendre2").show();
	   } else if (this.id == 'fight2') {
			$("#vie1").html(personnage1.vie = personnage1.vie - personnage2.attaque);
			$("#fight1").show();
			$("#defendre1").show();
			$("#fight2").hide();
			$("#defendre2").hide();
			if (personnage1.vie <= 0) {// fin du jeu si...
				alert('Hashirama est le vainqueur!');
				$("#container").hide();
			}
	   } else if (this.id == 'defendre2') {
			personnage2.vie= personnage2.vie + personnage1.attaque/2;
			$("#fight1").show();
			$("#fight2").hide();
			$("#defendre2").hide();
	   } 	   
	});
	 
});



