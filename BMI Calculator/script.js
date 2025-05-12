const form=document.querySelector("form")
//console.log(form);
form.addEventListener('submit',function(e){
   e.preventDefault();
   const height=parseInt(document.querySelector("#height").value)
   const weight=parseInt(document.querySelector("#weight").value)
   const result=document.querySelector("#results")

   if(height==='' || height<0 || isNaN(height)){
    result.innerHTML="Please give a valid height";
   }
   else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML="Please give a valid weight";
   }
   else{
    const bmi=(weight /((height*height)/10000)).toFixed(2)

    
    if(bmi < 18.6){
      result.innerHTML=`<span>${bmi}</span><br> <span>Person is Under Weight</span>`
    }
    else if(bmi>=18.6 && bmi<=24.9){
       result.innerHTML=`<span>${bmi}</span><br> <span>Person is in Normal Range</span>`
    }
    else if(bmi>24.9){
       result.innerHTML=`<span>${bmi}</span><br> <span>Person is Over Weight</span>`
    }
   }
})