function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let formattedTime = hours + ':' + minutes + ' ' + ampm;
  document.getElementById('clock').innerHTML = formattedTime;
}

$(() => {

  //GIF
  let now = new Date();
  let month = now.getMonth() + 1; 

  if (month === 10) {
      $(".gif img").attr("src", "assets/gifs/halloween.gif");
  } else if (month === 12) {
      $(".gif img").attr("src", "assets/gifs/christmas.gif");
  } else {
      let season;
      if (month >= 3 && month <= 5) {
          season = "spring.gif";
      } else if (month >= 6 && month <= 8) {
          season = "summer.gif";
      } else if (month >= 9 && month <= 11) {
          season = "autumn.gif";
      } else {
          season = "winter.gif";
      }

      $(".gif img").attr("src", "assets/gifs/" + season);
  }

  // CLOCK
  displayTime();
  setInterval(displayTime, 60000);


  // SOCIAL
  $('#social').hide();

  $('footer button').on('click', function() {
    $('#social').toggle();
    $(this).toggleClass("social-active");
  });

  $("footer button").on("mouseover", function() {
      $(this).toggleClass("border-active");
  });

  $("footer button").on("mouseout", function() {
      $(this).toggleClass("border-active");
  });

});
