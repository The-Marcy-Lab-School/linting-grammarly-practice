# Grammarly & Linting

**Table of Contents:**
- [Key Concepts](#key-concepts)
- [Linting](#linting)
  - [ESLint](#eslint)
    - [How the Config File Works](#how-the-config-file-works)
  - [Turn on Auto Save and Format on Save](#turn-on-auto-save-and-format-on-save)
  - [Key Takeaways](#key-takeaways)
- [Grammarly](#grammarly)
  - [Learning Objectives](#learning-objectives)
  - [Part 1: Manual Error Detection](#part-1-manual-error-detection)
  - [Part 2: Grammarly Analysis](#part-2-grammarly-analysis)
  - [Part 3: Reflection](#part-3-reflection)
  - [Key Takeaway](#key-takeaway)


## Key Concepts

* **Linting** is the automated process of analyzing source code for potential errors, bugs, stylistic inconsistencies, and suspicious constructs. 
* A **linter** or linting tool is the specialized tool for performing linting analysis.

## Linting

**Linting** is the automated process of analyzing source code for potential errors, bugs, stylistic inconsistencies, and suspicious constructs. This analysis is performed by a specialized tool called a "linter" or "linting tool."

A linting tool like **eslint** is essentially Grammarly for your code. 

### ESLint

We follow Airbnb's code style rules which is widely recognized in the industry for its clean and deliberate rules.

Check the `package.json` file and you'll see that we have a few dependencies related to eslint and Airbnb's code style:

```json
"devDependencies": {
  "eslint": "^8.44.0",
  "eslint-config-airbnb-base": "^15.0.0",
  "eslint-plugin-import": "^2.27.5"
}
```

- `eslint` - The core linting engine. Required.
- `eslint-config-airbnb-base` - A pre-packaged collection of ESLint rules following Airbnb's JavaScript style guide. This is what you're extending with extends: 'airbnb-base'. It sets hundreds of rules automatically (spacing, semicolons, naming conventions, etc.).
- `eslint-plugin-import` - Required by airbnb-base. It validates ES6 import/export syntax and ensures imports are properly resolved. Without this, ESLint would error when trying to use the Airbnb config because many of Airbnb's rules depend on this plugin.

Install the dependencies:

```sh
npm i
```

In `package.json`, there is also the script for running the linting tool which will analyze your code using the provided rules:

```json
"scripts": {
  "lint": "eslint ."
},
```

Run the linting command:

```sh
npm run lint
```

It will spit out a report of the code style errors. 


#### How the Config File Works
The report will mostly highlight rules that are defined by Airbnb's style guide, but at Marcy we've defined a few of our own rules. Look at the `.eslintrc.js` file:

- `env`: Tells ESLint which global variables are available.`browser: true` recognizes `window`, `document`, etc. `jest: true` recognizes `describe`, `test`, `expect`. Without these, ESLint would flag these as undefined variables.
- `extends: 'airbnb-base'`: Imports all of Airbnb's rules as your starting point. This is doing the heavy lifting—you get their entire opinionated style guide in one line.
- `parserOptions`: Tells ESLint what JavaScript syntax to expect. 
  - `ecmaVersion: 'latest'` means it understands modern JS features. 
  - `sourceType: 'module'` means you're using ES6 imports/exports instead of CommonJS.
- `rules`: Your customizations that override Airbnb's defaults.

Look through some of the rules. Try commenting them out and see how the errors produced by the linter changes.

### Turn on Auto Save and Format on Save

* Go to settings
* Search "Auto Save" and select "onFocusChange" from the dropdown
* Search "Format on Save" and check the box.

This combination of settings will save you some of the hassle of cleaning up your code. It mostly helps with indentation and spacing. However, it won't catch everything. 

Run the linter again:

```sh
npm run lint
```

You'll notice there are still some errors. Fix them until the linter shows no errors!

### Key Takeaways

* Auto-save and format on save options will automatically format your code with proper spacing and indentation.
* A linter is needed to ensure your code follows the write code style principles.
* Linter configurations can be changed depending on which stage of development you are in.

## Grammarly
In this activity, you will practice identifying common writing errors in technical documentation, then compare your findings with Grammarly's suggestions. This will help you understand the importance of proofreading and using available tools before submitting professional work.

### Learning Objectives
- Identify common grammar, spelling, and punctuation errors in technical writing
- Learn to use Grammarly as a proofreading tool
- Understand that submitting error-filled writing is unacceptable in professional contexts
- Develop strategies for catching errors in your own work

### Part 1: Manual Error Detection

You will receive three sample responses to JavaScript debugging questions. Each response contains accurate technical content, but varies in writing quality:

- **Response 1**: Contains many obvious errors (spelling, punctuation, capitalization, run-on sentences)
- **Response 2**: Contains a moderate number of errors (mix of obvious and subtle mistakes)
- **Response 3**: Contains only subtle errors (missing punctuation, wrong word choices)

**Your Task:**

**WITHOUT using any spell-check or grammar tools**, carefully read each response and document all the errors you find.

For each error, record:
1. The incorrect text (quote it or describe its location)
2. The type of error (spelling, punctuation, grammar, capitalization, etc.)
3. Your proposed correction

**Example format:**
```
Response 1, Error #1
Incorrect: "its thrown"
Type: Missing apostrophe in contraction
Correction: "it's thrown"
```

**Tips for finding errors:**
- Read slowly, sentence by sentence
- Look for misspelled words
- Check for missing apostrophes (its/it's, cant/can't, were/we're)
- Watch for wrong words (there/their/they're, then/than, effect/affect)
- Find missing commas after introductory phrases
- Identify run-on sentences
- Notice inconsistent capitalization
- Check for missing periods

### Part 2: Grammarly Analysis

After completing your manual analysis:

1. **Copy each response into Grammarly** (you can use the free version at grammarly.com)
2. **Compare Grammarly's findings to your own**
3. **Document the following:**
   - How many errors did you find on your own?
   - How many errors did Grammarly find that you missed?
   - Were there any errors you found that Grammarly didn't catch?
   - Which types of errors were you best at catching? Which did you struggle with?

### Part 3: Reflection

Answer these questions:

1. **What surprised you about comparing your findings to Grammarly's suggestions?**

2. **How do writing errors impact the credibility and professionalism of technical documentation?** Think about:
   - How you perceive documentation with many errors
   - What it communicates about the author's attention to detail
   - The impression it makes in professional settings (job applications, technical writing samples, pull request descriptions)

3. **Why is it unacceptable to submit writing full of errors when tools like Grammarly are freely available?**

4. **What is your plan for ensuring your future written submissions are error-free?** Consider:
   - When will you use Grammarly in your writing process?
   - What other proofreading strategies will you employ?
   - How will you build the habit of reviewing your work before submitting?

### Key Takeaway

**Professional writing matters.** In technical roles, you will write documentation, pull request descriptions, technical design documents, emails to stakeholders, and more. Writing filled with errors damages your credibility and creates extra work for others. 

**You have access to powerful, free tools like Grammarly.** There is no excuse for submitting work with obvious errors. Make proofreading and using these tools a non-negotiable part of your writing process.