$( document ).ready(function() {


      i=0;
      /* Create the line */
      $codeline = $( "<div class='code-line' id='code-line" + i + "' ></div>" )
      $( ".code-container" ).append($codeline);
      //--
          /* Create the line */
          $exampleImage = $(
          "<img class='example-image' id='example-image" +
          i +
          "' src='Sorting/1. Bubble Sort/image.png'></img>" )
          $( "#code-line" + i).append($exampleImage);
          //--


});
