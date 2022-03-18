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
})







let buttonEl=document.getElementById("buttonEl");
let crustEl=document.getElementById("crusts");
let sizeEl=document.getElementById("size");
let toppingsEl=document.getElementById("toppings");
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
