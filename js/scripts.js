$(function(){
  $("#submitButton").click(function(event){
    var questionOne = parseInt($("#firstQuestion").val());

    var questionTwo = parseInt($("#secondQuestion").val());

    var questionThree = parseInt($("#thirdQuestion").val());

    var questionFour = parseInt($("#fourthQuestion").val());

    var questionFive = parseInt($("#fifthQuestion").val());

    $(".track-match").hide();

    var total = questionOne + questionTwo + questionThree + questionFour + questionFive;
    alert(total);

    if(total >0 && total <= 5){
      $("#cSharp").show();
    } else if(total <=10 && total >=6){
      $("#ruby").show();
    } else if(total >=11 && total <=15){
      $("#css").show();
    } else {
      $("#research").show();
    }



  event.preventDefault();
  });


});
