let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCorrige = nom.trim()
if (nomCorrige === "") nomCorrige = "Inconnu"

let ageNombre = parseInt(age)

let indexArobase = email.indexOf("@")
let indexPoint = email.indexOf(".", indexArobase)

let scoreNombre = parseInt(scoreJeu)
if (Number.isNaN(scoreNombre)) scoreNombre = 0

let estAdminBool = estAdmin === "true"

let connexion = derniereConnexion ?? "Jamais connecté"

let connexionsNombre = Number(nombreConnexions)
let connexionsAffichage = connexionsNombre === 0 ? "Aucune connexion" : connexionsNombre

console.log("===== RAPPORT UTILISATEUR =====")
console.log("nom              : " + nomCorrige)
console.log("age              : " + ageNombre)
console.log("email            : " + (indexPoint === -1 ? "invalide" : "valide"))
console.log("scoreJeu         : " + scoreNombre)
console.log("estAdmin         : " + estAdminBool)
console.log("derniereConnexion: " + connexion)
console.log("nombreConnexions : " + connexionsAffichage)
console.log("================================")