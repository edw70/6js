/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_cloneTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/cloneTemplate */ \"./src/js/cloneTemplate.js\");\n/* harmony import */ var _js_cloneTemplate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_cloneTemplate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/task */ \"./src/js/task.js\");\n/* harmony import */ var _js_task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_task__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_recherche_trie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/recherche_trie */ \"./src/js/recherche_trie.js\");\n/* harmony import */ var _js_recherche_trie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_recherche_trie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_darkmode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/darkmode */ \"./src/js/darkmode.js\");\n/* harmony import */ var _js_darkmode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_darkmode__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/cloneTemplate.js":
/*!*********************************!*\
  !*** ./src/js/cloneTemplate.js ***!
  \*********************************/
/***/ (() => {

eval("// Obtention du template\nvar itemTemplate = document.querySelector(\"#item-template\");\n\n// Clonage du template\nvar clonedTemplate = document.importNode(itemTemplate.content, true);\n\n// Remplissage des données\n//const itemTitle = clonedTemplate.querySelector(\".item-title\");\nvar titre = clonedTemplate.querySelector(\"#to-do\");\nvar titre2 = clonedTemplate.querySelector(\"#to-do2\");\nvar trier = clonedTemplate.querySelector(\"#trier\");\nvar ajout = clonedTemplate.querySelector(\"#plus\");\nvar aFaire = clonedTemplate.querySelector(\"#t_faire\");\nvar enCours = clonedTemplate.querySelector(\"#t_cours\");\nvar terminés = clonedTemplate.querySelector(\"#t_terminer\");\nvar toutes = clonedTemplate.querySelector(\"#toutes\");\nvar mAfaire = clonedTemplate.querySelector(\"#m_afaire\");\nvar mEncours = clonedTemplate.querySelector(\"#m_encours\");\nvar mTerminés = clonedTemplate.querySelector(\"#m_terminés\");\nvar sAfaire = clonedTemplate.querySelector(\"#s_afaire\");\nvar sEncours = clonedTemplate.querySelector(\"#s_encours\");\nvar sTerminés = clonedTemplate.querySelector(\"#s_terminés\");\nvar nametask = clonedTemplate.querySelector(\"#name\");\nvar statustask = clonedTemplate.querySelector(\"#status\");\nvar echeance = clonedTemplate.querySelector(\"#echeance\");\nvar objectif = clonedTemplate.querySelector(\"#objectif\");\n\n//itemTitle.textContent = \"Titre de l'élément\";\ntitre.textContent = \"TO DO LIST\";\ntitre2.textContent = \"TO DO LIST\";\ntrier.textContent = \"trier\";\najout.textContent = \"+\";\naFaire.textContent = \"A faire :\";\nenCours.textContent = \"En cours :\";\nterminés.textContent = \"Terminés :\";\ntoutes.textContent = \"Toutes\";\nmAfaire.textContent = \"A faire\";\nmEncours.textContent = \"En cours\";\nmTerminés.textContent = \"Terminés\";\nsAfaire.textContent = \"A faire\";\nsEncours.textContent = \"En cours\";\nsTerminés.textContent = \"Terminés\";\nnametask.textContent = \"Nom de la tache :\";\nstatustask.textContent = \"status\";\necheance.textContent = \"Echéance :\";\nobjectif.textContent = \"Objectif :\";\n\n// Ajout du contenu cloné au DOM\nvar appContainer = document.querySelector(\"#app\");\nappContainer.appendChild(clonedTemplate);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/cloneTemplate.js?");

/***/ }),

