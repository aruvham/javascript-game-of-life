// Conway's Game of Life
// Arturo Ruvalcaba

//-------------------------------------------------------------------------
// game variables
//-------------------------------------------------------------------------

var game,           // game object
    s = 10,         // size of each block
    w = 400,        // width of canvas
    h = 400,        // height of canvas
    cols = w / s,   // # of columns on the grid
    rows = h / s,   // # of rows on the grid
    colors = {
      bg:         "#333333",
      grid:       "#646464",
      cell:       "#4A7B6F",
      trail:      "#4a8cf7"
    },

    generations = 0;
    aliveCells = 0;

//-------------------------------------------------------------------------
// game state variables
//-------------------------------------------------------------------------

                // default speed     = 60 FPS
var fRate = 30, // new speed = 60/30 = 2 FPS
    fCounter = 0,
    paused = true;

//-------------------------------------------------------------------------
// Conway object
//-------------------------------------------------------------------------

function Conway() {
  this.grid = [];

  this.init = function() {
    for (var x = 0; x < cols; x++) {
      for (var y = 0; y < rows; y++) {
        this.grid[index(x, y)] = new Cell(x, y);
      }
    }
  }

  this.update = function() {
    aliveCells = 0;
    this.grid.forEach(function(c){
      if(c.alive) aliveCells++;
      c.update();
    });
  }

  this.show = function() {
    this.grid.forEach(function(c){
      c.show();
    });
  }

  this.swap = function() {
    this.grid.forEach(function(c){
      c.swap();
    });
  }

  this.step = function() {
    generations++;
    this.update();
    this.swap();

    console.log("generations : " + generations + ", aliveCells : " + aliveCells);
  }

  this.clear = function() {
    generations = 0;
    this.grid.forEach(function(c){
      c.alive = false;
      c.trail = false;
    });
    this.show();
  }

  this.random = function() {
    this.clear();
    this.grid.forEach(function(c){
      c.alive = random() < 0.25;
    });
    this.show();
  }

  this.save = function() {
    var s = "[";
    this.grid.forEach(function(c){
      if(c.alive) s += "1,";
      else        s += "0,";
    });
    s = s.slice(0, -1);
    s += "]";
    return s;
  }

  this.load = function(a) {
    this.clear();
    this.grid.forEach(function(c, i){
      c.alive = a[i] === 1;
    });
    this.show();
  }

  this.checkMouse = function() {
    this.grid.forEach(function(c){
      c.checkMouse();
    });
    this.show();
  }
}

//-------------------------------------------------------------------------
// Cell object
//-------------------------------------------------------------------------

function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.alive = false;
  this.next = false;
  this.trail = false;

  this.neighborIndexList = [index(x - 1, y - 1),  // top left
                            index(x - 1, y    ),  // left
                            index(x - 1, y + 1),  // bottom left
                            index(x    , y - 1),  // top
                            index(x    , y + 1),  // bottom
                            index(x + 1, y - 1),  // top right
                            index(x + 1, y    ),  // right
                            index(x + 1, y + 1)]; // bottom right

  this.aliveNeighbors = function() {
    var counter = 0;
    this.neighborIndexList.forEach(function(i){
      if(game.grid[i] && game.grid[i].alive) counter++;
    });
    return counter;
  }

  this.show = function() {
    stroke(colors.grid);

    if     (this.alive) fill(colors.cell);
    else if(this.trail) fill(colors.trail);
    else                noFill();

    rect(this.x * s, this.y * s, s, s);
  }

  this.update = function() {
    if(this.alive) this.trail = true;

    var n = this.aliveNeighbors();
    this.next = false;                            // default
    if( this.alive && n ==  3) this.next = true;  // lives on
    if( this.alive && n ==  2) this.next = true;  // lives on
    if(!this.alive && n ==  3) this.next = true;  // reproduction
    if( this.alive && n >   3) this.next = false; // dies of overpopulation
    if( this.alive && n <   2) this.next = false; // dies of under-population
  }

  this.swap = function() {
    this.alive = this.next;
  }

  this.checkMouse = function() {
    if(mouseX > this.x * s     &&
       mouseX < this.x * s + s &&
       mouseY > this.y * s     &&
       mouseY < this.y * s + s) {
      this.alive = !this.alive;
    }
  }
}

//-------------------------------------------------------------------------
// setup
//-------------------------------------------------------------------------

function setup() {
  createCanvas(w, h);
  game = new Conway();
  game.init();
}

//-------------------------------------------------------------------------
// draw
//-------------------------------------------------------------------------

function draw() {
  background(colors.bg);
  game.show();
  if(!paused && fCounter % fRate == 0) {
    game.step();
  }
  fCounter++;
}

//-------------------------------------------------------------------------
// key events
//-------------------------------------------------------------------------

function keyPressed() {
  if(keyCode == ENTER)                    paused = !paused;
  if(keyCode == RIGHT_ARROW && paused)    game.step();
  if(keyCode == 82 && paused)             game.random(); // "R"
  if(keyCode == 69 && paused)             game.clear();  // "E"
}

//-------------------------------------------------------------------------
// mouse events
//-------------------------------------------------------------------------

function mousePressed() {
  if(paused) game.checkMouse();
}

//-------------------------------------------------------------------------
// helper functions
//-------------------------------------------------------------------------

function index(x, y) {
    if(x < 0) x = cols - 1;
    if(x > cols - 1) x = 0;
    if(y < 0) y = rows - 1;
    if(y > rows - 1) y = 0;
    return x + y * cols;
}

//-------------------------------------------------------------------------
// DOM manipulation
//-------------------------------------------------------------------------
