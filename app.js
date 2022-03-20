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





let container=document.querySelector(".tabular")
let buttonEl=document.getElementById("buttonEl")
let buttonElement=document.querySelector(".secondbutton")
let crustEl=document.getElementById("crusts").value;
let sizeEl=document.getElementById("sizes").value;
let toppingsEl=document.getElementById("toppings").value;
let tableEl=document.getElementById("spaning");
let tableEl2=document.getElementById("spanning")
let tableEl3=document.getElementById("spanner");
let tableEl4=document.getElementById("span")
let tableEl5=document.getElementById("another")
let count=1;
const sizes={
    "large":800,
    "medium":700,
    "small":600
}
const toppings={
   "mushroom":250,
    "bacon":200,
    "ham":300
}
const crusts={
    "stuffed":200,
    "glutenfree":350,
    "crispy":400
}
buttonEl.addEventListener("click",function(){
     
      generateOutput()
      container.classList.add("tabulate")
      buttonElement.classList.add("secondButton");
})

function generateOutput(){
    if(crustEl=="stuffed"&&sizeEl=="small"&&toppingsEl=="mushroom"){
          tableEl.innerText=count;
          tableEl2.innerText=`${sizeEl}-${sizes.small}`;
          tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
          tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
          tableEl5.innerText=crusts.stuffed+toppings.mushroom+sizes.small;
    }else if(crustEl=="stuffed"&&sizeEl=="medium"&&toppingsEl=="mushroom"){
        tableEl.innerText=count;
        tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
        tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
        tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
        tableEl5.innerText=crusts.stuffed+toppings.mushroom+sizes.medium;
    }else if(crustEl=="stuffed"&&sizeEl=="large"&&toppingsEl=="mushroom"){
        tableEl.innerText=count;
        tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
        tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
        tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
        tableEl5.innerText=crusts.stuffed+toppings.mushroom+sizes.large; 
    }else if(crustEl=="crispy"&&sizeEl=="small"&&toppingsEl=="mushroom"){
        tableEl.innerText=count;
        tableEl2.innerText=`${sizeEl}-${sizes.small}`;
        tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
        tableEl4.innerText=`${crustEl}-${crusts.crispy}`
        tableEl5.innerText=crusts.crispy+toppings.mushroom+sizes.small;
  }else if(crustEl=="crispy"&&sizeEl=="medium"&&toppingsEl=="mushroom"){
    tableEl.innerText=count;
    tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.crispy}`
    tableEl5.innerText=crusts.crispy+toppings.mushroom+sizes.medium;
}else if(crustEl=="crispy"&&sizeEl=="large"&&toppingsEl=="mushroom"){
    tableEl.innerText=count;
    tableEl2.innerText=`${sizeEl}-${sizes.large}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.crispy}`
    tableEl5.innerText=crusts.crispy+toppings.mushroom+sizes.large;
}else if(crustEl=="glutenFree"&&sizeEl=="small"&&toppingsEl=="mushroom"){
    tableEl.innerText=count;
    tableEl2.innerText=`${sizeEl}-${sizes.small}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
    tableEl5.innerText=crusts.glutenfree+toppings.mushroom+sizes.small;
}else if(crustEl=="glutenFree"&&sizeEl=="medium"&&toppingsEl=="mushroom"){
    tableEl.innerText=count;
    tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
    tableEl5.innerText=crusts.glutenfree+toppings.mushroom+sizes.medium;
}else if(crustEl=="glutenFree"&&sizeEl=="large"&&toppingsEl=="mushroom"){
    tableEl.innerText=count;
    tableEl2.innerText=`${sizeEl}-${sizes.large}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.mushroom}`
    tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
    tableEl5.innerText=crusts.glutenfree+toppings.mushroom+sizes.large;
}else if(crustEl=="stuffed"&&sizeEl=="small"&&toppingsEl=="bacon"){
    tableEl.innerText=count;
    tableEl2.innerText=`${sizeEl}-${sizes.small}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
    tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
    tableEl5.innerText=crusts.stuffed+toppings.bacon+sizes.small;
}else if(crustEl=="stuffed"&&sizeEl=="medium"&&toppingsEl=="bacon"){
  tableEl.innerText=count;
  tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
  tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
  tableEl5.innerText=crusts.stuffed+toppings.bacon+sizes.medium;
}else if(crustEl=="stuffed"&&sizeEl=="large"&&toppingsEl=="bacon"){
  tableEl.innerText=count;
  tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
  tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
  tableEl5.innerText=crusts.stuffed+toppings.bacon+sizes.large;
}else if(crustEl=="crispy"&&sizeEl=="small"&&toppingsEl=="bacon"){
  tableEl.innerText=count;
  tableEl2.innerText=`${sizeEl}-${sizes.small}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
  tableEl4.innerText=`${crustEl}-${crusts.crispy}`
  tableEl5.innerText=crusts.crispy+toppings.bacon+sizes.small;
}else if(crustEl=="crispy"&&sizeEl=="medium"&&toppingsEl=="bacon"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.crispy}`
tableEl5.innerText=crusts.crispy+toppings.bacon+sizes.medium;
}else if(crustEl=="crispy"&&sizeEl=="large"&&toppingsEl=="bacon"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.large}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.crispy}`
tableEl5.innerText=crusts.crispy+toppings.bacon+sizes.large;
}else if(crustEl=="glutenFree"&&sizeEl=="small"&&toppingsEl=="bacon"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.small}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText=crusts.glutenfree+toppings.bacon+sizes.small;
}else if(crustEl=="glutenFree"&&sizeEl=="medium"&&toppingsEl=="bacon"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText=crusts.glutenfree+toppings.bacon+sizes.medium;
}else if(crustEl=="glutenFree"&&sizeEl=="large"&&toppingsEl=="bacon"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.large}`;
tableEl3.innerText=`${toppingsEl}-${toppings.bacon}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText=crusts.glutenfree+toppings.bacon+sizes.large;
}else if(crustEl=="stuffed"&&sizeEl=="small"&&toppingsEl=="ham"){
    tableEl.innerText=count;
    tableEl2.innerText=`${sizeEl}-${sizes.small}`;
    tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
    tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
    tableEl5.innerText=crusts.stuffed+toppings.ham+sizes.small;
}else if(crustEl=="stuffed"&&sizeEl=="medium"&&toppingsEl=="ham"){
  tableEl.innerText=count;
  tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
  tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
  tableEl5.innerText=crusts.stuffed+toppings.ham+sizes.medium;
}else if(crustEl=="stuffed"&&sizeEl=="large"&&toppingsEl=="ham"){
  tableEl.innerText=count;
  tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
  tableEl4.innerText=`${crustEl}-${crusts.stuffed}`
  tableEl5.innerText=crusts.stuffed+toppings.ham+sizes.large;
}else if(crustEl=="crispy"&&sizeEl=="small"&&toppingsEl=="ham"){
  tableEl.innerText=count;
  tableEl2.innerText=`${sizeEl}-${sizes.small}`;
  tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
  tableEl4.innerText=`${crustEl}-${crusts.crispy}`
  tableEl5.innerText=crusts.crispy+toppings.ham+sizes.small;
}else if(crustEl=="crispy"&&sizeEl=="medium"&&toppingsEl=="ham"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.crispy}`
tableEl5.innerText=crusts.crispy+toppings.ham+sizes.medium;
}else if(crustEl=="crispy"&&sizeEl=="large"&&toppingsEl=="ham"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.large}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.crispy}`
tableEl5.innerText=crusts.crispy+toppings.ham+sizes.large;
}else if(crustEl=="glutenFree"&&sizeEl=="small"&&toppingsEl=="ham"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.small}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText=crusts.glutenfree+toppings.ham+sizes.small;
}else if(crustEl=="glutenFree"&&sizeEl=="medium"&&toppingsEl=="ham"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.medium}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText=crusts.glutenfree+toppings.ham+sizes.medium;
}else if(crustEl=="glutenFree"&&sizeEl=="large"&&toppingsEl=="ham"){
tableEl.innerText=count;
tableEl2.innerText=`${sizeEl}-${sizes.large}`;
tableEl3.innerText=`${toppingsEl}-${toppings.ham}`
tableEl4.innerText=`${crustEl}-${crusts.glutenfree}`
tableEl5.innerText=crusts.glutenfree+toppings.ham+sizes.large;
}
}
buttonElement.addEventListener("click",function(){
    let common=document.createElement("tr");
    let commoner=document.body.appendChild(common);
    console.log(commoner);
    count+=1;
    generateOutput();
})