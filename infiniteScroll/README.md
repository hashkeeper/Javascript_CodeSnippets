### JS general DOM element infinite scroller
## programming goals
- automatic padding and margin child and parent detection
  -- parent width and height need to be automatically calulated to match the entire array, minus the width padding and margin of *the largest element*.
    seperate, final initliazed variable for parent width  and height addition, in order to see elements appear and disappear, or shrink to fit a container
  -- spacing is a seperate variable because it opens for animations later
  -- requires splitting apart the padding and margin variables with .split(' ').forEach(cur => cur.replace(/[px|%|em|rem]/, '')); (or whatever works)
    detect length of the array to see what value equals top right bottom or left, or is there is two numbers for top and bottom, then left and right.
    add each accordingly to the padding
## project, managment goals
- turn this into a node package
  