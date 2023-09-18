let title=document.getElementById("title")
let price=document.getElementById("price")
let ads =document.getElementById("ads")
let  discount=document.getElementById("discount")
let total =document.getElementById("total")
let category =document.getElementById("category")
let count =document.getElementById("count")
let taxes =document.getElementById("taxes")


   let result= (price.value +taxes.value+ads.value)-discount.value;

function getTotal()
{
   if(price.value != "")
   {
    total.innerHTML= result; 
   }
}
