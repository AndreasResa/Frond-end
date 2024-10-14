let person = {
  firstName: "Resa",
  weight: 50,
  height: 162,

  calculateBMI: function () {
    let heightInMeters = this.height / 100;
    let bmi = this.weight / (heightInMeters * heightInMeters);

    console.log(" firstName :" + this.firstName);
    console.log(" weight :" + this.weight);
    console.log(" height:" + this.height);
    console.log(" BMI adalah : " + bmi);

    if (bmi <= 16.0) {
      console.log(" Category: Severely Underweight");
    } else if (bmi > 16.0 && bmi <= 18.4) {
      console.log(" Category: Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log(" Category: Normal t");
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      console.log(" Category: Overweight");
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      console.log(" Category:(Moderately obese)");
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      console.log(" Category:(Severely obese)");
    } else {
      console.log(" Category:(Very severely obese)");
    }
  },
};

person.calculateBMI();
