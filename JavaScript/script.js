function buttonRunClick() {
  var x1 = parseInt(document.getElementById('x1').value);
  var x2 = parseInt(document.getElementById('x2').value);
  var resultDiv = document.getElementById('result');
  resultDiv.textContent = "";
  if (Number.isNaN(x1) || Number.isNaN(x2)) {
    alert("В поля х1 и х2 должны быть введены числовые значения");
  } else {
    resultDiv.append("x1+x2="+(x1+x2));
    sum();
  }
}

function buttonClearClick() {
  var x1 = parseInt(document.getElementById('x1').value);
  var x2 = parseInt(document.getElementById('x2').value);
  var resultDiv = document.getElementById('result');
  document.getElementById('x1').value = "";
  document.getElementById('x2').value = "";
  resultDiv.textContent = "";

}

function sum() {
  var x1 = parseInt(document.getElementById('x1').value);
  var x2 = parseInt(document.getElementById('x2').value);
  var resultDiv = document.getElementById('result');
  var summ = 0;
  if (x1 < x2) {
    for (i = x1; i <= x2; i++) {
      summ += i;
    }
  } else {
    for (i = x2; i <= x1; i++) {
      summ += i;
    }
  }
  resultDiv.append("\n Сумма всех чисел: "+ summ);
}

function multiply() {
  var x1 = parseInt(document.getElementById('x1').value);
  var x2 = parseInt(document.getElementById('x2').value);
  var resultDiv = document.getElementById('result');
  var mul = 1;
  if (x1 < x2) {
    for (i = x1; i <= x2; i++) {
      mul *= i;
    }
  } else {
    for (i = x2; i <= x1; i++) {
      mul *= i;
    }
  }

  resultDiv.append("\n Произведение всех чисел: "+ mul);
}

function buttonTask5Click() {
  var testRadioSumm = document.getElementById('testRadioSumm');
  var resultDiv = document.getElementById('result');
  if (checkWithoutAlert()) {
    if (testRadioSumm.checked) {
      sum();
    } else {
      multiply()
    }
  }
}

function buttonTask6Click() {
  var x1 = parseInt(document.getElementById('x1').value);
  var x2 = parseInt(document.getElementById('x2').value);
  var resultDiv = document.getElementById('result');
  if (checkWithoutAlert()) {
    if (x2 > x1) {
      for (mainNumber = x1; mainNumber <= x2; mainNumber++) {
        var good = true;
        for (devidedNumber = 2; devidedNumber < mainNumber; devidedNumber++) {
          if (mainNumber % devidedNumber === 0) {
            good = false;
            break;
          }
        }
        if (good) {
          resultDiv.append(mainNumber+", ");
        }
      }
    } else {
      for (mainNumber = x2; mainNumber <= x1; mainNumber++) {
        var good = true;
        for (devidedNumber = 2; devidedNumber < mainNumber; devidedNumber++) {
          if (mainNumber % devidedNumber === 0) {
            good = false;
            break;
          }
        }
        if (good) {
          resultDiv.append(mainNumber+", ");
        }
      }
    }
  }
}

function checkWithoutAlert() {
  var x1 = parseInt(document.getElementById('x1').value);
  var x2 = parseInt(document.getElementById('x2').value);
  var resultDiv = document.getElementById('result');
  if (Number.isNaN(x1) || Number.isNaN(x2)) {
    resultDiv.textContent = "В поля х1 и х2 должны быть введены числовые, не пустые значения";
    return false;
  } else {
    resultDiv.textContent = "";
    return true;
  }
}