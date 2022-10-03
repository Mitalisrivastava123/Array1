let newarray = [
    {
        company: "samsung",
        model: "Galaxy",
        memory: "64",
        price: "15000",
        quantity:"20",
        rating:4,
        amount:"14000"
    },
    {

        company: "Nokia",
        model: "S730",
        memory: "128",
        price: "22000",
        quantity:"15",
        rating:3,
        amount:"12000"
    },
    {

        company: "Xiaomi",
        model: "Note",
        memory: "32",
        price: "15000",
        quantity:"21",
        rating:5,
        amount:"40000"
    },
    {
        company: "Motorola",
        model: "G10",
        memory: "32",
        price: "15000",
        quantity:"13",
        rating:4,
        amount:"80000"
    },
    {
        company: "Apple",
        model: "S12",
        memory: "64",
        price: "25000",
        quantity:"18",
        rating:6,
        amount:"25000"
    }

];
function funct() {
    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var price = document.getElementById("price").value;
    console.log(price);
    var quantity = document.getElementById("quantity").value;
    console.log(quantity);
    var rating = document.getElementById("rating").value;
    console.log(rating);
    var amount =document.getElementById("amount").value;
    console.log(amount);
    var obj = { company: company, model: model, memory: memory, price: price, quantity:quantity,rating:rating ,amount:amount};
    console.log(obj);
}

function funct2() {

    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var price = document.getElementById("price").value;
    console.log(price);
    var quantity = document.getElementById("quantity").value;
    console.log(quantity);
    var obj1 = { company: company, model: model, memory: memory, price: price ,quantity:quantity};
    newarray.push(obj1);
    console.log(obj1);
    var string1 = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th></tr>";
    for (let x of newarray) {
        string1 += "<tr><td>" + x['company'] + "</td><td>" + x['model'] + "</td><td> " + x['memory'] + "</td><td>" + x['price'] + "</td><td>"+ x['quantity'] + "</td></tr>";
    };
    string1 += "</table>";
    document.getElementById("table").innerHTML = string1;


}

function search() {
    var dropdown = document.getElementById('dropdown').value;
    console.log(dropdown);
    var fields = document.getElementById("field").value;
    console.log(fields);
    var string2 = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
    for (let y of newarray) {

        if (y[dropdown] == fields) {
            string2 += "<tr><td>" + y['company'] + "</td><td>" + y['model'] + "</td><td> " + y['memory'] + "</td><td>" + y['price'] + "</td></tr>";
        }
    }
    string2 += "</table>";
    document.getElementById("table1").innerHTML = string2;
}

function searchprice() {
    var minprice = Number(document.getElementById("minprice").value);
    console.log(minprice);
    var maxprice = Number(document.getElementById("maxprice").value);
    console.log(maxprice);

    var string3 = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
    for (let m of newarray) {
        if (m.price >= minprice && m.price <= maxprice) {
            string3 += "<tr><td>" + m['company'] + "</td><td>" + m['model'] + "</td><td> " + m['memory'] + "</td><td>" + m['price'] + "</td></tr>";
        }

    }
    string3 += "</table>";
    document.getElementById("table3").innerHTML = string3;
}

function checkproduct() {
    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var price = document.getElementById("price").value;
    console.log(price);

    // var checkBox = document.createElement("input");
    // checkBox.type = 'checkbox';
    // var label = document.createElement("label");

    // label.appendChild(checkBox);
    var obj1 = { company: company, model: model, memory: memory, price: price };
    // newarray.push(obj1);
    console.log(obj1);
    var string1 = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Action</th></tr>";
    for (let x of newarray) {
        string1 += "<tr><td>" + x['company'] + "</td><td>" + x['model'] + "</td><td> " + x['memory'] + "</td><td>" + x['price'] + "</td><td><input type='checkbox'></td></tr>";
    };
    string1 += "</table>";
    document.getElementById("table4").innerHTML = string1;
}

function deleteitem() {

    var target = document.querySelectorAll('input:checked');
    target.forEach(check => {
        check.parentNode.parentNode.remove();
        console.log('a tag with [data-type="data"] = Deleted');
    });

}
deleteitem();

function quantitytableupdate()
{

    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var price = document.getElementById("price").value;
    console.log(price);
    var quantity = document.getElementById("quantity").value;
    console.log(quantity);
    var fieldS=document.getElementById("field1").value;
    console.log(fieldS);
    var obj1 = { company: company, model: model, memory: memory, price: price ,quantity:quantity};
    newarray.push(obj1);
    console.log(obj1);
    var string1 = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th></tr>";
    for (let x of newarray) {
        string1 += "<tr><td>" + x['company'] + "</td><td>" + x['model'] + "</td><td> " + x['memory'] + "</td><td>" + x['price'] + "</td><td>"+ x['quantity'] + "</td></tr>";
    };
    string1 += "</table>";
    document.getElementById("quantitytable").innerHTML = string1;

}

