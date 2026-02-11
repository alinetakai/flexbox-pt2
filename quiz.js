function corrigir(){
    let pontos = 0;

    function checkRadio(q, correctValue, message){
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        let feedback = document.querySelector(`#${q} .feedback`);

        if(selected && selected.value===correctValue){
            feedback.innerHTML="✅ Correto! " + message;
            feedback.className="feedback correct";
            pontos++;
        }
        else{
            feedback.innerHTML="❌ Incorreto. " + message;
            feedback.className="feedback incorrect";
        }
    }

    function checkInput(id, correctAnswer, message){
        let value = document.getElementById(id).value.trim().toLowerCase();
        let feedback = document.querySelector(`#${id.replace('input','q')} .feedback`);

        if(value===correctAnswer){
            feedback.innerHTML="✅ Correto! " + message;
            feedback.className="feedback correct";
            pontos++;
        }
        else{
            feedback.innerHTML="❌ Incorreto. Resposta esperada: " + correctAnswer;
            feedback.className="feedback incorrect";
        }
    }

    checkRadio("q1","b","flex-direction define linha ou coluna.");
    checkRadio("q2","v","Column deixa o eixo principal vertical.");
    checkInput("input3","wrap","É a propriedade flex-wrap.");
    checkRadio("q4","b","flex-flow junta direction + wrap.");
    checkRadio("q5","a","Centraliza no eixo principal.");
    checkInput("input6","justify-content","O erro era usar justify-items.");
    checkRadio("q7","b","space-between coloca espaço apenas entre.");
    checkRadio("q8","b","O padrão é row.");
    checkRadio("q9","v","Precisa de display:flex.");
    checkInput("input10","wrap","flex-flow: column wrap;");
    checkRadio("q11","b","O eixo principal será vertical.");
    checkRadio("q12","a","space-evenly distribui igualmente.");
    checkRadio("q13","f","Ele organiza no eixo principal.");
    checkRadio("q14","a","flex-wrap permite quebra.");
    checkRadio("q15","a","Sem espaço sobrando não há efeito.");

    let resultado = document.getElementById("resultadoFinal");
    resultado.innerHTML=`Você acertou ${pontos} de 15 questões.`;

    if(pontos===15){
        resultado.style.background="#d4edda";
    }
    else if(pontos>=8){
        resultado.style.background="#fff3cd";
    }
    else{
        resultado.style.background="#f8d7da";
    }
}