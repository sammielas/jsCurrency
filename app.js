if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(){
    console.log('SW registered');
});
}

function loadCurrencies(){
  var baseCurr= document.getElementById('baseCurrency');
  var Curr= document.getElementById('Currency');
  

  var xhr = new  XMLHttpRequest();
  xhr.open('GET','https://free.currencyconverterapi.com/api/v5/currencies', true);
 
 xhr.onload=function(){
   if(this.status ===200){
     var response = JSON.parse(this.responseText);
    // console.log(response);

    let outputs ='';

    
    for(id in response.results)
         outputs+= `<option>${id}</option>`;
 
    baseCurr.innerHTML=outputs;
    Curr.innerHTML=outputs;
   }
 }

 xhr.send();
  
} 

function convertCurrencies(){
  var from= document.getElementById("baseCurrency").value;
  //console.log(from);
  var to= document.getElementById("Currency").value;
  var amount= document.getElementById("amount").value;
  var result= document.getElementById("result").value;
  if(from.length>0 && to.length>0 && amount.length>0){
    var xhr = new  XMLHttpRequest();
    xhr.open('GET',`https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y` , true);
 
    xhr.onload=function(){
      if(this.status ===200){
        var obj = JSON.parse(this.responseText);
        console.log(obj);
        var fact= obj[to];
       // console.log(fact);
        if (fact!=undefined){
            result.innerHTML=parseFloat(amount) * parseFloat(fact);
        }
   
       
      }
    }

  }


 xhr.send();
  
} 