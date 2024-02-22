function sidebar_open() {
  document.querySelector(".nav-links").style.display = "block";
}

function sidebar_close() {
  document.querySelector(".nav-links").style.display = "none";
}


//*************(BMI calc code)**************** */
let button=document.getElementById('bmi-btn');

button.addEventListener('click',() =>{
  const height = parseInt(document.getElementById('bmi-height').value);

  const weight=parseInt(document.getElementById('bmi-weight').value);
  const result=document.getElementById('home-output');
  let height_status= false ,weight_status=false;

  if(height===''||isNaN(height)||(height <=0)){
    document.getElementById('height_error').innerHTML = 'Please provide a valid height';
  }else{
    document.getElementById('height_error').innerHTML='';
    height_status=true;
  }

   if(weight===''||isNaN(weight)||(weight <=0)){
    document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
  }else{
    document.getElementById('weight_error').innerHTML='';
    weight_status=true;
  }  

  if(height_status&&weight_status){
    const bmi = (weight/((height*height)/10000)).toFixed(2);

    if(bmi<18.6){
      result.style.background="#000"
      result.innerHTML='Under weight : '+bmi;
      document.getElementById('bmi-height').value=""
      document.getElementById('bmi-weight').value=""
    }
    else if(bmi>=18.6 && bmi<24.9){
      result.style.background="#000"
      result.innerHTML = 'Normal : '+bmi;
      document.getElementById('bmi-height').value=""
      document.getElementById('bmi-weight').value=""
    }else{
      result.style.background="#000"
      result.innerHTML='Over weight : '+bmi;
      document.getElementById('bmi-height').value=""
      document.getElementById('bmi-weight').value=""
    }
  }else{
    alert('fields are empty !!!');
    result.innerHTML='';
  }

});