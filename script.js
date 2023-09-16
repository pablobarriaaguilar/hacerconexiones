
function accept(element){

    if(element.id =="acceptli1"){
       document.getElementById("li1").remove();
       decreaseConnection();
       increaseConnection()
   }else if(element.id =="acceptli2"){
       document.getElementById("li2").remove();
       decreaseConnection();
       increaseConnection()
   }
   
   }

   function closer(element){
    if(element.id =="closeli1"){
        document.getElementById("li1").remove();
        decreaseConnection();
    }else if(element.id =="closeli2"){
        document.getElementById("li2").remove();
        decreaseConnection();
    }
   }

   function decreaseConnection(){
    var numberconnection = parseInt(document.getElementById("cantidad").innerText); 
    document.getElementById("cantidad").innerText = numberconnection -1;
   }

   function increaseConnection(){
    var numberconnection = parseInt(document.getElementById("conexiones").innerText); 
    document.getElementById("conexiones").innerText = numberconnection +1;
   }

   function edit(){ 
    document.getElementById("name").innerText = "DOE JOE JONSON ";
   }