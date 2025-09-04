// variable declaration
const btn=document.getElementById('btn');
const qoutes=document.getElementById('qoutes') 
const author=document.getElementById('author')
btn.addEventListener('click', function(){  //adding an eventlistener btn
async function getQuote(){

    try{        //a try catch block to catch an error if the fetch fails
    const response=await fetch('https://api.api-ninjas.com/v1/quotes',{
        method:"GET",
        headers:{
            'X-Api-Key':'KSJj7SzS9ZHO+EuJ0pUh2g==PhhzT3ab3jlXDKEE',
            'Content-Type':'application/json'
        }
    })
    //if the response is not ok it should throw in that error and stop ecevuting
    if(!response.ok){ 
        throw new Error(`error: ${response.status}`)
       return 
        
    }
    const data=await response.json(); //if request is ok  get the response as a json file
    qoutes.innerText=data[0].quote;
    author.innerText=data[0].author;

    if(data[0].quote=="" || data[0].author==""){
 alert('could not find any quotes'); // if data returns nothing then alert user with this error and return
 return;

    }
       
    }
catch(error)   {
console.error("error:",error.message)  
}
}

getQuote(); //call the getQoute function
})