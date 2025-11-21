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

this code throws a `ReferenceError`

The variable `currentStatus` is declaired using the keyword `let` inside the `if` and `else` blocks. variables declared with `let` (and `const`) are block-scoped therefor the variable `currentStatus` cannot be refrenced outside of the `if` and `else` blocks.As a result a ReferenceError is thrown when we write `console.log(currentStatus)` outside of the blocks basicly the variable only exists inside the block where it was created you cant access it from outside becuase of how block scoping works

To fix this I wuld declare `currentStatus` before the conditional using `let` and then asign values to it inside the blocks

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

### Errors:

1. Capitalize "this"
2. Add period after `ReferenceError`
3. Typo: declaired
4. 