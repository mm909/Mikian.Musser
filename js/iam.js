if (debug) {
  console.log("iam.js");
}


let iamold;

function iam() {
  $("#iamRow").html("")
  let iam = `
  <div class="iamContainer">
    <div class="iamRow row">
      <div class="col-md-6 col-sm-12">
        <div class='homePageCard iamCard shadow p-3 rounded'>
          <div class="iamText">
            <h3> Coding is my <i>passion</i> </h3>
            <p> I love being able to create. I wanted to make a website, so I did. I wanted to make an application to help my peers so I did!</p>
            <p> I love working with neural networks and genetic algrithums. I am currently workong on a <a href="https://github.com/mm909/CCC"><u> CSS/JS library</u></a></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="iamCellRight">
        <div class='homePageCard iamCard shadow p-3 rounded'>
          <div class="iamText">
            <h3> Teaching is my <strong>purpose</strong> </h3>
            <p> I am so glad that I get to share what I do. I love writing code and enjoy working with kids. <br> Teaching is the perfect intersection. </p>
            <p> I have taught everything from p5.js and web development all the way to Minecraft and Mindstorms. </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  `
  $tempProjectCard = $(iam)
  $("#iamRow").append($tempProjectCard);
  hire(true, true);
}

jQuery(document).ready(function() {
  iamold = $("#iamRow")[0].innerHTML;
});
