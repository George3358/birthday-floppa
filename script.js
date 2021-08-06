$(function () {
    $("#video-button").click(function () {
        let about = $(".modal");

        if (about.css("display") === "none") {
            about.css("display", "block");
        } else {
            about.css("display", "none");
        }
    });

    $('.modal-closed').click(function (){
        $('.modal').css("display", "none");
    })
});

let arrow = $('#arrow');

let win = $(window);

win.on('scroll' ,function() {
  let myVariable = win.scrollTop();
  if(myVariable >= 600) {
    arrow.css('display' , 'block')
  }
  else{
    arrow.css('display' , 'none')
  }
  arrow.css('transform', 'rotate(' + myVariable + 'deg)');
})
