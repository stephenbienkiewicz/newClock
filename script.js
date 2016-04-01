// we need to get the time somehow
// ??? how to draw the clock on the HTML page
// some of kind of loop to redraw clock

// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var ampm = isAMorPM(h);
      
      changeColor(s);

      h = changeMilitary(h);
      m = checkTime(m);
      s = checkTime(s);
      
      $('#txt').html(h + ":" + m + ":" + s + ampm);
      
      setTimeout(startTime, 500);
  }

  function isAMorPM(i) {
    var value;
    if (i >= 12) {
      value = "PM"
    } else {
      value = "AM"
    }
    return value;
  }

  function changeMilitary(i) {
    if (i > 12) {
      i = i - 12;
    }
    return i;
  }

  function checkTime(i) {
      if (i < 10) {
      	i = "0" + i
      };  // add zero in front of numbers < 10
      
      return i;
  }

  function changeColor(i) {
    if (i % 2 === 1) { // odd
      $("body").css("color", "blue",);
    } else { // even
      $("body").css("color", "red");
    }
  }

  //-------------------------------------------------------------------

  function changeBackgroundColor() {
    var currentBackgroundColor = $("body").css("backgroundColor");

    if (currentBackgroundColor === "rgb(255, 127, 80)") {
      $("body").css("backgroundColor", "lime");
    } else {
      $("body").css("backgroundColor", "coral");
    }

    setTimeout(changeBackgroundColor, 5000); // should be 5 minutes, but this is easier to test
  }

  var counter = 0;

  function changeFontSize() {
    var fontSizes = ["60px", "90px", "10px", "20px"];

    $("body").css("fontSize", fontSizes[counter]);

    counter = counter + 1;
    if (counter > 3) {
      counter = 0;
    }
    
    setTimeout(changeFontSize, 5000); // should be 1 hour, but this is easier to test
  }

  startTime(); // function is called for startTime
  changeBackgroundColor(); // function is called for changeBackgroundColor
  changeFontSize(); // function is called for changeFontSize
});
















