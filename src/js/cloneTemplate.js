// Obtention du template
const itemTemplate = document.querySelector("#item-template");

// Clonage du template
const clonedTemplate = document.importNode(itemTemplate.content, true);

// Remplissage des données
//const itemTitle = clonedTemplate.querySelector(".item-title");
const titre = clonedTemplate.querySelector("h1");
const trier = clonedTemplate.querySelector("#trier");
const ajout = clonedTemplate.querySelector("#plus");
const aFaire = clonedTemplate.querySelector("#t_faire");
const enCours = clonedTemplate.querySelector("#t_cours");
const terminés = clonedTemplate.querySelector("#t_terminer");
const toutes = clonedTemplate.querySelector("#toutes");
const mAfaire = clonedTemplate.querySelector("#m_afaire");
const mEncours = clonedTemplate.querySelector("#m_encours");
const mTerminés = clonedTemplate.querySelector("#m_terminés");
const sAfaire = clonedTemplate.querySelector("#s_afaire");
const sEncours = clonedTemplate.querySelector("#s_encours");
const sTerminés = clonedTemplate.querySelector("#s_terminés");
const nametask = clonedTemplate.querySelector("#name");
const statustask = clonedTemplate.querySelector("#status");
const echeance = clonedTemplate.querySelector("#echeance");
const objectif = clonedTemplate.querySelector("#objectif");






//itemTitle.textContent = "Titre de l'élément";
titre.textContent = "TO DO LIST";
trier.textContent = "trier";
ajout.textContent = "+";
aFaire.textContent = "A faire :";
enCours.textContent = "En cours :";
terminés.textContent = "Terminés :";
toutes.textContent = "Toutes";
mAfaire.textContent = "A faire";
mEncours.textContent = "En cours";
mTerminés.textContent = "Terminés";
sAfaire.textContent = "A faire";
sEncours.textContent = "En cours";
sTerminés.textContent = "Terminés";
nametask.textContent = "Nom de la tache :";
statustask.textContent = "status";
echeance.textContent = "Echéance :";
objectif.textContent = "Objectif :";



// Ajout du contenu cloné au DOM
const appContainer = document.querySelector("#app");
appContainer.appendChild(clonedTemplate);


