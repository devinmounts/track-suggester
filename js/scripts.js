$(function(){
  $("#submitButton").click(function(event){
    var questionOne = $("#firstQuestion").val();
    alert(questionOne);

    var questionTwo = $("#secondQuestion").val();
    alert(questionTwo);
    var questionThree = $("#thirdQuestion").val();

    var questionFour = $("#fourthQuestion").val();

    var questionFive = $("#fifthQuestion").val();
    alert(questionFive);

    // $(".track-match").hide();


    var numLine = questionOne + questionTwo + questionThree + questionFour + questionFive;
    alert(numLine);

    var search = (numLine, 0)
  alert(search);
    if(total <=5 && total !=0 ){
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
