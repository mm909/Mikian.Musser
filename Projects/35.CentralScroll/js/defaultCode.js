var defaultCodeCSS = `a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline
}

body {
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  word-wrap: break-word;
  background-color: #f5fcff
}

* {
  box-sizing: border-box
}

strong {
  font-weight: bold !important;
}

i {
  font-style: italic;
}

a, a:hover {
  color: #222;
  text-decoration: none
}

p {
  margin-bottom: 1em;
  margin-top: 0
}

h1, h2, h3, h4, h5, h6 {
  color: inherit;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 1.5em
}

h1 {
  font-size: 32px
}

h2 {
  font-size: 24px
}

h3 {
  font-size: 20px
}

h4 {
  font-size: 16px
}

h5 {
  font-size: 14px
}

h6 {
  font-size: 13.6px
}

code {
  background-color: rgba(27, 31, 35, .05);
  border-radius: 3px;
  color: inherit;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 85%;
  margin: 0;
  padding: 3.2px 6.4px
}

article:after, article:before {
  content: "";
  display: table
}

.noselect {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome and Opera */
}

.button {
  border: 1px solid #222;
  border-radius: 3px;
  color: #222;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2em;
  padding: 10px;
  text-decoration: none !important;
  transition: background .3s, color .3s
}

.button:hover {
  background: #222;
  color: #fff
}

.wrapper {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px
}

.mainContainer {
  flex: 1 1 auto;
  padding: 48px 0
}

.mainContainer .wrapper .post .postHeaderTitle {
  margin-top: 0;
  padding: 0
}

.fixedHeaderContainer {
  background: #222;
  color: #fff;
  padding: 8px 0;
  position: fixed;
  width: 100%;
  z-index: 9999
}

.navPusher {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  padding-top: 50px
}

.navigationSlider .slidingNav ul {
  list-style: none;
  background: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  width: auto
}

.navigationSlider .slidingNav a {
  border: 0;
  color: hsla(0, 0%, 100%, .8);
  display: flex;
  font-size: 16px;
  font-size: 1em;
  font-weight: 300;
  height: 32px;
  line-height: 1.2em;
  margin: 0;
  padding: 0;
  padding: 6px 10px
}

.docMainWrapper {
  width: 100%
}

.docMainWrapper {
  display: flex;
  flex-flow: row nowrap
}

.docMainWrapper .wrapper {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0
}

.edit-page-link {
  float: right;
  font-size: 10px;
  font-weight: 400;
  margin-top: 3px;
  text-decoration: none
}

.class-page-link {
  float: right;
  font-size: 10px;
  font-weight: 400;
  margin-top: 30px;
  margin-left: 30px;
  text-decoration: none
}

.docs-prevnext {
  margin: 20px 0;
  height: 40px
}

.docs-prevnext:after {
  clear: both;
  content: " ";
  display: table
}

.docs-next {
  float: right
}

.docs-prev {
  float: left
}

.docsNavContainer {
  flex: 0 0 240px;
  height: calc(100vh);
  position: -webkit-sticky;
  position: sticky;
  overflow-y: auto;
  top: 50px
}

.docsNavContainer .toc .navBreadcrumb {
  display: none
}

.toc {
  padding: 40px 0
}

.toc .toggleNav .navGroup .navGroupCategoryTitle {
  color: #393939;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2em;
  margin-bottom: 8px;
  margin-top: 0
}

.toc .toggleNav ul {
  padding: 0 8px
}

.toc .toggleNav ul li {
  list-style-type: none;
}

.toc .toggleNav a {
  border: none;
  color: #717171;
  display: block;
  font-size: 14px;
  padding: 4px 0;
  transition: color .3s
}

.toc .toggleNav .docsSliderActive ul {
  padding-left: 0
}

.toc .toggleNav ul li.navListItemActive a, .toc .toggleNav ul li a:focus, .toc .toggleNav ul li a:hover {
  color: #222
}

.toc section .navGroups {
  display: block;
  padding: 0;
  padding-top: 8px
}

.nav-footer {
  background: #20232a;
  border: none;
  color: #202020;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 24px;
  padding-bottom: 2em;
  padding-top: 2em;
  position: relative
}

.nav-footer .sitemap {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3em;
  max-width: 1080px
}

.nav-footer .sitemap a {
  color: hsla(0, 0%, 100%, .6);
  display: block;
  margin: 2px -10px;
  padding: 3px 10px
}

.nav-footer .sitemap h5, .nav-footer .sitemap h6 {
  margin: 0 0 10px
}

.nav-footer .sitemap h5, .nav-footer .sitemap h5>a, .nav-footer .sitemap h6, .nav-footer .sitemap h6>a {
  color: #fff
}

footer.nav-footer {
  background-color: #012129
}

.container {
  max-width: 900px
}

.big-button, li, p {
  font-size: 18px
}

@media only screen and (max-width: 1200px) {
  .docsNavContainer {
    flex: 0 0 150px;
  }
}

/* -- */
codeR {
  background-color: rgba(255, 0, 0, .1);
  border-radius: 3px;
  color: inherit;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 85%;
  margin: 0;
  padding: 3.2px 6.4px
}

codeG {
  background-color: rgba(0, 250, 0, .1);
  border-radius: 3px;
  color: inherit;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 85%;
  margin: 0;
  padding: 3.2px 6.4px
}

codeB {
  background-color: rgba(0, 0, 250, .1);
  border-radius: 3px;
  color: inherit;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 85%;
  margin: 0;
  padding: 3.2px 6.4px
}

textR {
  background-color: rgba(255, 0, 0, .1);
  border-radius: 3px;
  color: inherit;
  margin: 0;
  padding: 3.2px 6.4px
}

textG {
  background-color: rgba(0, 250, 0, .1);
  border-radius: 3px;
  color: inherit;
  margin: 0;
  padding: 3.2px 6.4px
}

textB {
  background-color: rgba(0, 0, 250, .1);
  border-radius: 3px;
  color: inherit;
  margin: 0;
  padding: 3.2px 6.4px
}

.CodeBox {
  margin: auto;
  width: 75%;
  color: #fff;
  border-radius: 20px;
  padding: 2px;
  font-size: 150%;
  margin-bottom: 1em;
}

.CodeBoxL {
  margin: auto;
  width: 100%;
  color: #fff;
  border-radius: 20px;
  padding: 2px;
  font-size: 150%;
  margin-bottom: 1em;
}

.CodeBoxBuffer {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
}

.question {
  width: auto;
}

.answer {
  display: none;
}

#pb {
  width: 95%;
  margin: auto;
  max-width: 150px;
}

#toc>section {
  display: none;
}

.paraTitle {
  text-align: center;
}

.paraSection {
  background-color: #edf4f7;
  width: 99%;
  margin: auto;
  padding-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 15px;
}

.para {
  overflow: hidden;
}

.fl {
  width: 50%;
  float: left;
}

.fr {
  width: 50%;
  float: right;
}

.fm {
  text-align: middle;
  margin: auto;
}

.tutImageContainer {
  width: 90%;
  margin: auto;
}

.tutImage {
  width: 100%;
}

.smallText {
  font-size: 10px;
}

.img-s {
  max-width: 500px;
  max-height: 500px;
}

.questionmark {
  height: 15px;
  width: 15px;
}

.prettifyHTML {
  color: #ed5565;
  background-color: #2f3640;
}

.prettifyCSS {
  background-color: #2f3640;
  color: #90EE90;
}

.prettifyJS {
  background-color: #2f3640;
  color: #4fc1e9
}

.prettifyResult {
  background-color: #2f3640;
  color: #e6e9ed;
}

.prettifyPurple {
  background-color: #2f3640;
  color: #ac92ec;
}

.codetab {
  font-size: 20px;
}

.nav-link {
  padding: 5px !important;
}

.resultBox {
  background-color: #edf4f7;
  width: 99%;
  margin: auto;
  padding-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 15px;
  border-radius: 20px;
  margin-bottom: 1em;
}

.resultBoxImageContainer {
  text-align: center;
  margin: auto;
  width: 500px;
}

.tab-content h1 {
  margin-top: 16px;
}

.tab-content {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome and Opera */
}


@media only screen and (max-width: 1000px) {
  .docsNavContainer {
    display: none;
  }
}
/* EOF */`

