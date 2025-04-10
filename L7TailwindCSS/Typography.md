Tailwind CSS, typography properties can be controlled using various utility classes. Here's a comprehensive list of typography-related properties and their corresponding Tailwind classes:

1. Font Family
font-sans – Sans-serif stack

font-serif – Serif stack

font-mono – Monospace stack

2. Font Size
text-xs – 0.75rem (12px)

text-sm – 0.875rem (14px)

text-base – 1rem (16px)

text-lg – 1.125rem (18px)

text-xl – 1.25rem (20px)

text-2xl – 1.5rem (24px)

text-3xl – 1.875rem (30px)

text-4xl – 2.25rem (36px)

text-5xl – 3rem (48px)

text-6xl – 3.75rem (60px)

text-7xl – 4.5rem (72px)

text-8xl – 6rem (96px)

text-9xl – 8rem (128px)

3. Font Weight
font-thin – 100

font-extralight – 200

font-light – 300

font-normal – 400

font-medium – 500

font-semibold – 600

font-bold – 700

font-extrabold – 800

font-black – 900

4. Letter Spacing (Tracking)
tracking-tighter – -0.05em

tracking-tight – -0.025em

tracking-normal – 0em

tracking-wide – 0.025em

tracking-wider – 0.05em

tracking-widest – 0.1em

5. Line Height (Leading)
leading-3 – 0.75rem (12px)

leading-4 – 1rem (16px)

leading-5 – 1.25rem (20px)

leading-6 – 1.5rem (24px)

leading-7 – 1.75rem (28px)

leading-8 – 2rem (32px)

leading-9 – 2.25rem (36px)

leading-10 – 2.5rem (40px)

leading-none – 1

leading-tight – 1.25

leading-snug – 1.375

leading-normal – 1.5

leading-relaxed – 1.625

leading-loose – 2

6. Text Alignment
text-left – Left-aligned

text-center – Center-aligned

text-right – Right-aligned

text-justify – Justified

text-start – Start-aligned (RTL/LTR aware)

text-end – End-aligned (RTL/LTL aware)

7. Text Decoration
underline – Underline

overline – Overline

line-through – Strikethrough

no-underline – No decoration

8. Text Decoration Style
decoration-solid – Solid line

decoration-double – Double line

decoration-dotted – Dotted line

decoration-dashed – Dashed line

decoration-wavy – Wavy line

9. Text Decoration Thickness
decoration-auto – Automatic thickness

decoration-from-font – Uses font's thickness

decoration-0 – 0px

decoration-1 – 1px

decoration-2 – 2px

decoration-4 – 4px

decoration-8 – 8px

10. Text Underline Offset
underline-offset-auto – Automatic offset

underline-offset-0 – 0px

underline-offset-1 – 1px

underline-offset-2 – 2px

underline-offset-4 – 4px

underline-offset-8 – 8px

11. Text Transform
uppercase – UPPERCASE

lowercase – lowercase

capitalize – Capitalize Words

normal-case – Normal text

12. Text Overflow
truncate – Truncates with ellipsis

text-ellipsis – Adds ellipsis

text-clip – Clips text

13. Text Indent
indent-0 – 0px

indent-px – 1px

indent-0.5 – 0.125rem (2px)

indent-1 – 0.25rem (4px)

indent-1.5 – 0.375rem (6px)

indent-2 – 0.5rem (8px)

indent-2.5 – 0.625rem (10px)

indent-3 – 0.75rem (12px)

indent-3.5 – 0.875rem (14px)

indent-4 – 1rem (16px)

indent-5 – 1.25rem (20px)

indent-6 – 1.5rem (24px)

indent-7 – 1.75rem (28px)

indent-8 – 2rem (32px)

indent-9 – 2.25rem (36px)

indent-10 – 2.5rem (40px)

indent-11 – 2.75rem (44px)

indent-12 – 3rem (48px)

indent-14 – 3.5rem (56px)

indent-16 – 4rem (64px)

indent-20 – 5rem (80px)

indent-24 – 6rem (96px)

indent-28 – 7rem (112px)

indent-32 – 8rem (128px)

indent-36 – 9rem (144px)

indent-40 – 10rem (160px)

indent-44 – 11rem (176px)

indent-48 – 12rem (192px)

indent-52 – 13rem (208px)

indent-56 – 14rem (224px)

indent-60 – 15rem (240px)

indent-64 – 16rem (256px)

indent-72 – 18rem (288px)

indent-80 – 20rem (320px)

indent-96 – 24rem (384px)

14. Vertical Alignment
align-baseline – Baseline

align-top – Top

align-middle – Middle

align-bottom – Bottom

align-text-top – Text top

align-text-bottom – Text bottom

align-sub – Subscript

align-super – Superscript

15. Whitespace & Word Handling
whitespace-normal – Normal whitespace

whitespace-nowrap – No wrapping

whitespace-pre – Preserve spaces/line breaks

whitespace-pre-line – Collapse spaces, keep line breaks

whitespace-pre-wrap – Preserve spaces and line breaks

break-normal – Normal word breaks

break-words – Break long words

break-all – Break all words

break-keep – Avoid word breaks

16. Hyphens
hyphens-none – No hyphenation

hyphens-manual – Manual hyphenation (&shy;)

hyphens-auto – Automatic hyphenation

17. Text Color
text-{color}-{shade} – e.g., text-red-500, text-gray-800

text-black – #000

text-white – #fff

text-transparent – Transparent

text-current – Inherits color

18. Text Opacity
text-opacity-{value} – e.g., text-opacity-50 (0.5 opacity)

19. Placeholder Text
placeholder-{color}-{shade} – e.g., placeholder-gray-400

placeholder-opacity-{value} – e.g., placeholder-opacity-50

20. List Style Type
list-none – No bullets/numbers

list-disc – Bulleted list

list-decimal – Numbered list

21. List Style Position
list-inside – Inside position

list-outside – Outside position

22. Typography Plugin (@tailwindcss/typography)
If using the official typography plugin, you can apply prose classes for rich text:

html
Copy
<article class="prose prose-lg prose-headings:text-blue-600">
  <!-- Markdown/HTML content -->
</article>
Run HTML
prose – Base styling

prose-sm, prose-lg, prose-xl, prose-2xl – Size variants

prose-{color} – e.g., prose-red, prose-indigo

Customizable via @layer components in config.

Example Usage:
html
Copy
<h1 class="text-4xl font-bold tracking-tight text-gray-900">
  Hello World
</h1>
<p class="text-lg leading-relaxed text-gray-600">
  This is a sample paragraph with custom typography.
</p>
Run HTML
This covers most of Tailwind's typography utilities. You can extend or customize them in tailwind.config.js. Let me know if you need details on any specific part! 🚀
