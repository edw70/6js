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





// Fonction pour la création de tâches
validation.addEventListener("click", function(e){
    e.preventDefault();
    nameValue =texname.value;
    const timestamp = Date.now();
    const taskId = `task_${timestamp}`;

    // if (taskId.startsWith("task_")) {
    //     updateModal({target: {getAttribute: () => taskId}});
    // }
    

    if (selectedStatus === ""){
        selectedStatus = "A faire";
    }
    else if(selectedStatus === "A faire"){
        let newTaskElement = document.createElement("li");
        newTaskElement.id = "rouge";
 //       newTaskElement.className = "task";
        newTaskElement.textContent = nameValue;
        newTaskElement.setAttribute("data-task-id", taskId);
        aFaire.appendChild(newTaskElement);
        let poubelle = document.createElement("span");
        poubelle.classList.add("poubelle");
        newTaskElement.appendChild(poubelle);
    }else if (selectedStatus === "En cours"){
        let newTaskElement = document.createElement("li");
        newTaskElement.id = "jaune";
 //       newTaskElement.className = "task";
        newTaskElement.textContent=nameValue;
        enCours.appendChild(newTaskElement);
        let poubelle = document.createElement("span");
        poubelle.classList.add("poubelle");
        newTaskElement.appendChild(poubelle);
    }else if (selectedStatus === "Terminés"){
        let newTaskElement = document.createElement("li");
        newTaskElement.id = "bleu";
//        newTaskElement.className = "task";
        newTaskElement.textContent = nameValue;
        terminés.appendChild(newTaskElement);
        let poubelle = document.createElement("span");
        poubelle.classList.add("poubelle");
        newTaskElement.appendChild(poubelle);
    }
    date = document.getElementById("date").value;
    descriptask = document.getElementById("descriptask").value;
    console.log(date, descriptask);
    const taskData = {
        name: nameValue,
        status: selectedStatus,
        echeance: date,
        objectif: descriptask,
    };
    localStorage.setItem(taskId, JSON.stringify(taskData));
    location.reload();

    newTask.style.display = "none";
    classement.style.display = "block";
    texname.value = "";
    selectedStatus = "";
    document.getElementById("date").value = "";
    document.getElementById("descriptask").value = "";

    

});

// Chargement initial des données depuis le LocalStorage
document.addEventListener('DOMContentLoaded', function() {
     // Parcourir les entrées du localStorage
     for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        if (key.startsWith("task")){
            let storedData = JSON.parse(localStorage.getItem(key));
            if(storedData){
                 // Créer un élément DOM pour chaque tâche et l'ajouter à la section correspondante
                const newTaskElement = document.createElement("li");
     //           newTaskElement.className = "task";
                newTaskElement.textContent = storedData.name;
                newTaskElement.setAttribute('data-task-id', key);
                let poubelle = document.createElement("span");
                poubelle.classList.add("poubelle");
                // Ajoutez cet élément DOM à la section correspondante en fonction du statut (A faire, En cours, Terminés)
                if (storedData.status === "A faire"){
                    newTaskElement.id = "rouge";
                    aFaire.appendChild(newTaskElement);
                    newTaskElement.appendChild(poubelle);
                }else if (storedData.status === "En cours"){
                    newTaskElement.id = "jaune";
                    enCours.appendChild(newTaskElement);
                    newTaskElement.appendChild(poubelle);
                }else if (storedData.status === "Terminés"){
                    newTaskElement.id = "bleu";
                    terminés.appendChild(newTaskElement);
                    newTaskElement.appendChild(poubelle);
                }
            
            }
        }
    }
});

// Ouverture du modal avec les données de la tâche sélectionnée
aFaire.addEventListener('click', openModalDataHandler);
enCours.addEventListener('click', openModalDataHandler);
terminés.addEventListener('click', openModalDataHandler);

// Gestionnaire d'ouverture de modal
function openModalDataHandler(e) {
    openModalData(e);
}

// Fonction pour ouvrir le modal avec les données de la tâche sélectionnée
function openModalData(e) {
    if (e.target.tagName === "LI") {
        taskId = e.target.getAttribute("data-task-id");
        console.log("Opening modal for task ID:", taskId); // Débogage
        storedData = JSON.parse(localStorage.getItem(taskId));
        console.log("Stored data:", storedData);  // Débogage
        if (storedData) {
           /*  texname.value = storedData.name || "";
            selectedStatus = storedData.status || "";
            descriptask.value = storedData.objectif || "";
            date.value = storedData.echeance || ""; */
            console.log(storedData.objectif, storedData.echeance, storedData.status, storedData.name);// Débogage
            updateModal(storedData);
        }
        newTask.style.display = "block";
        classement.style.display = "none";
    }
}

// Mise à jour du contenu du modal avec les données de la tâche
function updateModal(storedData) {
    texname.value = storedData.name || "";
    selectedStatus.value = storedData.status || "";
    descriptask.value = storedData.objectif || "";
    date.value = storedData.echeance || "";
    newTask.style.display = "none";
    classement.style.display = "block";
    
}

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