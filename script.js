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
    if (i % 2 === 1) { 
      $("body").css("color", "blue");
    } else { 
      $("body").css("color", "red");
    }
  }

  //-------------------------------------------------------------------

  function changeBackgroundColor() { // function is created. the function alternates between two background colors.
    var currentBackgroundColor = $("body").css("backgroundColor"); // declare currentBackgroundColor. 

    if (currentBackgroundColor === "rgb(255, 127, 80)") { // if statement. currentBackgroundColor is set to coral hex code.
      $("body").css("backgroundColor", "lime"); // html body is set to lime
    } else { // else statement.
      $("body").css("backgroundColor", "coral"); // html body is set to coral. //
    }

    setTimeout(changeBackgroundColor, 5000); // time is set for changeBackgroundColor.
  }

  var counter = 0; // counter is set to 0.

  function changeFontSize() { // function is created. the function alternates between multiple font sizes.
    var fontSizes = ["60px", "90px", "10px", "20px"]; // declare fontSizes.

    $("body").css("fontSize", fontSizes[counter]); //

    counter = counter + 1; // counter formula equals counter (0) + 1.
    if (counter > 3) { // if counter is greater than 3.
      counter = 0; // counter is reset to 0.
    }
    
    setTimeout(changeFontSize, 5000); // time is set for changeFontSize.
  }

  startTime(); // function is called for startTime.
  changeBackgroundColor(); // function is called for changeBackgroundColor.
  changeFontSize(); // function is called for changeFontSize.
});
















