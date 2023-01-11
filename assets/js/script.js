/* Code ici, Bon courage ! */
const allSteps = document.querySelectorAll('.steps > *') /* recupère tous les steps */

allSteps.forEach( step => { /* execute une opération sur chaque step */
    step.addEventListener('click', () => { /* ajoute un écoute d'événement */
        resetAllSteps() /* appelle la function qui reset  */
        step.classList.toggle('step-close') /* toggle add et remove automatiquement */
    })
})

/* Referme tous les steps pour en avoir qu'un d'ouvert à la fois */
function resetAllSteps() {
    allSteps.forEach( step => {
        step.classList.add('step-close')
    })
}

/* Pour la transition c'est dans le css */