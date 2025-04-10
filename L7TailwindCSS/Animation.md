Here's a comprehensive guide to Tailwind CSS animations, covering built-in utilities, customization, best practices, and practical examples:

1. Built-in Animation Utilities
Tailwind provides four ready-to-use animations with utility classes:

Class	Effect	Use Case	Example
animate-spin	Continuous 360° rotation	Loading indicators	<svg class="animate-spin h-5 w-5"> 18
animate-ping	Scale/fade pulse	Notification badges	<span class="animate-ping bg-red-500 rounded-full"></span> 19
animate-pulse	Opacity fade in/out	Skeleton loaders	<div class="animate-pulse bg-gray-200 h-4"></div> 17
animate-bounce	Vertical bounce	Call-to-action buttons	<svg class="animate-bounce">↓</svg> 19
animate-none	Disables animations	Accessibility	<div class="motion-reduce:animate-none"> 8
Key Features:

Responsive: Prefix with breakpoints (e.g., md:animate-spin) 8.

Motion-Safe: Use motion-safe:animate-spin for users with reduced motion preferences 19.

2. Custom Animations
Extend Tailwind’s defaults by defining custom keyframes in tailwind.config.js:

Step 1: Define Keyframes
js
Copy
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 2s ease-out forwards',
      }
    }
  }
}
Step 2: Apply Custom Classes
html
Copy
<div class="animate-wiggle">😃</div>
<div class="animate-fadeIn">Content fades in</div>
Run HTML
279

3. Transition Utilities
For smooth property changes, combine with transition-* classes:

Utility	Purpose	Example
transition-all	Animates all properties	hover:scale-105 transition-all duration-300
transition-colors	Smooth color changes	hover:bg-blue-600 transition-colors
duration-*	Sets timing (e.g., duration-500 = 500ms)	duration-1000
delay-*	Adds delays (e.g., delay-200)	delay-300
ease-*	Timing functions (e.g., ease-in-out)	ease-linear
Example:

html
Copy
<button class="transition-all duration-500 hover:scale-110 hover:bg-blue-600">
  Hover Me
</button>
Run HTML
69

4. Advanced Techniques
A. Plugins for Extended Animations
tailwindcss-animate: Adds 20+ animations (e.g., animate-fade-in).

js
Copy
plugins: [require('tailwindcss-animate')]
Animate.css Integration:

html
Copy
<div class="animate__animated animate__bounceIn"></div>
Run HTML
9

B. Scroll-Based Animations
Use libraries like AOS with Tailwind:

html
Copy
<div data-aos="fade-up" class="bg-gray-100 p-4">
  Animates on scroll
</div>
Run HTML
9

C. Accessibility
Disable animations for reduced motion:

html
Copy
<div class="animate-spin motion-reduce:animate-none">
Run HTML
18

5. Best Practices
Performance: Prefer transform and opacity over layout-triggering properties 6.

Subtlety: Avoid excessive motion (e.g., use duration-200 for quick effects) 9.

Purpose: Animations should guide users (e.g., button feedback) 7.

Testing: Check on mobile devices for smoothness 9.

Example Gallery
Loading Spinner:

html
Copy
<div class="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
Run HTML
9

Notification Ping:

html
Copy
<span class="animate-ping absolute h-3 w-3 bg-red-500 rounded-full"></span>
Run HTML
8

Hover Grow Button:

html
Copy
<button class="transition-transform hover:scale-105 duration-300">
  Click
</button>
Run HTML
6

For 40+ animation examples, see Prismic’s guide 2.

Tailwind’s animation system balances simplicity and flexibility, making it ideal for both quick prototypes and polished productions. Customize via configs or plugins to match your design needs.
CSS Animations with Tailwind CSS
Tailwind CSS provides utility classes for creating animations without writing custom CSS. Here's how to implement animations using Tailwind:

Basic Usage
1. Built-in Animations
Tailwind includes several basic animations:

html
Copy
<!-- Spin animation -->
<div class="animate-spin">🌀</div>

<!-- Pulse animation -->
<div class="animate-pulse">Loading...</div>

<!-- Bounce animation -->
<button class="animate-bounce">Click me</button>
Run HTML
2. Customizing Animation Duration
Control how long animations take:

html
Copy
<div class="animate-spin duration-1000">🌀</div> <!-- 1 second -->
<div class="animate-pulse duration-2000">...</div> <!-- 2 seconds -->
Run HTML
Available duration classes: duration-75, duration-100, duration-150, duration-200, duration-300, duration-500, duration-700, duration-1000

3. Animation Delay
Add delays before animations start:

html
Copy
<div class="animate-bounce delay-300">...</div>
Run HTML
Available delay classes: delay-75, delay-100, delay-150, delay-200, delay-300, delay-500, delay-700, delay-1000

Custom Animations
1. Adding Custom Animations in Tailwind Config
To add your own animations, modify tailwind.config.js:

js
Copy
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    }
  }
}
Then use them in your HTML:

html
Copy
<div class="animate-fade-in">Fading in...</div>
<div class="animate-slide-up">Sliding up...</div>
Run HTML
2. Animation Iteration Count
Control how many times an animation repeats:

html
Copy
<div class="animate-pulse animate-iteration-3">Pulses 3 times</div>
Run HTML
Hover and Focus States
html
Copy
<button class="hover:animate-pulse focus:animate-bounce">
  Interactive Button
</button>
Run HTML
Transition Utilities
For simple transitions between states:

html
Copy
<button class="transition duration-300 ease-in-out hover:scale-110">
  Hover to scale
</button>
Run HTML
Best Practices
Use sparingly - Too many animations can be distracting

Consider performance - Stick to transforms and opacity for smooth animations

Test on mobile - Some animations may need to be disabled on mobile

Prefers-reduced-motion - Respect user preferences:

css
Copy
@media (prefers-reduced-motion: reduce) {
  .animate-spin,
  .animate-pulse,
  .animate-bounce {
    animation: none;
  }
}
Tailwind makes it easy to add subtle animations that enhance user experience without requiring custom CSS.
