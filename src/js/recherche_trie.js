
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
trier.addEventListener("click", function (e) {
    e.preventDefault();
    modalTrier.style.display = "block";
})

toutes.addEventListener("click", function (e) {
    aFaire.style.display = "block";
    enCours.style.display = "block";
    terminés.style.display = "block";
    modalTrier.style.display = "none";
});

m_affaire.addEventListener("click", function (e) {
    aFaire.style.display = "block";
    enCours.style.display = "none";
    terminés.style.display = "none";
    modalTrier.style.display = "none";
});

m_encours.addEventListener("click", function (e) {
    aFaire.style.display = "none";
    enCours.style.display = "block";
    terminés.style.display = "none";
    modalTrier.style.display = "none";
});

m_terminés.addEventListener("click", function (e) {
    aFaire.style.display = "none";
    enCours.style.display = "none";
    terminés.style.display = "block";
    modalTrier.style.display = "none";
});




/*fonction de recherche dans le document*/
const search = document.getElementById("recherche");

search.addEventListener("keyup", function (e) {
    const searchedLetters = e.target.value;
    const liste = document.querySelectorAll("li");
    filterElements(searchedLetters, liste);
});

function filterElements(letters, elements) {
    if (letters.length > 1) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerText.match(new RegExp(letters, "i"))) {
                elements[i].style.display = "block";
            } else {
                elements[i].style.display = "none";
            }
        }
    }
}


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

           
            let taskStatus; 
            const dropZones = document.querySelectorAll(".droppable-zone");
            const rect0 = dropZones[0].getBoundingClientRect();
            const rect1 = dropZones[1].getBoundingClientRect();
            const rect = dropZones[2].getBoundingClientRect();
            const dropX = e.clientX;
            const dropY = e.clientY;
   
    //        console.log("rect", rect);
      //      console.log("dropX", dropX, "dropY", dropY);
            draggingElement.removeAttribute("class");//enleve la class
      
            if((dropX > rect0.left && dropX < rect0.right) && (dropY > rect0.top && dropY < rect0.bottom) ){
                taskStatus = reverseStatusMappings[dropZones[0].id];
                draggingElement.classList.add ("rouge"); 
                dropZones[0].appendChild(draggingElement);
             
            }
            else if((dropX > rect1.left && dropX < rect1.right) && (dropY > rect1.top && dropY < rect1.bottom) ){
                taskStatus = reverseStatusMappings[dropZones[1].id];
                draggingElement.classList.add("jaune");
                dropZones[1].appendChild(draggingElement);
             
            }
            else if((dropX > rect.left && dropX < rect.right) && (dropY > rect.top && dropY < rect.bottom) ){
                taskStatus = reverseStatusMappings[dropZones[2].id];
                draggingElement.classList.add("bleu");
                dropZones[2].appendChild(draggingElement);
             
            }

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
