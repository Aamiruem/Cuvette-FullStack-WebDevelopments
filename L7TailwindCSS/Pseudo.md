Tailwind CSS Pseudo-Class Utilities
Tailwind provides a comprehensive set of utilities for styling elements in different states using pseudo-classes. Here's a complete reference of all pseudo-class variants available in Tailwind CSS:

State Variants
1. Interactive States
hover: - Styles on mouse hover

html
Copy
<button class="hover:bg-blue-600">Hover me</button>
Run HTML
focus: - Styles when element is focused

html
Copy
<input class="focus:ring-2 focus:ring-blue-500">
Run HTML
active: - Styles when element is being activated/clicked

html
Copy
<button class="active:scale-95">Click me</button>
Run HTML
visited: - Styles visited links

html
Copy
<a href="#" class="visited:text-purple-600">Link</a>
Run HTML
2. Form States
checked: - Styles checked radio/checkbox

html
Copy
<input type="checkbox" class="checked:bg-blue-500">
Run HTML
disabled: - Styles disabled form elements

html
Copy
<button disabled class="disabled:opacity-50">Submit</button>
Run HTML
enabled: - Styles enabled form elements

html
Copy
<input class="enabled:border-blue-500">
Run HTML
required: - Styles required form fields

html
Copy
<input required class="required:border-red-500">
Run HTML
valid: - Styles valid form inputs

html
Copy
<input class="valid:border-green-500">
Run HTML
invalid: - Styles invalid form inputs

html
Copy
<input class="invalid:border-red-500">
Run HTML
placeholder-shown: - Styles when placeholder is visible

html
Copy
<input placeholder="Name" class="placeholder-shown:border-gray-300">
Run HTML
3. Structural & Positional
first: - Styles the first child

html
Copy
<li class="first:font-bold">First item</li>
Run HTML
last: - Styles the last child

html
Copy
<li class="last:border-b-0">Last item</li>
Run HTML
odd: - Styles odd-numbered children

html
Copy
<tr class="odd:bg-gray-100">...</tr>
Run HTML
even: - Styles even-numbered children

html
Copy
<tr class="even:bg-gray-50">...</tr>
Run HTML
only: - Styles when element is the only child

html
Copy
<div class="only:block">Only child</div>
Run HTML
target: - Styles the target element of URL fragment

html
Copy
<div id="section" class="target:bg-yellow-100">...</div>
Run HTML
default: - Styles default option elements

html
Copy
<option class="default:font-bold">Option</option>
Run HTML
4. Group & Peer States
group-hover: - Styles when parent group is hovered

html
Copy
<div class="group">
  <div class="group-hover:bg-blue-500"></div>
</div>
Run HTML
group-focus: - Styles when parent group is focused

html
Copy
<div class="group">
  <div class="group-focus:ring-2"></div>
</div>
Run HTML
peer-hover: - Styles when sibling peer is hovered

html
Copy
<input class="peer">
<div class="peer-hover:block hidden"></div>
Run HTML
peer-focus: - Styles when sibling peer is focused

html
Copy
<input class="peer">
<div class="peer-focus:block hidden"></div>
Run HTML
5. Motion & Media
motion-reduce: - Styles when reduced motion is enabled

html
Copy
<div class="motion-reduce:animate-none"></div>
Run HTML
motion-safe: - Styles when reduced motion is not enabled

html
Copy
<div class="motion-safe:animate-spin"></div>
Run HTML
dark: - Styles in dark mode

html
Copy
<div class="dark:bg-gray-800"></div>
Run HTML
light: - Styles in light mode

html
Copy
<div class="light:bg-white"></div>
Run HTML
portrait: - Styles in portrait orientation

html
Copy
<div class="portrait:flex-col"></div>
Run HTML
landscape: - Styles in landscape orientation

html
Copy
<div class="landscape:flex-row"></div>
Run HTML
6. Custom Pseudo-Elements
before: - Styles the ::before pseudo-element

html
Copy
<div class="before:content-['*'] before:text-red-500"></div>
Run HTML
after: - Styles the ::after pseudo-element

html
Copy
<div class="after:content-[''] after:block after:w-4 after:h-4"></div>
Run HTML
placeholder: - Styles input placeholder text

html
Copy
<input placeholder="Email" class="placeholder:text-gray-400">
Run HTML
selection: - Styles selected text

html
Copy
<p class="selection:bg-blue-200 selection:text-blue-900"></p>
Run HTML
marker: - Styles list markers

html
Copy
<ul class="marker:text-red-500"></ul>
Run HTML
file: - Styles file input button

html
Copy
<input type="file" class="file:border file:border-gray-300">
Run HTML
Combining Pseudo-Classes
You can chain multiple variants:

html
Copy
<button class="hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700">
  Click me
</button>
Run HTML
Enabling Variants
Some variants need to be enabled in tailwind.config.js:

js
Copy
module.exports = {
  variants: {
    extend: {
      textColor: ['active'],
      backgroundColor: ['active'],
      // etc.
    }
  }
}
This covers all pseudo-class variants available in Tailwind CSS. The framework's utility-first approach allows you to combine these with any other utility classes for powerful, state-based styling.
