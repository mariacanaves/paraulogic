
const secreta='SWIFT'



function enviar() {
    let paraula =document.getElementById('paraula').value
    if (paraula.length != secreta.length) {
        window.alert('HA DE TENIR 5 LLETRES')
    }
    else if(paraula.toUpperCase()==secreta){
        window.alert('HO HAS ACONSEGUIT')
    }
    else{
        let text=''
        for(let i=0;i<paraula.length;i++){
            text += paraula.toUpperCase().charAt(i)
        }
        document.getElementById('resposta').innerHTML += text + "<br>"
    }

}








function Lletres(paraula) {
    let x=0
    let y =0
    let z =0
    let lletra= paraula.toLowerCase()
    for (let i=0;i<paraula.length;i++){
        if (lletra.charAt(i)=='M'){ x++
        }
        else if (lletra.charAt(i).includes('a')==true){y++
        }
        else {
z++
        }
    }
}

// Lletres('Maria') //3