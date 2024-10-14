

//1. IIFE
(function (bb, tb, callback) {
    let bmi = bb / (tb * tb);
    callback(bmi);
  })(50, 1.62, function (bmi) {
    console.log("BMI saya : " + bmi.toFixed(2));
  });
  
  //2. Callback
  function hitungBMI(bb, tb, callback) {
      let bmi = bb / (tb * tb);
      callback(bmi);
    }
    
    let bb = 50;
    let tb = 1.62;
    
    hitungBMI(bb, tb, function (bmi) {
      console.log("BMI ideal anda adalah :" + bmi.toFixed(2));
    });