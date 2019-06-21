# Maze Runner

## Background & Overview

Maze Runner was my first maze generating game. I built this game to learn the maze generating algorithm called DFS w/ recursive backtracking. The game itself took me down a winding path of relearning old Trigonometry for outlining the borders of walls, as well as a lot of Geometry.

## Technologies 

`HTML` / `CSS` / `JavaScript`

## Features

### Maze Generation

The maze is generated randomly upon reloading the screen. The maze is initially build with a 2D array where each element in that array is a Cell object. Each Cell object has a wall to the top and left sides. The walls are then removed by starting at the first cell, picking a random neighbor, removing that wall, and continueing on. 

### Sprite animation

There is only one main sprite for this game. The old man with a flashlight looking for his lost cash. This is a 4 directional sprite with 8 frames of movement and a standing frame.

### Main Character Movements

The main characters movements are controled with either the arrow keys or the wasd keys. This was an interested challenge, using event handlers in Javascript you lose the previous key value if another was pressed. This means if you are moving left and tap the space, the movement would stop. Also if you held a key for too long, it would start to autofire either creating a staggering action or a rapid action. 

My technique to solve these problems were to store the information of the key presses and to remove that information on the key release. There are x & y speeds applied to these that make the movement possible. This also enabled diagonal movement.
