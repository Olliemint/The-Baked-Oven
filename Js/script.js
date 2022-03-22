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
let Additinalcost = 150;



// cart count display script

var button11 = document.getElementById("btn5"),
  count = 1;
button11.onclick = function() {
  count += 1;
 document.getElementById("order").innerHTML = `${count}`
};

var button12 = document.getElementById("btn3"),
  count = 0;
button12.onclick = function() {
  count += 1;
 document.getElementById("order").innerHTML = `${count}`
};


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
node.appendChild(document.createTextNode(`You ordered ${Pizzasize} with ${Crustsize} & ${Toppingsize} your total is Ksh ${orderTotal.Fullorder()}`));
 
document.getElementById("ul").appendChild(node);
myarray.push(orderTotal.Fullorder())


console.log(myarray);

   
        
    
    


})

// add order script
let button5 = document.getElementById("btn5");

button5.addEventListener("click", (e) =>{
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
node.appendChild(document.createTextNode(`You ordered ${Pizzasize} with ${Crustsize} & ${Toppingsize} your total is Ksh ${orderTotal.Fullorder()}`));
 
document.getElementById("ul").appendChild(node);
myarray.push(orderTotal.Fullorder())




   
        
    
    


})

// checkout script?
let button6 = document.getElementById("btn6");

button6.addEventListener("click", (e) =>{
    e.preventDefault();

    // alert("wow we can checkout")
    // let Grandtotal = function(){

    // }
    let newArray = myarray.map((i) => Number(i));

    let Grandtotal = newArray.reduce(function(a,b){
        return a + b;
        
    })
    
    document.getElementById("grand").innerHTML = `Totals: Ksh ${Grandtotal}`

    // document.getElementById("total").innerHTML = `Your order Totals is: Ksh ${Grandtotal}`
})


// delivery option script (Yes option)
let button7 = document.getElementById("btn7");

button7.addEventListener("click", (e) =>{
    e.preventDefault();

    alert("Additional Delivery fee is Ksh 150")
    var location = prompt("Enter Your delivery location:")
    // alert("Your order will be delivered to your location.")
    alert(`Your order will be delivered to ${location}`)
})


// delivery option script (No option)
let button8 = document.getElementById("btn8");

button8.addEventListener("click", (e) =>{

    alert("Okay you can go ahead and checkout.")
   

})

// checkout yes Script
let button9 = document.getElementById("btn9");

button9.addEventListener("click", (e) =>{
    
    // let Additinalcost = 150;
    

    let newArray = myarray.map((i) => Number(i));

    let Grandtotal = newArray.reduce(function(a,b){
        return a + b;
        
    })

    // document.getElementById("additional").innerHTML = `Additional Delivery Cost: Ksh ${Additinalcost}`
    

    document.getElementById("grand2").innerHTML = `Totals: Ksh ${Grandtotal + Additinalcost}`

});   





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
$(document).ready(function(){
    $("#btn7").click(function(){
        document.getElementById("additional").innerHTML = `Additional Delivery Cost: Ksh ${Additinalcost}`
        // $("#btn7").hide();
        // $("#btn8").hide();


    })
    // order button hide
    $("#btn3").click(function(){
        $("#btn5").show();
        $(".sumhead").show();
        $("#card1").show();
        $("#btn3").hide();
    })
    // add more button show additional
    $("#btn5").click(function(){
        $(".deliver").show();


    })
    // hide add more button
    $("#btn7").click(function(){
        $("#btn5").hide();
        $(".deliver").hide();
        $("#btn9").show();

    })

    // hide add more button
    $("#btn8").click(function(){
        $("#btn5").hide();
        $(".deliver").hide();
        $("#btn6").show();

    })
    // checkout buttons show


})