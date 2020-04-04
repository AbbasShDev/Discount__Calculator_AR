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
    $(".displayOriginal").text(orgPrice1 + "$");
    $(".displayDiscount").text(discPrice + "$");
    $(".displayResult").text(result1 + "$");
    }
});