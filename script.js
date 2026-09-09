const topics = [
	// HTML
	{
		topic: 'HTML Structure',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'HTML Tags',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'Semantic HTML',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'div vs span',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'Forms',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'Input Types',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'HTML Attributes',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'id vs class',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'Semantic Tags: header, nav, main, section, footer',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'HTML Tables',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'HTML Lists',
		category: 'HTML',
		level: 'Beginner',
	},

	{
		topic: 'HTML Accessibility Basics',
		category: 'HTML',
		level: 'Intermediate',
	},

	// CSS
	{
		topic: 'CSS Selectors',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'CSS Box Model',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'margin vs padding',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'display: block vs inline',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'position: relative / absolute',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'position: fixed / sticky',
		category: 'CSS',
		level: 'Intermediate',
	},

	{
		topic: 'Flexbox',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'justify-content',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'align-items',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'flex-direction',
		category: 'CSS',
		level: 'Beginner',
	},

	{
		topic: 'CSS Grid',
		category: 'CSS',
		level: 'Intermediate',
	},

	{
		topic: 'Grid Rows and Columns',
		category: 'CSS',
		level: 'Intermediate',
	},

	{
		topic: 'CSS Specificity',
		category: 'CSS',
		level: 'Intermediate',
	},

	{
		topic: 'Pseudo Classes',
		category: 'CSS',
		level: 'Intermediate',
	},

	{
		topic: 'Pseudo Elements',
		category: 'CSS',
		level: 'Intermediate',
	},

	{
		topic: 'Media Queries',
		category: 'CSS',
		level: 'Intermediate',
	},

	{
		topic: 'Responsive Design',
		category: 'CSS',
		level: 'Intermediate',
	},

	{
		topic: 'CSS Variables',
		category: 'CSS',
		level: 'Intermediate',
	},

	// =====================================
	// JAVASCRIPT FUNDAMENTALS
	// =====================================

	{
		topic: 'let, const and var',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'JavaScript Data Types',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'Primitive vs Reference Types',
		category: 'JavaScript',
		level: 'Intermediate',
	},

	{
		topic: 'Operators',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: '== vs ===',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'Truthy and Falsy',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'Type Conversion',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'Type Coercion',
		category: 'JavaScript',
		level: 'Intermediate',
	},

	{
		topic: 'if / else',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'switch',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'for loop',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'while loop',
		category: 'JavaScript',
		level: 'Beginner',
	},

	{
		topic: 'break and continue',
		category: 'JavaScript',
		level: 'Beginner',
	},

	// FUNCTIONS
	{
		topic: 'Function Declaration',
		category: 'Functions',
		level: 'Beginner',
	},

	{
		topic: 'Function Expression',
		category: 'Functions',
		level: 'Beginner',
	},

	{
		topic: 'Arrow Functions',
		category: 'Functions',
		level: 'Beginner',
	},

	{
		topic: 'Parameters and Arguments',
		category: 'Functions',
		level: 'Beginner',
	},

	{
		topic: 'Default Parameters',
		category: 'Functions',
		level: 'Intermediate',
	},

	{
		topic: 'Rest Parameters',
		category: 'Functions',
		level: 'Intermediate',
	},

	{
		topic: 'Spread Operator',
		category: 'Functions',
		level: 'Intermediate',
	},

	{
		topic: 'Callback Functions',
		category: 'Functions',
		level: 'Intermediate',
	},

	{
		topic: 'Higher Order Functions',
		category: 'Functions',
		level: 'Intermediate',
	},

	{
		topic: 'Closures',
		category: 'Functions',
		level: 'Advanced',
	},

	// ARRAYS
	{
		topic: 'Creating Arrays',
		category: 'Arrays',
		level: 'Beginner',
	},

	{
		topic: 'Array Index',
		category: 'Arrays',
		level: 'Beginner',
	},

	{
		topic: 'push()',
		category: 'Arrays',
		level: 'Beginner',
	},

	{
		topic: 'pop()',
		category: 'Arrays',
		level: 'Beginner',
	},

	{
		topic: 'shift()',
		category: 'Arrays',
		level: 'Beginner',
	},

	{
		topic: 'unshift()',
		category: 'Arrays',
		level: 'Beginner',
	},

	{
		topic: 'slice()',
		category: 'Arrays',
		level: 'Intermediate',
	},

	{
		topic: 'splice()',
		category: 'Arrays',
		level: 'Intermediate',
	},

	{
		topic: 'forEach()',
		category: 'Arrays',
		level: 'Beginner',
	},

	{
		topic: 'map()',
		category: 'Arrays',
		level: 'Intermediate',
	},

	{
		topic: 'filter()',
		category: 'Arrays',
		level: 'Intermediate',
	},

	{
		topic: 'find()',
		category: 'Arrays',
		level: 'Intermediate',
	},

	{
		topic: 'some() and every()',
		category: 'Arrays',
		level: 'Intermediate',
	},

	{
		topic: 'reduce()',
		category: 'Arrays',
		level: 'Intermediate',
	},

	{
		topic: 'sort()',
		category: 'Arrays',
		level: 'Intermediate',
	},

	// OBJECTS
	{
		topic: 'Creating Objects',
		category: 'Objects',
		level: 'Beginner',
	},

	{
		topic: 'Object Properties',
		category: 'Objects',
		level: 'Beginner',
	},

	{
		topic: 'Object Methods',
		category: 'Objects',
		level: 'Beginner',
	},

	{
		topic: 'Dot vs Bracket Notation',
		category: 'Objects',
		level: 'Beginner',
	},

	{
		topic: 'Nested Objects',
		category: 'Objects',
		level: 'Intermediate',
	},

	{
		topic: 'Object.keys()',
		category: 'Objects',
		level: 'Intermediate',
	},

	{
		topic: 'Object.values()',
		category: 'Objects',
		level: 'Intermediate',
	},

	{
		topic: 'Object.entries()',
		category: 'Objects',
		level: 'Intermediate',
	},

	{
		topic: 'Object Destructuring',
		category: 'Objects',
		level: 'Intermediate',
	},

	// DOM
	{
		topic: 'What is the DOM?',
		category: 'DOM',
		level: 'Beginner',
	},

	{
		topic: 'document.querySelector()',
		category: 'DOM',
		level: 'Beginner',
	},

	{
		topic: 'querySelectorAll()',
		category: 'DOM',
		level: 'Beginner',
	},

	{
		topic: 'getElementById()',
		category: 'DOM',
		level: 'Beginner',
	},

	{
		topic: 'textContent',
		category: 'DOM',
		level: 'Beginner',
	},

	{
		topic: 'innerHTML',
		category: 'DOM',
		level: 'Beginner',
	},

	{
		topic: 'style property',
		category: 'DOM',
		level: 'Beginner',
	},

	{
		topic: 'classList',
		category: 'DOM',
		level: 'Intermediate',
	},

	{
		topic: 'createElement()',
		category: 'DOM',
		level: 'Intermediate',
	},

	{
		topic: 'append()',
		category: 'DOM',
		level: 'Intermediate',
	},

	{
		topic: 'remove()',
		category: 'DOM',
		level: 'Intermediate',
	},

	{
		topic: 'DOM Traversal',
		category: 'DOM',
		level: 'Intermediate',
	},

	{
		topic: 'parentElement',
		category: 'DOM',
		level: 'Intermediate',
	},

	{
		topic: 'children',
		category: 'DOM',
		level: 'Intermediate',
	},

	// EVENTS
	{
		topic: 'What is an Event?',
		category: 'Events',
		level: 'Beginner',
	},

	{
		topic: 'click Event',
		category: 'Events',
		level: 'Beginner',
	},

	{
		topic: 'input Event',
		category: 'Events',
		level: 'Beginner',
	},

	{
		topic: 'change Event',
		category: 'Events',
		level: 'Beginner',
	},

	{
		topic: 'submit Event',
		category: 'Events',
		level: 'Beginner',
	},

	{
		topic: 'keydown and keyup',
		category: 'Events',
		level: 'Beginner',
	},

	{
		topic: 'addEventListener()',
		category: 'Events',
		level: 'Beginner',
	},

	{
		topic: 'event object',
		category: 'Events',
		level: 'Intermediate',
	},

	{
		topic: 'event.target',
		category: 'Events',
		level: 'Intermediate',
	},

	{
		topic: 'event.currentTarget',
		category: 'Events',
		level: 'Intermediate',
	},

	{
		topic: 'preventDefault()',
		category: 'Events',
		level: 'Intermediate',
	},

	{
		topic: 'Event Bubbling',
		category: 'Events',
		level: 'Intermediate',
	},

	{
		topic: 'Event Capturing',
		category: 'Events',
		level: 'Advanced',
	},

	{
		topic: 'Event Delegation',
		category: 'Events',
		level: 'Advanced',
	},

	{
		topic: 'stopPropagation()',
		category: 'Events',
		level: 'Advanced',
	},

	{
		topic: 'Event Phase',
		category: 'Events',
		level: 'Advanced',
	},

	{
		topic: 'addEventListener(type, function, true)',
		category: 'Events',
		level: 'Advanced',
	},

	// ASYNC JAVASCRIPT
	{
		topic: 'Synchronous vs Asynchronous JavaScript',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'setTimeout()',
		category: 'Async',
		level: 'Beginner',
	},

	{
		topic: 'setInterval()',
		category: 'Async',
		level: 'Beginner',
	},

	{
		topic: 'Callback Functions',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'Callback Hell',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'Promises',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'Promise States',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'then()',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'catch()',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'finally()',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'async / await',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'try / catch with async',
		category: 'Async',
		level: 'Intermediate',
	},

	{
		topic: 'Promise.all()',
		category: 'Async',
		level: 'Advanced',
	},

	// FETCH / API
	{
		topic: 'What is an API?',
		category: 'API',
		level: 'Beginner',
	},

	{
		topic: 'HTTP Basics',
		category: 'API',
		level: 'Beginner',
	},

	{
		topic: 'GET vs POST',
		category: 'API',
		level: 'Beginner',
	},

	{
		topic: 'PUT vs PATCH',
		category: 'API',
		level: 'Intermediate',
	},

	{
		topic: 'DELETE Request',
		category: 'API',
		level: 'Beginner',
	},

	{
		topic: 'fetch()',
		category: 'API',
		level: 'Intermediate',
	},

	{
		topic: 'JSON',
		category: 'API',
		level: 'Beginner',
	},

	{
		topic: 'HTTP Status Codes',
		category: 'API',
		level: 'Beginner',
	},

	{
		topic: 'API Error Handling',
		category: 'API',
		level: 'Intermediate',
	},

	// IMPORTANT INTERVIEW BASICS
	{
		topic: 'Hoisting',
		category: 'Interview',
		level: 'Intermediate',
	},

	{
		topic: 'Scope',
		category: 'Interview',
		level: 'Intermediate',
	},

	{
		topic: 'Global vs Local Scope',
		category: 'Interview',
		level: 'Beginner',
	},

	{
		topic: 'Function Scope',
		category: 'Interview',
		level: 'Intermediate',
	},

	{
		topic: 'Block Scope',
		category: 'Interview',
		level: 'Intermediate',
	},

	{
		topic: 'Lexical Scope',
		category: 'Interview',
		level: 'Advanced',
	},

	{
		topic: 'Closure',
		category: 'Interview',
		level: 'Advanced',
	},

	{
		topic: 'this Keyword',
		category: 'Interview',
		level: 'Intermediate',
	},

	{
		topic: 'call() vs apply() vs bind()',
		category: 'Interview',
		level: 'Advanced',
	},

	{
		topic: 'Shallow Copy vs Deep Copy',
		category: 'Interview',
		level: 'Intermediate',
	},

	{
		topic: 'Spread vs Rest Operator',
		category: 'Interview',
		level: 'Intermediate',
	},

	{
		topic: 'null vs undefined',
		category: 'Interview',
		level: 'Beginner',
	},

	{
		topic: 'NaN',
		category: 'Interview',
		level: 'Beginner',
	},

	{
		topic: 'undefined vs not defined',
		category: 'Interview',
		level: 'Intermediate',
	},

	// ADVANCED - DON'T IGNORE
	{
		topic: 'Prototype',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Prototype Chain',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: '__proto__ vs prototype',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Constructor Functions',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'new Keyword',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Execution Context',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Call Stack',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Event Loop',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Microtask Queue',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Macrotask Queue',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Debouncing',
		category: 'Advanced JS',
		level: 'Advanced',
	},

	{
		topic: 'Throttling',
		category: 'Advanced JS',
		level: 'Advanced',
	},
];

// Random Fuction

function getRandomTopic() {
	const randomIndex = Math.floor(Math.random() * topics.length);
	return topics[randomIndex];
}

document.querySelector('#btn').addEventListener('click', () => {
	const selectedTopic = getRandomTopic();

	document.querySelector('#topic').textContent = selectedTopic.topic;

	document.querySelector('#category').textContent =
		`Category: ${selectedTopic.category}`;

	document.querySelector('#level').textContent =
		`Level: ${selectedTopic.level}`;
});
