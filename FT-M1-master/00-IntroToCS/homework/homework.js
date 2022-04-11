'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let valor = 0;
  num.split('').reverse().forEach((ele, index)=>{
   
    if(ele!=0){
      valor+=2**index;
    }
  });
  return valor;

}

function DecimalABinario(num) {
  // tu codigo aca
  let arr = [];
  while(num>0){
    arr.push(num%2);
    
    num = Math.floor(num/2);
    
  }
  return arr.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}