$(document).ready(function(){
    $(".another").click(function(){
        $(".galaxy").show();
        $(this).hide();
    })
    $(".galaxy").click(function(){
        $(".another").show();
        $(this).hide();
    })
    $(".imageContainer").click(function(){
        $(".milkyWay").show();
        $(this).hide();
    })
    $(".milkyWay").click(function(){
        $(".imageContainer").show();
        $(this).hide();
    })
    $(".imageContainer2").click(function(){
        $(".outstanding").show();
        $(this).hide();
    })
    $(".outstanding").click(function(){
        $(".imageContainer2").show();
        $(this).hide();
    })
    $("#buttonEl").click(function(){
        (".tabular").show();
        generateOutput();
    })
})







let crustEl=document.getElementById("crusts").value;
let sizeEl=document.getElementById("size").value;
let toppingsEl=document.getElementById("toppings").value;
let tableEl=document.getElementById("spaning");
let tableEl2=document.getElementById("spanning")
let tableEl3=document.getElementById("spanner");
let tableEl4=document.getElementById("span")
let tableEl5=document.getElementById("another")
const sizes={
    "large":"ksh800",
    "medium":"ksh700",
    "small":"ksh 600"
}
const toppings={
   "mushroom":"ksh250",
    "bacon":"ksh200",
    "ham":"ksh300"
}
const crusts={
    "stuffed":"ksh200",
    "gluten-free":"ksh350",
    "crispy":"ksh400"
}
function generateOutput(){
    if(crustEl=="stuffed"&&sizeEl=="small"&&toppingsEl=="mushroom"){
          tableEl.innerText=1;
          tableEl2.innerText=`${sizeEl}-${sizes.small}`;
          tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
          tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
          tableEl5.innerText="ksh1050"
    }else if(crustEl=="stuffed"&&sizeEl=="medium"&&toppingsEl=="mushroom"){
        tableEl.innerText=1;
        tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
        tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
        tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
        tableEl5.innerText="ksh1150"
    }else if(crustEl=="stuffed"&&sizeEl=="large"&&toppingsEl=="mushroom"){
        tableEl.innerText=1;
        tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
        tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
        tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
        tableEl5.innerText="ksh1250" 
    }
}