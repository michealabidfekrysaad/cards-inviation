new WOW().init();


//start of the navbar color when moving
$(document).ready(function(){
  $(window).scroll(function(){
//    $("span").text( x+= 1);
      if ($(document).scrollTop() >= 0 && $(document).scrollTop() < 720 ) {
      $("#home-nav").css("color","rgba(255, 20, 192, 1)");
          $("#samples-nav").css("color","rgba(0,0,0,.5)");
        $("#greeting-nav").css("color","rgba(0,0,0,.5)");
          $("#about-nav").css("color","rgba(0,0,0,.5)");
          $("#view-nav").css("color","rgba(0,0,0,.5)");
          $("#footer-nav").css("color","rgba(0,0,0,.5)");
          
    } else if($(document).scrollTop() >= 720 && $(document).scrollTop() < 1120 ){
      $("#about-nav").css("color","rgba(255, 20, 192, 1)");
        $("#home-nav").css("color","rgba(0,0,0,.5)");
        $("#samples-nav").css("color","rgba(0,0,0,.5)");
        $("#greeting-nav").css("color","rgba(0,0,0,.5)");
        $("#view-nav").css("color","rgba(0,0,0,.5)");
        $("#footer-nav").css("color","rgba(0,0,0,.5)");
        
    }
      else if($(document).scrollTop() >= 1120 && $(document).scrollTop() < 1600) {
      $("#greeting-nav").css("color","rgba(255, 20, 192, 1)");
          $("#home-nav").css("color","rgba(0,0,0,.5)");
          $("#about-nav").css("color","rgba(0,0,0,.5)");
          $("#samples-nav").css("color","rgba(0,0,0,.5)");
          $("#view-nav").css("color","rgba(0,0,0,.5)");
          $("#footer-nav").css("color","rgba(0,0,0,.5)");
          
    } else if ($(document).scrollTop() >= 1600 && $(document).scrollTop() < 2385)  {
      $("#samples-nav").css("color","rgba(255, 20, 192, 1)");
        $("#greeting-nav").css("color","rgba(0,0,0,.5)");
          $("#home-nav").css("color","rgba(0,0,0,.5)");
          $("#about-nav").css("color","rgba(0,0,0,.5)");
          $("#view-nav").css("color","rgba(0,0,0,.5)");
        $("#footer-nav").css("color","rgba(0,0,0,.5)");
        
    }
      else if ($(document).scrollTop() >= 2385 && $(document).scrollTop() < 2900)  {
          $("#view-nav").css("color","rgba(255, 20, 192, 1)");
          $("#samples-nav").css("color","rgba(0,0,0,.5)");
        $("#greeting-nav").css("color","rgba(0,0,0,.5)");
          $("#home-nav").css("color","rgba(0,0,0,.5)");
          $("#about-nav").css("color","rgba(0,0,0,.5)");
          $("#footer-nav").css("color","rgba(0,0,0,.5)");
      }
      else if ($(document).scrollTop() >= 2900 && $(document).scrollTop() < 3400)  {
          $("#footer-nav").css("color","rgba(255, 20, 192, 1)");
          $("#view-nav").css("color","rgba(0,0,0,.5)");
          $("#samples-nav").css("color","rgba(0,0,0,.5)");
          $("#greeting-nav").css("color","rgba(0,0,0,.5)");
          $("#home-nav").css("color","rgba(0,0,0,.5)");
          $("#about-nav").css("color","rgba(0,0,0,.5)");
          
      }
      else{
          $("#footer-nav").css("color","rgba(0,0,0,.5)");
          $("#view-nav").css("color","rgba(0,0,0,.5)");
          $("#samples-nav").css("color","rgba(0,0,0,.5)");
          $("#greeting-nav").css("color","rgba(0,0,0,.5)");
          $("#home-nav").css("color","rgba(0,0,0,.5)");
          $("#about-nav").css("color","rgba(0,0,0,.5)");
      }
  });
});
//end of the navbar color

