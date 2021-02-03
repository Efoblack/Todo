var textVal = document.getElementById("input-todo").value;
var t = document.createTextNode(textVal);
var toDoCont = document.getElementById("todo");
var create = document.createElement("p");
var buttons = document.getElementById("button-on");
create.appendChild(t);

buttons.addEventListener("click", function(){
    toDoCont.appendChild(create);
})
document.getElementById("input-todo");
