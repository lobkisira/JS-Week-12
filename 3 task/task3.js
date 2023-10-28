
const elementWeight = document.getElementById("weight").value;
const elementHeight = document.getElementById("height").value;
const result = document.getElementById("result");
const button = document.getElementById("btn");

function calculateBMI(elementWeight, elementHeight) {
    const bmi = (elementWeight/Math.pow( (elementHeight/100), 2 )).toFixed(1);
    return bmi;
}

button.addEventListener("click", function () {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
  
    const bmi = calculateBMI(weight, height);
    document.getElementById("result").innerHTML = "Ваш ИМТ = " + bmi;
    if (bmi < 18.5) {
      document.getElementById("result").innerHTML =
        "Ваш ИМТ " + bmi + ", Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById("result").innerHTML =
        "Ваш ИМТ " + bmi + ", Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      document.getElementById("result").innerHTML =
        "Ваш ИМТ " +
        bmi +
        ", Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.";
    } else if (bmi >= 30 && bmi <= 34.9) {
        document.getElementById("result").innerHTML =
          "Ваш ИМТ " +
          bmi +
          ", Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.";
        } else if (bmi >= 35 && bmi <= 39.9) {
            document.getElementById("result").innerHTML =
              "Ваш ИМТ " +
              bmi +
              ", Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.";
    } else if (bmi > 40) {
      document.getElementById("result").innerHTML =
        "Ваш ИМТ " +
        bmi +
        ", Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.";
    }
    });


