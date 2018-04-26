// Select color input
let colorPicker = $('#colorPicker').val();

// create random color list
let recentColorsList = ["black","white","white","white"];

// to load recent colors
function loadRecentColors(){
  let divColors = document.getElementsByClassName('recentColors');

    for(divColorsCount = 0, i = 0; divColorsCount < divColors.length; divColorsCount ++, i++) {

       divColors[divColorsCount].style.backgroundColor = recentColorsList[i];

       if(i == (recentColorsList.length - 1))

       i = -1;

    }
}

// load recent colors on start
loadRecentColors()

// update color input on click
jQuery('#colorPicker').on('change',function(){

  colorPicker = (jQuery(this).val());

  // add new selected color to recent colors
  recentColorsList.unshift(colorPicker);
  // remove last color
  recentColorsList.pop();
  // load recent colors updated with new color
  loadRecentColors();

});

// update color when clicking recent color
function getColor(elem){
    colorPicker = elem.style.backgroundColor;
    $(elem).rotate();
    alert("getColor")
}

// update color to white when clicking eraser
function eraser(elem){
    colorPicker = elem.style.backgroundColor;
}


// When size is submitted by the user, call makeGrid()
$("#sizePicker").on("submit", function(i) {
  i.preventDefault()
  makeGrid();
});


// reset grid to default
function resetGrid(){
  // remove grid incase user has already submitted
  removeGrid();
  // Select size input
  const h = 21;
  const w = 21;
  // set size of grid
  gridCreator(h,w)
}

// removeGrid
function removeGrid(){
  $("#pixelCanvas").empty();
}

// set size of grid
function makeGrid() {
  // Select size input
  const h = $("#inputHeight").val();
  const w = $("#inputWidth").val();
  // set size of grid
  gridCreator(h,w)
}

function gridCreator(h,w){
  // remove grid incase user has already submitted
  removeGrid();
  // Select size input
  // set size of grid
  for(let i = 0; i < h; i++) {
    $("#pixelCanvas").append("<tr class='blackBorder'></tr>");
    for(let j = 0; j < w; j++) {
    $("#pixelCanvas").children().last().append("<td class='blackBorder'></td>");
    }
  }

  // create alert based on height and with
  if (h && w == 21){
    message = "Canvas Set To Default";
  } else {
    message = "Created Canvas";
  }
  messageHolder = "<div class='alert alert-success' id='customAlert'><strong>Success! </strong>" + message + "</div>";
  $(messageHolder).insertAfter('#alertBoxInfo').delay(4000).fadeOut();
}

// on drag draw on canvas
$("#pixelCanvas").on("mousedown","td", function() {
  $("td").mouseover(function(){
  if($(this).css("background-color") == "rgb(255, 255, 255)"){
    $(this).css("background-color", colorPicker);
  }
  else if($(this).css("background-color") != colorPicker){
    $(this).css("background-color", colorPicker);
  }
  else {
    $(this).css("background-color", colorPicker);
  }
  });

  // stop drawing on mouseup
  $("td").on('mouseup', function() {
    $("td").unbind("mousedown mouseover");
  });
});

// when mouse leaves canvas stop drawing
$("#pixelCanvas").on("mouseleave",function() {
    $("td").unbind("mousedown mouseover");
});

// on click choose color to draw and draw
$("#pixelCanvas").on("mousedown","td", function() {
  $(this).css("background-color", colorPicker);

});

// reset grid color
function resetGridColor(){
  $("td").css("background-color", "rgb(255,255,255)");
  message = "Reset Canvas Color";
  messageHolder = "<div class='alert alert-success'><strong>Success! </strong>" + message + "</div>";
  $(messageHolder).insertAfter('#alertBoxInfo').delay(4000).fadeOut();
}

// create grid on start up
makeGrid();

// set username to name by default
prenameDefault = "created by - insert name";

$('#outputName').text(prenameDefault);

// update username on input
$('#name').on("input", function() {
  let name = this.value;
  prename = "created by - "
  if(name.length > 0){
    $('#outputName').text(prename + name);
  } else {
      $('#outputName').text(prenameDefault);
  }
});