function GetData(){

    let request = new XMLHttpRequest(); 

    request.open("GET","http://makeup-api.herokuapp.com/api/v1/products.json"); 
   
    request.responseType = "json"
  
    request.send();
   
    request.onload = function (){
    
       
        if(request.status >= 200 && request.status <= 300){ 

            let posts = request.response; 
            for( post of posts ){
                 
              
                document.getElementById("one").innerHTML +=`<div> ${post.id} </div>`;
               
               document.getElementById("two").innerHTML += `<div> ${post.brand} </div>`;

               document.getElementById("three").innerHTML += `<div> ${post.name} </div>`;

               document.getElementById("four").innerHTML += `<div> ${post.currency} </div>`;
          
            } 
        }
        else{
            alert("error");
        }
       
    }
}
   
GetData();







