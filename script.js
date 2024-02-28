$(document).ready(function () {
  const gridSize = 16; // 4x4 Grid
  for (let i = 0; i < gridSize; i++) {
    $("#grid-container").append('<div class="box"></div>');
  }

  $(".box").click(function () {
    // Toggle the 'clicked' class
    $(this).toggleClass("clicked");
  });
});
