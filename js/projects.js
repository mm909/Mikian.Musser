if (debug) {
  console.log("projects.js");
}
projectPage = true;

let projects = [
  {
    title: "MikianMusser.com",
    text: "I used this project to learn how to use HTML/CSS/JS and to create a portfolio website to display future projects.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Mikian.Musser",
    githubLink: "https://github.com/mm909/Mikian.Musser",
    keyWords: ['sass']
  },
  {
    title: "{Central Scroll}",
    text: "Central Scroll was developed as a screen saver and timer for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Central Scroll lets students show off their work to peers by passively scrolling through the code with beautiful syntax highlighting.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Central-Scroll/",
    githubLink: "https://github.com/mm909/Central-Scroll",
    keyWords: ['Google Prettify', 'Paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'file upload', 'user input', 'in use', 'deployed', 'prettyprint'],
  },
  {
    title: "CCC",
    text: "Code Central Curriculum (CCC) is a CSS and JS library designed to help instructors at <a href='https://github.com/Code-Central'> @Code-Central </a> create curriculum as fast a possible. <a href='https://github.com/victortaksheyev'> @victortaksheyev </a>",
    live: "liveButton",
    liveLink: "https://mm909.github.io/CCC/",
    githubLink: "https://github.com/mm909/CCC",
    keyWords: ['sass']
  },
  {
    title: "Web Development 1",
    text: "Web Development 1 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD1/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD1",
    keyWords: ['Google Prettify', 'free', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching']
  },
  {
    title: "Web Development 2",
    text: "Web Development 2 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD2/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD2",
    keyWords: ['Google Prettify', 'paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching', 'dynamic TOC', 'scripts']
  },
  {
    title: "Web Development 3",
    text: "Web Development 3 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD3/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD3",
    keyWords: ['Google Prettify', 'paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching', 'dynamic TOC', 'scripts', 'php', 'sql']
  },
  {
    title: "Web Development 4",
    text: "Web Development 4 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD4/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD4",
    keyWords: ['Google Prettify', 'paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching', 'dynamic TOC', 'scripts', 'php', 'sql']
  },
  {
    title: "HTML Calc Lesson",
    text: "HTML Calc Lesson lesson was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> This was based off of <a href='https://mm909.github.io/SpeedCodeHTMLCalc/'><u>SpeedCode: HTML Calc</u></a> ",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/HTMLCalc/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/HTMLCalc",
    keyWords: ['Google Prettify', 'paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching']
  },
  {
    title: "Circle Packing M v2",
    text: "Circle Packing M v2 was built off of <a href='#'><u>Circle Packing M v1</u></a> for usage in this website. Version two is highly optimized: cutting down on storage used and calculations each frame.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/CirclePackingM-v2/",
    githubLink: "https://github.com/mm909/CirclePackingM-v2",
    keyWords: ['fun', 'in use', 'version 2', 'p5.js', 'optimized', 'colorful', 'beautiful', 'interactive', 'distance', 'awesome']
  },
  {
    title: "Flappy Bird NNV",
    text: "A great example of a neural network and genetic algorithm working together. While birds learn how to play flappy bird you can watch their brain evolve and play the level. <b> Check it out! </b>",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Flappy-Bird-NNV/",
    githubLink: "https://github.com/mm909/Flappy-Bird-NNV",
    keyWords: ['awesome']
  },
  {
    title: "OS Project 4",
    text: "Project 4 is a standard exmample of reading in a large file into main memeory and searching it for a string.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/CS370-Project4",
    keyWords: []
  },
  {
    title: "OS Project 3",
    text: "Project 3 is an example of using client and server threads to buy and sell tickets. Assuming a high client load we can use locks and CV's to give accurate prices and guarantee a ticket if a price quote is sent to client.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/CS370-Project3",
    keyWords: []
  },
  {
    title: "OS Project 2",
    text: "Project 2 is an example of an application logging system. I/O is extremely expensive so using an Ring Buffer and smart threads we can seamlessly log details about errors/updates/performance in the background without any interruption.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/CS370-Project2",
    keyWords: []
  },
  {
    title: "OS Project 1",
    text: "Project 1 is all about low level system calls. First part compiles a helloWorld.c file to the smallest possible binary file. Second several syscalls are measured for how they impact preformance.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/CS370-Project1",
    keyWords: []
  },
  {
    title: "Text-To-HTML",
    text: "Simple Text to HTML converter. Designed to be the starting point for more interactive lesson plans in the future.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/text-to-html/",
    githubLink: "https://github.com/mm909/text-to-html",
    keyWords: []
  },
  {
    title: "Circle Packing M v1",
    text: "Original circle packing program - Created with p5.js. This program uses a picture of an M to get valid places for circles to grow. Circles are colored randomly and move with a some simple physics.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/CirclePackingM-v1/",
    githubLink: "https://github.com/mm909/CirclePackingM-v1",
    keyWords: ['awesome']
  },
  {
    title: "A* Maze",
    text: "A maze is generated using a general maze generation algorithm then it is solved using the A* path finding algorithm.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/AStarMaze/",
    githubLink: "https://github.com/mm909/AStarMaze",
    keyWords: []
  },
  {
    title: "Smart Rockets",
    text: "Using a genetic algorithm, smart rockets evolve to hit a target. This is a great example of how to model DNA as a set of instructions (vectors).",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Smart-Rockets/",
    githubLink: "https://github.com/mm909/Smart-Rockets",
    keyWords: ['awesome']
  },
  {
    title: "SpeedCode: HTML Calc",
    text: "Super simple HTML calculator designed to be a coding challenge for students at Code Central. The code is under 100 lines with JS and CSS included. It is a really good application of JS and CSS for those looking for a project!",
    live: "liveButton",
    liveLink: "https://mm909.github.io/SpeedCodeHTMLCalc/",
    githubLink: "https://github.com/mm909/SpeedCodeHTMLCalc",
    keyWords: ["calculator"]
  },
  {
    title: "Connect.js",
    text: "Just for fun p5.js sketch adapted from <a href='https://github.com/Abhi10699'><u>Abhi Patel</u></a> I highly suggest you download the code and play around with it your self:)",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Connect/",
    githubLink: "https://github.com/mm909/Connect",
    keyWords: []
  },
  {
    title: "Library Examples",
    text: "Simple background to show students what typed.js, countup.js, and particles.js and do.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/lib-examples/",
    githubLink: "https://github.com/mm909/lib-examples",
    keyWords: []
  },
  {
    title: "Snow Library Examples",
    text: "Simple December themed background to show students what typed.js, countup.js, and particles.js and do.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/snow/",
    githubLink: "https://github.com/mm909/snow",
    keyWords: []
  },
  {
    title: "Typed.js Examples",
    text: "Simple background to show students what typed.js and do.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/typed.js/",
    githubLink: "https://github.com/mm909/typed.js",
    keyWords: []
  },
  {
    title: "Fractal Trees",
    text: "A fun project using some recursion and just a little bit of math.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/FractalTrees/",
    githubLink: "https://github.com/mm909/FractalTrees",
    keyWords: []
  },
  {
    title: "Wiki Bacon",
    text: "Basic web scraping using the Wiki API. The application will take in a key word, find a wiki page associated with that key word then find the most used word on that page and repeat the process.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Wiki-Bacon/",
    githubLink: "https://github.com/mm909/Wiki-Bacon",
    keyWords: []
  },
  {
    title: "Count Atoms - (LISP)",
    text: "This function written in lisp will count the number of atoms in any list, in lisp. Complete with error checking and support lists with more than one level this funciton can count all the atoms you want.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/Count-Atoms-LISP",
    keyWords: []
  },
  {
    title: "Example Function - (LISP)",
    text: "Several different function writen in lisp to practice Cambridge polish and the lisp syntax.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/ExampleCode-LISP",
    keyWords: []
  },
  {
    title: "Text Steering Behaviors",
    text: "Example usage of the p5.js function textToPoints()",
    live: "liveButton",
    liveLink: "https://mm909.github.io/textSteeringBehaviors/",
    githubLink: "https://github.com/mm909/textSteeringBehaviors",
    keyWords: []
  },
  {
    title: "Text Steering Behaviors v2",
    text: "Added several features to this example usage of the p5.js function textToPoints() that will make is usable for production.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/textSteeringBehaviors2/",
    githubLink: "https://github.com/mm909/textSteeringBehaviors2",
    keyWords: []
  },
  {
    title: "Winter Camp Project",
    text: "Created a simple website that students will replicate during Code-Central's winter camps.",
    live: "liveButton",
    liveLink: "https://mm909.github.io/Winter-Camp-Project/",
    githubLink: "https://github.com/mm909/Winter-Camp-Project",
    keyWords: []
  }
]
