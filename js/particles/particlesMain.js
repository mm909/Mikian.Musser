/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
$(document).ready(function() {
  particlesJS.load('particles-js', 'js/particles/cards/card.json', function() {
    console.log('callback - particles.js config loaded');
  });
});