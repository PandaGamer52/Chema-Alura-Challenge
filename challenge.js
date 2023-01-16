function encriptar() {
    var input2 = document.getElementById("textoEncriptado").value;
    var message = document.getElementById("message");
    var message2 = document.getElementById("message2");
    var message3 = document.getElementById("message3");
    var message4 = document.getElementById("message4");
    var message5 = document.getElementById("message5");
    var message6 = document.getElementById("message6");
    var message7 = document.getElementById("sombra2");
    var message8 = document.getElementById("sombra");
    
    if (input2.match(/[A-ZÁÉÍÓÚÑáéíóú!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        message.style.display = "none"; 
        message3.style.display = "none"; 
        message4.style.display = "none";
        message2.style.display = "none";
        message8.style.display = "none";
        message5.style.display = "block";
        message7.style.display = "block";
        message6.style.display = "block";
        document.getElementById("textoEncriptado").value = "";
        
        
    } 
    else if (input2 == ''){
        message2.style.display = "none"; 
        message3.style.display = "none"; 
        message4.style.display = "none";
        message6.style.display = "none";
        message8.style.display = "none";
        message.style.display = "block";
        message5.style.display = "block";
        message7.style.display = "block";

    }
    else {
        message.style.display = "none"; 
        message3.style.display = "none"; 
        message2.style.display = "none";
        message5.style.display = "none";
        message6.style.display = "none";
        message7.style.display = "none";
        message8.style.display = "block";
        message4.style.display = "block";
        
        var frase = document.getElementById("textoEncriptado").value;
        var textoEncriptado = frase.replace(/e/img,"enter");
        var textoEncriptado = textoEncriptado.replace(/o/g,'ober');
        var textoEncriptado = textoEncriptado.replace(/i/g,'imes');
        var textoEncriptado = textoEncriptado.replace(/a/g,'ai');
        var textoEncriptado = textoEncriptado.replace(/u/g,'fat');

        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
        document.getElementById("textoEncriptado").value = "";

      
      
    }
}
    
function desencriptar() {
    var input2 = document.getElementById("textoEncriptado").value;
    var message = document.getElementById("message");
    var message2 = document.getElementById("message2");
    var message3 = document.getElementById("message3");
    var message4 = document.getElementById("message4");
    var message5 = document.getElementById("message5");
    var message6 = document.getElementById("message6");
    var message7 = document.getElementById("sombra2");
    var message8 = document.getElementById("sombra");
    if (input2.match(/[A-ZÁÉÍÓÚÑáéíóú!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        message.style.display = "none"; 
        message3.style.display = "none"; 
        message4.style.display = "none";
        message2.style.display = "none";
        message8.style.display = "none";
        message6.style.display = "block";
        message7.style.display = "block";
        message5.style.display = "block";
        document.getElementById("textoEncriptado").value = "";
        
        
    } 
    else if (input2 == ''){
        message.style.display = "none"; 
        message3.style.display = "none"; 
        message4.style.display = "none";
        message6.style.display = "none";
        message8.style.display = "none";
        message2.style.display = "block";
        message7.style.display = "block";
        message5.style.display = "block";

    }
    else {
        message.style.display = "none"; 
        message3.style.display = "none"; 
        message2.style.display = "none";
        message5.style.display = "none";
        message7.style.display = "none";
        message6.style.display = "none";
        message4.style.display = "block";
        message8.style.display = "block";
        
        var frase = document.getElementById("textoEncriptado").value.toLowerCase();
        var textoEncriptado = frase.replace(/enter/g,"e");
        var textoEncriptado = textoEncriptado.replace(/ober/g,'o');
        var textoEncriptado = textoEncriptado.replace(/imes/g,'i');
        var textoEncriptado = textoEncriptado.replace(/ai/g,'a');
        var textoEncriptado = textoEncriptado.replace(/fat/g,'u');

        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
        document.getElementById("textoEncriptado").value = "";
     
      
      
    }
}
    
    
  
    function copiar(){
        var contenido=  document.querySelector("#textoDesencriptado");
        var input3 = document.getElementById("textoDesencriptado").value; 
        var message = document.getElementById("message");
        var message2 = document.getElementById("message2"); 
        var message3 = document.getElementById("message3");
        var message4 = document.getElementById("message4");
        var message5 = document.getElementById("message5");
        var message6 = document.getElementById("message6");
        var message7 = document.getElementById("sombra2");
        var message8 = document.getElementById("sombra");
        if (input3 == "") {
            message.style.display = "none"; 
            message2.style.display = "none"; 
            message4.style.display = "none"; 
            message6.style.display = "none"; 
            message8.style.display = "none";
            message3.style.display = "block";
            message7.style.display = "block";
            message5.style.display = "block";
          
        } else {
            message.style.display = "none"; 
            message3.style.display = "none";
            message2.style.display = "none";
            message5.style.display = "none";
            message6.style.display = "none"; 
            message7.style.display = "none";
            message8.style.display = "block";
            message4.style.display = "block";
            contenido.select();
            document.execCommand("copy");
           
         
    
        }
        
       
}


  
  
  

  
  
  
  
   
   

  
  

  
