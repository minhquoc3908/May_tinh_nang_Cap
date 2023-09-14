let number =document.getElementById("number");
function input(value){
    number.value+=value;
}
function reset(){
    number.value="";
}
function result(){
    let result=eval(number.value);
    number.value=result;
}