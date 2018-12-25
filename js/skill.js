// Write inside of hook
// <div class="skill-category">
//  META-TITLE
//  <div class="4-5"> SKILL-TITLE1 </div>
//  <div class="3-5"> SKILL-TITLE2 </div>
//  <div class="2-5"> SKILL-TITLE3 </div>
// </div>

$(document).ready(() => {
  skillGo();
})

function skillGo() {
  let hook = $(".skill-wrapper")
  let hookChildren = $(".skill-wrapper").children()
  console.log(hookChildren);
  // For Dev
  for (var i = 0; i < hookChildren.length; i++) {
    let unit = $(hookChildren[i])
    // let unit = $(hookChildren[hookChildren.length - 1])
    let unitChildren = unit.children();

    // Get Meta Title
    let unitTitle = unit.html().split('<div')
    unitTitle = unitTitle[0].replace(/\s/g, "");
    unitTitle = unitTitle.replace(/&lt;/g, "<");
    unitTitle = unitTitle.replace(/&gt;/g, ">");
    console.log(unitTitle);

    // Get children Classes
    let unitChildrenClasses = [];
    for (var j = 0; j < unitChildren.length; j++) {
      console.log($(unitChildren[j]).attr('class'));
      let className = validClassName($(unitChildren[j]).attr('class'))
      if (className) unitChildrenClasses.push(className);
    }
    console.log(unitChildrenClasses);

    // Get Children Text
    let unitChildrenText = []
    for (var j = 0; j < unitChildren.length; j++) {
      let childrenText = $($(unitChildren)[j]).html()
      childrenText = childrenText.replace(/&lt;/g, "<");
      childrenText = childrenText.replace(/&gt;/g, ">");
      unitChildrenText.push(childrenText);
    }
    console.log(unitChildrenText);

    // Clear to rebuild
    unit.html("")

    // Create Header

    let unitHeader = `
    <div class="skill-header">
      <h3>` + unitTitle + `</h3>
    </div>
    <hr>
    `
    let unitText = ""
    for (var k = 0; k < unitChildrenClasses.length; k++) {
      // Build breakdowns
      let active = parseInt(unitChildrenClasses[k].split('-')[0])
      let total = parseInt(unitChildrenClasses[k].split('-')[1])
      let skillDots = "";
      for (var j = 0; j < active; j++) {
        skillDots += `<div class="dot dot-active"></div>`
      }
      for (var j = 0; j < total - active; j++) {
        skillDots += `<div class="dot"></div>`
      }

      let dots = `
      <div class="js-dots dots">
      ` + skillDots + `
      </div>
      `

      let dotText = `
      <div class="dot-text">
      <span>` + unitChildrenText[k] + `</span>
      </div>
      `

      let dotWrapper = `
      <div class="dot-wrapper">
      ` + dotText + dots + `
      </div>
      `

      unitText += dotWrapper

    }
    let skillBreakdown = `
  <div class="skill-breakdowns">
  ` + unitText + `
  </div>
  `
    // Add to hook
    $unitHTML = $(unitHeader + skillBreakdown)
    $(unit).append($unitHTML);
  }

}

function validClassName(x) {
  let classes = x.split(' ')
  for (var o = 0; o < classes.length; o++) {
    if (classes[o].match(/[a-z]/i) || classes[o].length > 5) {
      continue;
    }
    return classes[o];
  }
  console.log("Invalid Selectors: " + classes);
  return false;
}


function showSkills(){
  $("#iamRow").html("")
  let iam = `
  <div class="skill-wrapper">
    <div class="skill-category">
      Front End
      <div class="5-6"> HTML </div>
      <div class="4-6"> JS </div>
      <div class="4-6"> CSS </div>
      <div class="3-6"> SASS </div>
      <div class="4-6"> Bootstrap </div>
      <div class="4-6"> jQuery </div>
    </div>
    <div class="skill-category">
      Javascript
      <div class="5-6"> p5.js </div>
      <div class="5-6"> Typed.js </div>
      <div class="6-6"> Countup.js </div>
      <div class="5-6"> particles.js </div>
    </div>
    <div class="skill-category">
      Backend
      <div class="2-6"> PHP </div>
      <div class="3-6"> SQL </div>
    </div>
    <div class="skill-category">
      Software
      <div class="4-6"> Github </div>
      <div class="5-6 "> Git desktop </div>
      <div class="3-6"> Koala </div>
    </div>
  </div>
  `
  // <div class="skill-category">
  // Fundamentals
  // <div class="4-6"> C++ </div>
  // <div class="2-6"> C </div>
  // <div class="2-6 "> ASM </div>
  // </div>
  // <div class="skill-category">
  // Topics
  // <div class="2-6"> Neural Networks </div>
  // <div class="3-6"> Genetic Algorithms </div>
  // <div class="2-6 "> AI </div>
  // </div>
  $tempProjectCard = $(iam)
  $("#iamRow").append($tempProjectCard);
  skillGo();
  hire(true, true);
  
}

// eof
