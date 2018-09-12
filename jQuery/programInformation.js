var tags = [
  'Featured',
  'Beautiful',
  'Trees',
  'Vectors'
]

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
    imgpath: 'Projects/1.BubbleSort/image.png',
    filepath: 'Projects/1.BubbleSort/index.html',
    downloadLink: 'Bubble%20Sort%20Visualization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "	Watch the <a href=’https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort’>bubble sort algorithm<a> do its magic! Inspired by Daniel Shiffman\'s coding challenge - <a href='https://www.youtube.com/watch?v=67k3I2GxTH8'> Coding Challenge #114: Bubble Sort Visualization.</a><br> <a href=’Bubble%20Sort%20Visualization.zip’> Download </a> the code.<br> Find me on <a href=https://github.com/mm909/Mikian-Musser-Interview/tree/master/Projects> GitHub </a>"
  },
  {
    number: 2,
    keyWords: ['sorting', 'javascript', 'visualization', 'p5.js', 'algorithm', 'count sort', 'rosetta code'],
    title: 'Count Sort',
    imgpath: 'Projects/2.CountSort/image.png',
    filepath: 'Projects/2.CountSort/index.html',
    downloadLink: 'Count%20Sort%20Visualization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 3,
    keyWords: ['sorting', 'javascript', 'visualization', 'p5.js', 'algorithm', 'gnome sort', 'rosetta code'],
    title: 'Gnome Sort',
    imgpath: 'Projects/3.GnomeSort/image.png',
    filepath: 'Projects/3.GnomeSort/index.html',
    downloadLink: 'Gnome%20Sort%20Visualization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 4,
    keyWords: ['sorting', 'javascript', 'visualization', 'p5.js', 'algorithm', 'insertion sort', 'rosetta code'],
    title: 'Insertion Sort',
    imgpath: 'Projects/4.InsertionSort/image.png',
    filepath: 'Projects/4.InsertionSort/index.html',
    downloadLink: 'Insertion%20Sort%20Visualization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 5,
    keyWords: ['javascript', 'visualization', 'math', 'rosetta code', 'babbage problem'],
    title: 'Babbage Problem',
    imgpath: 'Projects/5.BabbageProblem/image.png',
    filepath: 'Projects/5.BabbageProblem/index.html',
    downloadLink: 'Babbage-Problem.zip',
    visible: false,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 6,
    keyWords: ['javascript', 'visualization', 'math', 'rosetta code', 'binary numbers'],
    title: 'Binary Numbers',
    imgpath: 'Projects/6.BinaryNumbers/image.png',
    filepath: 'Projects/6.BinaryNumbers/index.html',
    downloadLink: 'BinaryNumbers.zip',
    visible: false,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 7,
    keyWords: ['javascript', 'cryptography', 'console', 'rosetta code', 'caesar cipher'],
    title: 'Caesar Cipher',
    imgpath: 'Projects/7.CaesarCipher/image.png',
    filepath: 'Projects/7.CaesarCipher/index.html',
    downloadLink: 'Caesar-Cipher.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 8,
    keyWords: ['javascript', 'cryptography', 'console', 'rosetta code', 'rot-13 cipher'],
    title: 'Rot-13 Cipher',
    imgpath: 'Projects/8.Rot13/image.png',
    filepath: 'Projects/8.Rot13/index.html',
    downloadLink: 'Rot-13.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 9,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'starfield', 'space'],
    title: 'Starfield',
    imgpath: 'Projects/9.Starfield/image.png',
    filepath: 'Projects/9.Starfield/index.html',
    downloadLink: 'Starfield.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 10,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'snake', 'game', 'retro', 'arcade', 'simple'],
    title: 'Snake',
    imgpath: 'Projects/10.SnakeGame/image.png',
    filepath: 'Projects/10.SnakeGame/index.html',
    downloadLink: 'SnakeGame.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 11,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'purple rain', 'beautiful', 'calming'],
    title: 'Purple Rain',
    imgpath: 'Projects/11.PurpleRain/image.png',
    filepath: 'Projects/11.PurpleRain/index.html',
    downloadLink: 'PurpleRain.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 12,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'game', 'space invaders', 'retro', 'arcade', 'simple'],
    title: 'Space Invaders',
    imgpath: 'Projects/12.SpaceInvaders/image.png',
    filepath: 'Projects/12.SpaceInvaders/index.html',
    downloadLink: 'SpaceInvaders.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 13,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'solar system'],
    title: 'Solar System',
    imgpath: 'Projects/13.SolarSystem/image.png',
    filepath: 'Projects/13.SolarSystem/index.html',
    downloadLink: 'SolarSystem.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 14,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'maze generator',
      'algorithm', 'fun', 'recursive', 'recursion'
    ],
    title: 'Maze Generator',
    imgpath: 'Projects/14.MazeGenerator/image.png',
    filepath: 'Projects/14.MazeGenerator/index.html',
    downloadLink: 'MazeGenerator.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 15,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'algorithm', 'rda'],
    title: 'RDA!',
    imgpath: 'Projects/15.ReactionDiffusion/image.png',
    filepath: 'Projects/15.ReactionDiffusion/index.html',
    downloadLink: 'ReactionDiffusionAlg.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 16,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'fractal tree',
      'algorithm', 'fun', 'recursive', 'recursion', 'beautiful', 'featured', 'colorful', 'trees'
    ],
    title: 'Fractal Tree - Recursive',
    imgpath: 'Projects/16.FractalTrees/image.png',
    filepath: 'Projects/16.FractalTrees/index.html',
    downloadLink: 'FractalTree.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 17,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'fractal tree',
      'algorithm', 'fun', 'recursive', 'recursion', 'beautiful', 'bug', 'fun fractal trees', 'trees'
    ],
    title: 'Fun Fractal Trees',
    imgpath: 'Projects/17.FunFractalTrees/image.png',
    filepath: 'Projects/17.FunFractalTrees/index.html',
    downloadLink: 'FFT.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 18,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train', 'fractal tree',
      'algorithm', 'fun', 'recursive', 'recursion', 'beautiful', 'bug', 'oop fractal trees', 'trees'
    ],
    title: 'OOP Fractal Trees',
    imgpath: 'Projects/18.OOPFractalTrees/image.png',
    filepath: 'Projects/18.OOPFractalTrees/index.html',
    downloadLink: 'OOPFT.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 19,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'l-system', 'l system', 'example', 'l-system example', 'plant', 'trees', 'sentence'
    ],
    title: 'L-System Example',
    imgpath: 'Projects/19.L-System-Example/image.png',
    filepath: 'Projects/19.L-System-Example/index.html',
    downloadLink: 'L-System-Example.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 20,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'l-system', 'l system', 'fractal plant', 'l-system fractal plant', 'plant', 'trees', 'sentence', 'featured'
    ],
    title: 'L-System Fractal Plant',
    imgpath: 'Projects/20.L-System-Fractal-Plant/image.png',
    filepath: 'Projects/20.L-System-Fractal-Plant/index.html',
    downloadLink: 'L-System-Fractal-Plant.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 21,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'l-system', 'l system', 'l-system binary tree', 'plant', 'trees', 'sentence'
    ],
    title: 'L-System Binary Tree',
    imgpath: 'Projects/21.L-System-Binary-Tree/image.png',
    filepath: 'Projects/21.L-System-Binary-Tree/index.html',
    downloadLink: 'L-System-Binary-Tree.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 22,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'plant', 'trees', 'interactive', 'vectors', 'space colonization'
    ],
    title: 'Space Colonization',
    imgpath: 'Projects/22.SpaceColonization/image.png',
    filepath: 'Projects/22.SpaceColonization/index.html',
    downloadLink: 'SpaceColonization.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 23,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'math', 'cool', 'imaginary', 'numbers', 'mendelbrot set', 'julia set', 'sets'
    ],
    title: 'Mendelbrot Set',
    imgpath: 'Projects/23.MandelbrotSet/image.png',
    filepath: 'Projects/23.MandelbrotSet/index.html',
    downloadLink: 'MendelbrotSet.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 24,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'math', 'cool', 'imaginary', 'numbers', 'mendelbrot set', 'julia set', 'sets'
    ],
    title: 'Julia Sets',
    imgpath: 'Projects/24.JuliaSets/image.png',
    filepath: 'Projects/24.JuliaSets/index.html',
    downloadLink: 'JuliaSets.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 25,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'math', 'cool', 'phyllotaxis', 'algorithmic', 'botany', 'algorithmic botany', 'plant', 'colorful',
      'beautiful', 'real world'
    ],
    title: 'Phyllotaxis',
    imgpath: 'Projects/25.Phyllotaxis/image.png',
    filepath: 'Projects/25.Phyllotaxis/index.html',
    downloadLink: 'Phyllotaxis.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 26,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'fireworks', 'colorful', 'beautiful', 'particals', 'vectors', 'physics'
    ],
    title: 'Fireworks',
    imgpath: 'Projects/26.Fireworks/image.png',
    filepath: 'Projects/26.Fireworks/index.html',
    downloadLink: 'fireworks.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 27,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'rockets', 'colorful', 'smart', 'particals', 'vectors', 'physics', 'smart rockets',
      'evolution', 'nature of code', 'dna', 'featured'
    ],
    title: 'Smart Rockets',
    imgpath: 'Projects/27.SmartRockets/image.png',
    filepath: 'Projects/27.SmartRockets/index.html',
    downloadLink: 'SmartRockets.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 28,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'algorithm', 'tsm', 'traveling salesman', 'famous'
    ],
    title: 'Traveling Salesman',
    imgpath: 'Projects/28.TSMP/image.png',
    filepath: 'Projects/28.TSMP/index.html',
    downloadLink: 'TSMP.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 29,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'sorting', 'pixel sorting', 'fun', 'm&ms'
    ],
    title: 'Pixel Sorting!',
    imgpath: 'Projects/29.PixelSorting/image.png',
    filepath: 'Projects/29.PixelSorting/index.html',
    downloadLink: 'PixelSorting.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 30,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'beautiful', 'colorful', 'circle packing', 'fun', 'physics', 'vectors', 'featured'
    ],
    title: 'Circle Packing',
    imgpath: 'Projects/30.CirclePacking/image.png',
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
    imgpath: 'Projects/31.NoiseTrees/image.png',
    filepath: 'Projects/31.NoiseTrees/index.html',
    downloadLink: 'NoiseTrees.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 32,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'maze', 'path finding', 'a*', 'game', 'animation', 'search algorithm', 'algorithm', 'featured'
    ],
    title: 'A*',
    imgpath: 'Projects/32.AStar/image.png',
    filepath: 'Projects/32.AStar/index.html',
    downloadLink: 'AStar.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 33,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'cool', 'maze', 'path finding', 'a*', 'game', 'animation', 'search algorithm', 'algorithm',
      'maze generation', 'combination', 'a* maze', 'featured'
    ],
    title: 'A* Maze!',
    imgpath: 'Projects/33.AStarMaze/image.png',
    filepath: 'Projects/33.AStarMaze/index.html',
    downloadLink: 'AStarMaze.zip',
    visible: true,
    titleText: '#e5e5e5',
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    number: 34,
    keyWords: ['javascript', 'p5.js', 'visualization', 'challenge', 'shiffman', 'coding train',
      'physics', 'particle', 'example partical system', 'vectors'
    ],
    title: 'Example Partical System',
    imgpath: 'Projects/34.ParticalExample/image.png',
    filepath: 'Projects/34.ParticalExample/index.html',
    downloadLink: 'ParticalExample.zip',
    visible: true,
    titleText: "#e5e5e5",
    SpotlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]