/***/ "./src/js/darkmode.js":
/*!****************************!*\
  !*** ./src/js/darkmode.js ***!
  \****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function (e) {\n  var slider = document.querySelector(\"#dark\");\n  var body = document.body;\n\n  // Récupérez la valeur de 'isDarkMode' depuis le local storage\n  var isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));\n  if (isDarkMode) {\n    body.classList.add(\"dark\");\n  } else {\n    body.classList.remove(\"dark\");\n  }\n\n  // Ajoutez un écouteur d'événement sur le slider\n  if (slider != null) {\n    slider.addEventListener(\"click\", function (e) {\n      console.log(slider);\n      body.classList.toggle(\"dark\");\n      var isDark = body.classList.contains(\"dark\");\n      localStorage.setItem(\"isDarkMode\", JSON.stringify(isDark));\n    });\n  }\n});\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n  var slider1 = document.querySelector(\"#dark1\");\n  var body = document.body;\n\n  // Récupérez la valeur de 'isDarkMode' depuis le local storage\n  var isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));\n  if (isDarkMode) {\n    body.classList.add(\"dark\");\n  } else {\n    body.classList.remove(\"dark\");\n  }\n\n  // Ajoutez un écouteur d'événement sur le slider\n  if (slider1 != null) {\n    slider1.addEventListener(\"click\", function (e) {\n      console.log(slider1);\n      body.classList.toggle(\"dark\");\n      var isDark = body.classList.contains(\"dark\");\n      localStorage.setItem(\"isDarkMode\", JSON.stringify(isDark));\n    });\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/darkmode.js?");

/***/ }),

/***/ "./src/js/recherche_trie.js":
/*!**********************************!*\
  !*** ./src/js/recherche_trie.js ***!
  \**********************************/
