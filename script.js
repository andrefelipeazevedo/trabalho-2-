function verificarIdade() {
    
    var idade = Number(document.getElementById('idade').value);
    
    
    if (isNaN(idade) || idade <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira uma idade válida.";
        document.getElementById('resultado').classList.add("error"); 
        document.getElementById('resultado').classList.remove("success"); 
    } else {
       
        if (idade >= 18) {
            document.getElementById('resultado').innerText = "Você é maior de idade.";
            document.getElementById('resultado').classList.add("success"); 
            document.getElementById('resultado').classList.remove("error"); 
        } else {
            document.getElementById('resultado').innerText = "Você é menor de idade.";
            document.getElementById('resultado').classList.add("success"); 
            document.getElementById('resultado').classList.remove("error"); 
        }
    }
}
