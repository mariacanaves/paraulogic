// opcions paraula secreta(posar-la en majuscules)
let llista=[ 'MARIA', "CASA", "TECLAT", "TAULA", "TAYLOR", "ARBRE", "MOIX", "PARAULA", "DIA"]
intents=0
let secreta=(llista[Math.trunc(Math.random()*llista.length)])



function enviar() {
    let paraula =document.getElementById('paraula').value
    // alerta en cas de més lletres
    if (paraula.length != secreta.length) {
        window.alert('HA DE TENIR '+secreta.length +' LLETRES')
        document.getElementById('paraula').value =""
    }

    // cas de victoria
    else if(paraula.toUpperCase()===secreta){

        let paraulabona="<div class='resposta'>"
        // escriu paraula
        for(let i=0;i<secreta.length;i++){
            paraulabona += "<div class='slot green'>"
            paraulabona+=secreta.charAt(i)
            paraulabona+="</div>"
        }
        paraulabona+="</div>"
        // Llevar la opció de mandar més paraules

        document.getElementById('paraula').hidden=true
        document.getElementById('button').disabled=true
        document.getElementById('resposta').innerHTML +=  paraulabona + "<br>"
        document.getElementById('restart').hidden=false
        document.getElementById('restart').disabled=false
        // alerta
        intents++
        window.alert('HO HAS ACONSEGUIT, la paraula secreta era '+ secreta+' has emprat '+intents+' intents')
        document.getElementById('intents').innerHTML='Dus ' +intents+' intents'

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
        intents++
        document.getElementById('resposta').innerHTML += text + "<br>"
        document.getElementById('paraula').value =""
        document.getElementById('intents').innerHTML='Dus ' +intents+' intents'

    }

}
// Restart
function restart() {

    intents=0
    document.getElementById('resposta').innerHTML = ''
    document.getElementById('paraula').value =""
    document.getElementById('paraula').hidden=false
    document.getElementById('button').disabled=false
    document.getElementById('restart').hidden=true
    document.getElementById('restart').disabled=true
    document.getElementById('intents').innerHTML='Dus ' +intents+' intents'
    secreta=(llista[Math.trunc(Math.random()*llista.length)])
    document.getElementById('pista').innerText  =  'Pista: '+secreta.length+' lletres'
}
//Al iniciar
addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('restart').hidden=true
    document.getElementById('restart').disabled=true
    document.getElementById('intents').innerHTML='Dus ' +intents+' intents'
    window.alert('Tens intents infinits :o')
    document.getElementById('pista').innerText  =  'Pista: '+secreta.length+' lletres'

});
