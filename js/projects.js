if (debug) {
  console.log("projects.js");
}
projectPage = true;

let projects = [{
    title: "{Central Scroll}",
    text: "Central Scroll was developed as a screen saver and timer for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Central Scroll lets students show off their work to peers by passively scrolling through the code with beautiful syntax highlighting.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Central-Scroll/",
    githubLink: "https://github.com/mm909/Central-Scroll",
    keyWords: ['Google Prettify', 'Paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'file upload', 'user input', 'in use', 'deployed', 'prettyprint'],
  },
  {
    title: "Web Development 1",
    text: "Web Development 1 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD1/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD1",
    keyWords: ['Google Prettify', 'free', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching']
  },
  {
    title: "Web Development 2",
    text: "Web Development 2 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD2/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD2",
    keyWords: ['Google Prettify', 'paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching', 'dynamic TOC', 'scripts']
  },
  {
    title: "Web Development 3",
    text: "Web Development 3 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD3/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD3",
    keyWords: ['Google Prettify', 'paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching', 'dynamic TOC', 'scripts', 'php', 'sql']
  },
  {
    title: "Web Development 4",
    text: "Web Development 4 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD4/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD4",
    keyWords: ['Google Prettify', 'paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching', 'dynamic TOC', 'scripts', 'php', 'sql']
  },
  {
    title: "HTML Calc Lesson",
    text: "HTML Calc Lesson lesson was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> This was based off of <a href='https://mm909.github.io/SpeedCodeHTMLCalc/'><u>SpeedCode: HTML Calc</u></a> ",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/HTMLCalc/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/HTMLCalc",
    keyWords: ['Google Prettify', 'paid', 'MyCodeCentral', 'jquery', 'bootstrap', 'prettify.js', 'in use', 'deployed', 'prettyprint', 'curriculum', 'teaching']
  },
  {
    title: "Circle Packing M v2",
    text: "Circle Packing M v2 was built off of <a href='#'><u>Circle Packing M v1</u></a> for usage in this website. Version two is highly optimized: cutting down on storage used and calculations each frame.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/CirclePackingM-v2/",
    githubLink: "https://github.com/mm909/CirclePackingM-v2",
    keyWords: ['fun', 'in use', 'version 2', 'p5.js', 'optimized', 'colorful', 'beautiful', 'interactive', 'distance']
  },
  {
    title: "Flappy Bird NNV",
    text: "A great example of a neural network and genetic algorithm working together. While birds learn how to play flappy bird you can watch their brain evolve and play the level. <b> Check it out! </b>",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Flappy-Bird-NNV/",
    githubLink: "https://github.com/mm909/Flappy-Bird-NNV",
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
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/text-to-html/",
    githubLink: "https://github.com/mm909/text-to-html",
    keyWords: []
  },
  {
    title: "Circle Packing M v1",
    text: "Original circle packing program - Created with p5.js. This program uses a picture of an M to get valid places for circles to grow. Circles are colored randomly and move with a some simple physics.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/CirclePackingM-v1/",
    githubLink: "https://github.com/mm909/CirclePackingM-v1",
    keyWords: []
  },
  {
    title: "A* Maze",
    text: "A maze is generated using a general maze generation algorithm then it is solved using the A* path finding algorithm.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/AStarMaze/",
    githubLink: "https://github.com/mm909/AStarMaze",
    keyWords: []
  },
  {
    title: "Smart Rockets",
    text: "Using a genetic algorithm, smart rockets evolve to hit a target. This is a great example of how to model DNA as a set of instructions (vectors).",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Smart-Rockets/",
    githubLink: "https://github.com/mm909/Smart-Rockets",
    keyWords: []
  },
  {
    title: "SpeedCode: HTML Calc",
    text: "Super simple HTML calculator designed to be a coding challenge for students at Code Central. The code is under 100 lines with JS and CSS included. It is a really good application of JS and CSS for those looking for a project!",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/SpeedCodeHTMLCalc/",
    githubLink: "https://github.com/mm909/SpeedCodeHTMLCalc",
    keyWords: ["calculator"]
  },
  {
    title: "Connect.js",
    text: "Just for fun p5.js sketch adapted from <a href='https://github.com/Abhi10699'><u>Abhi Patel</u></a> I highly suggest you download the code and play around with it your self:)",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Connect/",
    githubLink: "https://github.com/mm909/Connect",
    keyWords: []
  },
  {
    title: "Library Examples",
    text: "Simple background to show students what typed.js, countup.js, and particles.js and do.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/lib-examples/",
    githubLink: "https://github.com/mm909/lib-examples",
    keyWords: []
  },
  {
    title: "Snow Library Examples",
    text: "Simple December themed background to show students what typed.js, countup.js, and particles.js and do.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/snow/",
    githubLink: "https://github.com/mm909/snow",
    keyWords: []
  },
  {
    title: "Typed.js Examples",
    text: "Simple background to show students what typed.js and do.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/typed.js/",
    githubLink: "https://github.com/mm909/typed.js",
    keyWords: []
  },
  {
    title: "Fractal Trees",
    text: "A fun project using some recursion and just a little bit of math.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/FractalTrees/",
    githubLink: "https://github.com/mm909/FractalTrees",
    keyWords: []
  },
  {
    title: "Wiki Bacon",
    text: "Basic web scraping using the Wiki API. The application will take in a key word, find a wiki page associated with that key word then find the most used word on that page and repeat the process.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Wiki-Bacon/",
    githubLink: "https://github.com/mm909/Wiki-Bacon",
    keyWords: []
  }
]
