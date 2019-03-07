$(".results").click (function(){
   var Firstanswer = $('.Age').val();
   var Secondanswer = $('.Animal').val();
   var Forthanswer = $('.numberoffood').val();
   var Thirdanswer =$('.food').val();
    var Firstanswer = parseInt(Firstanswer);

   var calculadnumber = Forthanswer * 31;
   var agetotal= Firstanswer + 31;
   
    $('.results1').text( "In 2050 you will be " + agetotal + " years old and you'll have a pet " + Secondanswer + " who will eat "+ calculadnumber +" "+ Thirdanswer + " with you" ); 
});




