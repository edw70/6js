// Obtention du template
const itemTemplate = document.querySelector("#item-template");

// Clonage du template
const clonedTemplate = document.importNode(itemTemplate.content, true);

// Remplissage des données
//const itemTitle = clonedTemplate.querySelector(".item-title");
const titre = clonedTemplate.querySelector("h1");
const trier = clonedTemplate.querySelector("#trier");

//itemTitle.textContent = "Titre de l'élément";
titre.textContent = "TO DO LIST";
trier.textContent = "trier";
// Ajout du contenu cloné au DOM
const appContainer = document.querySelector("#app");
appContainer.appendChild(clonedTemplate);