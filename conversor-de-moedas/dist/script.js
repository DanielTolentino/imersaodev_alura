function converter(){
var moeda = document.getElementById('entrada').value
parseFloat(moeda)

var valorEmReal = (moeda * 5.51).toFixed(2).replace('.' , ',')
//var valorEmRealDecimal = valorEmReal.toFixed(2)
//var valoremRealVir = valorEmRealDecimal.replace('.', ',')

var valorEmReal =  
document.getElementById('resultado').value= "R$" + valorEmReal;
}
