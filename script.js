const form = document.getElementById('sum-form')

form.addEventListener('submit', function(event){
        event.preventDefault();
        const num = parseFloat(document.getElementById('number1').value);
        const num2 = parseFloat(document.getElementById('number2').value);
        alert("Resultado da soma = " + (num + num2));

});

console.log(form);