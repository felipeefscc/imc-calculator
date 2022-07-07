window.onload = () => {
    let button = document.querySelector("#btn");
  
    button.addEventListener("click", calculateIMC);
};

  
  
function calculateIMC() {
  
    
    let height = parseInt(document
            .querySelector("#peso").value);
      
    let weight = parseInt(document
            .querySelector("#altura").value);   

      
  
    let result = document.querySelector("#result");
  
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Preencha seu peso!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Preencha sua altura!";
  

    else if (weight === "" || isNaN(name))
        result.innerHTML = "Prencha seu nome!";
        {
        
       
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        
        if (bmi < 18.6) result.innerHTML =
            `Magreza  : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;

        else if (bmi >= 25 && bmi < 29.9) 
            result.innerHTML = 
                `Sobrepeso : <span>${bmi}</span>`;

        else if (bmi >= 30 && bmi < 34.9)
            result.innerHTML =
                `Obesidade grau I: <span>${bmi}</span>`;

        else if (bmi >= 35 && bmi < 39.9)
            result.innerHTML =
                `Obesidade grau II: <span>${bmi}</span>`;
                
        else result.innerHTML =
            `Obesidade grau III: <span>${bmi}</span>`;
    }
}