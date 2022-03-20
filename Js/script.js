// Business logic
function myorder(pizzacost, mycrust, mytopping){
    this.pizzacost = pizzacost
    this.mycrust = mycrust
    this.mytopping = mytopping
}
myorder.prototype.Fullorder = function(){
    return this.pizzacost + this.mycrust + this.mytopping
}



// user interface logic
let button3 = document.getElementById("btn3");

button3.addEventListener("click", (e) =>{
    e.preventDefault();

    // pizza selecion
    var pizzaPicked = document.getElementById("pizzacost");
    var Pizza = pizzaPicked.options[pizzaPicked.selectedIndex].value;

    // var strUser = e.options[e.selectedIndex].value;

    //    crust selection
    var crustPicked = document.getElementById("mycrust");
    var Crust = crustPicked.options[crustPicked.selectedIndex].value;

    // topping selection
    var toppingPicked = document.getElementById("mytopping");
    var Topping = toppingPicked.options[toppingPicked.selectedIndex].value;

    


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