let cptTaches = 0

let formCreerTache = document.querySelector("form")
let saisieTache = document.getElementById("saisieTache")
let btnSupprimerToutesTaches = document.querySelector(".zoneAffichageTachesEffectuees button")

// let tachesEffectuees = document.querySelector(".tachesEffectuees")

formCreerTache.addEventListener("submit", (event) => {
    event.preventDefault()
    if (saisieTache.value !== "") {
        cptTaches++
        let divTache = `
            <div>
                <input type="checkbox" name="taskToDo${cptTaches}" id="taskToDo${cptTaches}">
                <label for="taskToDo${cptTaches}">${saisieTache.value}</label>
                <button>Supprimer la tâche</button>
            </div>
        `
        let zoneAffichageTachesAFaire = document.querySelector(".zoneAffichageTachesAFaire")
        zoneAffichageTachesAFaire.insertAdjacentHTML("afterbegin", divTache)
    }
    ajoutEventListenerTachesAFaire()
})


btnSupprimerToutesTaches.addEventListener("click", () => {
    let listDivZoneAffichageTachesEffectuees = document.querySelectorAll(".zoneAffichageTachesEffectuees div")
    for (let i = 0 ; i < listDivZoneAffichageTachesEffectuees.length ; i++) {
        listDivZoneAffichageTachesEffectuees[i].remove()
    }
})
//let listDivDansZoneAffichageTachesAFaire = document.querySelectorAll(".zoneAffichageTachesAFaire div")


function ajoutEventListenerTachesAFaire() {
    let listDivZoneAffichageTachesAFaire = document.querySelectorAll(".zoneAffichageTachesAFaire div")
    let zoneAffichageTachesEffectuees = document.querySelector(".zoneAffichageTachesEffectuees")
    let zoneAffichageTachesAFaire = document.querySelector(".zoneAffichageTachesAFaire")

    for (let i = 0 ; i < listDivZoneAffichageTachesAFaire.length ; i++) {
        // Ajouter EventListener sur tous les inputs des taches to do pour permettre de détecter 
        // quand on coche la case pour déplacer la DIV.
        
        // !!! JE DOIS TROUVER COMMENT INSERER LES BALISES HTML QUI COMPOSENT MA VARIABLE tacheDone !!!
        let checkBoxTacheToDo = listDivZoneAffichageTachesAFaire[i].querySelector("input")
        let btnSupprimer = listDivZoneAffichageTachesAFaire[i].querySelector("button")
        let tache = listDivZoneAffichageTachesAFaire[i]

        checkBoxTacheToDo.addEventListener("click", () => {
            if (checkBoxTacheToDo.checked) {
                zoneAffichageTachesEffectuees.insertAdjacentElement("afterbegin", tache)
            } else {
                zoneAffichageTachesAFaire.insertAdjacentElement("afterbegin", tache)

            }
        })
        btnSupprimer.addEventListener("click", () => {
            tache.remove()
        })
    }
}
