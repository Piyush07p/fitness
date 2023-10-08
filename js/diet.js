const apiKey="nW6szsf6eHRliyCa7LOI1Q==ORR1RlTglaixsr4t"

let options={
    method:"GET",
    // mode: 'cors', 
    headers: {
        // "X-Api-Key":apiKey,
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*', 
    },
    
}
let searchBtn=document.querySelector('.dietSearch button')


searchBtn.addEventListener('click', async function(){

    const options={
        headers:{
            'X-Api-Key': 'nW6szsf6eHRliyCa7LOI1Q==ORR1RlTglaixsr4t'
        }
    }
   let realData
   let searchVal
    try{
        searchVal=document.querySelector('.dietInput').value;
        if(searchVal==""){
            alert("field is empty")
            return
        }
        let fetchData=await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${searchVal}`,options)

        realData=await fetchData.json()
    
    }
    catch(err){
        console.log("not present")
    }
    
   let html=" "
     html=`
    
            <tr>
                <td>Serving_size(g)</td>
                <td>${realData[0].serving_size_g}</td>
            </tr>
            <tr>
                <td>Calories</td>
                <td>${realData[0].calories}</td>
            </tr>
            <tr>
                <td>Carbohydrates(g)</td>
                <td>${realData[0].carbohydrates_total_g}</td>
            </tr>
            <tr>
                <td>fiber(g)</td>
                <td>${realData[0].fiber_g}</td>
            </tr>
            <tr>
                <td>Protein(g)</td>
                <td>${realData[0].protein_g}</td>
            </tr>
            <tr>
                <td>Potassium(mg)</td>
                <td>${realData[0].potassium_mg}</td>
            </tr>
            <tr>
                <td>fat_total(g)</td>
                <td>${realData[0].fat_total_g}</td>
            </tr>
            <tr>
                <td>Saturated_fat(g)</td>
                <td>${realData[0].fat_saturated_g}</td>
            </tr>
            <tr>
                <td>Sugar(g)</td>
                <td>${realData[0].sugar_g}</td>
            </tr>
            <tr>
                <td>Cholesterol(mg)</td>
                <td>${realData[0].cholesterol_mg}</td>
            </tr>
           
            <tr>
                <td>Sodium (mg)</td>
                <td>${realData[0].sodium_mg}</td>
            </tr>


    `
    let foodItem=document.querySelector('.foodItemName')
    foodItem.innerText=`Nutritional data of ${realData[0].name}`;

    let dietTable=document.querySelector('.dietTable')
    if(realData){
        dietTable.innerHTML=html
        searchVal.value=" " 
    }else{
        dietTable.innerText="not able to fetch"
    }
  
    
 
})
