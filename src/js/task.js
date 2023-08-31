const ajout = document.querySelector("#plus");
const newTask = document.getElementById("newTask");
const classement = document.getElementById("classement");
const status1 = document.getElementById("status");
const modalStatus = document.getElementById("modal_status");
let selectedStatus = "";
let validation = document.getElementById("validation");
const texname = document.getElementById("texname");
let nameValue = "";
const aFaire = document.getElementById("a_faire");
const enCours = document.getElementById("en_cours");
const terminés = document.getElementById("terminer");

let date = document.getElementById("date");
let descriptask = document.getElementById("descriptask");


// Fonction pour faire apparaître le modal newTask
ajout.addEventListener('click', function(e) {
    e.preventDefault();
    classement.style.display = "none";
    newTask.style.display = "block";
});

// Fonction pour faire apparaître le modal status
status1.addEventListener("click", function(e) {
    e.preventDefault();
    modalStatus.style.display = "block";
});

// Enregistre la valeur cliquée
modalStatus.addEventListener("click", function(e) {
    if (e.target.tagName === "P") {
        selectedStatus = e.target.textContent;
        modalStatus.style.display = "none";
    }
});
validation.addEventListener("click", function(e){
    e.preventDefault();
    
    // Récupération des valeurs des champs
    nameValue = texname.value;

    let taskId = null; // Déclaration de taskId 

    if (selectedStatus === "") {
        selectedStatus = "A faire";
    }

   /*  // Vérifie si une tâche existante est sélectionnée pour modification
    const clickedTask = document.querySelector(".selected-task");
 //   console.log(clickedTask);
    if (clickedTask) {
        taskId = clickedTask.getAttribute("data-task-id");
    } */
     // Vérifie si une tâche existante est sélectionnée pour modification
     const clicked = document.querySelector(".selected-task");
     //   console.log(clickedTask);
        if (clicked) {
            taskId = clicked.getAttribute("data-task-id");
        }

    if (taskId) {
        // Mettre à jour la tâche existante
        const taskData = {
            name: nameValue,
            status: selectedStatus,
            echeance: date.value,
            objectif: descriptask.value,
        };
        localStorage.setItem(taskId, JSON.stringify(taskData));

        updateInterface(); // Mettre à jour l'interface
    } else {
        // Créer une nouvelle tâche
        const timestamp = Date.now();
        taskId = `task_${timestamp}`; // Utilise taskId ici
        const taskData = {
            name: nameValue,
            status: selectedStatus,
            echeance: date.value,
            objectif: descriptask.value,
        };
        localStorage.setItem(taskId, JSON.stringify(taskData)); // Utilise taskId ici

        updateInterface(); // Mettre à jour l'interface
    }
});




// Ajout de la gestion de l'ouverture du modal pour les tâches existantes

aFaire.addEventListener('click', openModalData);
enCours.addEventListener('click', openModalData);
terminés.addEventListener('click', openModalData);


/// Fonction pour ouvrir le modal avec les données de la tâche sélectionnée
function openModalData(e) {

 // Retirez la classe .selected-task des éléments précédemment sélectionnés
 const selectedTask = document.querySelector(".selected-task");
 if (selectedTask) {
     selectedTask.classList.remove("selected-task");
 }


    if (e.target.tagName === "LI") {
        const clickedTask = e.target;
        taskId = clickedTask.getAttribute("data-task-id");
        clickedTask.classList.add("selected-task");
 //       console.log("Opening modal for task ID:", taskId); // Débogage
        storedData = JSON.parse(localStorage.getItem(taskId));
        
        if (storedData) {
   //         console.log("Stored data:", storedData);  // Débogage
            texname.value = storedData.name || ""; 
            selectedStatus = storedData.status || "";
            descriptask.value = storedData.objectif || "";
            date.value = storedData.echeance || ""; 
    //        console.log(storedData.objectif, storedData.echeance, storedData.status, storedData.name);// Débogage
            
            newTask.style.display = "block";
            classement.style.display = "none";
        }
    }
};



// Mise à jour de l'interface après l'ajout d'une tâche
function updateInterface() {
    // Réinitialisation des valeurs
    texname.value = "";
    selectedStatus = "";
    date.value = "";
    descriptask.value = "";
    newTask.style.display = "none";
    classement.style.display = "block";

    // Effacement des anciennes tâches affichées
    clearTasks(aFaire);
    clearTasks(enCours);
    clearTasks(terminés);

    // Réaffichage des tâches depuis le stockage local
    displayTasks();
}; 

// Effacement des tâches d'une section donnée
function clearTasks(section) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
};

// Affichage des tâches depuis le stockage local
function displayTasks() {
    // Parcourir les entrées du localStorage
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        if (key.startsWith("task")){
            let storedData = JSON.parse(localStorage.getItem(key));
            if(storedData){
                 // Créer un élément DOM pour chaque tâche et l'ajouter à la section correspondante
                 const newTaskElement = document.createElement("li");
                    newTaskElement.textContent = storedData.name;
                    newTaskElement.setAttribute('data-task-id', key);
                    newTaskElement.id = key; //j
                    newTaskElement.setAttribute('data-status', storedData.status); // Utilisez data-status
                    newTaskElement.setAttribute('data-echeance', storedData.echeance); // Ajoutez cet attribut
                    newTaskElement.setAttribute('data-objectif', storedData.objectif); // Ajoutez cet attribut
                    let poubelle = document.createElement("span");
                    poubelle.classList.add("poubelle");
                // Ajoutez cet élément DOM à la section correspondante en fonction du statut (A faire, En cours, Terminés)
                    if (storedData.status === "A faire"){
                        newTaskElement.classList.add("rouge");//jj
                        // newTaskElement.id = "rouge";//jj
                        newTaskElement.setAttribute("draggable", "true");
                        aFaire.appendChild(newTaskElement);
                        newTaskElement.appendChild(poubelle);
                    }else if (storedData.status === "En cours"){
                        newTaskElement.classList.add("jaune");//jj
                        // newTaskElement.id = "jaune"; //j
                        newTaskElement.setAttribute("draggable", "true");
                        enCours.appendChild(newTaskElement);
                        newTaskElement.appendChild(poubelle);
                    }else if (storedData.status === "Terminés"){
                        newTaskElement.classList.add("bleu");//jj
                        // newTaskElement.id = "bleu"; //j
                        newTaskElement.setAttribute("draggable", "true");
                        terminés.appendChild(newTaskElement);
                        newTaskElement.appendChild(poubelle);
                    }
            }
        }
    }
};



// Chargement initial des données depuis le LocalStorage
document.addEventListener('DOMContentLoaded', function() {
    displayTasks();
});

/*suppression task */
function suppressionTask(classement){
    classement.addEventListener("click", function(e){
        if(e.target.classList.contains("poubelle")){
            const taskDelete = confirm("Êtes-vous sûr de vouloir supprimer cette tache ?");
            if(taskDelete){
                const taskElement = e.target.closest("li");
                if(taskElement){
                    classement.removeChild(taskElement);

                    const taskId = taskElement.getAttribute("data-task-id");
                    localStorage.removeItem(taskId);
                }
            }
        }
    })
}
suppressionTask(aFaire);
suppressionTask(enCours);
suppressionTask(terminés);



