const btn=document.getElementById('btn');
const qoutes=document.getElementById('qoutes') 
const author=document.getElementById('author')
btn.addEventListener('click', function(){
async function getQuote(){

    try{
    const response=await fetch('https://api.api-ninjas.com/v1/quotes',{
        method:"GET",
        headers:{
            'X-Api-Key':'KSJj7SzS9ZHO+EuJ0pUh2g==PhhzT3ab3jlXDKEE',
            'Content-Type':'application/json'
        }
    })
    
    if(!response.ok){
        throw new Error(`error: ${response.status}`)
       return 
        
    }
    const data=await response.json();
    qoutes.innerText=data[0].quote;
    author.innerText=data[0].author;

    if(data[0].quote=="" || data[0].author==""){
 alert('could not find any quotes');
 return;

    }
       
    }
catch(error)   {
console.error("error:",error.message)
}
}

getQuote();
})