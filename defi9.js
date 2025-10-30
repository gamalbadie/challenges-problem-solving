function totalBouteilles(neufPleines) {
  let pleines = neufPleines; 
  let vides = 0;
  let total = 0;                

  
  while (pleines > 0) {

    total = total + pleines;
    vides = vides + pleines;


    pleines = Math.floor(vides / 3);
    vides = vides % 3;
  }

  return total;
}


console.log(totalBouteilles(9));