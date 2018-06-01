$(function(){
  $("#submitButton").click(function(event){
    var questionOne = parseInt($("#firstQuestion").val());

    var questionTwo = parseInt($("#secondQuestion").val());

    var questionThree = parseInt($("#thirdQuestion").val());

    var questionFour = parseInt($("#fourthQuestion").val());

    var questionFive = parseInt($("#fifthQuestion").val());

    var questionSix = parseInt($("#sixthQuestion").val());

    $(".track-match").hide();

    var total = questionOne + questionTwo + questionThree + questionFour + questionFive + questionSix;
    alert(total);

    if(total <= 6){
      $("#cSharp").show();
    } else if(total <=12 && total >=7){
      $("#react").show();
    } else if(total >=13 && total <=18){
      $("#ruby").show();
    } else {
      $("#research").show();
    }



  event.preventDefault();
  });


});
