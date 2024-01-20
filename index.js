const list=document.getElementById("todoList")
function addNewelement(){
   
    const newItem =document.createElement("li");
    const inputValue=document.getElementById("inputField").value;
    //const text=document.createTextNode(inputValue);
    newItem.textContent=inputValue;
    //newItem.appendChild(text);
    if(inputValue!==''){
    list.appendChild(newItem);
    }
    else{
        alert("You must write some thing");
    }
    inputValue=document.getElementById("inputField").value=''

}
