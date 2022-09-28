function funct()
{
var company=document.getElementById("company").value;
console.log(company);
var model=document.getElementById("model").value;
console.log(model);
var memory=document.getElementById("memory").value;
console.log(memory);
var price=document.getElementById("price").value;
console.log(price);

var obj = {company:company,model:model,memory:memory,price:price};
console.log(obj);
}