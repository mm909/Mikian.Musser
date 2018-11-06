function updatePB() {
  if (currScroll && maxScroll) {
    $('#pb').attr('value', (currScroll / maxScroll) * 100);
  }
}