function updatedata()
{
    
    var quantity=document.getElementById("quantity").value;
    console.log(quantity);
    var dropdown1=document.getElementById("dropdown1").value;
    console.log(dropdown1);
 
    if(dropdown1=="samsung")
    {
        newarray.forEach((element) => {
           if(element.company=="samsung"){
          element.quantity=document.getElementById("field1").value;

           }
         console.log((element.quantity));
     
    });
}
}
function rateproduct1()
{

    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var price = document.getElementById("price").value;
    console.log(price);
    
    var rating = document.getElementById("rating").value;
    console.log(rating);
    var dropdown2 = document.getElementById("dropdown2").value;
    console.log(dropdown2);
    var ratingone = document.getElementById("ratingone").value;
    console.log(ratingone);



    var obj1 = { company: company, model: model, memory: memory, price: price ,rating:rating};
    newarray.push(obj1);
        newarray.forEach((element) => {
           if(dropdown2 == element.company){
           element.rating=ratingone;
           console.log(rating);
           }
    });
    console.log(newarray);
    var stringarr = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Rating</th></tr>";
    for (let x of newarray) {
        stringarr += "<tr><td>" + x['company'] + "</td><td>" + x['model'] + "</td><td> " + x['memory'] + "</td><td>" + x['price'] + "</td><td>"+ x['rating'] + "</td></tr>";
    };
    stringarr += "</table>";
    document.getElementById("tablerate").innerHTML = stringarr;

}
let cart = [];
function addquantity()
{

    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var price = document.getElementById("price").value;
    console.log(price);

    var quantity = document.getElementById("quantity").value;
    console.log(quantity)
    var rating = document.getElementById("rating").value;
    console.log(rating);

    var amount = document.getElementById("amount").value;
    console.log(amount);
    
    var dropdown3 = document.getElementById("dropdown3").value;
    console.log(dropdown3);
    var fieldtext = document.getElementById("fieldtext").value;
    console.log(fieldtext);

    var obj1 = { company: company, model: model, memory: memory, price: price ,quantity:quantity ,rating:rating ,amount:amount};
    newarray.push(obj1);
    
        newarray.forEach((element) => {
           if(dropdown3==element.company){
            // element.quantity=element.quantity-fieldtext;
           var x= element.quantity = element.quantity-fieldtext;
          document.getElementById("quantity").innerHTML=x;

           }
         console.log((element.quantity));
     
    });

   
   
  
  
    console.log(newarray);
    var stringarr = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Amount</th></tr>";
    for (let x of newarray) {
        stringarr += "<tr><td>" + x['company'] + "</td><td>" + x['model'] + "</td><td> " + x['memory'] + "</td><td>" + x['price'] + "</td><td>"+ x['quantity'] + "</td><td>"+x['amount']+"</td></tr>";
    };
    stringarr += "</table>";
    document.getElementById("tablerateone").innerHTML = stringarr;


}
let carts =[];
var billing=0;
function generatebill()
{

    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var price = document.getElementById("price").value;
    console.log(price);

    var quantity = document.getElementById("quantity").value;
    console.log(quantity)
    var rating = document.getElementById("rating").value;
    console.log(rating);

    var dropdown3 = document.getElementById("dropdown3").value;
    console.log(dropdown3);

    var fieldtext = document.getElementById("fieldtext").value;
    console.log(fieldtext);

    var amount = document.getElementById("amount").value;
    console.log(amount);

    var obj = {company: company, model: model, memory: memory, price: price ,quantity:quantity ,rating:rating,amount:amount}
    newarray.push(obj);
    console.log(obj);


     newarray.forEach((element) => {
        if(element.company==dropdown3)
        {
      totalamount = element.price * element.quantity;
    
      billing = parseInt(billing)+parseInt(totalamount);

    carts.push({description:dropdown3,quantity:fieldtext,totalamount:totalamount});

        
    }
      console.log((element.quantity));
 });
    var stringarr = "<table><tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>";
    for (let x of carts) {
        stringarr += "<tr><td>" + x['description'] + "</td><td>"+ x['quantity'] + "</td><td>"+ x['totalamount']+"</td></tr>";
    };
    stringarr += "<tr><td> TOTAL =>" + billing + "</td></tr>";
    stringarr += "</table>";
    document.getElementById("tablerateone1").innerHTML = stringarr;
}

function update()
{
    array1[m1].newone=document.getElementById("new-task").value;
    console.log(array1[m1].newone);
    display();
}

function display()
{

    var string1="";
 
    for (let x=0;x<array1.length;x++) {
        string1 += "<li><input type='checkbox' value='"+ array1[x] +"'><label>"+array1[x].newone+"</label><button class='edit' onclick='edit(" + x +")' id=" + x +">Edit</button></td><td><button class='delete'>Delete</button></li>"; 
    };
  
    
    document.getElementById("incomplete-tasks").innerHTML = string1;
}
function function2()
{
    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var price = document.getElementById("price").value;
    console.log(price);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var dropdown1 = document.getElementById("dropdown1").value;
    console.log(dropdown1);

    var objnew = {company:company,model:model,memory:memory,price:price};

    newarray.push(objnew);
    var stringx = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
    for(x of newarray)
    {
    if(dropdown1=="company")
    {
        newarray.sort((a, b) => {
            let fa = a.company.toLowerCase(),
                fb = b.company.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

      }
      stringx += "<tr><td>" + x['company'] + "</td><td>" + x['model'] + "</td><td> " + x['memory'] + "</td><td>" + x['price'] + "</td></tr>";
    }

    stringx +="</table>";
    document.getElementById("tablecompany").innerHTML=stringx;



    
}




        



    
 
 




 









