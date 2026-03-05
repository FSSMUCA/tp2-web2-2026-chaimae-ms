let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

// Partie A - ?? retourne la valeur par défaut seulement si null ou undefined
console.log(nom ?? "valeur par défaut")    // null -> valeur par défaut
console.log(age ?? "valeur par défaut")    // 0 -> 0
console.log(ville ?? "valeur par défaut")  // "" -> ""
console.log(score ?? "valeur par défaut")  // undefined -> valeur par défaut
console.log(actif ?? "valeur par défaut")  // false -> false

// Partie B - || retourne la valeur par défaut si la valeur est falsy
console.log(nom || "valeur par défaut")    // null -> valeur par défaut
console.log(age || "valeur par défaut")    // 0 -> valeur par défaut
console.log(ville || "valeur par défaut")  // "" -> valeur par défaut
console.log(score || "valeur par défaut")  // undefined -> valeur par défaut
console.log(actif || "valeur par défaut")  // false -> valeur par défaut

// Partie C - comparaison entre ?? et ||
console.log("nom : ?? et || -> même résultat")      // les deux donnent valeur par défaut
console.log("age : ?? et || -> résultat différent") // ?? donne 0, || donne valeur par défaut
console.log("ville : ?? et || -> résultat différent") // ?? donne "", || donne valeur par défaut
console.log("score : ?? et || -> même résultat")    // les deux donnent valeur par défaut
console.log("actif : ?? et || -> résultat différent") // ?? donne false, || donne valeur par défaut