const btn=document.getElementById("btn");
btn.addEventListener('click',function(){

 async function getquote() {
    try{
    const response= await fetch('https://api.api-ninjas.com/v1/quotes',{
        method:"GET",
        headers:{
            'X-Api-Key': 'KSJj7SzS9ZHO+EuJ0pUh2g==PhhzT3ab3jlXDKEE',
            'Content-type':'application/json'
        }
    })
     if(!response.ok){
    throw new Error(`error http ${response.status}`)
 }
 const data=await response.json();
 console.log(data[0].quote);
 }
catch(error){
    console.error('error',error.message)
}
 
 }
getquote();
})


    
