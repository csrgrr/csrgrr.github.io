function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let formattedTime = hours + ':' + minutes + ' ' + ampm;
  document.getElementById('time').innerHTML = formattedTime;
}

$(() => {

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
