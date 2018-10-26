var tags = [
  'Featured'
]
// 'Beautiful',
// 'Trees',
// 'Vectors'

var Spotlight = 30;

var programs = [{
    number: 0,
    keyWords: ['development', 'next project'],
    title: '<i>Next Project</i>',
    imgpath: 'Projects/0.Dev/image.jpg',
    filepath: 'Projects/0.Dev/Code/index.html',
    downloadLink: '#',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Welcome to the <i>Dev</i> page! I am constantly adding new projects and thought it might be fun to have a “pre-release” version. Let me know what you think! Warning: This project might be buggy, incomplete, or just plain missing.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 1,
    keyWords: ['sorting', 'javascript', 'visualization', 'p5.js', 'algorithm', 'bubble sort', 'rosetta code', 'coding challenge'],
    title: 'Bubble Sort',
    imgpath: 'Projects/1.BubbleSort/image.PNG',
    filepath: 'Projects/1.BubbleSort/index.html',
    downloadLink: 'Bubble%20Sort%20Visualization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch the <a href=’https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort’>bubble sort algorithm<a> do its magic! Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=67k3I2GxTH8'> Coding Challenge #114: Bubble Sort Visualization.</a><br> <a href=Bubble%20Sort%20Visualization.zip> Download</a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 2,
    keyWords: ['sorting', 'javascript', 'visualization', 'p5.js', 'algorithm', 'count sort', 'rosetta code'],
    title: 'Count Sort',
    imgpath: 'Projects/2.CountSort/image.PNG',
    filepath: 'Projects/2.CountSort/index.html',
    downloadLink: 'Count%20Sort%20Visualization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch the <a href=’https://rosettacode.org/wiki/Sorting_algorithms/Counting_sort’>count  sort algorithm<a> do its magic! Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=67k3I2GxTH8'> Coding Challenge #114: Bubble Sort Visualization.</a><br> <a href=Count%20Sort%20Visualization.zip> Download</a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 3,
    keyWords: ['sorting', 'javascript', 'visualization', 'p5.js', 'algorithm', 'gnome sort', 'rosetta code'],
    title: 'Gnome Sort',
    imgpath: 'Projects/3.GnomeSort/image.PNG',
    filepath: 'Projects/3.GnomeSort/index.html',
    downloadLink: 'Gnome%20Sort%20Visualization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch the <a href=’https://rosettacode.org/wiki/Sorting_algorithms/Gnome_sort’>gnome sort algorithm<a> do its magic! Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=67k3I2GxTH8'> Coding Challenge #114: Bubble Sort Visualization.</a><br> <a href=Gnome%20Sort%20Visualization.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 4,
    keyWords: ['sorting', 'javascript', 'visualization', 'p5.js', 'algorithm', 'insertion sort', 'rosetta code'],
    title: 'Insertion Sort',
    imgpath: 'Projects/4.InsertionSort/image.PNG',
    filepath: 'Projects/4.InsertionSort/index.html',
    downloadLink: 'Insertion%20Sort%20Visualization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch the <a href=’https://rosettacode.org/wiki/Sorting_algorithms/Insertion_sort’>insertion sort algorithm<a> do its magic! Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=67k3I2GxTH8'> Coding Challenge #114: Bubble Sort Visualization.</a><br> <a href=Insertion%20Sort%20Visualization.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 5,
    keyWords: ['javascript', 'visualization', 'math', 'rosetta code', 'babbage problem'],
    title: 'Babbage Problem',
    imgpath: 'Projects/5.BabbageProblem/image.PNG',
    filepath: 'Projects/5.BabbageProblem/index.html',
    downloadLink: 'Babbage-Problem.zip',
    visible: false,
    titleText: "#e5e5e5",
    SpotlightText: "	The <a href=’https://rosettacode.org/wiki/Babbage_problem’>babbage problem<a> finds the first number whose square ends in 269696. <br> <a href=Babbage-Problem.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 6,
    keyWords: ['javascript', 'visualization', 'math', 'rosetta code', 'binary numbers'],
    title: 'Binary Numbers',
    imgpath: 'Projects/6.BinaryNumbers/image.PNG',
    filepath: 'Projects/6.BinaryNumbers/index.html',
    downloadLink: 'BinaryNumbers.zip',
    visible: false,
    titleText: "#e5e5e5",
    SpotlightText: "This is a example of turning <a herf=’https://rosettacode.org/wiki/Binary_digits’> base 10 numbers to binary.  </a> <br> <a href=BinaryNumbers.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 7,
    keyWords: ['javascript', 'cryptography', 'console', 'rosetta code', 'caesar cipher'],
    title: 'Caesar Cipher',
    imgpath: 'Projects/7.CaesarCipher/image.PNG',
    filepath: 'Projects/7.CaesarCipher/index.html',
    downloadLink: 'Caesar-Cipher.zip',
    visible: false,
    titleText: "#e5e5e5",
    SpotlightText: "Encrypt alpha text with a <a herf=’https://www.rosettacode.org/wiki/Caesar_cipher’> Caesar cipher. </a href=Caesar-Cipher.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 8,
    keyWords: ['javascript', 'cryptography', 'console', 'rosetta code', 'rot-13 cipher'],
    title: 'Rot-13 Cipher',
    imgpath: 'Projects/8.Rot13/image.PNG',
    filepath: 'Projects/8.Rot13/index.html',
    downloadLink: 'Rot-13.zip',
    visible: false,
    titleText: "#e5e5e5",
    SpotlightText: "Encrypt alpha text with a <a herf=’https://rosettacode.org/wiki/Rot-13’> Rot-13 cipher. </a href=Rot-13.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 9,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'starfield', 'space'],
    title: 'Starfield',
    imgpath: 'Projects/9.Starfield/image.PNG',
    filepath: 'Projects/9.Starfield/index.html',
    downloadLink: 'Starfield.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Fly through space at warp speed! Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=17WoOqgXsRM'> Coding Challenge #1: Starfield in Processing.</a><br> <a href=Starfield.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 10,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'snake', 'game', 'retro', 'arcade', 'simple'],
    title: 'Snake',
    imgpath: 'Projects/10.SnakeGame/image.PNG',
    filepath: 'Projects/10.SnakeGame/index.html',
    downloadLink: 'SnakeGame.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Play the retro arcade game - Snake. Use the <b>arrow keys</b> to control the snake. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=AaGK-fj-BAM'> Coding Challenge #3: The Snake Game. </a><br> <a href=SnakeGame.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 11,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'purple rain', 'beautiful', 'calming'],
    title: 'Purple Rain',
    imgpath: 'Projects/11.PurpleRain/image.PNG',
    filepath: 'Projects/11.PurpleRain/index.html',
    downloadLink: 'PurpleRain.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch the rain fall down:) Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=KkyIDI6rQJI'> Coding Challenge #4: Purple Rain in Processing </a><br> <a href=PurpleRain.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 12,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'game', 'space invaders', 'retro', 'arcade', 'simple'],
    title: 'Space Invaders',
    imgpath: 'Projects/12.SpaceInvaders/image.PNG',
    filepath: 'Projects/12.SpaceInvaders/index.html',
    downloadLink: 'SpaceInvaders.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Play the retro arcade game - Space Invaders. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=biN3v3ef-Y0'> Coding Challenge #5: Space Invaders in JavaScript with p5.js </a><br> <a href=SpaceInvaders.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 13,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'solar system'],
    title: 'Solar System',
    imgpath: 'Projects/13.SolarSystem/image.PNG',
    filepath: 'Projects/13.SolarSystem/index.html',
    downloadLink: 'SolarSystem.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Just a small galaxy, far far away:) Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=l8SiJ-RmeHU'> Coding Challenge #7: Solar System in Processing - Part 1 (2D) </a><br> <a href=SolarSystem.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 14,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'maze generator',
      'algorithm', 'fun', 'recursive', 'recursion'
    ],
    title: 'Maze Generator',
    imgpath: 'Projects/14.MazeGenerator/image.PNG',
    filepath: 'Projects/14.MazeGenerator/index.html',
    downloadLink: 'MazeGenerator.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch AI walk through a grid and generate a maze! Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=HyK_Q5rrcr4'> Coding Challenge #10.1: Maze Generator with p5.js - Part 1 </a><br> <a href=MazeGenerator.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 15,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'algorithm', 'rda'],
    title: 'RDA!',
    imgpath: 'Projects/15.ReactionDiffusion/image.PNG',
    filepath: 'Projects/15.ReactionDiffusion/index.html',
    downloadLink: 'ReactionDiffusionAlg.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "This is the reaction diffusion algorithm. Watch these two chemicals react with each other. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=BV9ny785UNc'> Coding Challenge #13: Reaction Diffusion Algorithm in p5.js </a><br> <a href=ReactionDiffusionAlg.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 16,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'fractal tree',
      'algorithm', 'fun', 'recursive', 'recursion', 'beautiful', 'featured', 'colorful', 'trees'
    ],
    title: 'Fractal Tree - Recursive',
    imgpath: 'Projects/16.FractalTrees/image.PNG',
    filepath: 'Projects/16.FractalTrees/index.html',
    downloadLink: 'FractalTree.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "This is a fractal Tree. It is beautiful, it is lovely, and it's generated using recursion. For more about recursion see <a href='../17.FunFractalTrees/index.html'> <i>Fun Fractal Trees!</i> </a> Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=0jjeOYMjmDU'> Coding Challenge #14: Fractal Trees - Recursive </a><br> <a href=FractalTree.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 17,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'fractal tree',
      'algorithm', 'fun', 'recursive', 'recursion', 'beautiful', 'bug', 'fun fractal trees', 'trees'
    ],
    title: 'Fun Fractal Trees',
    imgpath: 'Projects/17.FunFractalTrees/image.PNG',
    filepath: 'Projects/17.FunFractalTrees/index.html',
    downloadLink: 'FFT.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "This is a fractal Tree. It is beautiful, it is lovely, and it's generated using recursion. For more about recursion see <a href='../16.FractalTrees/index.html'> <i>Fractal Tree!</i> </a> Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=0jjeOYMjmDU'> Coding Challenge #14: Fractal Trees - Recursive </a><br> <a href=FFT.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"

  },
  {
    number: 18,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'fractal tree',
      'algorithm', 'fun', 'recursive', 'recursion', 'beautiful', 'bug', 'oop fractal trees', 'trees'
    ],
    title: 'OOP Fractal Trees',
    imgpath: 'Projects/18.OOPFractalTrees/image.PNG',
    filepath: 'Projects/18.OOPFractalTrees/index.html',
    downloadLink: 'OOPFT.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "These are fractal Trees. They are beautiful, They are lovely, and some might need some extra love:P Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=fcdNSZ9IzJM'> Coding Challenge #15: Fractal Trees - Object Oriented </a><br> <a href=OOPFT.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 19,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'l-system', 'l system', 'example', 'l-system example', 'plant', 'trees', 'sentence'
    ],
    title: 'L-System Example',
    imgpath: 'Projects/19.L-System-Example/image.PNG',
    filepath: 'Projects/19.L-System-Example/index.html',
    downloadLink: 'L-System-Example.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "This is an example of an L-System. An L-System starts with an 'axiom,' usually a single letter, and expands from there based on a set of rules. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=E1B4UoSQMFw'> Coding Challenge #16: Fractal Trees - L-System </a><br> <a href=L-System-Example.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 20,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'l-system', 'l system', 'fractal plant', 'l-system fractal plant', 'plant', 'trees', 'sentence', 'featured'
    ],
    title: 'L-System Fractal Plant',
    imgpath: 'Projects/20.L-System-Fractal-Plant/image.PNG',
    filepath: 'Projects/20.L-System-Fractal-Plant/index.html',
    downloadLink: 'L-System-Fractal-Plant.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "This is an example of an L-System. An L-System starts with an 'axiom,' usually a single letter, and expands from there based on a set of rules. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=E1B4UoSQMFw'> Coding Challenge #16: Fractal Trees - L-System </a><br> <a href=L-System-Fractal-Plant.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 21,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'l-system', 'l system', 'l-system binary tree', 'plant', 'trees', 'sentence'
    ],
    title: 'L-System Binary Tree',
    imgpath: 'Projects/21.L-System-Binary-Tree/image.PNG',
    filepath: 'Projects/21.L-System-Binary-Tree/index.html',
    downloadLink: 'L-System-Binary-Tree.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "This is an example of an L-System. An L-System starts with an 'axiom,' usually a single letter, and expands from there based on a set of rules. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=E1B4UoSQMFw'> Coding Challenge #16: Fractal Trees - L-System </a><br> <a href=L-System-Binary-Tree.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 22,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'plant', 'trees', 'interactive', 'vectors', 'space colonization'
    ],
    title: 'Space Colonization',
    imgpath: 'Projects/22.SpaceColonization/image.PNG',
    filepath: 'Projects/22.SpaceColonization/index.html',
    downloadLink: 'SpaceColonization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Space colonization is all about a tree growing to meet it's roots. Click on the canvas to add new leaves. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=kKT0v3qhIQY'> Coding Challenge #17: Fractal Trees - Space Colonization </a><br> <a href=SpaceColonization.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"

  },
  {
    number: 23,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'math', 'cool', 'imaginary', 'numbers', 'mendelbrot set', 'julia set', 'sets'
    ],
    title: 'Mendelbrot Set',
    imgpath: 'Projects/23.MandelbrotSet/image.PNG',
    filepath: 'Projects/23.MandelbrotSet/index.html',
    downloadLink: 'MendelbrotSet.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Ever wonder what imaginary numbers look like? Well they are more beautiful than you could ever imagine;) Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=6z7GQewK-Ks'> Coding Challenge #21: Mandelbrot Set with p5.js </a><br> <a href=MendelbrotSet.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"

  },
  {
    number: 24,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'math', 'cool', 'imaginary', 'numbers', 'mendelbrot set', 'julia set', 'sets'
    ],
    title: 'Julia Sets',
    imgpath: 'Projects/24.JuliaSets/image.PNG',
    filepath: 'Projects/24.JuliaSets/index.html',
    downloadLink: 'JuliaSets.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Ever wonder what imaginary numbers look like? Well they are more beautiful than you could ever imagine;) Now lets ZOOM in to the Mandelbrot Set. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=fAsaSkmbF5s'> Coding Challenge #22: Julia Set in Processing </a><br> <a href=JuliaSets.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"

  },
  {
    number: 25,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'math', 'cool', 'phyllotaxis', 'algorithmic', 'botany', 'algorithmic botany', 'plant', 'colorful',
      'beautiful', 'real world'
    ],
    title: 'Phyllotaxis',
    imgpath: 'Projects/25.Phyllotaxis/image.PNG',
    filepath: 'Projects/25.Phyllotaxis/index.html',
    downloadLink: 'Phyllotaxis.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Nature is beautiful. This is an example of algorithmic botany. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=KWoJgHFYWxY'> Coding Challenge #30: Phyllotaxis </a><br> <a href=Phyllotaxis.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 26,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'fireworks', 'colorful', 'beautiful', 'particals', 'vectors', 'physics'
    ],
    title: 'Fireworks',
    imgpath: 'Projects/26.Fireworks/image.PNG',
    filepath: 'Projects/26.Fireworks/index.html',
    downloadLink: 'fireworks.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch some cool partical effects brighten up the... Screen:P Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=CKeyIbT3vXI'> Coding Challenge #27: Fireworks! </a><br> <a href=fireworks.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 27,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'rockets', 'colorful', 'smart', 'particals', 'vectors', 'physics', 'smart rockets',
      'evolution', 'nature of code', 'dna', 'featured'
    ],
    title: 'Smart Rockets',
    imgpath: 'Projects/27.SmartRockets/image.PNG',
    filepath: 'Projects/27.SmartRockets/index.html',
    downloadLink: 'SmartRockets.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "These rockets will evolve to hit a target. Watch as their DNA changes and the score better over time. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=bGz7mv2vD6g'> Coding Challenge #29: Smart Rockets in p5.js </a><br> <a href=SmartRockets.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 28,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'algorithm', 'tsm', 'traveling salesman', 'famous'
    ],
    title: 'Traveling Salesman',
    imgpath: 'Projects/28.TSMP/image.PNG',
    filepath: 'Projects/28.TSMP/index.html',
    downloadLink: 'TSMP.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "The traveling salesman needs to visit each city along the route in the shortest distance possible. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=BAejnwN4Ccw'> Coding Challenge #35.1: Traveling Salesperson </a><br> <a href=TSMP.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 29,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'sorting', 'pixel sorting', 'fun', 'm&ms'
    ],
    title: 'Pixel Sorting!',
    imgpath: 'Projects/29.PixelSorting/image.PNG',
    filepath: 'Projects/29.PixelSorting/index.html',
    downloadLink: 'PixelSorting.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Sort an image's pixels from brightest to darkest. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=JUDYkxU6J0o'> Coding Challenge #47: Pixel Sorting in Processing </a><br> <a href=PixelSorting.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 30,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'beautiful', 'colorful', 'circle packing', 'fun', 'physics', 'vectors', 'featured'
    ],
    title: 'Circle Packing',
    imgpath: 'Projects/30.CirclePacking/image.PNG',
    filepath: 'Projects/30.CirclePacking/index.html',
    downloadLink: 'CirclePacking.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "This colorful \'M\' is an example of a process called" +
      "<a href='https://en.wikipedia.org/wiki/Circle_packing'> circle packing.</a> <br>" +
      "A black and white image is processed and all black pixels are marked as possible circle locations." +
      "A set number of circles try to spawn and grow each frame." +
      "Some fail because they randomly choose a position that is already occupied by another circle." +
      "Circles stop growing once they have touched another circle (After considering a buffer)." +
      "Inspired by Daniel Shiffman\'s coding challange - <a href='https://www.youtube.com/watch?v=QHEQuoIKgNE'> Coding Challenge #50.1: Animated Circle Packing.</a>"
  },
  {
    number: 31,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'beautiful', 'colorful', 'noise trees', 'fun', 'perlin noise', 'perlin', 'trees', 'fractal',
      'wind', 'fractal trees'
    ],
    title: 'Noise Trees',
    imgpath: 'Projects/31.NoiseTrees/image.PNG',
    filepath: 'Projects/31.NoiseTrees/index.html',
    downloadLink: 'NoiseTrees.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch some perlin noise wind blow this fractal tree around. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=0jjeOYMjmDU'> Coding Challenge #14: Fractal Trees - Recursive </a><br> <a href=NoiseTrees.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 32,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'maze', 'path finding', 'a*', 'game', 'animation', 'search algorithm', 'algorithm', 'featured'
    ],
    title: 'A*',
    imgpath: 'Projects/32.AStar/image.PNG',
    filepath: 'Projects/32.AStar/index.html',
    downloadLink: 'AStar.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Watch the A* algorithm navigate through a maze. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=aKYlikFAV4k'> Coding Challenge 51.1: A* Pathfinding Algorithm - Part 1 </a><br> <a href=AStar.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 33,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'maze', 'path finding', 'a*', 'game', 'animation', 'search algorithm', 'algorithm',
      'maze generation', 'combination', 'a* maze', 'featured'
    ],
    title: 'A* Maze!',
    imgpath: 'Projects/33.AStarMaze/image.PNG',
    filepath: 'Projects/33.AStarMaze/index.html',
    downloadLink: 'AStarMaze.zip',
    visible: true,
    titleText: '#e5e5e5',
    SpotlightText: "Watch the A* algorithm navigate through a maze that has been randomly generated. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=aKYlikFAV4k'> Coding Challenge 51.1: A* Pathfinding Algorithm - Part 1 </a><br> <a href=AStarMaze.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 34,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'physics', 'particle', 'example partical system', 'vectors'
    ],
    title: 'Example Partical System',
    imgpath: 'Projects/34.ParticalExample/image.PNG',
    filepath: 'Projects/34.ParticalExample/index.html',
    downloadLink: 'ParticalExample.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Simple partical system all flowing to the center. Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=UcdigVaIYAk'> Coding Challenge #78: Simple Particle System </a><br> <a href=ParticalExample.zip> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  }
]