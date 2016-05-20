# strman
strman (**str**ing **man**ipulation) is a set of ES6 utility functions for manipulating strings as if they were 2D. It was created to make working with ASCII art strings much easier, but there are many other possible uses for these functions.

## Functions
###`msplit(string)`
Matrix split. Splits string along newlines, then chars.
###`mjoin(string)`
Matrix join. Opposite of msplit.
###`mmap(string)(callback)`
Matrix map. Iterates over string using callback, which takes arguments `(val,row,col)`.
###`mget(string)(startrow,startcol,endrow=string.row.length,endcol=string.col.length)`
Matrix get. Returns any chars with indices of `startrow <= row < endrow` and `startcol <= col < endcol`.
###`mgetc(string)(row,col)`
Get char at specified index.
###`mgety(string)(col)`
Get specified column.
###`mgetx(string)(row)`
Get specified row.
###`transpose(string)`
Swap string rows with columns.
###`pad(string)`
Fill string with spaces at the end of each row when necessary.
###`flipy(string)`
Flip string over y-axis.
###`flipx(string)`
Flip string over x-axis.
###`rotate(string)(times=1)
Rotate a string by `times*90` degrees.
###`concaty(string1)(string2)`
Concatenate 2 strings together, row-by-row.
###`concatx(string1)(string2)`
Concatenate 2 strings together, column-by-column.
