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
searchBtn.addEventListener('click',  function(){
   
    let searchVal=document.querySelector('.dietInput').value;
    let fetchData=fetch(`https://api.spoonacular.com/recipes/1003464/nutritionWidget.json`,options)
    fetchData.then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

//    let html=" "
//      html=`
//             <tr>
//                 <td>Calories</td>
//                 <td>${ans[0].calories}</td>
//             </tr>
//             <tr>
//                 <td>Carbohydrates(g)</td>
//                 <td>${ans[0].carbohydrates_total_g}</td>
//             </tr>
//             <tr>
//                 <td>fiber(g)</td>
//                 <td>${ans[0].fiber_g}</td>
//             </tr>
//             <tr>
//                 <td>Protein(g)</td>
//                 <td>${ans[0].protein_g}</td>
//             </tr>
//             <tr>
//                 <td>Potassium(mg)</td>
//                 <td>${ans[0].potassium_mg}</td>
//             </tr>
//             <tr>
//                 <td>fat_total(g)</td>
//                 <td>${ans[0].fat_total_g}</td>
//             </tr>
//             <tr>
//                 <td>Saturated_fat(g)</td>
//                 <td>${ans[0].fat_saturated_g}</td>
//             </tr>
//             <tr>
//                 <td>Sugar(g)</td>
//                 <td>${ans[0].sugar_g}</td>
//             </tr>
//             <tr>
//                 <td>Cholesterol(mg)</td>
//                 <td>${ans[0].cholesterol_mg}</td>
//             </tr>
           
//             <tr>
//                 <td>Sodium (mg)</td>
//                 <td>${ans[0].sodium_mg}</td>
//             </tr>


//     `
//     let dietTable=document.querySelector('.dietTable')
//     if(ans){
//         dietTable.innerHTML=html
//         searchVal.value="" 
//     }else{
//         dietTable.innerHTML="not able to fetch"
//     }
  
    
 
})
