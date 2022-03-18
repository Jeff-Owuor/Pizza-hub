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






let buttonEl=document.getElementById("buttonEl")
let crustEl=document.getElementById("crusts").value;
let sizeEl=document.getElementById("sizes").value;
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
    "glutenfree":"ksh350",
    "crispy":"ksh400"
}
buttonEl.addEventListener("click",function(){
    
})
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
    }else if(crustEl=="crispy"&&sizeEl=="small"&&toppingsEl=="mushroom"){
        tableEl.innerText=1;
        tableEl2.innerText=`${sizeEl}-${sizes.small}`;
        tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
        tableEl4.innerText=`${crustEl}-${crusts.crispy}`
        tableEl5.innerText="ksh1250"
  }else if(crustEl=="crispy"&&sizeEl=="medium"&&toppingsEl=="mushroom"){
    tableEl.innerText=1;
    tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.crispy}`
    tableEl5.innerText="ksh1350"
}else if(crustEl=="crispy"&&sizeEl=="large"&&toppingsEl=="mushroom"){
    tableEl.innerText=1;
    tableEl2.innerText=`${sizeEl}-${sizes.large}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.crispy}`
    tableEl5.innerText="ksh1450"
}else if(crustEl=="glutenFree"&&sizeEl=="small"&&toppingsEl=="mushroom"){
    tableEl.innerText=1;
    tableEl2.innerText=`${sizeEl}-${sizes.small}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
    tableEl5.innerText="ksh1200"
}else if(crustEl=="glutenFree"&&sizeEl=="medium"&&toppingsEl=="mushroom"){
    tableEl.innerText=1;
    tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
    tableEl5.innerText="ksh1300"
}else if(crustEl=="glutenFree"&&sizeEl=="large"&&toppingsEl=="mushroom"){
    tableEl.innerText=1;
    tableEl2.innerText=`${sizeEl}-${sizes.large}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
    tableEl5.innerText="ksh1300"
}else if(crustEl=="stuffed"&&sizeEl=="small"&&toppingsEl=="bacon"){
    tableEl.innerText=1;
    tableEl2.innerText=`${sizeEl}-${sizes.small}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
    tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
    tableEl5.innerText="ksh1000"
}else if(crustEl=="stuffed"&&sizeEl=="medium"&&toppingsEl=="bacon"){
  tableEl.innerText=1;
  tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
  tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
  tableEl5.innerText="ksh1200"
}else if(crustEl=="stuffed"&&sizeEl=="large"&&toppingsEl=="bacon"){
  tableEl.innerText=1;
  tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
  tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
  tableEl5.innerText="ksh1300" 
}else if(crustEl=="crispy"&&sizeEl=="small"&&toppingsEl=="bacon"){
  tableEl.innerText=1;
  tableEl2.innerText=`${sizeEl}-${sizes.small}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
  tableEl4.innerText=`${crustEl}-${crusts.crispy}`
  tableEl5.innerText="ksh1200"
}else if(crustEl=="crispy"&&sizeEl=="medium"&&toppingsEl=="bacon"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.crispy}`
tableEl5.innerText="ksh1300"
}else if(crustEl=="crispy"&&sizeEl=="large"&&toppingsEl=="bacon"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.large}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.crispy}`
tableEl5.innerText="ksh1400"
}else if(crustEl=="glutenFree"&&sizeEl=="small"&&toppingsEl=="bacon"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.small}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText="ksh1150"
}else if(crustEl=="glutenFree"&&sizeEl=="medium"&&toppingsEl=="bacon"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText="ksh1250"
}else if(crustEl=="glutenFree"&&sizeEl=="large"&&toppingsEl=="bacon"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.large}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText="ksh1350"
}else if(crustEl=="stuffed"&&sizeEl=="small"&&toppingsEl=="ham"){
    tableEl.innerText=1;
    tableEl2.innerText=`${sizeEl}-${sizes.small}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
    tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
    tableEl5.innerText="ksh1100"
}else if(crustEl=="stuffed"&&sizeEl=="medium"&&toppingsEl=="ham"){
  tableEl.innerText=1;
  tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
  tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
  tableEl5.innerText="ksh1200"
}else if(crustEl=="stuffed"&&sizeEl=="large"&&toppingsEl=="ham"){
  tableEl.innerText=1;
  tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
  tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
  tableEl5.innerText="ksh1300" 
}else if(crustEl=="crispy"&&sizeEl=="small"&&toppingsEl=="ham"){
  tableEl.innerText=1;
  tableEl2.innerText=`${sizeEl}-${sizes.small}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
  tableEl4.innerText=`${crustEl}-${crusts.crispy}`
  tableEl5.innerText="ksh1300"
}else if(crustEl=="crispy"&&sizeEl=="medium"&&toppingsEl=="ham"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.crispy}`
tableEl5.innerText="ksh1400"
}else if(crustEl=="crispy"&&sizeEl=="large"&&toppingsEl=="ham"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.large}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.crispy}`
tableEl5.innerText="ksh1500"
}else if(crustEl=="glutenFree"&&sizeEl=="small"&&toppingsEl=="ham"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.small}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText="ksh1250"
}else if(crustEl=="glutenFree"&&sizeEl=="medium"&&toppingsEl=="ham"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText="ksh1350"
}else if(crustEl=="glutenFree"&&sizeEl=="large"&&toppingsEl=="ham"){
tableEl.innerText=1;
tableEl2.innerText=`${sizeEl}-${sizes.large}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText="ksh1450"
}
}