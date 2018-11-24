if (debug) {
  console.log("projects.js");
}
projectPage = true;

let projects = [{
    title: "{Central Scroll}",
    text: "Central Scroll was developed as a screen saver and timer for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Central Scroll lets students show off their work to peers by passively scrolling through the code with beautiful syntax highlighting.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Central-Scroll/",
    githubLink: "https://github.com/mm909/Central-Scroll"
  },
  {
    title: "Web Development 1",
    text: "Web Development 1 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD1/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD1"
  },
  {
    title: "Web Development 2",
    text: "Web Development 2 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD2/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD2"
  },
  {
    title: "Web Development 3",
    text: "Web Development 3 was developed as a curriculum tool for <a href='https://mycodecentral.com/'><u>Code Central.</u></a> Information was converted from a PDF and displayed using a much more interactive and updatable medium.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Teaching/CCProjects/WD3/index.html",
    githubLink: "https://github.com/mm909/Teaching/tree/master/CCProjects/WD3"
  },
  {
    title: "Circle Packing M v2",
    text: "Circle Packing M v2 was built off of <a href='#'><u>Circle Packing M v1</u></a> for usage in this website. Version two is highly optimized: cutting down on storage used and calculations each frame.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/CirclePackingM-v2/",
    githubLink: "https://github.com/mm909/CirclePackingM-v2"
  },
  {
    title: "Flappy Bird NNV",
    text: "A great example of a nerual network and genetic algrithum working together. While birds learn how to play flappy bird you can watch their brain evolve and play the level. <b> Check it out! </b>",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/Flappy-Bird-NNV/",
    githubLink: "https://github.com/mm909/Flappy-Bird-NNV"
  },
  {
    title: "OS Project 3",
    text: "Project 3 is an example of using client and server threads to buy and sell tickets. Assuming a high client load we can use locks and CV's to give accurate prices and guarantee a ticket if a price quote is sent to client.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/CS370-Project3"
  },
  {
    title: "OS Project 2",
    text: "Project 2 is an example of an application logging system. I/O is extremely expensive so using an Ring Buffer and smart threads we can seamlessly log details about errors/updates/performance in the background without any interruption.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/CS370-Project2"
  },
  {
    title: "OS Project 1",
    text: "Project 1 is all about low level system calls. First part compiles a helloWorld.c file to the smallest possible binary file. Second several syscalls are measured for how they impact preformance.",
    live: "notLive",
    liveLink: "#",
    githubLink: "https://github.com/mm909/CS370-Project1"
  },
  {
    title: "Text-To-HTML",
    text: "Simple Text to HTML converter. Designed to be the starting point for more interactive lesson plans in the future.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/text-to-html/",
    githubLink: "https://github.com/mm909/text-to-html"
  },
  {
    title: "Circle Packing M v1",
    text: "Original circle packing program - Created with p5.js. This program uses a picture of an M to get valid places for circles to grow. Circles are colored randomly and move with a some simple physics.",
    live: "genLiveButton",
    liveLink: "https://mm909.github.io/CirclePackingM-v1/",
    githubLink: "https://github.com/mm909/CirclePackingM-v1"
  }
]