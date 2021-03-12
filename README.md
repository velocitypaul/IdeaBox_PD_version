# Ideabox Group Project

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, we'll be building an application that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we'll rely on JavaScript to implement snappy filtering in the browser, and `localStorage` to persist our wonderful ideas between sessions.

## Learning Goals

* Gain an understanding of how to write clean HTML and CSS to match a provided comp
* Understand how to implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

## Day One Deliverables

- Complete a [DTR](https://github.com/turingschool/career-development-curriculum/blob/master/module_one/dtr_guidelines_memo.md).
- One person should fork [the boilerplate
  repository](https://github.com/turingschool-examples/ideabox-boilerplate). Add all team members and your Project Manager as collaborators.
- Deploy your application to GitHub Pages.
- In a Slack DM to your assigned instructor, drop the repo link, DTR and GitHub pages link.

## Progression

### Iteration 0 - Desktop Layout

Plan to write the HTML and CSS so that your application matches this comp. Based on what you are building, you can anticipate that the Idea "cards" will not always be there on page load, but for now, they should.

Use the same text on your cards that is used in the spec so you can ensure your spacing/sizing is accurate.

![Desktop Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg)

You will need the `svg` files for the star, delete, and menu icons. [Here's the link to download the `svg` icons.](https://drive.google.com/drive/folders/18xpWplI0tpXIK1omBZeq04LEx2OMzzMK?usp=sharing)

![Colors](https://frontend.turing.io/projects/module-1/assets/ideabox-group/colors.jpg)
![Colors](https://frontend.turing.io/projects/module-1/assets/ideabox-group/icons.jpg)

### Iteration 1 and beyond

We strongly recommend that you complete Iteration 0 before moving on to the next iterations!

### Architecture

For this project, we'll be increasingly thinking about the "data model" and "DOM model" as separate entities. We'll be using:

- JSON and `localStorage` to persist data on page reload.
- JavaScript to manage client-side interactions.

Your entire application will consist of one HTML page or template. You will have two JavaScript files, for now:

1. An `idea.js` file that contains an `Idea` class.
  * `Idea` methods must include, but are not limited to:
    1. `constructor`
    2. `saveToStorage` (should only have one job which is to save the instance to storage)
    3. `deleteFromStorage`
    4. `updateIdea` (should be able to update the idea's title, body, or starred state)
2. A `main.js` file that contains all DOM related JavaScript.

**Note** The `idea.js` file  must be the first script in your HTML so that your `main.js` file has access to your `Idea` class.

### Data Model

* An idea has an _id_, _title_, _body_, and _star_.
  * The _id_ should be a unique identifier. (Note: generating a random number does _not_ guarantee it will be unique)
  * _title_ and _body_ are strings.
  * _star_ is a boolean.

Each idea should be created as an object instance of the `Idea` class. Once an idea object is created, all that data can be used to update the DOM. That object should also be added to a `list` of all the ideas your application currently has. This should probably be a global variable in your `main.js`.

### Iteration 2 - Adding Ideas

As a user,
- When I click "Save",
- If I entered information in both the "Title" and "Body" input fields,
- I should see a new idea card with the provided title and body appear in the idea list

As a user,
- When I click "Save",
- If I entered information in both the "Title" and "Body" input fields,
- I should see the "Title" and "Body" input fields clear out

As a user,
- When I look at the "Save" button,
- When either the "Title" or "Body" inputs are empty,
- I should notice that the "Save" button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it

As a user,
- When I click "Save",
- And a new card is successfully created,
- I should _not_ see the page reload

### Iteration 3 - Favoriting & Deleting Ideas

As a user,
- When I click the "Delete" button on an idea card,
- The card should be permanently removed from my view

As a user,
- When I click the "Star" button on an idea card,
- When the button was an outline of a star (not favorited),
- The button should now be a filled in star (favorited)

As a user,
- When I click the "Star" button on an idea card,
- When the button was a filled in star (favorited),
- The button should now be an outline of a star (not favorited)

As a user,
- When I delete or favorite any card,
- I should _not_ see the page reload

### Iteration 4 - Local Storage & Filtering

As a user,
- When I create one idea successfully, then refresh the page,
- The idea card is still in the idea list

As a user,
- When I create two cards successfully, delete one, then refresh the page,
- One idea card is still in the idea list (the one I did not delete)

As a user,
- When I favorite an idea card, then refresh the page,
- That idea card is still in the "favorite" state with the filled in star icon

As a user,
- When I click "Show Starred Ideas"
- I see only card that are favorited

As a user,
- When I click "Show Starred Ideas"
- I see the text on that button has changed to "Show All Ideas"

As a user,
- When I click "Show Starred Ideas"
- Then I click what is now "Show All Ideas"
- I see all ideas, favorited or not

As a user,
- When a type a letter or phrase into the search bar
- I now only see the cards that include the letter/phrase in the title or body

As a user,
- When I backspace and delete something from the search bar, so that it's empty
- I see all cards since no search criteria is being provided

### Iteration 5 - Commenting on Ideas

### Architecture

In addition to your `idea.js` and `main.js`, you now need to have a `comment.js` file.

This file should hold a class, `Comment`. `Comment` methods must include, but are not limited to:
1. `constructor`
2. `saveToStorage` (should only have one job which is to save the instance to storage)
3. `deleteFromStorage`

### Data Model

* An idea now also has a _comments_ property
  * The _id_ should be a unique identifier. (Note: generating a random number does _not_ guarantee it will be unique)
  * _title_ and _body_ are strings.
  * _star_ is a boolean.
  * _comments_ is an array.

* A comment should have _content_ - a string that holds the content of a comment. 


As a user,
- When I click the "Add" icon on an idea card,
- A form to add a comment appears

As a user,
- When I open the comment form on a card, type something in, and click "Add Comment",
- The text typed in is now a comment attached to this card

As a user,
- When I open the comment form on a card, type something in, and click "Add Comment",
- The "Comment" input field clears out and is ready to accept another comment

As a user,
- When I open the comment form on am idea card,
- When the "Comment" input field is empty,
- I should notice that the "Add Comment" button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it

As a user,
- When I comment on an idea card, then refresh the page,
- That comment is still on the idea card


## Rubric

This rubric should serve as a guide for students as they progress through the project, as well as to self-evaluate. Instructors will use it to evaluate the project at its final due date/time, and provide detailed feedback so students know what areas to focus on in future projects.

Scores land in a range between 1 and 4. Below is a breakdown of what those numbers represent.

* **4 (exceptional)** - went beyond set learning goals; did self-teaching to go above and beyond in this area
* **3 (proficient)** - exactly on track! you're where you need to be in this area! great work!
* **2 (trailing)** - a little behind where we want to see you right now; in a good place to build familiarity/competency in this area; study in this area to level up and grow
* **1 (dragging)** - significantly behind where we want to see you; major growth needs to be shown in this area; set up a pairing session with an instructor as soon as possible

To earn a given score, an application must meet the requirements listed in that score explanation and all scores lower.


### Professionalism
* **4:**
  - Team uses a PR template
  - Team habitually conducts thorough code reviews in the GitHub GUI to document the progress of the application
  - Team has sought out code reviews from one or more mentors
  - README is well formatted and descriptive with screenshots or gifs of the application in action.
* **3:**
  - Commits are atomic and frequent, effectively documenting the evolution/progression of the application
  - Commit messages are consistent, descriptive, and concise
  - Team uses PRs to screen/verify code before adding it to the main branch
  - There is no more than a 10% disparity in project contributions between teammates
  - README is well formatted and gives good context about the project, including links to both contributors’ GitHub profiles, and to the deployed GitHub Pages site
* **2:**
  - Commits are large and do not effectively communicate the progression of the application
  - Team uses PRs but do not review code before merging into the main branch
  - All teammates can speak to the purpose and functionality of any/every line of code
  - There is a 20% disparity in project contributions between teammates
  - README is brief and does not provide context for the project
* **1:**
  - Teammates do not understand the purpose and functionality of every line of code
  - Some commits are pushed directly to the main branch
  - PRs are used inconsistently
  - There is a 50% disparity in project contributions between teammates
  - There is no README, or README is insufficient

### Comp Recreation

* **4:** 
  - Additional elements and animations have been added that match the visuals established in the comps.
* **3:** 
  - Application implements all major comp details accurately and correctly on desktop (colors, fonts, icons, spacing, alignment, etc).
  - If additional elements were added, they generally match the visuals established in the comps, but may be slightly awkward.
  - Careful attention was given to the little details like spacing, alignment, and hover states.
* **2:** 
  - Application implements most major comp details accurately and correctly (colors, fonts, icons, spacing, alignment, etc.).
* **1:**
  - Application has a significant mismatch when compared to the provided comp. 

### HTML && CSS - Style and Implementation
* **4:**
  - Application adds to the requirements of the Proficient category by using [BEM](http://getbem.com/), [SMACCS](http://smacss.com/), or another set of naming conventions for classes
  - Application fully implements HTML that is accessible for individuals with visual disabilities.
* **3:**
  - Application utilizes good naming conventions for HTML classes and IDs 
  - CSS is DRY, utilizing existing classes/rules to cut down on repetitive styles
* **2:**
  - Application adds to the above with HTML that incorporates semantic HTML elements whenever possible
  - Application has a simple, clean HTML structure
  - Application utilizes organizational conventions for the whole CSS stylesheet
* **1:**
  - Crafts CSS according to the [Turing CSS style guide](https://github.com/turingschool-examples/css)
  - Crafts markup according to the [Turing HTML style guide](https://github.com/turingschool-examples/html)

### JavaScript - Style and Implementation

* **4:**
  * All loops are refactored into the proper array prototype iteration methods
  * Uses logical operators instead of if/else statements where applicable
  * When 'Filtering and Searching by Text' and 'Viewing Starred Ideas', ideas that do not need to be shown on the DOM should be completely removed from the DOM, instead of only being hidden from view
* **3:**
  * Application uses the Data Model exclusively to track changes to the ideas,
    and display of ideas happens after the Data Model has been updated
  * DRY and SRP practices are demonstrated in codebase and students can speak to implementation decisions
  * All functions are less than 10 lines
  * There are no nested if/else statements
  * There are no global variables aside from query selectors and an array for your idea
  * Uses event delegation correctly on dynamic elements for deleting, and starring an idea
* **2:** Application correctly implements data model for the `Idea` class including all required methods
* **1:** Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)

### Functional Expectations
Functionality is the least important piece of the rubric. It’s included because it is another benchmark to gauge proficiency (for example, we can’t grade your JS if there isn’t enough of it written!). However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:

Code that completes iterations but is sloppy
One or both team members do not understand every single line of code
One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality
A score cannot be earned if all developers are not intimately familiar with the concepts and understanding driving every line of code.

* **4:** Application meets all of the expectations from Iteration 4 and most functionality from Iteration 5.
* **3:** Application meets all of the expectations from Iteration 4.
* **2:** Application meets all of the expectations of Iteration 3.
* **1:** Application meets all of the expectations of Iteration 2.
