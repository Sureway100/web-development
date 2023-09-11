// $("h1").css("color", "red");
//---------------------------OR--------------
// jQuery("h1").css("color", "yellow");
//******************************************************************

//a better way to this is to check first if our jquery is ready then
//add a callback funxtion.. use this when use cdn jquery is at the head tag
$(document).ready(function () {
  jQuery("h1").css("color", "blue");
});

//*****************************************************
//selecting element with jquery
{
  /* <p class="p-with-class">Paragraph with a class.</p>;
$(".p-with-class").css("color", "blue"); // colors the text blue

<li id="li-with-id">List item with an ID.</li>;
$("#li-with-id").replaceWith("<p>Socks</p>");

<li id="liWithID">List item with an ID.</li>;
$("#liWithID").replaceWith("<p>Socks</p>");

<h1 id="headline">News Headline</h1>;
$("h1#headline").css("font-size", "2em"); */
}

//*********************************************************************
//manipulating styles with jquery
console.log($("h1").css("color")); //getting value of style
$("h1").css("color", "red"); //setting value of style

//*******************************************************
//if you have written a style in your css file, you can use css addClass

$("h1").addClass("big_title");

$("h1").addClass("big_title main_nav"); //two classes

$("h1").removeClass("big_title");

$("h1").hasClass("big_title");

//********************************************************************
//manipulating text with jquery
$("h2").text("not good");
$("h2").html("<i>not good<i>");

//*****************************************
//get and set attr
console.log($("img").attr("src")); //get
$("a").attr("href", "google.com");

//***************************************************************
//adding  event listener
$("h1").click(function () {
  $("h2").text("not good");
});
$("document").keypress(function () {
  $("h2").text("event.key");
});
$("h1").on("onmouseover", function () {
  $("h2").text("event.key");
});

//**********************************************************************
//website animation with jquery
$("button").onclick(function () {
  $("h2").hide();
});
$("button").onclick(function () {
  $("h2").show();
});
$("button").onclick(function () {
  $("h2").toggle();
});
$("button").onclick(function () {
  $("h2").fadeOut();
});
$("button").onclick(function () {
  $("h2").fadeIn();
});
$("button").onclick(function () {
  $("h2").slideUp(); //slideDown, slideToggle
});
$("button").onclick(function () {
  $("h2").animate({ opacity: 0.9 });
});
$("button").onclick(function () {
  $("h2").slideup().slideDown().animate({ opacity: 0.9 });
});
