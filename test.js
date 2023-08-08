let String = "";

let keys = document.querySelectorAll('.key');
Array.from(keys).forEach((key) =>{
    key.addEventListener('click',(e)=>{

        if (e.target.value == '='){
            String =eval (String);
            document.getElementById('display').innerText =String;
        }
        else if(e.target.value == 'c'){
            String ="";
            document.getElementById("display").innerText=String;
        }
        else{
            String = String+ e.target.value;
            document.getElementById('display').innerText =String;
        }
        
    })
})
