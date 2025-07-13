let cptTaches = 0

let formCreerTache = document.querySelector("form")
let saisieTache = document.getElementById("saisieTache")

let zoneAffichageTachesAFaire = document.querySelector(".zoneAffichageTachesAFaire")


formCreerTache.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Test")
    if (saisieTache.value !== "") {
        cptTaches++
        let divTache = `
            <div>
                <input type="checkbox" name="taskToDo${cptTaches}" id="taskToDo${cptTaches}">
                <label for="taskToDo${cptTaches}">${saisieTache.value}</label>
            </div>
        `
        let zoneAffichageTachesAFaire = document.querySelector(".zoneAffichageTachesAFaire")
        zoneAffichageTachesAFaire.insertAdjacentHTML("afterbegin", divTache)
    }
})

let listElementDansZoneAffichageTachesAFaire = document.querySelectorAll(".zoneAffichageTachesAFaire div")

for (let i = 0 ; i < listElementDansZoneAffichageTachesAFaire ; i++) {
    // Ajouter EventListener sur tous les inputs des taches to do pour permettre de détecter quand on coche la case pour déplacer la DIV.
    //let checkBoxTacheToDo = document.query
}