var defaultCodeHTML = `<!DOCTYPE html>
<html lang="en">

<head>
  <title>First Website!</title>
  <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=css"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
  <script type="text/javascript" src="../../js/scrolling.js"></script>
  <script type="text/javascript" src="../../js/progressbar.js"></script>
  <script type="text/javascript" src="../../js/toc.js"></script>
  <script type="text/javascript" src="../../js/question.js"></script>
  <script type="text/javascript" src="../../js/smoothscroll.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="../../css/prettyPrint.css">
  <link rel="stylesheet" href="../../css/styles.css">
</head>

<body class="sideNavVisible">

  <div class="fixedHeaderContainer">
    <div class="wrapper">
      <a href="https://portal.mycodecentral.com/my/" target="_self"><img src="../logo.png" alt="Code Central"></a>
    </div>
  </div>

  <div class="navPusher">
    <div class="docMainWrapper wrapper">
      <div class="container docsNavContainer">
        <nav class="toc">
          <div class="toggleNav">
            <section class="navWrapper wrapper">
              <div class="navGroups">
                <div class="navGroup">
                  <a href="#top">
                    <h3 class="navGroupCategoryTitle">WD 1</h3>
                  </a>
                  <ul id="toc">
                    <progress id="pb" value="0" max="100"></progress>
                    <li class="navListItem"><a class="navItem" href="#learninggoals">
                        <codeG>&lt;Learning Goals></codeG>
                      </a></li>
                    <li class="navListItem"><a class="navItem" href="#_HTML">
                        <codeG>&lt;HTML&gt;</codeG>
                      </a></li>
                    <section id="TOC_HTML">
                      <li class="navListItem"><a class="navItem" href="#gettingstartedhtml">1. Getting Started</a></li>
                      <li class="navListItem"><a class="navItem" href="#files">2. Files</a></li>
                      <li class="navListItem"><a class="navItem" href="#howtoedit">3. How to edit</a></li>
                      <li class="navListItem"><a class="navItem" href="#helloworld">4. Hello World</a></li>
                      <li class="navListItem"><a class="navItem" href="#title">5. Title <code>&lt;h1&gt;</code></a></li>
                    </section>
                    <li class="navListItem"><a class="navItem" href="#_BODY">
                        <codeG>&lt;Body&gt;</codeG>
                      </a></li>
                    <section id="TOC_BODY">
                      <li class="navListItem"><a class="navItem" href="#headers">1. Headers <code>&lt;h1&gt;</code></a></li>
                      <li class="navListItem"><a class="navItem" href="#paragraphs">2. Paragraphs <code>&lt;p&gt;</code></a></li>
                      <li class="navListItem"><a class="navItem" href="#bolditalicunderline">3. <strong>Bold</strong>, <i>Italic</i>, <u>Underline</u> </a></li>
                      <li class="navListItem"><a class="navItem" href="#lists">4. Lists <code>&lt;ol&gt;</code></a></li>
                      <li class="navListItem"><a class="navItem" href="#tables">5. Tables <code>&lt;table&gt;</code></a></li>
                      <li class="navListItem"><a class="navItem" href="#images">6. Images <code>&lt;image&gt;</code></a></li>
                    </section>
                    <li class="navListItem"><a class="navItem" href="#_MULTIPAGES">
                        <codeG>&lt;Multi Pages&gt;</codeG>
                      </a></li>
                    <section id="TOC_MULTIPAGES">
                      <li class="navListItem"><a class="navItem" href="#links">1. Links <code>&lt;a&gt;</code></a></li>
                      <li class="navListItem"><a class="navItem" href="#secondpage">2. Second Page <code>&lt;a&gt;</code></a></li>
                      <li class="navListItem"><a class="navItem" href="#button">3. Button <code>&lt;button&gt;</code></a></li>
                    </section>
                    <li class="navListItem"><a class="navItem" href="#_CSS">
                        <codeG>&lt;CSS&gt;</codeG>
                      </a></li>
                    <section id="TOC_CSS">
                      <li class="navListItem"><a class="navItem" href="#gettingstartedcss">1. Getting Started</a></li>
                      <li class="navListItem"><a class="navItem" href="#thebasics">2. The basics</a></li>
                      <li class="navListItem"><a class="navItem" href="#connectingthetwo">3. Connecting the two <code>&lt;link&gt;</code></a></li>
                      <li class="navListItem"><a class="navItem" href="#id">4. Id <code>#</code></a></li>
                      <li class="navListItem"><a class="navItem" href="#class">5. Class <code>.</code></a></li>
                    </section>
                    <li class="navListItem"><a class="navItem" href="#_NAVBAR">
                        <codeG>&lt;nav></codeG>
                      </a></li>
                    <section id=TOC_NAVBAR>
                    </section>
                    <li class="navListItem"><a class="navItem" href="#requirements">
                        <codeB>Requirements</codeB>
                      </a></li>
                    <li class="navListItem"><a class="navItem" href="#challenges">
                        <codeR>Challenges</codeR>
                      </a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </div>

      <div class="container mainContainer" id="top">
        <div class="wrapper">
          <div class="post">

            <header class="postHeader">
              <!-- <a class="edit-page-link button" href="https://www.GitHub.com/mm909" rel="noreferrer noopener">GitHub</a> -->
              <h1 class="postHeaderTitle">Introduction to Web Development</h1>
            </header>

            <article id="mainContent">
              <p>
                Welcome to your first web development project! In this project we will go through many aspects
                of basic web development and how they work together to make a complete and pretty looking
                website with many interactable features.
              </p>

              <a id="learninggoals">
                <h2>
                  <codeG>Learning Goals</codeG>
                </h2>
              </a>
              <ol>
                <li>Good file structure for your website</li>
                <ol>
                  <li>index.html</li>
                  <li>Resource Folders</li>
                </ol>
                <li>Starting an .html file</li>
                <ol>
                  <li>What all html pages should have</li>
                  <li>Changing the title of your page</li>
                </ol>
                <li>Body elements for your website</li>
                <ol>
                  <li>Headers, paragraphs, tables, lists, text formatting, etc</li>
                </ol>
                <li>Multiple Pages</li>
                <li>CSS Basics</li>
                <ol>
                  <li>Stylesheet.css</li>
                  <li>Common element style</li>
                </ol>
                <li> Advanced CSS</li>
                <ol>
                  <li>CSS Class VS. ID</li>
                </ol>
                <li>Floating Top Menu</li>
              </ol>

              <section id="section_HTML">
                <a id="_HTML">
                  <h2>
                    <codeG>&lt;HTML></codeG>
                  </h2>
                </a>

                <a id="gettingstartedhtml">
                  <h2>Getting Started</h2>
                </a>
                <p>

                  You may have done some <span style="color: #ed5565;">HTML</span> and <span style="color: #90EE90;">CSS</span> in CodeCombat, but this is to show you what it looks
                  like when it’s not in a game.
                  </br>
                  </br>
                  The first important thing to keep in mind, is that you have to have a project folder
                  for your site.
                </p>
                <h3 class="paraTitle">Creating website folder</h3>
                <div class="paraSection">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Find where you would like to place your project folder.
                        </br>
                        We suggest that you do this in your ready share folder.
                        </br>
                        </br>
                        Right Click to open the context menu -> Hover over “New” -> Press on “Folder”.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/newfolder.png"></img>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="para">
                    <div class="fl">
                      <p>
                        Rename the folder to <textB> “<i>firstwebsite</i>”.</textB>
                        </br>
                        </br>
                        This will be where you place all of your files for your website.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/firstwebsite.png"></img>
                      </div>
                    </div>
                  </div>
                </div>

                <a id="files">
                  <h2>Files</h2>
                </a>
                <p>
                  In any coding project, there is always that starting point where your
                  project will go to first to run code. In websites, that’s called "<i>index</i>."
                  The index file is the first page that should open if someone were to
                  go to your site.
                </p>
                <h3 class="paraTitle">Creating <i>index.html</i> file</h3>
                <div class="paraSection">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Inside your “<i>firstwebsite</i>” folder, right click and create a new text file.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/newtext.PNG"></img>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="para">
                    <div class="fl">
                      <p>
                        Rename the file to say <textB> “<i>index.html</i>”.</textB>
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/indexhtml.PNG"></img>
                      </div>
                    </div>
                  </div>
                </div>

                <a id="howtoedit">
                  <h2>How to edit</h2>
                </a>
                <p>
                  Awesome! If you double click on that file, you should see that opens
                  a new page on your browser. You should also notice that page is blank…
                  That is because we have to add code to it.
                </p>
                <h3 class="paraTitle">Coding your webpage</h3>
                <div class="paraSection">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Right click on your index file and select
                        <br>
                        “Open with -> Choose another app”.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/openwith.PNG"></img>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="para">
                    <div class="fl">
                      <p>
                        Find <textR>“Sublime”</textR> and double click it.
                        </br>
                        </br>
                        <img class="questionmark" src="../questionmark.jpg"></img>
                        If you’re having trouble finding it, ask an
                        instructor to help you (it won’t always show here).
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/sublime.PNG"></img>
                      </div>
                    </div>
                  </div>
                </div>

                <a id="helloworld">
                  <h2>Hello World</h2>
                </a>
                <h3 class="paraTitle">First steps</h3>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html0" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result0" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html0" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;meta charset="utf-8"&gt;
      &lt;title&gt;&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      Hello, World!
    &lt;/body&gt;
  &lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result0" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <div class="resultBoxImageContainer">
                        <img class="tutImage" src="examples/images/helloworld.PNG"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  The code in the HTML tab is your standard HTML structure. <br>
                  Click on the "<code class="prettifyResult">Result</code>" tab to see what it should look like. <br>
                  <code class="prettifyPurple">&lt;!DOCTYPE html></code> specifies you are using HTML5 (the latest version of HTML). <br>
                  <code class="prettifyHTML">&lt;html>&lt;/html></code> code between here is HTML code (as opposed to CSS, Javascript, etc) <br>
                  <code class="prettifyHTML">&lt;head>&lt;/head></code> code between these tags are your “meta” information <br>
                  <code class="prettifyHTML">&lt;meta charset=”utf-8”></code> allows special characters not found on every keyboard. <br>
                  <code class="prettifyHTML">&lt;body>&lt;/body></code> where your primary code goes. <br>
                  When you were doing CodeCombat, you were always in the <code class="prettifyHTML">&lt;body></code> tag.
                </p>

                <a id="title">
                  <h2><code class="prettifyHTML">&lt;title&gt;</code></h2>
                </a>
                <p>
                  If you notice on your new page, it says “index.html”.
                  That is rather ugly and unprofessional, thankfully HTML has a quick fix for that.
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html1" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result1" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html1" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    Hello, World!
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result1" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <div class="resultBoxImageContainer">
                        <img class="tutImage" src="examples/images/helloworldtitle.PNG"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <code class="prettifyHTML">&lt;title>&lt;/title></code> is an element that defines what you see on the
                  browser tab. Notice (on the results tab), that it now says “<codeB>My Website!</codeB>” instead of
                  “index.html”
                </p>
              </section>

              <section id="section_BODY">
                <a id="_BODY">
                  <h2>
                    <codeG>Body</codeG>
                  </h2>
                </a>
                <p>
                  Now that we have gotten that out of the way, we are going
                  to see the many different elements you can add to your website.
                  <strong>Each example will be separate code</strong>​, so don’t worry that what is
                  done in one section won’t appear in the next.
                </p>

                <a id="headers">
                  <h2>Headers <code class="prettifyHTML">&lt;h1&gt;</code></h2>
                </a>
                <p>
                  Headers are useful in web development for your readers to know when
                  you’ve moved from one category to the next. There are 6 levels of headers,
                  as they get lower in the level, the smaller they get.
                </p>
                <h3 class="paraTitle">Header Elements <code class="prettifyHTML">&lt;h1&gt;</code></h3>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html2" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result2" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html2" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1>I am header 1, I am the biggest!&lt;/h1>
    &lt;h2>I'm the second header, I'm a bit smaller&lt;/h2>
    &lt;h3>I am number 3! Notice I'm even smaller?&lt;/h3>
    &lt;h4>Why are we still shrinking???&lt;/h4>
    &lt;h5>Can you even read this small???&lt;/h5>
    &lt;h6>don't setp on me...&lt;/h6>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result2" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <h1>I am header 1, I am the biggest!</h1>
                      <h2>I'm the second header, I'm a bit smaller</h2>
                      <h3>I am number 3! Notice I'm even smaller?</h3>
                      <h4>Why are we still shrinking???</h4>
                      <h5>Can you even read this small???</h5>
                      <h6>don't setp on me...</h6>
                    </div>
                  </div>
                </div>
                <p>
                  Remember that your code must be in between the
                  <code class="prettifyHTML">&lt;body&gt;&lt;/body&gt;</code> tags.
                  The best time to use header tags is when you want separate categories,
                  you would follow a header tag with a paragraph tag (covered in next section).
                </p>

                <a id="paragraphs">
                  <h2>Paragraphs <code class="prettifyHTML">&lt;p&gt;</code></h2>
                </a>
                <p>
                  Paragraph tags are the most common tag that you will use,
                  as they are a good standard size to write “paragraphs” of information.
                </p>
                <h3 class="paraTitle">Paragraph Element <code class="prettifyHTML">&lt;p&gt;</code></h3>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html3" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result3" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html3" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;h1>This will introduce the paragraph!&lt;/h1>
    &lt;p>
      Hello! I am a paragraph, and I will show you how paragraphs are
      made to make information easy to read and enjoy!
    &lt;/p>
    &lt;p>
      Notice that I added a section paragraph tag and it pushed me to a
      new line?
    &lt;/p>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result3" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <h1>This will introduce the paragraph!</h1>
                      <p>
                        Hello! I am a paragraph, and I will show you how paragraphs are
                        made to make information easy to read and enjoy!
                      </p>
                      <p>
                        Notice that I added a section paragraph tag and it pushed me to a
                        new line?
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  See how the header explains what is about to happen, and the paragraph gives more
                  information about it? This is how you should structure your tags when writing websites
                </p>

                <a id="bolditalicunderline">
                  <h2><strong>Bold</strong>, <i>Italic</i>, <u>Underline</u></h2>
                </a>
                <p>
                  There are times when you want to add emphasis in your text.
                  That can be bold,​ Italic, underline, and other things.
                </p>
                <p>
                  There are many other things that you can do,
                  but these are some of the very common ones.
                </p>
                <h3 class="paraTitle">Text Styles! <code class="prettifyHTML">&lt;b&gt;</code> <code class="prettifyHTML">&lt;i&gt;</code> <code class="prettifyHTML">&lt;u&gt;</code></h3>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html4" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result4" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html4" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1>Text Formatting&lt;/h1>
    &lt;p>
      I want to show you how to &lt;b>bold&lt;/b>
      words and how to &lt;i>italicise&lt;/i>
      words, because they help you &lt;u>emphasis&lt;/u>
      to words that we deem &lt;del>really&lt;/del>
      incredibly &lt;b>important&lt;/b>!
    &lt;/p>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result4" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <p>
                        I want to show you how to <strong>bold</strong>
                        words and how to <i>italicise</i>
                        words, because the help you <u>emphasis</u>
                        to words that we deem <del>really</del>
                        incredibly <strong>important</strong>!
                      </p>
                    </div>
                  </div>
                </div>

                <a id="lists">
                  <h2>Lists <code class="prettifyHTML">&lt;ol&gt;</code></h2>
                </a>
                <p>
                  We sometimes want to organize our thoughts in a nice list. An ordered list is when you have
                  them numbered, while an unordered list is just a bunch of bullet points.
                </p>
                <h3 class="paraTitle">List Element <code class="prettifyHTML">&lt;ol&gt;</code></h3>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html5" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result5" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html5" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1>Lists&lt;/h1>

    &lt;h2>Animals&lt;/h2>
    &lt;ul>
      &lt;li>Dogs&lt;/li>
      &lt;li>Cats&lt;/li>
      &lt;li>Flamingos&lt;/li>
      &lt;li>Hamsters&lt;/li>
    &lt;/ul>

    &lt;h2>Top five biggest programming languages (according to some website)&lt;/h2>
    &lt;ol>
      &lt;li>Javascript&lt;/li>
      &lt;li>Python&lt;/li>
      &lt;li>C#&lt;/li>
      &lt;li>Go&lt;/li>
      &lt;li>Android with Kotlin&lt;/li>
    &lt;/ol>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result5" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <h1>Lists</h1>

                      <h2>Animals</h2>
                      <ul>
                        <li>Dogs</li>
                        <li>Cats</li>
                        <li>Flamingos</li>
                        <li>Hamsters</li>
                      </ul>

                      <h2>Top five biggest programming languages (according to some website)</h2>
                      <ol>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>Go</li>
                        <li>Android with Kotlin</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <p>
                  <code class="prettifyHTML"> &lt;ul>&lt;/ul></code> list items between these tags will be “unordered”, and they will begin with a bullet
                  point.
                </p>
                <p>
                  <code class="prettifyHTML">&lt;ol>&lt;/ol></code> list items between these tags will be “ordered”, and they will be numbered starting
                  at 1.
                </p>
                <p>
                  <code class="prettifyHTML">&lt;li>&lt;/li></code> list item tags that go in between the ordered or unordered list.
                </p>

                <a id="tables">
                  <h2>Tables <code class="prettifyHTML">&lt;table&gt;</code></h2>
                </a>
                <p>
                  This is a more outdated tag that is rarely used in practical use, however there are still occasions
                  when they can be useful. Tables use headers, rows, and data to separate the information in a way
                  that is clean and easy to read.
                </p>
                <h3 class="paraTitle">Table Element <code class="prettifyHTML">&lt;table&gt;</code></h3>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html6" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result6" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html6" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1>A Table About Video Games&lt;/h1>
    &lt;table style="width:100%">
      &lt;tr>
        &lt;th>Name&lt;/th>
        &lt;th>Console&lt;/th>
        &lt;th>Release&lt;/th>
      &lt;/tr>
      &lt;tr>
        &lt;td>Fortnight&lt;/td>
        &lt;td>PC&lt;/td>
        &lt;td>2017&lt;/td>
      &lt;/tr>
      &lt;tr>
        &lt;td>Undertale&lt;/td>
        &lt;td>PC&lt;/td>
        &lt;td>2015&lt;/td>
      &lt;/tr>
      &lt;tr>
        &lt;td>Skyrim&lt;/td>
        &lt;td>PS3&lt;/td>
        &lt;td>2011&lt;/td>
      &lt;/tr>
    &lt;/table>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result6" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <h1>A Table About Video Games</h1>
                      <table style="width:100%">
                        <tr>
                          <th>Name</th>
                          <th>Console</th>
                          <th>Release</th>
                        </tr>
                        <tr>
                          <td>Fortnight</td>
                          <td>PC</td>
                          <td>2017</td>
                        </tr>
                        <tr>
                          <td>Undertale</td>
                          <td>PC</td>
                          <td>2015</td>
                        </tr>
                        <tr>
                          <td>Skyrim</td>
                          <td>PS3</td>
                          <td>2011</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <p>
                  <code class="prettifyHTML">&lt;table>&lt;/table></code> creates your table the
                  <code class="prettifyCSS">style=”width=100%”</code> is CSS code that you
                  don’t need to worry about until later in this
                  lesson.
                </p>
                <p>
                  <code class="prettifyHTML">&lt;tr>&lt;/tr></code> is the table row for your data.
                </p>
                <p>
                  <code class="prettifyHTML">&lt;th>&lt;/th></code> is the table header, generally at the
                  top of your table to show what columns will
                  be in the table.
                </p>
                <p>
                  <code class="prettifyHTML">&lt;td>&lt;/td></code> is table data for regular records.
                </p>

                <a id="images">
                  <h2>Images <code class="prettifyHTML">&lt;image&gt;</code></h2>
                </a>
                <p>
                  Just text in a website can look rather boring,
                  so we’re going to spice it up by placing images into
                  the page.
                </p>
                <h3 class="paraTitle">Image element <code class="prettifyHTML">&lt;image&gt;</code></h3>
                <div class="paraSection">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Go and search up whatever you’d like to add into your page.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/imageone.PNG"></img>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="para">
                    <div class="fl">
                      <p>
                        Right click on image
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/imagetwo.PNG"></img>
                      </div>
                    </div>
                  </div>
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new folder in your website folder
                        called “images” and place your picture in
                        there.
                      </p>
                      <p>
                        You may need to rename it to something that
                        makes more sense.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/renameimage.PNG"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html7" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result7" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html7" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1>Time to add an image&lt;/h1>
    &lt;img src="images/walle.jpg">
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result7" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <h1>Time to add an image</h1>
                      <img src="images/walle.jpg">
                    </div>
                    </div>
                  </div>
                  <br>
                  <p>
                    <code class="prettifyHTML"> &lt;image></code> tag allows you to import images in your website. Notice that the src is equal to
                    “images/walle.jpg”? This is because that the image is stored in a sub-folder of what is called
                    the “root” folder.
                  </p>
              </section>
              <section id="section_MULTIPAGES">
                <a id="_MULTIPAGES">
                  <h2>
                    <codeG>Multi Pages</codeG>
                  </h2>
                </a>
                <p>
                  One page is all fine and dandy, but we want to be able to navigate to other pages on our site! We
                  are going to explore two very common ways that users can move from one page to another.
                </p>
                <a id="links">
                  <h2>Links <code class="prettifyHTML">&lt;a&gt;</code></h2>
                </a>
                <p>To start things off, the single most basic way to navigate to another page is the anchor tag.</p>
                <h3 class="paraTitle">Links to other sites <code class="prettifyHTML">&lt;a></code> </h3>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html8" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result8" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-html8" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;h1>Come to our site&lt;/h1>
  &lt;p>Click on &lt;a href="https://mycodecentral.com/">this&lt;/a>
     word to go to our site&lt;/p>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result8" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox">
                      <h1>Come to our site</h1>
                      <p>Click on <a href="https://mycodecentral.com/"><u>this</u></a>
                        word to go to our site</p>
                    </div>
                  </div>
                </div>
                <p>Clicking on the link between the <code class="prettifyHTML"> &lt;a>&lt;/a></code> tags will send your user to another page.</p>

                <a id="secondpage">
                  <h2>Second Page <code class="prettifyHTML">&lt;a&gt;</code></h2>
                </a>
                <p>
                  Knowing how to move to other websites is all well and good, however, most web developers will
                  have links that will lead to other pages on their own site
                </p>
                <h3 class="paraTitle">Links to other pages on your own site <code class="prettifyHTML">&lt;a></code> </h3>
                <div class="paraSection">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Go to your project folder, right click and
                        create a new text file and call it
                        “newpage.html”.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/secondpageone.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                  <br>
                </div>
                  <br>
                  <p>
                    Edit the newpage with the same rules as the
                    other page, (
                    <!DOCTYPE>, etc).
                  </p>
                  <p>
                    Edit the index.html page to include an anchor
                    (&lt;a>&lt;/a>) tag with an href to
                    “newpage.html”
                  </p>
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-firstPage" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyResult codetab">index.html</code></a>
                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-secondPage" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">newpage.html</code></a>
                    </div>
                  </nav>
                  <br>
                  <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="-firstPage" role="tabpanel" aria-labelledby="nav-contact-tab">
                      <div class='CodeBoxL'>
                        <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1>Come to our site&lt;/h1>
    &lt;p>Click on &lt;a href="newpage.html">this&lt;/a>
    word to go to another page.&lt;/p>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="-secondPage" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div class='CodeBoxL'>
                        <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Second Page!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1>Welcome To Page Two!&lt;/h1>
    &lt;p>It's different than where you came from!&lt;/p>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                      </div>
                    </div>
                  </div>
                  <p>
                    If you open index.html and click on the new
                    link, it should move you to the next page. Did
                    it?
                  </p>

                  <a id="button">
                  <h2>Button <code class="prettifyHTML">&lt;button&gt;</code></h2>
                </a>
                  <p>Sometimes an <code class="prettifyHTML"> &lt;a></code> tag seems a bit plain, that is when it can be useful to use a button instead.</p>
                  <h3 class="paraTitle"><code class="prettifyHTML">&lt;button&gt;</code> with anchor </h3>

                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html9" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result9" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                    </div>
                  </nav>
                  <br>
                  <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="-html9" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div class='CodeBoxL'>
                        <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;h1>Come to our site&lt;/h1>
  &lt;a href="newpage.html">&lt;button>Next Page&lt;/button>&lt;/a>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="-result9" role="tabpanel" aria-labelledby="nav-contact-tab">
                      <div class="resultBox">
                        <h1>Come to our site</h1>
                        <a href="newpage.html"><button>Next Page</button></a>
                      </div>
                    </div>
                  </div>
                  <p>
                    Almost anything can be turned into a link if
                    you put it inside an anchor tag.
                  </p>
                  <p>
                    Definitely something that you should play
                    around with.
                  </p>
              </section>

              <section id="section_CSS">
                <a id="_CSS">
                  <h2>
                    <codeG>CSS</codeG>
                  </h2>
                </a>
                <p>
                  We’ve added text, images, and various other element tags. Yet, our pages still look a bit dull.
                  CSS (Cascading Style Sheets) is used to change the look of your elements. This is done through
                  colors, padding, margins, alignments, and more!
                </p>
                <a id="gettingstartedcss">
                  <h2>Getting Started</h2>
                </a>
                <p>
                  Just like everything else, our CSS file will be separate and linked onto the website. This is done
                  so that the style can be reused between pages
                </p>
                <h3 class="paraTitle">Creating CSS file</h3>
                <div class="paraSection">
                  <div class="para">
                    <div class="fl">
                      <p>
                        In your projects folder, right click and create a
                        new folder called “stylesheet”.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/cssone.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="para">
                    <div class="fl">
                      <p>
                        In the folder “stylesheet”, create a new file
                        called “stylesheet.css”.
                      </p>
                      <p>
                        This will hold all of your style information
                        throughout your entire site! Placing it in it’s
                        own file will allow us to use it in every page
                        (as you’ll see later).
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img class="tutImage" src="examples/images/csstwo.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>

                <a id="thebasics">
                  <h2>The Basics</h2>
                </a>
                <p>There are so many uses for CSS, the basic of which is text alignment, size, and color</p>
                <h3 class="paraTitle">Creating CSS file</h3>
                <p>
                  Open the stylesheet.css file and add the
                  following code…
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-contact-tab" data-toggle="tab" href="#-css10" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyCSS codetab">CSS</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-css10" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-css CodeBoxBuffer">
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-size: 20px;
}</pre>
                    </div>
                  </div>
                </div>
                <div class="paraSection">
                  <div class="para">

                    <p>
                      Body: Is where most of your code is placed in
                      your HTML file (remember the
                      &lt;body>&lt;/body> tags?) So altering the “body”
                      element is altering the entirety of your page.
                    </p>
                    <p>
                      h1/p: The h1 and p element inside your
                      HTML Code
                    </p>
                    <p>
                      All of these are known as “rules” for your
                      style. The <strong> selector</strong>​ is the element you’re
                      changing, and the <strong> declaration​</strong> is what is
                      being changed from what you selected.
                    </p>
                  </div>
                </div>
                <br>

                <a id="connectingthetwo">
                  <h2>Connecting the two <code class="prettifyHTML">&lt;link&gt;</code></h2>
                </a>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html11" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-css11" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyCSS codetab">CSS</code></a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#-result11" role="tab" aria-controls="nav-contact" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show" id="-css11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-css CodeBoxBuffer">
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-size: 20px;
}</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show active" id="-html11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;link rel="stylesheet" type="text/css" href="stylesheet/stylesheet.css">
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1>Come to our site&lt;/h1>
    &lt;a href="newpage.html">&lt;button>Next Page&lt;/button>&lt;/a>
  &lt;/body&gt;
&lt;/html&gt;</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="-result11" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="resultBox" style="background-color:lightblue;">
                      <h1 style="color:white;text-align:center;">Come to our site</h1>
                      <a href="newpage.html" style="font-size:20px;"><button>Next Page</button></a>
                    </div>
                  </div>
                </div>
                <p>
                  The
                  <code class="prettifyHTML">&lt;link></code> tag imports external files into our file to be used. In this case, it gives this file the
                  CSS style. Notice how different it looks?
                </p>
          </div>

          <a id="id">
            <h2>Id <code class="prettifyCSS">#</code></h2>
          </a>
          <p>
            Beyond selecting rules for elements, you can also select specific elements by either “id” or
            “class”. They are both very similar, the difference is that “id” is meant for one element while
            “class” is for multiple.
          </p>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html12" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
              <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#-css12" role="tab" aria-controls="nav-profile" aria-selected="false"><code class="prettifyCSS codetab">CSS</code></a>
              <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#-result12" role="tab" aria-controls="nav-profile" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
            </div>
          </nav>
          <br>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="-html12" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class='CodeBoxL'>
                <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
  &lt;link rel="stylesheet" type="text/css" href="stylesheet/stylesheet.css">
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;p id="para1"> Hello World! &lt;/p> &lt;!-- Add this line! -->
  &lt;p>This paragraph is not affected by the style.&lt;/p>
  &lt;/body&gt;
&lt;/html&gt;</pre>
              </div>
            </div>
            <div class="tab-pane fade" id="-css12" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div class='CodeBoxL'>
                <pre class="prettyprint linenums lang-css CodeBoxBuffer">
#para1 {
  text-align: center;
  color: red;
} </pre>
              </div>
            </div>
            <div class="tab-pane fade" id="-result12" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div class="resultBox">
                <p style="text-align:center;color:red;">Hello World</p>
                <p>This paragraph is not affected by the style.</p>
              </div>
            </div>
          </div>
          <br>
          <p>
            <i>
              Notice how they’re both <code class="prettifyHTML">&lt;p>&lt;/p></code> tags? But
              only one is changed, that’s why we have “id”
              properties?
            </i>
          </p>
          <p>
            “id” elements are accessed by “#” in front of them in the CSS file.
          </p>
        </div>

        <a id="class">
          <h2>Class <code class="prettifyCSS">.</code></h2>
        </a>
        <p>
          You’ve done “id” for one element, now to see class affect multiple elements.
        </p>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html13" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#-css13" role="tab" aria-controls="nav-profile" aria-selected="false"><code class="prettifyCSS codetab">CSS</code></a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#-result13" role="tab" aria-controls="nav-profile" aria-selected="false"><code class="prettifyResult codetab">Result</code></a>
          </div>
        </nav>
        <br>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="-html13" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class='CodeBoxL'>
              <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
  &lt;link rel="stylesheet" type="text/css" href="stylesheet/stylesheet.css">
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;h1 class="center">Red and center-aligned heading&lt;/h1>
  &lt;p class="center">Red and center-aligned heading&lt;/p>
  &lt;/body&gt;
&lt;/html&gt;</pre>
            </div>
          </div>
          <div class="tab-pane fade" id="-css13" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div class='CodeBoxL'>
              <pre class="prettyprint linenums lang-css CodeBoxBuffer">
.center {
  text-align: center;
  color: red;
} </pre>
            </div>
          </div>
          <div class="tab-pane fade" id="-result13" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div class="resultBox">
              <h1 style="text-align:center;color:red;">Red and center-aligned heading</h1>
              <p style="text-align:center;color:red;">Red and center-aligned heading</p>
            </div>
          </div>
        </div>
        <div class="paraSection">
          <p>
            <i>
              Both different elements (one an h1, and the
              other a p tag) yet they are both now changed.
            </i>
          </p>
          <p>
            To change the rule of a “class”, put a period (.) before the class name in your CSS rule.
          </p>
        </div>
        <br>
        <p>
          There are so many ways to alter CSS, go to <a href="https://www.w3schools.com/css/default.asp"><u>here</u></a> for many
          more things that you can do with CSS.
        </p>
        </section>

        <section id="section_NAVBAR">
          <a id="_NAVBAR">
            <h2>
              <codeG>Navbar</codeG>
            </h2>
          </a>
          <p>
            Final thing to do before we finish this lesson and get into the project, is do a quick tutorial on
            how to make a basic floating header.
          </p>
          <p>
            Almost every website you go to has a header, they provide the name of the site as well as
            navigational links to take you to other places on the site. The best headers are the ones that
            follow you as you scroll down the page.
          </p>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-html14" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifyHTML codetab">HTML</code></a>
              <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#-css14" role="tab" aria-controls="nav-profile" aria-selected="false"><code class="prettifyCSS codetab">CSS</code></a>
            </div>
          </nav>
          <br>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="-html14" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class='CodeBoxL'>
                <pre class="prettyprint linenums lang-html CodeBoxBuffer">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
  &lt;link rel="stylesheet" type="text/css" href="stylesheet/stylesheet.css">
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Website!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;

    &lt;div class="navbar">
      &lt;a href="#">Home&lt;/a>
      &lt;a href="#">News&lt;/a>
      &lt;a href="#">Contact&lt;/a>
    &lt;/div>

    &lt;div class="main">
      &lt;h1>Fixed Top Menu&lt;/h1>
      &lt;h2>Scroll this page to see the effect&lt;/h2>
      &lt;h3>The navagation bar will start at the
             top of the page while scrolling&lt;/h3>

      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
      &lt;p>Some text Some text Some text Some text ...&lt;/p>
    &lt;/div>

  &lt;/body&gt;
&lt;/html&gt;</pre>
              </div>
            </div>
            <div class="tab-pane fade" id="-css14" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div class='CodeBoxL'>
                <pre class="prettyprint linenums lang-css CodeBoxBuffer">
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background: #ddd;
  color: black;
}

.main {
  padding: 16px;
  margin-top: 30px;
  height: 1500px;
}</pre>
              </div>
            </div>
            <p>Pay special attention to where classes are.</p>
            <p>See the :hover? That is a common CSS rule to change properties based on whether an element
              is being hovered over or not.
            </p>
            <p>Also notice the CSS rule .navbar a, this means that it will only affect the anchor elements that
              are inside the .navbar class. If you were to create an anchor tag somewhere else, it wouldn’t
              look like the one in your header.</p>
            <p>There are many other elements in here, can you figure out what they all mean? (We will
              expand more on this in a web development specific course).</p>
        </section>

        <a id="requirements">
              <h2>
                <codeB>Requirements</codeB>
              </h2>
            </a>
        <p>Now that we’ve gone over all the basic aspects of a basic HTML/CSS website, you are going to
          make a website based on whatever you would like! The requirements of this project are as
          follows:</p>
        <ol>
          <li>Website must use proper file hierarchy and structure</li>
          <ol>
            <li>First page index.html</li>
            <li>css and images folder</li>
          </ol>
          <li>Website must have a title tag</li>
          <li>Add a floating header</li>
          <ol>
            <li>Have at least one styled button on it</li>
          </ol>
          <li>Body of website must include the following</li>
          <ol>
            <li>One header and one paragraph tag</li>
            <li>Bold or italicize at least one word</li>
            <li>A list (either ordered or unordered)</li>
            <li>One line break</li>
            <li>One image</li>
            <li>One table</li>
          </ol>
          <li>
            Must have more than one page (second page just needs to follow proper html structure,
            you don’t need to make it as complicated as the main page unless you want to).
          </li>
          <li>Have your CSS file separate and placed in the appropriate folder</li>
          <li>Other CSS requirements</li>
          <ol>
            <li>Have one proper use of a class</li>
            <li>Have one proper use of an id</li>
            <li>Style an element that is neither of the above (body would be a good one)</li>
          </ol>
        </ol>
        <p>Pages must look nice and flow well together, this must look like one big project and not just a
          bunch of random elements put together.
        </p>
        <p> <a href="https://www.w3schools.com/"><u>W3Schools</u> </a> is a great resource to see what you can do in your
          website. Highly recommended you give it a check</p>
        <a id="challenges">
              <h2>
                <codeR>Challenges</codeR>
              </h2>
            </a>
        <p>None yet!</p>
        </article>
      </div>
      <!-- <div class="docs-prevnext"><a class="docs-prev button" href="#">← Lorem</a><a class="docs-next button" href="#">Ipsum →</a></div> -->
    </div>
  </div>
  </div>

  <footer class="nav-footer" id="footer">
    <section class="sitemap">
      <!-- <div>
          <h5><a href="#">Lorem</a></h5>
          <a href="#">Lorem</a>
        </div>
        <div>
          <h5><a href="#">Lorem</a></h5>
          <a href="#">Lorem</a>
        </div>
        <div>
          <h5><a href="#">Lorem</a></h5>
          <a href="#">Lorem</a>
        </div> -->
      <!-- <section class="copyright"> -->
    </section>
  </footer>
  </div>
</body>

</html>
`

