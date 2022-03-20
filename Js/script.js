// Business logic
function myorder(Pizza, Crust, Topping){
    this.Pizza = Pizza
    this.Crust = Crust
    this.Topping = Topping
}
myorder.prototype.Fullorder = function(){
    return this.Pizza + this.Crust + this.Topping;
}

let myarray = [];





// user interface logic
let button3 = document.getElementById("btn3");

button3.addEventListener("click", (e) =>{
    e.preventDefault();

    // pizza selection
    var pizzaPicked = document.getElementById("pizzacost");
    var Pizza = parseInt(pizzaPicked.options[pizzaPicked.selectedIndex].value);

    var Pizzalabel = document.getElementById("pizzacost");
    var Pizzasize = Pizzalabel.options[Pizzalabel.selectedIndex].text;
    
    

    // var strUser = e.options[e.selectedIndex].value;

    //    crust selection
    var crustPicked = document.getElementById("mycrust");
    var Crust = parseInt(crustPicked.options[crustPicked.selectedIndex].value);

    var Crustlabel = document.getElementById("mycrust");
    var Crustsize = Crustlabel.options[Crustlabel.selectedIndex].text;


    // topping selection
    var toppingPicked = document.getElementById("mytopping");
    var Topping = parseInt(toppingPicked.options[toppingPicked.selectedIndex].value);

    var Toppinglabel = document.getElementById("mytopping");
    var Toppingsize = Toppinglabel.options[Toppinglabel.selectedIndex].text;

    


    
    let orderTotal = new myorder(Pizza, Crust, Topping);

    

    

    

  

//     myarray.push(orderTotal.Fullorder());
//     console.log(myarray);


    var node = document.createElement('li');
node.appendChild(document.createTextNode(`You ordered ${Pizzasize} Pizza with ${Crustsize} crust & ${Toppingsize} topping @${orderTotal.Fullorder()}Ksh`));
 
document.getElementById("ul").appendChild(node);
myarray.push(orderTotal.Fullorder())


console.log(myarray);

   
        
    
    


})


// book now script
let button4 = document.getElementById("btn4");

let form = document.getElementById("bookf");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let form = new FormData(e.target);

    let name = document.getElementById("name").value;
    
    document.getElementById("results").innerHTML = ("Hey" +" "+name+ " "+ "Your Booking was Succesful. Thank you for choosing Baked-Oven")

})

$(document).ready(function(){
    $("#btn2").click(function(){
        
            $(".bookform").show();
    $("#btn4").click(function(){

        $(".bookform").hide();

    })

    })
})