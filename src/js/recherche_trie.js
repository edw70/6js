
const aFaire = document.getElementById("a_faire");
const enCours = document.getElementById("en_cours");
const terminés = document.getElementById("terminer");
const trier = document.getElementById("trier");
const modalTrier = document.getElementById("modal_trier");
const toutes = document.getElementById("toutes");
const m_affaire = document.getElementById("m_afaire");
const m_encours = document.getElementById("m_encours");
const m_terminés = document.getElementById("m_terminés");

/*fonction pour faire apparaitre le modal trier*/
trier.addEventListener("click", function(e){
    e.preventDefault();
    modalTrier.style.display = "block";
}) 

toutes.addEventListener("click", function(e){
    aFaire.style.display = "block";
    enCours.style.display = "block";
    terminés.style.display = "block";
    modalTrier.style.display = "none";
});

m_affaire.addEventListener("click", function(e){
    aFaire.style.display = "block";
    enCours.style.display = "none";
    terminés.style.display = "none";
    modalTrier.style.display = "none";
});

m_encours.addEventListener("click", function(e){
    aFaire.style.display = "none";
    enCours.style.display = "block";
    terminés.style.display = "none";
    modalTrier.style.display = "none";
});

m_terminés.addEventListener("click", function(e){
    aFaire.style.display = "none";
    enCours.style.display = "none";
    terminés.style.display = "block";
    modalTrier.style.display = "none";
});




/*fonction de recherche dans le document*/
const search = document.getElementById("recherche");

search.addEventListener("keyup", function(e){
    const searchedLetters = e.target.value;
    const liste = document.querySelectorAll("li");
    console.log(liste);//deboge
    filterElements(searchedLetters, liste);
});

function filterElements(letters, elements) {
    if(letters.length > 2) {
        for (let i = 0; i < elements.length; i++){
            if(elements[i].innerText.match(new RegExp(letters, "i"))) {
                elements[i].style.display = "block";
            }else {
                elements[i].style.display = "none";
            }
        }
    }
}

/*fonction draggable*/
/*fonction draggable*/
let draggingElement = null;
const reverseStatusMappings = {
    "a_faire": "A faire",
    "en_cours": "En cours",
    "terminer": "Terminés"
};

document.addEventListener("dragstart", function (e) {
    draggingElement = e.target;
    console.log("Element en cours de glissement :", draggingElement);
    e.dataTransfer.setData('text/plain', "");
});

document.addEventListener("dragover", function (e) {
    console.log("dragover déclenché.");
    e.preventDefault();
});

document.addEventListener("drop", function (e) {
    if (draggingElement) {
        e.preventDefault();
        console.log("drop déclenché.");

        const parent = draggingElement.parentNode;
        const target = e.target;

        // Si les parents sont les mêmes (même liste d'éléments)
        if (parent === target.parentNode) {
            const targetIndex = Array.from(parent.children).indexOf(target);
            const draggingIndex = Array.from(parent.children).indexOf(draggingElement);

            if (targetIndex !== -1 && draggingIndex !== -1) {
                if (targetIndex > draggingIndex) {
                    parent.insertBefore(draggingElement, target.nextSibling);
                } else {
                    parent.insertBefore(draggingElement, target);
                }
            }
        } else {
            // Supprimer l'ancienne entrée du localStorage
            const oldTaskId = draggingElement.getAttribute("data-task-id");
            localStorage.removeItem(oldTaskId);

            // Mettre à jour la couleur en fonction du nouveau statut
            const taskStatus = reverseStatusMappings[target.parentNode.id]; // Utilisez le mappage
            draggingElement.dataset.status = taskStatus;

            if (taskStatus === "A faire") {
                draggingElement.id = "rouge";
            } else if (taskStatus === "En cours") {
                draggingElement.id = "jaune";
            } else if (taskStatus === "Terminés") {
                draggingElement.id = "bleu";
            }

            // Déplacer l'élément vers la nouvelle liste
            parent.removeChild(draggingElement);
            target.parentNode.insertBefore(draggingElement, target);

            // Mettre à jour les données dans le localStorage
            const taskId = draggingElement.getAttribute("data-task-id");
            const echeanceValue = draggingElement.getAttribute("data-echeance");
            const objectifValue = draggingElement.getAttribute("data-objectif");
            const taskData = {
                name: draggingElement.textContent,
                status: taskStatus,
                echeance: echeanceValue,
                objectif: objectifValue,
            };
            localStorage.setItem(taskId, JSON.stringify(taskData));
        }
        draggingElement = null;
    }
});





