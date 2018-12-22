if (debug) {
  console.log("buildProjectCards.js");
}

jQuery(document).ready(function() {
  for (var i = 0; i < projects.length; i++) {
    let projectCard = `<div id='cardWrapper` + i + `' class='col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12 projectCard'>
      <div class='card shadow p-3 mb-5 rounded'>
        <div class='card-body'>
          <div class='card-title'>
            <h5 class='card-title-text'>` + projects[i].title + `</h5>
          </div>
          <div class='card-text'>
            <p>` + projects[i].text + `</p>
          </div>
          <div class='card-buttons'>
            <a href='` + projects[i].liveLink + `' rel='noreferrer noopener'> <button type='button' class='btn projectBtn ` + projects[i].live + `'>Demo</button></a>
            <a href='` + projects[i].githubLink + `' rel='noreferrer noopener'> <button type='button' class='btn projectBtn projectGitButton'>GitHub</button></a>

          </div>
        </div>
      </div>
    </div>`
    $tempProjectCard = $(projectCard)
    $(".row").append($tempProjectCard);
  }
});

// <a class='projectBtn btn ` + projects[i].live + `' href='` + projects[i].liveLink + `' rel='noreferrer noopener'>Live</a>
// <a class='projectBtn btn projectGitButton' href='` + projects[i].githubLink + `' rel='noreferrer noopener'>GitHub</a>