var defaultCodeJS = `// This is a circle object
// It takes an x and a y for its location
function Circle(x, y) {
  // this.pos is a vector with the obejct's pos(x,y)
  this.pos = createVector(random(width), random(height));
  // this.pos = createVector(x,y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.target = createVector(x, y)

  // this.r is the circle's radius
  // this.growrate is how fast the cirlce grows
  // Amount each frame
  // this.growing is a bool var for it the circle should grow or not
  // this.buffer is how much black space should be allowed between circles
  this.r = 1;
  this.growRate = 1.5;
  this.growing = true;
  this.buffer = 5;

  // how the cirlces move.
  // MaxSpeed is how long a vector can possibly be (Top left to bottom right)
  // How much do we slow down
  // this.maxSpeed = sqrt(width * width + width * width);
  this.maxSpeed = 5;
  this.maxForce = 0.3;
  this.fleeRange = 125;
  this.fleeSpeed = 7;

  // var middle = createVector(width/2,height/2);
  // var d = dist(middle.x, middle.y, this.target.x, this.target.y)
  // var c = map(d,0,width/2,0,255)

  // this.color is the color of the circle
  // this.color = color(random(360),255,255)
  // this.color = color(c,255,255)

  // Apply a force to acc (Takes a vector)
  this.applyForce = function(f) {
    this.acc.add(f)
  }

  // This function will update the color of the circle
  this.updateColor = function() {
    var middle = createVector(width / 2, height / 2);
    var d = dist(middle.x, middle.y, this.pos.x, this.pos.y);
    var c = map(d, 0, width / 2, 0, 255);
    this.color = color(c, 255, 255);
  }

  // updates color, vel, pos, acc, and calls the arrive function.
  this.update = function() {
    this.updateColor();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.arrive(this.target);
    var d = dist(this.pos.x, this.pos.y, mouseX, mouseY)
    var mouseV = createVector(mouseX, mouseY);
    if (d < this.fleeRange) {
      this.applyForce(this.run(mouseV));
    }
  }

  this.run = function(target) {
    var fleeingTarget = createVector(target.x, target.y);
    var fleeDir = p5.Vector.sub(this.pos, fleeingTarget)
    fleeDir.setMag(this.fleeSpeed)
    return p5.Vector.sub(fleeDir, this.vel);
  }

  // This arive is a function that moves a agent (circle)
  // towards a target based on how far away from target it is
  // Think of this as stoping at a stop sign
  // We want to go max speed until we are close to the sign
  // As we get closer we want to slow down
  // Once we arive we want to stop
  this.arrive = function(target) {
    // Get the direction
    var desired = p5.Vector.sub(target, this.pos)
    // See how long this vector is
    var d = desired.mag();
    // Get the max speed
    var speed = this.maxSpeed;
    // This is the "Slow down as we get close" part of the alg
    if (d < 10 * this.maxSpeed) {
      speed = map(d, 0, 10 * this.maxSpeed, 0, this.maxSpeed)
    }
    // Resize the vector
    desired.setMag(speed)
    // "steer"
    var steer = p5.Vector.sub(desired, this.vel)
    // Apply the force
    steer.limit(this.maxForce)
    this.applyForce(steer)
  }

  // This.show draws the circle to the screen
  this.show = function() {
    // Color mode Hue, sat, brightness
    // No stroke around the circle
    // Fill the circle with it's color
    // Draw the ellipse
    // NOTE: this.r is the radius so we must mult it by 2 for the with and height
    colorMode(HSB);
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  // This.grow will inc this.r by this.growRate if the circle is still growing
  this.grow = function() {
    if (!this.bounds()) {
      this.growing = false;
    }
    // If the circle is still growing and this.r < the MAXSIZE ->
    if (this.growing && this.r < MAXSIZE) {
      // this.r = this.r + this.growRate
      this.r += this.growRate;
    }
  }

  // this function will return false if the circle is touching another circle or a wall
  this.bounds = function() {
    // Check to see if the circle is touching a wall
    var tempX = this.target.x + this.r + this.buffer;
    var tempY = this.target.y + this.r + this.buffer;
    if (tempX > width || tempY > height) return false;
    var tempX = this.target.x - this.r - this.buffer;
    var tempY = this.target.y - this.r - this.buffer;
    if (tempX < 0 || tempY < 0) return false;

    // Check to see if 'this' is touching any other circle
    for (var i = 0; i < circles.length; i++) {
      // Check circle at i
      // Get the distance between 'this' and circle c
      var c = circles[i];
      var d = dist(this.target.x, this.target.y, c.target.x, c.target.y)
      // IF D > 1 // NOTE: 'this' is in the circle array so it will
      // check itself so the distance from itself to itself will be 0
      // thus will stop growing
      if (d > 1) {
        // if the distance is less than both radius + the buffer then return false
        if (d < this.r + c.r + this.buffer) {
          return false;
        }
      }
    }
    return true;
  }
}

function addCircle() {
  var x = random(width);
  var y = random(height);

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = dist(x, y, c.target.x, c.target.y)
    if (d - c.buffer < c.r) {
      valid = false;
    }
  }

  if (valid) {
    circles.push(new Circle(x, y))
  }

  return valid;
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=QHEQuoIKgNE
// https://p5js.org/reference/

// MAXSIZE => The max radius of a circle
// CIRCLESEACHFRAME => The numbers of circles that are spawned each frame
// ATTEMPTS => The nuber of tries to spawn a circle each frame.
// MAX => Max number of circles possible
var MAXSIZE = 50;
var CIRCLESEACHFRAME = 10;
var ATTEMPTS = CIRCLESEACHFRAME * 10;
var MAX = 1000;

// circle => Array to hold the cirlces
// Finished => Var to tell if we have finished packing the space yet
var circles = [];
var finished = false;

// Create the canvas
function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Draw the background
  background(0, 0, 0)
  addCircles();

  // For each circle update, grow, and show.
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].grow();
    circles[i].show();
  }
}

function addCircles() {
  // circlesThisFrame keeps track of how many circles have sucessfully been spwaned this frame.
  // attemptsToAddCircle keepts track of how many attempts to add a circle have been made.
  var circlesThisFrame = 0;
  var attemptsToAddCircle = 0;
  // If the number of cirlcs is less than the max and we are not finished then ->
  if (circles.length < MAX && !finished) {
    // While the # of circles this frame < CIRCLESEACHFRAME
    while (circlesThisFrame < CIRCLESEACHFRAME) {
      // inc attempts
      attemptsToAddCircle++;
      // If we sucessfully add a circle then inc circlesThisFrame
      if (addCircle()) {
        circlesThisFrame++;
      }
      // If we try too many times (attemptsToAddCircle > ATTEMPTS)
      // Then we are done trying to pack circles
      if (attemptsToAddCircle > ATTEMPTS) {
        finished = true;
        // Break from while loop
        break;
      }
    }
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI

// 1. This is a firework object
// It takes in -
// x
// y
// size
// color

// Vars
// 2. vector pos
// 3. size
// 4. color
// 5. vector vel
// 6. vector acc
// 7. vector g
// 8. pcount
// 9. array partical
// 10. bool exploded
// 11. bool del

// Functions
// 12. Apply force
// 13. Update
// 14. explode
// 15. show

function Firework(x_, y_, size_, color_) { // 1

  // Vars
  // 2. Create a vector with x and y as the passed values.
  // 3. set size to the passed value
  // 4. set the color to the passed value
  this.pos = createVector(x_, y_) // 2
  this.size = size_; // 3
  this.color = color_; // 4

  // 5. create a vector for the velocity
  // 6. create a vector for the acceleration
  // 7. create a vector for the force of gravity
  this.vel = createVector(0, 0); // 5
  this.acc = createVector(0, 0); // 6
  this.g = createVector(0, 0.1); // 7

  // 8. pCount is the number of particles the fire makes when it explodes
  // 9. particles is the array for storing all of the particles made when it explodes
  this.pCount = floor(size_ * 5); // 8
  this.particles = []; // 9

  // 10. exploded is a bool to check is the firework has been exploded yet. Starts as false
  // 11. del is a bool to see if the firework can be deleted from the array.
  this.exploded = false; // 10
  this.del = false; // 11

  // 12. Apply force
  // Apply force takes in a vector and adds it to the acceleration
  // a. Add the force to acc vector
  this.applyForce = function(f) { // 12
    this.acc.add(f); // 12.a
  }

  // 13. Update
  // a > Add acc to vel
  // b > Add g to vel
  // c > Add pos to vel
  // d > 0 out acc
  // e > If the vel is negitive (Firework is falling)
  // f > then explode the firework
  // g > If the firework has exploded and there are no particles in the air
  // h > Mark the firework for deletion
  this.update = function() { // 13
    this.vel.add(this.acc); // 13.a
    this.vel.add(this.g) // 13.b
    this.pos.add(this.vel); // 13.c
    this.acc.mult(0); // 13.d

    if (this.vel.y > 0) { // 13.e
      this.explode(); // 13.f
    }

    if (this.exploded && this.particles.length == 0) { // 13.g
      this.del = true; // 13.h
    }
  }

  // 14. explode
  // a > if this firework has not exploded yet (We dont want to do this more than once)
  // b > do the following pCount times
  // c > Create a force that will send the partical flying out
  // d > create a particle
  // > this.pos so that the particles can start where the firework ended.
  // > this.size/2 is the new size of the partical
  // > the new random force we made
  // > this.color so that we know what color to draw the particals
  // e > apply that random for the particle
  // f > add that partical to the array list
  // g > set exploded to true (so that we dont do all of that again)
  this.explode = function() { // 14
    if (!this.exploded) { // a
      for (var i = 0; i < this.pCount; i++) { // b
        var force = createVector(random(-2, 2), random(-2, 2)); // c
        var particle = new Particle(this.pos, this.size / 2, this.color); // d
        particle.applyForce(force); // e
        this.particles[i] = particle; // f
      }
    }
    this.exploded = true; // g
  }

  // 15. show
  // > this function will draw the firework and it's particles
  // a > set the color mode to HSB (Hue, saturation, brightness)
  // > this makes our colors really saturated and bright
  // b > check to see if the firework has been exploded
  // > if the fire work has exploded then dont show it
  // c > noStroke removes black lines around our firework
  // d > fill our circle with the color
  // e > draw the firework at x,y,size,size
  // f > For every partical (Loop through this array backwards)
  // > Update the partical's location
  // > show the partical
  // > if the partical is marked for deletion
  // > Delete that partical
  this.show = function() { // 15
    colorMode(HSB); // a

    if (!this.exploded) { // b
      noStroke(); // c
      fill(this.color, 255, 255); // d
      ellipse(this.pos.x, this.pos.y, this.size, this.size); // e
    }

    for (var i = this.particles.length - 1; i >= 0; i--) { // f
      this.particles[i].update();
      this.particles[i].show();
      if (this.particles[i].del) {
        this.particles.splice(i, 1)
      }
    }
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI

// 1. this is a partical object
// > it takes in a parent firework
// > posistion
// > size
// > color

// Vars
// 2. vector pos
// 3. size
// 4. color
// 5. vector vel
// 6. vector acc
// 7. vector g
// 8. bool del
// 9. life
// 10. lifeSpan

// Functions
// 11. Apply force
// 12. Update
// 13. show

function Particle(pos_, size_, color_) { // 1

  // Vars
  // 2. Create a vector with x and y as the passed values.
  // 3. set size to the passed value
  // 4. set the color to the passed value
  this.pos = createVector(pos_.x, pos_.y); // 2
  this.size = size_; // 3
  this.color = color_; // 4

  // 5. create a vector for the velocity
  // 6. create a vector for the acceleration
  // 7. create a vector for the force of gravity
  this.vel = createVector(0, 0); // 5
  this.acc = createVector(0, 0); // 6
  this.g = createVector(0, 0.01); // 7

  // 8. del is a bool to see if the partical can be deleted from the array.
  this.del = false; // 8

  // 9. this.life is how many frames this partical has been alive
  // 10. this.lifeSpan is how many frames this partical is allowed to live
  this.life = 0; // 9
  this.lifeSpan = 40; // 10

  // 11. Apply force
  // Apply force takes in a vector and adds it to the acceleration
  // a. Add the force to acc vector
  this.applyForce = function(f) { // 11
    this.acc.add(f); // a
  }

  // 12. Update
  // a > Add acc to vel
  // b > Add g to vel
  // c > Add pos to vel
  // d > 0 out acc
  // e > inc the life count
  // f > if this.life > this.lifeSpan then
  // g > set del for true
  this.update = function() { // 12
    this.vel.add(this.acc); // a
    this.vel.add(this.g); // b
    this.pos.add(this.vel); // c
    this.acc.mult(0); // d
    this.life++; // e
    if (this.life > this.lifeSpan) { // f
      this.del = true; // g
    }
  }

  // 13. Show
  // > this function will draw the partical
  // a > set the color mode to HSB (Hue, saturation, brightness)
  // b > get the alpha value using the map function (Make it look like they are fading)
  // c > fill with color and alpha
  // d > draw the partical
  this.show = function() { // 13
    colorMode(HSB) // a
    var alpha = map(this.life, 0, this.lifeSpan, 255, 50) // b
    fill(this.color, alpha, alpha) // c
    ellipse(this.pos.x, this.pos.y, this.size, this.size) // d
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI
// https://p5js.org/reference/

// Purple Rain topics
// > Map function
// > Floor function
// > Applying force function
// > Acc, vel, pos vectors
// > Color Modes
// > Vectors
// > OOP
// > Arrays
// > Push and splice
// > Random
// > Update/Show functions
// > P5.js basics

// 1. Array to hold our fireworks
// 2. How many fireworks on the screen
// 3. On average, how big should this firework be?
var fireworks = []; // 1
var count = 50; // 2
var baseSize = 6; // 3

// 1. Setup runs before the draw loop starts
// 2. Make a canvas to draw on.
// 3. Create 'count' number of fireworks
// 4. Get a random color.
// 5. Get a random size based on the 'baseSize'
// 6. Create a new firework with the following arguments
//    x, y, size, color
//    x is random
//    y is just off the screen
//    size is the new random size
//    color is random
// 7. create a vector pointing up
//    the vector is at a random length (speed)
// 8. for each firework, apply that 'random' force
// 9. draw the starting background
function setup() { // 1
  createCanvas(500, 500); // 2

  for (var i = 0; i < count; i++) { // 3
    var color = random(255); // 4
    var newSize = random(baseSize - 2, baseSize + 2); // 5
    fireworks[i] = new Firework(random(width), height - newSize, newSize, color); // 6
    var force = createVector(0, random(-9, -5)); // 7
    fireworks[i].applyForce(force); // 8
  }

  background(25); // 9
}

// 1. Draw loop runs once each frame (30 times a second)
// 2. colorMode is set to take in RGB values (this is the normal setting)
// 3. Draw a black backgroun with alot of alpha. (this makes the trails)
//    Try using other alpha values and see what happens
//    Alpha - 255 = opaque, 0 = transparent
// 4. For each firework, do the follwing -
// a. Update the firework
// b. Show the firework
// 5. For each firework, do the following
// a. Check to see if the firework can be deleted
// b. if so, splice it from the array
// 6. if the number of fireworks is less than the 'count'
//    aka. some have been deleted -> Then we should make some new ones
// 7. Get a random color.
// 8. Get a random size based on the 'baseSize'
// 9. Create a new firework with the following arguments
//    x, y, size, color
//    x is random
//    y is just off the screen
//    size is the new random size
//    color is random
// 10. create a vector pointing up
//    the vector is at a random length (speed)
// 11. for each firework, apply that 'random' force
// 12. push that new firework to the array

function draw() { // 1
  colorMode(RGB) // 2
  background(0, 25); // 3

  for (var i = 0; i < fireworks.length; i++) { // 4
    fireworks[i].update(); // a
    fireworks[i].show(); // b
  }

  for (var i = 0; i < fireworks.length; i++) { // 5
    if (fireworks[i].del) { // a
      fireworks.splice(i, 1) // b
    }
  }

  if (fireworks.length < count) { // 6
    var color = random(255); // 7
    var newSize = random(baseSize - 2, baseSize + 2); // 8
    var fw = new Firework(random(width), height - newSize, newSize, color); // 9
    var force = createVector(0, random(-9, -5)); // 10
    fw.applyForce(force); // 11
    fireworks.push(fw) // 12
  }
}

// NeuralNetwork visualizer

const LEVELS = 3;

class nnv {
  constructor(brain){
    this.inputSize = brain.input_nodes;
    this.hiddenSize = brain.hidden_nodes;
    this.outputSize = brain.output_nodes;
    this.IH_weights = brain.weights_ih.data
    this.HO_weights = brain.weights_ho.data
    this.hidden_Bias = brain.bias_h.data
    this.output_Bias = brain.bias_o.data
    this.hidden_values = brain.HiddenValues.data
    this.output_values = brain.OuputValues.data
    this.input_values = brain.InputValues;
    this.NodeSizeBias = 24;
    this.SizeMax = 50;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.x = 0;
    this.y = 0;
    this.xSize = 0;
    this.ySize = 0;
    this.YIntervalI = 0;
    this.YIntervalH = 0;
    this.YIntervalO = 0;
    this.XInterval = 0;
    this.YOffset = 0;
    this.XOffset = 0;
  }

  setValues(x, y, xSize, ySize, XOffset, YOffset){
    this.x = x;
    this.y = y;
    this.xSize = xSize;
    this.ySize = ySize;
    this.XOffset = XOffset;
    this.YOffset = YOffset;
    this.XInterval = this.CalcuateXInterval(this.xSize, LEVELS);
    this.YIntervalI = this.CalcuateYInterval(this.ySize, this.inputSize);
    this.YIntervalH = this.CalcuateYInterval(this.ySize, this.hiddenSize);
    this.YIntervalO = this.CalcuateYInterval(this.ySize, this.outputSize);
  }

  draw(){
    if(this.input_values){
      noStroke();
      fill(200);
      rectMode(CENTER);
      rect(this.x,this.y,this.xSize,this.ySize);
      this.drawNodes();
      this.drawLinks();
    }
  }

  drawNodes(){
    let size = this.NodeSizeBias;
    for(let i = 0; i < this.inputSize; i++){
      this.color = this.getColor(this.input_values[i],false);
      fill(this.color);
      let xValue = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalI + this.YIntervalI/2;
      ellipse(xValue, yValue, size, size);
    }
    for(let i = 0; i < this.hiddenSize; i++){
      this.color = this.getColor(this.hidden_values[i],false);
      fill(this.color);
      size = this.getSize(this.hidden_Bias[i][0]);
      let xValue = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalH + this.YIntervalH/2;
      ellipse(xValue, yValue, size, size);
    }
    for(let i = 0; i < this.outputSize; i++){
      this.color = this.getColor(this.output_values[i],true);
      fill(this.color);
      size = this.getSize(this.output_Bias[i][0]);
      let xValue = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalO + this.YIntervalO/2;
      ellipse(xValue, yValue, size, size);
    }
  }

  drawLinks(){
    for(let i = 0; i < this.hiddenSize; i++){
      for(let j = 0; j < this.inputSize; j++){
        let x = this.input_values[i];
        let weight = this.IH_weights[i][j];
        let pSum = x * weight;
        if(abs(pSum) >= 1/this.inputSize){
          this.drawConnection(i,j,1,2,this.IH_weights);
        }
      }
    }

    for(let i = 0; i < this.outputSize; i++){
      for(let j = 0; j < this.hiddenSize; j++){
        let x = this.hidden_values[i];
        let weight = this.HO_weights[i][j];
        let pSum = x * weight;
        if(abs(pSum) >= 1/(this.hiddenSize+1)){
          this.drawConnection(i,j,2,3,this.HO_weights);
        }
      }
    }
  }

  drawConnection(i,j,layerX,layerY,weights){
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;

    if(layerX == 1){
      x1 = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalI + this.YIntervalI/2;
    }
    if(layerX == 2){
      x1 = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalH + this.YIntervalH/2;
    }
    if(layerX == 3){
      x1 = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalO + this.YIntervalO/2;
    }
    if(layerY == 1){
      x2 = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalI + this.YIntervalI/2;
    }
    if(layerY == 2){
      x2 = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalH + this.YIntervalH/2;
    }
    if(layerY == 3){
      x2 = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalO + this.YIntervalO/2;
    }

    stroke(0);
    strokeWeight(abs(weights[i][j]) * 2);
    line(x1,y1,x2,y2);
  }

  getColor(val, output){
    let r = 0;
    let g = 0;
    let b = 0;
    if(output){
      let max = this.getHighestOutput();
      if(val == max){
        r = 0;
        g = 255;
        b = 0;
      } else {
        r = 255;
        g = 0;
        b = 0;
      }
    } else {
      if(val <= .5){
        r = 255;
        g = val * 2 * 255;
        b = 0;
      } else {
        r = (val - .5) * 2 * 255;
        g = 255;
        b = 0;
      }
    }
    let color = [3]
    color[0] = r;
    color[1] = g;
    color[2] = b;
    return color;
  }

  CalcuateYInterval(Height, Size){
    let UsableSpace = Height - 2 * this.YOffset;
    let Interval = UsableSpace / Size;
    return floor(Interval);
  }

  CalcuateXInterval(Width, Size){
    let UsableSpace = Width - 2 * this.XOffset;
    let Interval = UsableSpace / Size;
    return floor(Interval);
  }

  getSize(value){
    value = value * this.SizeMax;
    if(value <= 10) value = this.NodeSizeBias;
    return value;
  }

  getHighestOutput(){
    let max = 0;
    for(let j = 0; j < this.outputSize; j++){
      if(this.output_values[j] >= this.output_values[max]) max = j;
    }
    return this.output_values[max];
  }
}
// let m = new Matrix(3,2);


class Matrix {
constructor(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
}

copy() {
  let m = new Matrix(this.rows, this.cols);
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      m.data[i][j] = this.data[i][j];
    }
  }
  return m;
}

static fromArray(arr) {
  return new Matrix(arr.length, 1).map((e, i) => arr[i]);
}

static subtract(a, b) {
  if (a.rows !== b.rows || a.cols !== b.cols) {
    console.log('Columns and Rows of A must match Columns and Rows of B.');
    return;
  }

  // Return a new Matrix a-b
  return new Matrix(a.rows, a.cols)
    .map((_, i, j) => a.data[i][j] - b.data[i][j]);
}

toArray() {
  let arr = [];
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      arr.push(this.data[i][j]);
    }
  }
  return arr;
}

randomize() {
  return this.map(e => Math.random() * 2 - 1);
}

add(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      console.log('Columns and Rows of A must match Columns and Rows of B.');
      return;
    }
    return this.map((e, i, j) => e + n.data[i][j]);
  } else {
    return this.map(e => e + n);
  }
}

static transpose(matrix) {
  return new Matrix(matrix.cols, matrix.rows)
    .map((_, i, j) => matrix.data[j][i]);
}

static multiply(a, b) {
  // Matrix product
  if (a.cols !== b.rows) {
    console.log('Columns of A must match rows of B.')
    return;
  }

  return new Matrix(a.rows, b.cols)
    .map((e, i, j) => {
      // Dot product of values in col
      let sum = 0;
      for (let k = 0; k < a.cols; k++) {
        sum += a.data[i][k] * b.data[k][j];
      }
      return sum;
    });
}

multiply(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      console.log('Columns and Rows of A must match Columns and Rows of B.');
      return;
    }

    // hadamard product
    return this.map((e, i, j) => e * n.data[i][j]);
  } else {
    // Scalar product
    return this.map(e => e * n);
  }
}

map(func) {
  // Apply a function to every element of matrix
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let val = this.data[i][j];
      this.data[i][j] = func(val, i, j);
    }
  }
  return this;
}

static map(matrix, func) {
  // Apply a function to every element of matrix
  return new Matrix(matrix.rows, matrix.cols)
    .map((e, i, j) => func(matrix.data[i][j], i, j));
}

print() {
  console.table(this.data);
  return this;
}

serialize() {
  return JSON.stringify(this);
}

static deserialize(data) {
  if (typeof data == 'string') {
    data = JSON.parse(data);
  }
  let matrix = new Matrix(data.rows, data.cols);
  matrix.data = data.data;
  return matrix;
}
}

if (typeof module !== 'undefined') {
module.exports = Matrix;
}
`