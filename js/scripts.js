$(document).ready(function(){
  $("#favorites").submit(function(event){
    event.preventDefault();
    const animalInput = $("input#animal").val();
    const foodInput = $("input#food").val();
    const colorInput = $("input#color").val();
    const numberInput = parseInt($("input#number").val());
    const cityInput = $("input#city").val();
    const movieInput = $("input#movie").val();
    const inputArray = [];
    const moddedArray = [];
  });
});