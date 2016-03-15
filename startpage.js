var main = function() {
  var moremenu = function(menu, button){
    $(menu).hide();
    $(button).click(function(){
    $(menu).toggle("fast", function(){
    });
  })
  }
  moremenu('#redditmore', '#redditbtn')
  moremenu('#moremore', '#morebtn')
  $("#input").closest('form').find("input[type=text], textarea").val("");
};

function GetClock(){
  var d=new Date();
  var nhour=d.getHours(),nmin=d.getMinutes();
  if(nmin<=9) nmin="0"+nmin
  document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}


$(document).ready(main);
