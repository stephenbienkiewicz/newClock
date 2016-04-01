$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    changeFontColor(s);

    m = checkTime(m);
    s = checkTime(s);

    $("#clock").html(h + ":" + m + ":" + s);

    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }

    return i;
  }

  function changeFontColor(i) {
    if (i % 2 === 1) { // odd
      $("body").css("color", "red");
    } else { // even
      $("body").css("color", "blue");
    }
  }

  function changeBackgroundColor() {
    var currentBackgroundColor = $("body").css("backgroundColor");

    if (currentBackgroundColor === "rgb(255, 127, 80)") {
      $("body").css("backgroundColor", "lavender");
    } else {
      $("body").css("backgroundColor", "coral");
    }

    setTimeout(changeBackgroundColor, 5000); // should be 5 minutes, but this is easier to test
  }

  var counter = 0;

  function changeFontSize() {
    var fontSizes = ["40px", "14px", "16px", "20px"];

    $("body").css("fontSize", fontSizes[counter]);

    counter = counter + 1;
    if (counter > 3) {
      counter = 0;
    }
    
    setTimeout(changeFontSize, 5000); // should be 1 hour, but this is easier to test
  }

  // function changeFontSizeAlternative() {
  //   var fontSizes = ["40px", "14px", "16px", "20px"];
  //   var randomNumber = Math.floor(Math.random() * 4);

  //   $("body").css("fontSize", fontSizes[randomNumber]);

  //   setTimeout(changeFontSizeAlternative, 5000); // should be 1 hour, but this is easier to test
  // }

  startTime();
  changeBackgroundColor();
  changeFontSize();
  // changeFontSizeAlternative();
});
