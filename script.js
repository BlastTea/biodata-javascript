var trans = $(".transition");
for (var i = 0; i < trans.length; i++) {
  $(trans[i]).addClass("visible");
}

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var transcrolls = $(".transcroll");
  
    for (var i = 0; i < transcrolls.length; i++) {
      var transcroll = transcrolls[i];
      if ($(transcroll).position().top < pageBottom) {
        $(transcroll).addClass("visible");
      } 
      // else {
      //   $(transcroll).removeClass("visible");
      // }
    }
  });