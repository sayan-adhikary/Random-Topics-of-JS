# Random Topics of JS

A simple browser-based topic picker for revising HTML, CSS, and JavaScript concepts in a random order.

This project was created as a practical revision tool for frontend development. Whenever you want to study, click the button and use the selected topic as a quick learning prompt, interview question, or coding exercise.

## Features

- Picks a random topic with one click
- Displays the topic category and difficulty level
- Covers beginner, intermediate, and advanced concepts
- Includes HTML, CSS, JavaScript fundamentals, DOM, events, asynchronous JavaScript, APIs, and interview topics
- Runs directly in the browser with no build tools or dependencies

## Topics Covered

The topic list includes areas such as:

- HTML structure, semantics, forms, tables, lists, and accessibility
- CSS selectors, box model, Flexbox, Grid, responsive design, and variables
- JavaScript fundamentals, functions, arrays, and objects
- DOM manipulation and browser events
- Asynchronous JavaScript, promises, and `async`/`await`
- APIs, HTTP basics, `fetch()`, JSON, and error handling
- JavaScript interview concepts such as scope, hoisting, closures, and `this`
- Advanced concepts such as prototypes, the event loop, debouncing, and throttling

## Getting Started

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/sayan-adhikary/Random-Topics-of-JS.git
   ```

2. Open the project folder.

3. Open `randomTopics.html` in a web browser.

4. Click **Pick Random Topic** to begin revising.

No installation or package manager is required.

## Project Structure

```text
random-topics-of-js/
├── randomTopics.html   # Page structure and interface
├── style.random.css    # Page styling
├── script.random.js    # Topic data and random selection logic
└── README.md           # Project documentation
```

## How It Works

The topic list is stored as an array of objects in `script.random.js`. Each object contains a topic, category, and difficulty level. When the button is clicked, JavaScript selects a random item and updates the page using the DOM.

## Contributing

Suggestions and improvements are welcome. You can contribute by:

- Adding useful HTML, CSS, or JavaScript topics
- Improving the design or accessibility
- Fixing bugs
- Suggesting new revision features

If this project helps you, please consider giving it a star on GitHub.

## License

No license has been specified yet.
