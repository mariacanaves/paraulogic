// la paraula secreta
const secreta='MARIA'

function enviar() {
    let paraula =document.getElementById('paraula').value
    // alerta en cas de més lletres
    if (paraula.length != secreta.length) {
        window.alert('HA DE TENIR 5 LLETRES')
    }

    // cas de victoria
    else if(paraula.toUpperCase()===secreta){
        // alerta
        window.alert('HO HAS ACONSEGUIT, la paraula secreta era '+ secreta)
        let paraulabona="<div class='resposta'>"
        // escriu paraula
        for(let i=0;i<secreta.length;i++){
paraulabona += "<div class='slot green'>"
            paraulabona+=secreta.charAt(i)
            paraulabona+="</div>"
        }
        paraulabona+="</div>"
        document.getElementById('resposta').innerHTML +=  paraulabona + "<br>"
    }

    // altres casos (no està be la paraula)
    else{
        let text='<div class="resposta">'
        for(let i=0;i<paraula.length;i++){
            // si la lletra està ben colocada
            if(paraula.toUpperCase().charAt(i)==secreta.charAt(i)){
                text += "<div class='slot green'>"
                }
            // si la paraula te la lletra
            else if (secreta.includes(paraula.toUpperCase().charAt(i))==true){
                text += "<div class='slot yellow'>"
            }
            // si la paraula no te la lletra
            else{
                text += "<div class='slot'>"
            }
            text+= paraula.toUpperCase().charAt(i)
            text+="</div>"



        }
         text+='</div>'
        document.getElementById('resposta').innerHTML += text + "<br>"
    }

}
