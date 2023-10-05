let randomNumber = Math.floor(Math.random()*100 +1);

let intoNumber = document.getElementById("intoNumber");

let message = document.getElementById("message");

function checkDate(){

    let joinNumber = parseInt(intoNumber.value);

    if(isNaN(joinNumber)|| joinNumber < 1 || joinNumber > 100){
        message.textContent = 'Por favor introduce un numero valido entre 1 y 100';

        return
    }

    if(joinNumber === randomNumber){
        message.textContent = `Lo lograste, el numero correcto es ${randomNumber}`;
        message.style.color = 'green';
        intoNumber.disabled = true;
    }else if(joinNumber > randomNumber){
        message.textContent = 'Es un numero mayor, vuelve a intentar';
        message.style.color = 'red';
    }else{
        message.textContent = 'Es un numero menor, vuelve a intentar';
        message.style.color = 'red';
    }
}