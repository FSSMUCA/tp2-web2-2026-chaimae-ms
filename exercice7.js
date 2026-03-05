let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

let sousTotal = prix * quantite
console.log("Sous-total : " + sousTotal.toFixed(2) + " MAD")

let reduction = 0
if (codePromo !== null && estMembre) {
  reduction = sousTotal * reductionPourcentage / 100
}
console.log("Réduction : " + reduction + " MAD")

let total = sousTotal - reduction
console.log("Total : " + total.toFixed(2) + " MAD")

if (soldeCompte >= total) {
  console.log("Paiement accepté")
  console.log("Nouveau solde : " + (soldeCompte - total).toFixed(2) + " MAD")
} else {
  console.log("Solde insuffisant")
}

console.log("===== RÉCAPITULATIF =====")
console.log("Produit   : " + nomProduit)
console.log("Quantité  : " + quantite)
console.log("Prix unit.: " + prix + " MAD")
console.log("Sous-total: " + sousTotal.toFixed(2) + " MAD")
console.log("Réduction : " + reduction + " MAD")
console.log("Total     : " + total.toFixed(2) + " MAD")
console.log("=========================")