if (debug) {
  console.log("type.js");
}

let firstType = true;
jQuery(document).ready(function() {
  var type = new Typed('#type', {
    strings: [
      // ' <span class="addTextPadding blueHighlight typeBoxName">Who I am?<span>', // 1
      ' <span class="addTextPadding blueHighlight">I am ...!</span>', // 1
      ' <span class="addTextPadding redHighlight">I am a Leader.</span>', // 3
      // ' <span class="addTextPadding redHighlight">I am a Programmer.</span>', // 3
      // ' <span class="addTextPadding orangeHighlight">I am a Volunteer.</span>', // 3
      ' <span class="addTextPadding orangeHighlight">I am a Mentor.</span>', // 3
      ' <span class="addTextPadding yellowHighlight">I am Mikian Musser.</span>',
      ' <div class="genAddTextPadding darkYellowHighlight"><h1>Mikian Musser</h1><p>(702)540-4190</p><p>Bobar312@gmail.com</p></div>'
    ],
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 30,
    showCursor: false,
    onComplete: function(self) {
      $(".typed-cursor").hide();
    },
    onStringTyped: function(pos, self) {
      if (pos == 3 && firstType) {
        $(".typed-cursor").hide();
        self.stop();
        firstType = false;
      }
    },
    onStart: function(pos, self) {
      self.start();
    }
  });
});