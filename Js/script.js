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