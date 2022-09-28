let newarray = [
    {
        company: "samsung",
        model: "Galaxy",
        memory: "64",
        price: "15000",
        quantity:"20"
    },
    {

        company: "Nokia",
        model: "S730",
        memory: "128",
        price: "22000",
        quantity:"15"
    },
    {

        company: "Xiaomi",
        model: "Note",
        memory: "32",
        price: "15000",
        quantity:"21"
    },
    {
        company: "Motorola",
        model: "G10",
        memory: "32",
        price: "15000",
        quantity:"13"
    },
    {
        company: "Apple",
        model: "S12",
        memory: "64",
        price: "25000",
        quantity:"18"
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
    var obj = { company: company, model: model, memory: memory, price: price, quantity:quantity };
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
    // console.log(quantity);
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








