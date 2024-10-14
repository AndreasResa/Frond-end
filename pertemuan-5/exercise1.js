function calculateBMI(bb, tb) {
    let bmi = bb / (tb * tb);
    return bmi;
  }
  let bb = 50;
  let tb = 1.62;
  
  let bmi = calculateBMI(bb, tb);
  console.log("BMI ideal anda adalah :" + bmi.toFixed(2));