/***/ (() => {

eval("var aFaire = document.getElementById(\"a_faire\");\nvar enCours = document.getElementById(\"en_cours\");\nvar terminés = document.getElementById(\"terminer\");\nvar trier = document.getElementById(\"trier\");\nvar modalTrier = document.getElementById(\"modal_trier\");\nvar toutes = document.getElementById(\"toutes\");\nvar m_affaire = document.getElementById(\"m_afaire\");\nvar m_encours = document.getElementById(\"m_encours\");\nvar m_terminés = document.getElementById(\"m_terminés\");\n\n/*fonction pour faire apparaitre le modal trier*/\ntrier.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  modalTrier.style.display = \"block\";\n});\ntoutes.addEventListener(\"click\", function (e) {\n  aFaire.style.display = \"block\";\n  enCours.style.display = \"block\";\n  terminés.style.display = \"block\";\n  modalTrier.style.display = \"none\";\n});\nm_affaire.addEventListener(\"click\", function (e) {\n  aFaire.style.display = \"block\";\n  enCours.style.display = \"none\";\n  terminés.style.display = \"none\";\n  modalTrier.style.display = \"none\";\n});\nm_encours.addEventListener(\"click\", function (e) {\n  aFaire.style.display = \"none\";\n  enCours.style.display = \"block\";\n  terminés.style.display = \"none\";\n  modalTrier.style.display = \"none\";\n});\nm_terminés.addEventListener(\"click\", function (e) {\n  aFaire.style.display = \"none\";\n  enCours.style.display = \"none\";\n  terminés.style.display = \"block\";\n  modalTrier.style.display = \"none\";\n});\n\n/*fonction de recherche dans le document*/\nvar search = document.getElementById(\"recherche\");\nsearch.addEventListener(\"keyup\", function (e) {\n  var searchedLetters = e.target.value;\n  var liste = document.querySelectorAll(\"li\");\n  filterElements(searchedLetters, liste);\n});\nfunction filterElements(letters, elements) {\n  if (letters.length > 1) {\n    for (var i = 0; i < elements.length; i++) {\n      if (elements[i].innerText.match(new RegExp(letters, \"i\"))) {\n        elements[i].style.display = \"block\";\n      } else {\n        elements[i].style.display = \"none\";\n      }\n    }\n  }\n}\n\n/*fonction draggable*/\nvar draggingElement = null;\nvar reverseStatusMappings = {\n  \"a_faire\": \"A faire\",\n  \"en_cours\": \"En cours\",\n  \"terminer\": \"Terminés\"\n};\ndocument.addEventListener(\"dragstart\", function (e) {\n  draggingElement = e.target;\n  console.log(\"Element en cours de glissement :\", draggingElement);\n  e.dataTransfer.setData('text/plain', \"\");\n});\ndocument.addEventListener(\"dragover\", function (e) {\n  console.log(\"dragover déclenché.\");\n  e.preventDefault();\n});\ndocument.addEventListener(\"drop\", function (e) {\n  if (draggingElement) {\n    e.preventDefault();\n    console.log(\"drop déclenché.\");\n    var parent = draggingElement.parentNode;\n    var target = e.target;\n    // Si les parents sont les mêmes (même liste d'éléments)\n    if (parent === target.parentNode) {\n      var targetIndex = Array.from(parent.children).indexOf(target);\n      var draggingIndex = Array.from(parent.children).indexOf(draggingElement);\n      if (targetIndex !== -1 && draggingIndex !== -1) {\n        if (targetIndex > draggingIndex) {\n          parent.insertBefore(draggingElement, target.nextSibling);\n        } else {\n          parent.insertBefore(draggingElement, target);\n        }\n      }\n    } else {\n      // Supprimer l'ancienne entrée du localStorage\n      var oldTaskId = draggingElement.getAttribute(\"data-task-id\");\n      localStorage.removeItem(oldTaskId);\n      var taskStatus;\n      var dropZones = document.querySelectorAll(\".droppable-zone\");\n      var rect0 = dropZones[0].getBoundingClientRect();\n      var rect1 = dropZones[1].getBoundingClientRect();\n      var rect = dropZones[2].getBoundingClientRect();\n      var dropX = e.clientX;\n      var dropY = e.clientY;\n\n      //        console.log(\"rect\", rect);\n      //      console.log(\"dropX\", dropX, \"dropY\", dropY);\n      draggingElement.removeAttribute(\"class\"); //enleve la class\n\n      if (dropX > rect0.left && dropX < rect0.right && dropY > rect0.top && dropY < rect0.bottom) {\n        taskStatus = reverseStatusMappings[dropZones[0].id];\n        draggingElement.classList.add(\"rouge\");\n        dropZones[0].appendChild(draggingElement);\n      } else if (dropX > rect1.left && dropX < rect1.right && dropY > rect1.top && dropY < rect1.bottom) {\n        taskStatus = reverseStatusMappings[dropZones[1].id];\n        draggingElement.classList.add(\"jaune\");\n        dropZones[1].appendChild(draggingElement);\n      } else if (dropX > rect.left && dropX < rect.right && dropY > rect.top && dropY < rect.bottom) {\n        taskStatus = reverseStatusMappings[dropZones[2].id];\n        draggingElement.classList.add(\"bleu\");\n        dropZones[2].appendChild(draggingElement);\n      }\n\n      // Mettre à jour les données dans le localStorage\n      var taskId = draggingElement.getAttribute(\"data-task-id\");\n      var echeanceValue = draggingElement.getAttribute(\"data-echeance\");\n      var objectifValue = draggingElement.getAttribute(\"data-objectif\");\n      var taskData = {\n        name: draggingElement.textContent,\n        status: taskStatus,\n        echeance: echeanceValue,\n        objectif: objectifValue\n      };\n      localStorage.setItem(taskId, JSON.stringify(taskData));\n    }\n    draggingElement = null;\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/recherche_trie.js?");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ (() => {

eval("var ajout = document.querySelector(\"#plus\");\nvar newTask = document.getElementById(\"newTask\");\nvar classement = document.getElementById(\"classement\");\nvar status1 = document.getElementById(\"status\");\nvar modalStatus = document.getElementById(\"modal_status\");\nvar selectedStatus = \"\";\nvar validation = document.getElementById(\"validation\");\nvar texname = document.getElementById(\"texname\");\nvar nameValue = \"\";\nvar aFaire = document.getElementById(\"a_faire\");\nvar enCours = document.getElementById(\"en_cours\");\nvar terminés = document.getElementById(\"terminer\");\nvar date = document.getElementById(\"date\");\nvar descriptask = document.getElementById(\"descriptask\");\n\n// Fonction pour faire apparaître le modal newTask\najout.addEventListener('click', function (e) {\n  e.preventDefault();\n  classement.style.display = \"none\";\n  newTask.style.display = \"block\";\n});\n\n// Fonction pour faire apparaître le modal status\nstatus1.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  modalStatus.style.display = \"block\";\n});\n\n// Enregistre la valeur cliquée\nmodalStatus.addEventListener(\"click\", function (e) {\n  if (e.target.tagName === \"P\") {\n    selectedStatus = e.target.textContent;\n    modalStatus.style.display = \"none\";\n  }\n});\nvalidation.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n\n  // Récupération des valeurs des champs\n  nameValue = texname.value;\n  var taskId = null; // Déclaration de taskId \n\n  if (selectedStatus === \"\") {\n    selectedStatus = \"A faire\";\n  }\n\n  /*  // Vérifie si une tâche existante est sélectionnée pour modification\r\n   const clickedTask = document.querySelector(\".selected-task\");\r\n  //   console.log(clickedTask);\r\n   if (clickedTask) {\r\n       taskId = clickedTask.getAttribute(\"data-task-id\");\r\n   } */\n  // Vérifie si une tâche existante est sélectionnée pour modification\n  var clicked = document.querySelector(\".selected-task\");\n  //   console.log(clickedTask);\n  if (clicked) {\n    taskId = clicked.getAttribute(\"data-task-id\");\n  }\n  if (taskId) {\n    // Mettre à jour la tâche existante\n    var taskData = {\n      name: nameValue,\n      status: selectedStatus,\n      echeance: date.value,\n      objectif: descriptask.value\n    };\n    localStorage.setItem(taskId, JSON.stringify(taskData));\n    updateInterface(); // Mettre à jour l'interface\n  } else {\n    // Créer une nouvelle tâche\n    var timestamp = Date.now();\n    taskId = \"task_\".concat(timestamp); // Utilise taskId ici\n    var _taskData = {\n      name: nameValue,\n      status: selectedStatus,\n      echeance: date.value,\n      objectif: descriptask.value\n    };\n    localStorage.setItem(taskId, JSON.stringify(_taskData)); // Utilise taskId ici\n\n    updateInterface(); // Mettre à jour l'interface\n  }\n});\n\n// Ajout de la gestion de l'ouverture du modal pour les tâches existantes\n\naFaire.addEventListener('click', openModalData);\nenCours.addEventListener('click', openModalData);\nterminés.addEventListener('click', openModalData);\n\n/// Fonction pour ouvrir le modal avec les données de la tâche sélectionnée\nfunction openModalData(e) {\n  // Retirez la classe .selected-task des éléments précédemment sélectionnés\n  var selectedTask = document.querySelector(\".selected-task\");\n  if (selectedTask) {\n    selectedTask.classList.remove(\"selected-task\");\n  }\n  if (e.target.tagName === \"LI\") {\n    var clickedTask = e.target;\n    taskId = clickedTask.getAttribute(\"data-task-id\");\n    clickedTask.classList.add(\"selected-task\");\n    //       console.log(\"Opening modal for task ID:\", taskId); // Débogage\n    storedData = JSON.parse(localStorage.getItem(taskId));\n    if (storedData) {\n      //         console.log(\"Stored data:\", storedData);  // Débogage\n      texname.value = storedData.name || \"\";\n      selectedStatus = storedData.status || \"\";\n      descriptask.value = storedData.objectif || \"\";\n      date.value = storedData.echeance || \"\";\n      //        console.log(storedData.objectif, storedData.echeance, storedData.status, storedData.name);// Débogage\n\n      newTask.style.display = \"block\";\n      classement.style.display = \"none\";\n    }\n  }\n}\n;\n\n// Mise à jour de l'interface après l'ajout d'une tâche\nfunction updateInterface() {\n  // Réinitialisation des valeurs\n  texname.value = \"\";\n  selectedStatus = \"\";\n  date.value = \"\";\n  descriptask.value = \"\";\n  newTask.style.display = \"none\";\n  classement.style.display = \"block\";\n\n  // Effacement des anciennes tâches affichées\n  clearTasks(aFaire);\n  clearTasks(enCours);\n  clearTasks(terminés);\n\n  // Réaffichage des tâches depuis le stockage local\n  displayTasks();\n}\n;\n\n// Effacement des tâches d'une section donnée\nfunction clearTasks(section) {\n  while (section.firstChild) {\n    section.removeChild(section.firstChild);\n  }\n}\n;\n\n// Affichage des tâches depuis le stockage local\nfunction displayTasks() {\n  // Parcourir les entrées du localStorage\n  for (var i = 0; i < localStorage.length; i++) {\n    var key = localStorage.key(i);\n    if (key.startsWith(\"task\")) {\n      var _storedData = JSON.parse(localStorage.getItem(key));\n      if (_storedData) {\n        // Créer un élément DOM pour chaque tâche et l'ajouter à la section correspondante\n        var newTaskElement = document.createElement(\"li\");\n        newTaskElement.textContent = _storedData.name;\n        newTaskElement.setAttribute('data-task-id', key);\n        newTaskElement.id = key; //j\n        newTaskElement.setAttribute('data-status', _storedData.status); // Utilisez data-status\n        newTaskElement.setAttribute('data-echeance', _storedData.echeance); // Ajoutez cet attribut\n        newTaskElement.setAttribute('data-objectif', _storedData.objectif); // Ajoutez cet attribut\n        var poubelle = document.createElement(\"span\");\n        poubelle.classList.add(\"poubelle\");\n        // Ajoutez cet élément DOM à la section correspondante en fonction du statut (A faire, En cours, Terminés)\n        if (_storedData.status === \"A faire\") {\n          newTaskElement.classList.add(\"rouge\"); //jj\n          // newTaskElement.id = \"rouge\";//jj\n          newTaskElement.setAttribute(\"draggable\", \"true\");\n          aFaire.appendChild(newTaskElement);\n          newTaskElement.appendChild(poubelle);\n        } else if (_storedData.status === \"En cours\") {\n          newTaskElement.classList.add(\"jaune\"); //jj\n          // newTaskElement.id = \"jaune\"; //j\n          newTaskElement.setAttribute(\"draggable\", \"true\");\n          enCours.appendChild(newTaskElement);\n          newTaskElement.appendChild(poubelle);\n        } else if (_storedData.status === \"Terminés\") {\n          newTaskElement.classList.add(\"bleu\"); //jj\n          // newTaskElement.id = \"bleu\"; //j\n          newTaskElement.setAttribute(\"draggable\", \"true\");\n          terminés.appendChild(newTaskElement);\n          newTaskElement.appendChild(poubelle);\n        }\n      }\n    }\n  }\n}\n;\n\n// Chargement initial des données depuis le LocalStorage\ndocument.addEventListener('DOMContentLoaded', function () {\n  displayTasks();\n});\n\n/*suppression task */\nfunction suppressionTask(classement) {\n  classement.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"poubelle\")) {\n      var taskDelete = confirm(\"Êtes-vous sûr de vouloir supprimer cette tache ?\");\n      if (taskDelete) {\n        var taskElement = e.target.closest(\"li\");\n        if (taskElement) {\n          classement.removeChild(taskElement);\n          var _taskId = taskElement.getAttribute(\"data-task-id\");\n          localStorage.removeItem(_taskId);\n        }\n      }\n    }\n  });\n}\nsuppressionTask(aFaire);\nsuppressionTask(enCours);\nsuppressionTask(terminés);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/task.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;