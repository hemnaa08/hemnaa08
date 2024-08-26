var inp1=document.getElementById("inp1")
var inp2=document.getElementById("inp2")
var result=document.getElementById("result")
var btn=document.getElementById("btn")
var num1=Number(inp1.value)
var num2=Number(inp2.value)
function add()
{
var total=num1+num2
console.log(total)
result.textContent=total
}