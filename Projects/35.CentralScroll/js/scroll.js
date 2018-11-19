var maxScroll = 0;
var currScroll = 0;

$(document).ready(function() {
  maxScroll = document.body.scrollHeight - window.innerHeight;
  currScroll = $(document).scrollTop();
  pageScroll();
});

function pageScroll() {
  currScroll = $(document).scrollTop();
  maxScroll = document.body.scrollHeight - window.innerHeight;
  if (currScroll > maxScroll - 10) {
    $(window).scrollTop(0);
  }

  let tempScroll = 0;
  let tempDelay = 0;

  if (textSpeed == "Very Fast") {
    tempScroll = 2;
    tempDelay = 5;
  } else if (textSpeed == "Fast") {
    tempScroll = 1;
    tempDelay = 0;
  } else if (textSpeed == "Medium") {
    tempScroll = 1;
    tempDelay = 10;
  } else if (textSpeed == "Slow") {
    tempScroll = 1;
    tempDelay = 25;
  } else if (textSpeed == "Very Slow") {
    tempScroll = 1;
    tempDelay = 50;
  }
  window.scrollBy(0, tempScroll);
  scrolldelay = setTimeout(pageScroll, tempDelay);
}

// EOF