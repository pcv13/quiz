var user = {}
var responses = []
var t=0;
var f=0;
function questionN(){
  var name =prompt('what is your name?');
  user.name = name
}


function question1() {
  var fq= prompt('¿En un triangulo rectangulo el cuadrado dela hipotenusa es igual a la suma de los cuadrados de los catetos ? (Si o No)')
  if (fq.toLowerCase() !== 'si'&&fq.toLowerCase() !== 'no'){
    alert("Introduzca SOLO Si o No");
    question1()
    }
    else if (fq.toLowerCase() === 'si'){
      fq=true;
      alert('Correcto ,'+user.name+',eres igual de listo que un niño de sexto de primaria');
responses.push(fq);}
      else{
        fq=false;
        alert(user.name+' mejor deja el ordenador y repasa geometría basicas...')
          responses.push(fq);}

}

function question2(){
var tajo = prompt("¿Por donde No pasa el tajo:Oporto ,Madrid o Cuenca?");
  tajo=tajo.toLowerCase();
  switch (tajo) {
    case "madrid":{
      tajo=false;
      alert(user.name+' mejor deja el ordenador y repasa geografía basicas...')
      responses.push(tajo)
      break;
    }
    case "cuenca":{
      tajo=false;
      alert(user.name+' mejor deja el ordenador y repasa geografía basicas...')
      responses.push(tajo)
      break;
    }
    case "oporto":{
      tajo=true;
      alert('Correcto ,'+user.name+',eres igual de listo que un niño de sexto de primaria');
      responses.push(tajo)
      break;
}
    default:{
      alert("Introduzca una delas tres respuestas posibles");;
      question2()
    }
  }
}
  function question3(){
    do

      var n=prompt('Introduzca un numero')
    while (isNaN(n)) ;
var dn=prompt('Introduzca el cuadrado del numero que acaba de itroducir')
    if(dn==Math.pow(n,2)){
      alert('Correcto ,'+user.name+',eres igual de listo que un niño de sexto de primaria');
      n=true;}
      else {
        alert(user.name+' mejor deja el ordenador y repasa matematicas basicas...')
        n=false;
          }
responses.push(n)
  }

  function question4(){
do {
  var m=prompt('¿Cuantas preguntas has respondido hasta este punto?')
} while (isNaN(m));


     if(m==(responses.length+1)){
     alert('Por lo menos tienes buena memoria')
     m=true
     responses.push(m)}
     else {
      alert("Ni memoria")
       m=false
       responses.push(m)
     }

     }
     function evaluate() {

          for (var i = 0; i <= (responses.length); i++) {

              if (responses[i]==true)
                {t++;}
              else {
                f++;
                    }
                    i++
}
user.aciertos =t;
user.errores =f;
console.log(t+" "+f);
     }

     function showResults() {
alert(user.name+" tus resultados, preguntas acertadas : "+user.aciertos+" Preguntas falladas : "+user.errores)
     // display the user results

     }

     // call the function, passing it the responses array
     evaluate(responses);





questionN()
question1()
question2()
question3()
question4()
evaluate()
showResults()
console.log(responses);
