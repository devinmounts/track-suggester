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

    $(".track-match").hide();


    var numLine = questionOne + questionTwo + questionThree + questionFour + questionFive;
    alert(numLine);

    var count1 = (numLine.match(/1/g) || []).length;
    var count2 = (numLine.match(/2/g) || []).length;
    var count3 = (numLine.match(/3/g) || []).length;
    var count4 = (numLine.match(/4/g) || []).length;
    alert(count4);

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
