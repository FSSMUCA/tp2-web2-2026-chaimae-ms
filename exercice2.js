let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}]

for (let i = 0; i < valeurs.length; i++) {
  let val = valeurs[i]

  if (val === "") {
    console.log("(chaine vide) -> falsy")
  } else if (val) {
    console.log(String(val) + " -> truthy")
  } else {
    console.log(String(val) + " -> falsy")
  }
}