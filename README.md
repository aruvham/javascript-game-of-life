# javascript-game-of-life

**javascript-game-of-life** is an implementation of [Conway's Game of Life], created using [p5.js] to render all the graphics.

* [Play the game now]

<h3 align="center">
  <img src="https://dl.dropboxusercontent.com/s/b4qx9378hnrq00r/conway_01.png?dl=0" alt="javascript-game-of-life overall screenshot" />
</h3>

<h3 align="center">
  <img src="https://dl.dropboxusercontent.com/s/h2to3fvnqphp8fq/conway_02.png?dl=0" alt="javascript-game-of-life gameplay screenshot" />
</h3>

<h3 align="center">
  <img src="https://dl.dropboxusercontent.com/s/dd4tyhgdq6jk5yf/conway_03.png?dl=0" alt="javascript-game-of-life gameplay screenshot" />
</h3>

How To Use
------

Click on any part of the grid to "activate" that cell.

**Controls:**

<h3 align="center">
  <img src="https://dl.dropboxusercontent.com/s/90lj0ff4vuffr0h/conway_04.png?dl=0" alt="javascript-game-of-life controls screenshot" />
</h3>

* **Run:** Plays the simulation
* **Step:** Move the simulation one generation forward [works while paused]
* **Clear:** Removes all "cells" from the grid, also removes the trail [works while paused]
* **Save:** Generates an array-like string representing the current state of the grid, the string will appear on the text area [works while paused]
* **Load:** Attempts to read an array-like string from the text area and loads it into the grid [works while paused]
* **Speed:** Changes the speed of the simulation
* **Grid:** Show/Hide the grid lines
* **Trail:** Show/Hide the trail
* **Colors:** Changes the color of part of the simulation, from left to right:
  * Background
  * Grid
  * Cells
  * Trail
* **Random:** Populates the grid with a random pattern [works while paused]
* **Pattern Select:** Loads from a list of classic patterns [works while paused]

Future
------

* [ ] disable buttons while paused
* [ ] more intuitive controls
* [ ] more initial patterns
* [ ] zoom functionality

<!---
Link References
-->

[Conway's Game of Life]:https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
[p5.js]:https://p5js.org/
[Play the game now]:https://game-of-life-aruvham.herokuapp.com/
