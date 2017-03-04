// Conway's Game of Life
// by Arturo Ruvalcaba

// To do:
//  Menu
//  Does not work if w !== h
//  Speed controls

//-------------------------------------------------------------------------
// game constants
//-------------------------------------------------------------------------

var game,           // game object
    s = 10,         // size of each block
    w = 500,        // width of canvas
    h = 500,        // height of canvas
    cols = h / s,   // # of columns on the grid
    rows = w / s,   // # of rows on the grid
    colors = { 
      bg:         "#333333",
      grid:       "#646464",
      cell:       "#4A7B6F"
    }

//-------------------------------------------------------------------------
// game state variables
//-------------------------------------------------------------------------

var fRate = 60/30,
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
    this.clear();
  }
  
  this.update = function() {
    this.grid.forEach(function(c){
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
      c.alive = a[i] == 1;
    });
    this.update();
    this.show();
  }
  
  this.clear = function() {
    this.grid.forEach(function(c){
      c.alive = false;
    });   
    this.update();
    this.show();
  }
  
  this.random = function() {
    this.grid.forEach(function(c){
      c.alive = random() > 0.5;
    });  
    this.update();
    this.show();  
  }
  
  this.checkMouse = function() {
    this.grid.forEach(function(c){
      c.checkMouse();
    });       
    this.update();
    this.show();
  }
}

//-------------------------------------------------------------------------
// Cell object
//-------------------------------------------------------------------------

function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.alive;
  this.next;
  
  this.neighborIndexList = [index(x - 1, y - 1),  // top left
                            index(x - 1, y    ),  // left
                            index(x - 1, y + 1),  // bottom left
                            index(x    , y - 1),  // top
                            index(x    , y + 1),  // bottom
                            index(x + 1, y - 1),  // top right
                            index(x + 1, y    ),  // right
                            index(x + 1, y + 1)]; // bottom right

  this.show = function() {
    stroke(colors.grid);
    if(this.alive) fill(colors.cell);
    else           noFill();
    rect(this.x * s, this.y * s, s, s);
  }

  this.neighbors = function() {
    var counter = 0;
    this.neighborIndexList.forEach(function(i){
      if(game.grid[i] && game.grid[i].alive) counter++;
    });
    return counter;
  }

  this.update = function() {
    var n = this.neighbors();
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
    game.update();
    game.swap();
  }
  fCounter++;
}

//-------------------------------------------------------------------------
// key events
//-------------------------------------------------------------------------

function keyPressed() {
  if(keyCode == ENTER)                    paused = !paused;
  if(keyCode == RIGHT_ARROW && paused) {  game.update(); 
                                          game.swap();}
  if(keyCode == 82 && paused)             game.random();
  if(keyCode == 69 && paused)             game.clear();
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
    return (x < 0        || 
            y < 0        || 
            x > cols - 1 ||
            y > rows - 1) ? -1 : x + y * cols;
}

//-------------------------------------------------------------------------
// DOM manipulation
//-------------------------------------------------------------------------