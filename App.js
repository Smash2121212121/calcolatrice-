let expression ="";
const mynumber = document.querySelectorAll('.mynumb');
Array.from(mynumber).forEach(function(mynumb){
    mynumb.addEventListener('click' ,function() {
        expression += this.value;
     document.getElementById("numb").innerHTML=expression;
    })
});
const myresult = document.querySelector(".myresult");
myresult.addEventListener('click', ()=>{
 try{
    let text=expression;
     let results= eval(text);
    document.getElementById("result").textContent= results;
 } catch (err) {
    console.log(err.message)
 }
});
document.getElementById("clear").addEventListener('click', () => {
  expression = "";
  document.getElementById("numb").textContent = "";
  document.getElementById("result").textContent = "";
});