//start of changing header image
$(".img-change").click(function(e){
    let i=($(this).index(".img-change"));
    if(i==0){
        $(".flod").css("background","url(images/bg-image.jpg) repeat scroll center center / cover")
    }
    if(i==1){
         $(".flod").css("background","url(images/header-1.jpg) repeat scroll center center / cover")
    }
})

//end of changing header image

//start of hover on smiley face
$("#icon-smile").hover(function () {
    $("#icon-smile1").show();
    $("#icon-smile").hide();
},function () {
    $("#icon-smile1").hide();
    $("#icon-smile").show();
});
//end of hover on smiley face


//start of changing the color of whole website
$(".web-color").click(function(e){
    let i=($(this).index(".web-color"))
    if(i==0){
        $(".bg-color").css("backgroundColor","rgba(55, 235, 118, 0.83)");
        
    }
    if(i==1){
        $(".bg-color").css("backgroundColor","rgba(148, 159, 255, 1)");
        
    }
    if(i==2){
        $(".bg-color").css("backgroundColor","rgba(218, 232, 135, 0.94)");
    }
    if(i==3){
        $(".bg-color").css("backgroundColor","rgba(255, 255, 255, 1)");
        
    
    }
})
//end of changing color of whole website

//start of functions to open and close the color and image option
function openNav() {
  document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("palette").style.display="none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
    document.getElementById("palette").style.display="block";
}
//end of the color and image option


//start of the image click to be bigger and carousel on it

var items2 = document.getElementsByClassName("myimg2");
var items1 = document.getElementsByClassName("myimg1"); 
var items = document.getElementsByClassName("myimg"); 
var overlay = document.querySelector(".back-box");
var slide = document.querySelector(".slide");
var close = document.querySelector(".ico-close");
var next = document.getElementById("next"); 
var prev = document.getElementById("prev"); 


var index=0; 


var myarray = [];

for (var i = 0 ; i<items2.length;i+=1)
    {
        
        myarray.push(items2[i]); 
        
        items2[i].addEventListener("click" , function(e){
             let i=($(this).index(".myimg2"))
             console.log(i)
        var temp =e.target.src; 
            console.log(e.target.src)
        overlay.classList.add("show")
        slide.style.backgroundImage="url("+temp+")";
        
        index=myarray.indexOf(e.target); 
        
        })
    }

for (var i = 0 ; i<items1.length;i+=1)
    {
        
        myarray.push(items1[i]); 
        
        items1[i].addEventListener("click" , function(e){
             let i=($(this).index(".myimg1"))
             console.log(i)
        var temp =e.target.src; 
            console.log(e.target.src)
        overlay.classList.add("show")
        slide.style.backgroundImage="url("+temp+")";
        
        index=myarray.indexOf(e.target); 
        
        })
    }

for (var i = 0 ; i<items.length;i+=1)
    {
        
        myarray.push(items[i]); 
        
        items[i].addEventListener("click" , function(e){
             let i=($(this).index(".myimg"))
             console.log(i)
        var temp =e.target.src; 
            console.log(e.target.src)
        overlay.classList.add("show")
        slide.style.backgroundImage="url("+temp+")";
        
        index=myarray.indexOf(e.target); 
        
        })
    }


close.onclick = function()
{
    overlay.classList.remove("show")
}

next.addEventListener("click" , function()
{
   ne()
})

function ne()
{
    index++; 
   index%=myarray.length; 
   var temp =myarray[index].src; 
   slide.style.backgroundImage="url("+temp+")";
}

function pre()
{
    index--; 
   if (index<0)
       index=myarray.length-1; 
   var temp =myarray[index].src; 
   slide.style.backgroundImage="url("+temp+")";
}

prev.addEventListener("click" , function()
{
   pre()
})

overlay.onclick = function(e)
{
    if (overlay==e.target)
        {
            overlay.classList.remove("show")
        }
}

document.addEventListener("keydown", function(e)
                         {
    if (e.keyCode==39)
        {
            ne()
        }
    if (e.keyCode==37)
        {
            pre(); 
        }
    if (e.keyCode==27)
        {
            overlay.classList.remove("show")
        }
})
//end of the click on image to be bigger


