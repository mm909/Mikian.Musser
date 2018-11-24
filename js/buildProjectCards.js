if (debug) {
  console.log("buildProjectCards.js");
}

jQuery(document).ready(function() {
  for (var i = 0; i < projects.length; i++) {
    let projectCard = `<div id='cardWrapper` + i + `' class='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
      <div class='card'>
        <div class='card-body'>
          <div class='card-title'>
            <h5 class='card-title-text'>` + projects[i].title + `</h5>
          </div>
          <div class='card-text'>
            <p>` + projects[i].text + `</p>
          </div>
          <div class='card-buttons'>
            <a class='proejctBtn btn ` + projects[i].live + `' href='` + projects[i].liveLink + `' rel='noreferrer noopener'>Live</a>
            <a class='proejctBtn btn genGitButton' href='` + projects[i].githubLink + `' rel='noreferrer noopener'>GitHub</a>
          </div>
        </div>
      </div>
    </div>`
    $tempProjectCard = $(projectCard)
    $(".row").append($tempProjectCard);
  }
});