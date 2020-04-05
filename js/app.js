
$(".orgPrice").keypress(function(e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      //display error message
      $("#DigitMasg1").text("ارقام فقط (0-9)").show();
      return false;
    }

    if (e.which > 48 || e.which > 57) {
        //display error message
        $("#DigitMasg1").text("");
      }
  });

  $(".DiscAmount").keypress(function(e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      //display error message
      $("#DigitMasg2").text("ارقام فقط (0-9)").show();
      return false;
    }

    if (e.which > 48 || e.which > 57) {
        //display error message
        $("#DigitMasg2").text("");
      }
  });

$(".calc").on("click" , function(){

    if ($(".orgPrice").val() === "") {
        alert("ادخل السعر قبل الخصم");
        e.stopPropagation();  
    }
    if ($(".DiscAmount").val() === "") {
        alert("ادخل مقدار الخصم");
        e.stopPropagation();  
    }
    
    var orgPrice1 = $(".orgPrice").val();
    var DiscAmount1 = $(".DiscAmount").val();
    if(Number(DiscAmount1) >= 100){
        alert("لايمكن ان يكون الخصم اكثر او يساوي ١٠٠٪");
    }else if(Number(DiscAmount1) < 0){
        alert("لايمكن ان يكون الخصم اقل من ٠٪");        
    }else if(Number(DiscAmount1) === 0 ){
        alert("لايمكن ان يكون الخصم ٠٪");    
    }else {
    var discPrice = orgPrice1 * DiscAmount1 / 100;
    var result1 = orgPrice1 - discPrice;
    $(".displayOriginal").text(orgPrice1);
    $(".displayDiscount").text(discPrice);
    $(".displayResult").text(result1);
    }
});
