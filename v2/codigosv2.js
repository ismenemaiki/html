// document.getElementById("btn2").addEventListener("click", enviar);
function enviar() {
    var txtNome = document.getElementById("txtNome");
    var txtPeso = document.getElementById("txtPeso");
    var txtAltura = document.getElementById("txtAltura");
    var msg = document.getElementById("msgImc");

    mostrarNome = txtNome.value;
    mostrarPeso = txtPeso.value;
    mostrarAltura = txtAltura.value;

    imc = (mostrarPeso / (mostrarAltura * mostrarAltura)).toFixed(2);

    rNome.textContent = "Olá "+mostrarNome;
    rPeso.textContent = "Seu peso é "+mostrarPeso;
    rAltura.textContent = "Sua altura é "+mostrarAltura;
    // msgImc.textContent = "Seu IMC é "+imc;
    
    
    
    if (imc < 18.5)
    {
        document.getElementById().innerText ="Você esta abaixo do peso - (IMC "+imc+")";
    }
    if (imc >= 18.6 && imc <= 24.9)
    {
        document.getElementById("msgImc").innerText ="Você está saudável -(IMC "+imc+")";
    }
    if (imc >= 25 && imc <= 29.9)
    {
        document.getElementById("msgImc").innerText ="Você está com peso em excesso -(IMC "+imc+")";
    }
    if (imc >= 30 && imc <= 34.9)
    {
        document.getElementById("msgImc").innerText ="Você está com obsidade grau 1 -(IMC "+imc+")";
    }
    if (imc >= 35 && imc <= 39.9)
    {
        document.getElementById("msgImc").innerText ="Você está com obsidade grau 2 -(IMC "+imc+")";
    }
    if (imc >= 40)
    {
        document.getElementById("msgImc").innerText ="Você está com obsidade grau 3 -(IMC "+imc+")";
    }
    
}