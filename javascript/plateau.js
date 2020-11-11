const canvas = document.getElementById('plateau'),
  context = canvas.getContext('2d');
  largeurCanvas= canvas.width  = 600;
  hauteurCanvas= canvas.height = 600;


// On définit des variables
  tailleCase = 60, // Taille d'une case du plateau
  nbCasesLargeur = largeurCanvas / tailleCase, // 10 cases
  nbCasesHauteur = hauteurCanvas / tailleCase,
  nombreCases = nbCasesLargeur * nbCasesHauteur, // 100 cases
  casesTotale = [];
// Fonction pour crée chaque case du plateau
function creerPlateau() {
  context.fillStyle = "white";
  context.fillRect(0, 0, largeurCanvas, hauteurCanvas);

  let colonne = 0,
    ligne = 0;

  // Définition des cases
  for (let i = 0; i < nombreCases; i++) {
    context.strokeStyle = 'purple';
    context.strokeRect(tailleCase * colonne, tailleCase * ligne, tailleCase, tailleCase); // Crée un case d'1/100 du plateau

    // création des caractéristiques pour chaque case du plateau
    
    casesTotale[i] = {
      numerocase: i,
      id: "casevide",
      positionX: tailleCase * colonne + 1,
      positionY: tailleCase * ligne + 1
    };

    // Après avoir créé la case, on passe à la colonne suivante
    colonne++;

    // Si on arrive à 10 cases, on passe à la ligne suivante
    if (colonne === nbCasesLargeur) {
      colonne = 0;
      ligne++;
    }
  }
  const nombreObstacles = 10; // On veut 10 obstacles sur le plateau

// création des cases obstacles
for (let i = 0; i < nombreObstacles; i++) {
	let numeroCaseAleatoire = randomNumber();
	if (casesTotale[numeroCaseAleatoire].id != "casevide") {
		--i;
	} else {
		casesTotale[numeroCaseAleatoire].id = "obstacle"; // si ça tombe sur une case vide, alors id = obstacle.
		context.fillStyle = "grey";
		context.fillRect(casesTotale[numeroCaseAleatoire].positionX, casesTotale[numeroCaseAleatoire].positionY, tailleCase, tailleCase);
		context.strokeStyle = 'purple';
		context.strokeRect(casesTotale[numeroCaseAleatoire].positionX, casesTotale[numeroCaseAleatoire].positionY, tailleCase, tailleCase); 
	}
}
}

creerPlateau();
