# Random-Name-Generator
Generate random names to use for a sprint in scrum an internal product name or any other reason

Download and run with node.
# example
```
$ node generate_sprint_name.js
Wild Toad
```

#Command Line Params
Accepted parameters:
* `[A-Za-z]` - Any single letter which will be used to only return names that start with that letter.
* `[0-n]` - Any number which will control the number of names generated. Defaults to 1.

Letter Only
```
$ node generate_sprint_name.js a 
Ancient Sheet
```
Number Only
```
$ node generate_sprint_name.js 10
Attractive Vignette
Astonishing Gypsy
Sweltering Stopwatch
Lethal Peon
Abandoned Sweet-Talk
Truculent Colon
Adhesive Quarterback
Imported AMD
Fine Rocket
Cloudy Simpleton
```
Both Letter and Number
```
$ node generate_sprint_name.js a 10
Ashamed Rob
Abandoned Signal
Abounding Vampire
Acceptable Pitcher
Animated Warehouse
Animated Petal
Awful Handbag
Absorbing Bay
Adjoining Bathhouse
Amused Referee
```
