jQuery(document).ready(
  function() {
    var typed3 = new Typed('#type', {
      strings: [' <span class="genAddTextPadding genBlueHighlight typeBoxName">Who I am?<span>', // 1
                // '<span class="genAddTextPadding genBlueHighlight typeBoxName">I am ...!</span>', // 1
                ' <span class="genAddTextPadding genRedHighlight typeBoxName">I am a Leader.</span>', // 3
                // '<span class="genAddTextPadding genRedHighlight typeBoxName">I am a Programmer.</span>', // 3
                // '<span class="genAddTextPadding genOrangeHighlight typeBoxName">I am a Volunteer.</span>', // 3
                ' <span class="genAddTextPadding genOrangeHighlight typeBoxName">I am a Mentor.</span>', // 3
                ' <span class="genAddTextPadding genYellowHighlight typeBoxName">I am Mikian Musser.</span>'],
      typeSpeed: 0,
      backSpeed: 0,
      backDelay: 0,
      startDelay: 0,
      onComplete: function(self) {
        $(".typed-cursor").hide();
      },
    });
  });
