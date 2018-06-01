$(function(){
  $("#submitButton").click(function(event){
    var questionOne = $("#firstQuestion").val();
    var questionTwo = $("#secondQuestion").val();
    var questionThree = $("#thirdQuestion").val();
    var questionFour = $("#fourthQuestion").val();
    var questionFive = $("#fifthQuestion").val();

    $(".track-match").hide();

    var numLine = questionOne + questionTwo + questionThree + questionFour + questionFive;

    var count1 = (numLine.match(/1/g) || []).length;
    var count2 = (numLine.match(/2/g) || []).length;
    var count3 = (numLine.match(/3/g) || []).length;
    var count4 = (numLine.match(/4/g) || []).length;

    if(count1>count2 && count1>count3 && count1>count4){
      $("#cSharp").show();
    } else if(count2>count1 && count2>count3 && count2>count4){
      $("#ruby").show();
    } else if(count3>count1 && count3>count2 && count3>count4){
      $("#css").show();
    } else {
      $("#research").show();
    }
  event.preventDefault();
  });
});
