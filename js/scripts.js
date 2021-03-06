$(document).ready(function(){
  $("#favorites").submit(function(event){
    event.preventDefault();
    const animalInput = $("input#animal").val();
    const foodInput = $("input#food").val();
    const colorInput = $("input#color").val();
    const numberInput = parseInt($("input#number").val());
    const cityInput = $("input#city").val();
    const movieInput = $("input#movie").val();
    const inputArray = [animalInput, foodInput, colorInput, numberInput, cityInput, movieInput];
    const moddedArray = [];

    moddedArray.push(inputArray[1], inputArray[0], inputArray[2]);

    inputArray.forEach(function(answer){
      $("#original").append("<li>" + answer + "</li>");
    });

    moddedArray.forEach(function(answer){
      $("#modified").append("<li>" + answer + "</li>");
    });
  });
});
