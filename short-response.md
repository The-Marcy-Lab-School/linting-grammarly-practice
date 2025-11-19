# Short Responses

## Question 1

The following block of code throws an error. *Without running it:*

* Identify the kind of error it throws  
* Explain why it is thrown.  
* Suggest a fix to avoid the error

```javascript
const react = (isReuben) => {
  if (isReuben) {
    let currentStatus = 'Everything is just fine';
  } else {
    let currentStatus = 'Time to panic.'
  }
  
  console.log(currentStatus);
}

react(true);
```

### Response 1

**Kind of Error:**
this code throws a `ReferenceError`

**Why its thrown:**
the variable `currentStatus` is declaired using the keyword `let` inside the `if` and `else` blocks variables declared with `let` (and `const`) are block-scoped therefor the variable `currentStatus` cannot be refrenced outside of the `if` and `else` blocks as a result a ReferenceError is thrown when we write `console.log(currentStatus)` outside of the blocks basicly the variable only exists inside the block where it was created you cant access it from outside becuase of how block scoping works in javascript its importent to understand this concept

**Fix:**
Declare `currentStatus` before the conditional using `let` and then asign values to it inside the blocks

```javascript
const react = (isReuben) => {
  let currentStatus; // Declare outside the blocks
  if (isReuben) {
    currentStatus = 'Everything is just fine';
  } else {
    currentStatus = 'Time to panic.'
  }
  console.log(currentStatus);
}
```

the key thing to remeber is that `let` and `const` are block scoped so they cant be accesed outside there blocks this is diffrent from `var` which is function scoped  and can be accessed from anywhere in the function.Another way to fix this would be to use `var`instead of `let` but thats not recomended becuase `var` has alot of weird behaviors

---

## Question 2

What does the following code log? Explain why.

```javascript
let bestPlayer = { name: "Lebron James" };
let theGOAT = bestPlayer;
bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);
```

### Response 2

**What it logs:**
The code logs `"Michael Jordan"`.

**Why:**
In JavaScript objects are reference types. This means that any variable that "holds" an object is actually holding a *reference* to that objects location in memory not the data itself. In this case `bestPlayer` holds a reference to the location of the object `{ name: "Lebron James" }`.

When we assign `let theGOAT = bestPlayer`, were NOT copying the objects data into `theGoat` were copying the *reference* to the object into `theGoat`. As a result both variables hold references to the same object therefor mutating that object by writing `bestPlayer.name = "Michael Jordan"` means that `theGoat.name` will also return `"Michael Jordan"`. Both variables are pointing to the same place in memory so changing one effects the other its like two people holding the same peice of paper instead of each person having there own copy.

---

## Question 3

What does the following code log? Explain why.

```javascript
const theHustler = 'Laisha';

const shoutOut = () => {
  const theHustler = 'Paul';
  console.log(`${theHustler} is the hardest working person in the room.`);
}

shoutOut();
console.log(`${theHustler} is also the hardest working person in the room.`);
```

### Response 3

**What it logs:**
First call logs: `"Paul is the hardest working person in the room."`
Second call logs: `"Laisha is also the hardest working person in the room."`

**Why:**
This demonstrates variable scope. The `const theHustler` declared outside the function has global scope. Inside the `shoutOut` function a new `const theHustler` is declared, which is scoped to the function block and shadows the global variable. When `shoutOut()` executes it uses the local `theHustler` ("Paul"). When we `console.log` outside the function, it uses the global `theHustler` ("Laisha"). The function cant access the outer variable because its own declaration takes precedence in its scope.
