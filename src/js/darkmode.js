document.addEventListener("DOMContentLoaded",function(e){
    const slider = document.querySelector("#dark");
    const body = document.body;
   

    // Récupérez la valeur de 'isDarkMode' depuis le local storage
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));

    if(isDarkMode){
            body.classList.add("dark");
        }else {
            body.classList.remove("dark");
        }

    // Ajoutez un écouteur d'événement sur le slider
    if(slider != null){
        slider.addEventListener("click",function(e){
            console.log(slider);
            body.classList.toggle("dark");

            const isDark = body.classList.contains("dark");
            localStorage.setItem("isDarkMode", JSON.stringify(isDark));
        });
    }

});

document.addEventListener("DOMContentLoaded",function(e){
    const slider1 = document.querySelector("#dark1");
    const body = document.body;
   

    // Récupérez la valeur de 'isDarkMode' depuis le local storage
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));

    if(isDarkMode){
            body.classList.add("dark");
        }else {
            body.classList.remove("dark");
        }

    // Ajoutez un écouteur d'événement sur le slider
    if(slider1 != null){
        slider1.addEventListener("click",function(e){
            console.log(slider1);
            body.classList.toggle("dark");

            const isDark = body.classList.contains("dark");
            localStorage.setItem("isDarkMode", JSON.stringify(isDark));
        });
    }

});