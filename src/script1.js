let newarray = [
    {
        company: "samsung",
        model: "Galaxy",
        memory: "64",
        price: "15000"

    },
    {

        company: "Nokia",
        model: "S730",
        memory: "128",
        price: "22000",

    },
    {

        company: "Xiaomi",
        model: "Note",
        memory: "32",
        price: "15000"

    },
    {
        company: "Motorola",
        model: "G10",
        memory: "32",
        price: "15000"
    },
    {
        company: "Apple",
        model: "S12",
        memory: "64",
        price: "25000"

    }

];

function function1() {
    var company = document.getElementById("company").value;
    console.log(company);
    var model = document.getElementById("model").value;
    console.log(model);
    var memory = document.getElementById("memory").value;
    console.log(memory);
    var price = document.getElementById("price").value;
    console.log(price);
    var obj = { company: company, model: model, memory: memory, price: price };
    newarray.push(obj);
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
    var dropdown4 = document.getElementById("dropdown4").value;
    console.log(dropdown4);
    var dropdown5 = document.getElementById("dropdown5").value;
    console.log(dropdown5);

    var string1 = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
    for (let x of newarray) {
        if (dropdown5 == "ascending") {
            if (dropdown4 == "company") {
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
            if (dropdown4 == "model") {
                newarray.sort((a, b) => {
                    let fa = a.model.toLowerCase(),
                        fb = b.model.toLowerCase();

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });

            }
            if (dropdown4 == "memory") {
                newarray.sort(function (a, b) {
                    return parseFloat(a.memory) - parseFloat(b.memory);
                });

            }
            if (dropdown4 == "price") {
                newarray.sort(function (a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);
                });

            }
        }
        if(dropdown5=="descending")
        {
            if (dropdown4 == "company") {
                newarray.sort((a, b) => {
                    let fa = a.company.toLowerCase(),
                        fb = b.company.toLowerCase();

                    if (fa > fb) {
                        return -1;
                    }
                    if (fa < fb) {
                        return 1;
                    }
                    return 0;
                });

            }
            if (dropdown4 == "model") {
                newarray.sort((a, b) => {
                    let fa = a.model.toLowerCase(),
                        fb = b.model.toLowerCase();

                    if (fa > fb) {
                        return -1;
                    }
                    if (fa < fb) {
                        return 1;
                    }
                    return 0;
                });

            }
            if (dropdown4 == "memory") {
                newarray.sort(function (a, b) {
                    return parseFloat(b.memory) - parseFloat(a.memory);
                });

            }
            if (dropdown4 == "price") {
                newarray.sort(function (a, b) {
                    return parseFloat(b.price) - parseFloat(a.price);
                });

            }
          
        }

            string1 += "<tr><td>" + x['company'] + "</td><td>" + x['model'] + "</td><td> " + x['memory'] + "</td><td>" + x['price'] + "</td></tr>";
    
    }
    string1 += "</table>";
    document.getElementById("table").innerHTML = string1;


}

