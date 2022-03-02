function somar(){
    var num1 = parseInt(document.getElementById('num1').value,10);
    var num2 = parseInt(document.getElementById('num2').value,10);
    document.getElementById('resultado').value = num1 + num2;
}


function validar1(){
    if(document.getElementById("num1").value.length < 1){
      alert('Preencha o primeiro valor!');
      document.getElementById("num1").focus();
      return false
    } else{
      validar2();
    }
}

function validar2(){
  if(document.getElementById("num2").value.length < 1){
    alert('Preencha o segundo valor!');
    document.getElementById("num2").focus();
    return false
  } else{
    validar3();
  }
}


function validar3(){
  if(document.getElementById("num1").value < 0){
    alert('Há um valor menor que zero no primeiro campo!');
    document.getElementById("num1").focus();
    return false
  } else{
    validar4();
  }
}

function validar4(){
  if(document.getElementById("num2").value < 0){
    alert('Há um valor menor que zero no segundo campo!');
    document.getElementById("num1").focus();
    return false
  } else{
    somar();
  }
}



  

