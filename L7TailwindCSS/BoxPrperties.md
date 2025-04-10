All Box Model Properties in Tailwind CSS
Tailwind CSS provides comprehensive utilities for working with the CSS box model. Here's a complete reference to all box-related properties:

1. Display
html
Copy
<div class="block">...</div>
<div class="inline">...</div>
<div class="inline-block">...</div>
<div class="flex">...</div>
<div class="inline-flex">...</div>
<div class="grid">...</div>
<div class="inline-grid">...</div>
<div class="table">...</div>
<div class="inline-table">...</div>
<div class="table-caption">...</div>
<div class="table-cell">...</div>
<div class="hidden">...</div>
Run HTML
2. Width
html
Copy
<div class="w-0">...</div>   <!-- 0px -->
<div class="w-px">...</div>  <!-- 1px -->
<div class="w-1">...</div>   <!-- 0.25rem (4px) -->
<div class="w-2">...</div>   <!-- 0.5rem (8px) -->
...
<div class="w-96">...</div>  <!-- 24rem (384px) -->
<div class="w-auto">...</div>
<div class="w-full">...</div> <!-- 100% -->
<div class="w-screen">...</div> <!-- 100vw -->
<div class="w-min">...</div>  <!-- min-content -->
<div class="w-max">...</div>  <!-- max-content -->
<div class="w-fit">...</div>  <!-- fit-content -->
Run HTML
3. Height
html
Copy
<div class="h-0">...</div>
<div class="h-px">...</div>
<div class="h-1">...</div>
...
<div class="h-96">...</div>
<div class="h-auto">...</div>
<div class="h-full">...</div> <!-- 100% -->
<div class="h-screen">...</div> <!-- 100vh -->
<div class="h-min">...</div>
<div class="h-max">...</div>
<div class="h-fit">...</div>
Run HTML
4. Padding
html
Copy
<div class="p-0">...</div>   <!-- 0px -->
<div class="p-px">...</div>  <!-- 1px -->
<div class="p-1">...</div>   <!-- 0.25rem (4px) -->
...
<div class="p-64">...</div>  <!-- 16rem (256px) -->

<!-- Directional padding -->
<div class="pt-4">...</div>  /* padding-top */
<div class="pr-4">...</div>  /* padding-right */
<div class="pb-4">...</div>  /* padding-bottom */
<div class="pl-4">...</div>  /* padding-left */
<div class="px-4">...</div>  /* padding-left + padding-right */
<div class="py-4">...</div>  /* padding-top + padding-bottom */
Run HTML
5. Margin
html
Copy
<div class="m-0">...</div>
<div class="m-px">...</div>
<div class="m-1">...</div>
...
<div class="m-64">...</div>
<div class="m-auto">...</div> /* auto margin */

<!-- Directional margin -->
<div class="mt-4">...</div>  /* margin-top */
<div class="mr-4">...</div>  /* margin-right */
<div class="mb-4">...</div>  /* margin-bottom */
<div class="ml-4">...</div>  /* margin-left */
<div class="mx-4">...</div>  /* margin-left + margin-right */
<div class="my-4">...</div>  /* margin-top + margin-bottom */
Run HTML
6. Borders
Border Width
html
Copy
<div class="border">...</div>      /* 1px */
<div class="border-0">...</div>   /* 0px */
<div class="border-2">...</div>   /* 2px */
<div class="border-4">...</div>   /* 4px */
<div class="border-8">...</div>   /* 8px */

<!-- Directional borders -->
<div class="border-t">...</div>
<div class="border-r">...</div>
<div class="border-b">...</div>
<div class="border-l">...</div>
Run HTML
Border Color
html
Copy
<div class="border-gray-200">...</div>
<div class="border-red-500">...</div>
<!-- All Tailwind colors available -->
Run HTML
Border Radius
html
Copy
<div class="rounded-none">...</div>  /* 0px */
<div class="rounded-sm">...</div>   /* 0.125rem (2px) */
<div class="rounded">...</div>      /* 0.25rem (4px) */
<div class="rounded-md">...</div>   /* 0.375rem (6px) */
<div class="rounded-lg">...</div>   /* 0.5rem (8px) */
<div class="rounded-xl">...</div>   /* 0.75rem (12px) */
<div class="rounded-2xl">...</div>  /* 1rem (16px) */
<div class="rounded-3xl">...</div>  /* 1.5rem (24px) */
<div class="rounded-full">...</div> /* 9999px */

<!-- Directional rounding -->
<div class="rounded-t-lg">...</div>
<div class="rounded-r-lg">...</div>
<div class="rounded-b-lg">...</div>
<div class="rounded-l-lg">...</div>
<div class="rounded-tl-lg">...</div>
<div class="rounded-tr-lg">...</div>
<div class="rounded-br-lg">...</div>
<div class="rounded-bl-lg">...</div>
Run HTML
7. Box Sizing
html
Copy
<div class="box-border">...</div>  /* border-box */
<div class="box-content">...</div> /* content-box */
Run HTML
8. Overflow
html
Copy
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>
<div class="overflow-x-auto">...</div>
<div class="overflow-y-hidden">...</div>
Run HTML
9. Position
html
Copy
<div class="static">...</div>
<div class="fixed">...</div>
<div class="absolute">...</div>
<div class="relative">...</div>
<div class="sticky">...</div>
Run HTML
10. Z-Index
html
Copy
<div class="z-0">...</div>
<div class="z-10">...</div>
...
<div class="z-50">...</div>
<div class="z-auto">...</div>
Run HTML
11. Visibility
html
Copy
<div class="visible">...</div>
<div class="invisible">...</div>
Run HTML
12. Box Shadow
html
Copy
<div class="shadow-sm">...</div>
<div class="shadow">...</div>
<div class="shadow-md">...</div>
<div class="shadow-lg">...</div>
<div class="shadow-xl">...</div>
<div class="shadow-2xl">...</div>
<div class="shadow-inner">...</div>
<div class="shadow-none">...</div>
Run HTML
13. Aspect Ratio
html
Copy
<div class="aspect-auto">...</div>
<div class="aspect-square">...</div>
<div class="aspect-video">...</div>
Run HTML
14. Object Fit
html
Copy
<img class="object-contain">...</img>
<img class="object-cover">...</img>
<img class="object-fill">...</img>
<img class="object-none">...</img>
<img class="object-scale-down">...</img>
Run HTML
15. Object Position
html
Copy
<img class="object-bottom">...</img>
<img class="object-center">...</img>
<img class="object-left">...</img>
<img class="object-left-bottom">...</img>
<img class="object-left-top">...</img>
<img class="object-right">...</img>
<img class="object-right-bottom">...</img>
<img class="object-right-top">...</img>
<img class="object-top">...</img>
Run HTML
These utilities cover all aspects of the CSS box model in Tailwind CSS. You can combine them to create complex layouts while maintaining consistency in your design system.

in all have html box properties
(Due to technical issues, the search service is temporarily unavailable.)

Complete HTML Box Model Properties with Tailwind CSS Examples
Here's a comprehensive guide to all HTML box model properties with their corresponding Tailwind CSS utilities:

1. Display Properties
html
Copy
<!-- Basic display types -->
<div class="block">Block element</div>
<span class="inline">Inline element</span>
<span class="inline-block">Inline-block element</span>
<div class="flex">Flex container</div>
<div class="inline-flex">Inline flex container</div>
<div class="grid">Grid container</div>
<div class="inline-grid">Inline grid container</div>

<!-- Table display types -->
<div class="table">Table</div>
<div class="table-row">Table row</div>
<div class="table-cell">Table cell</div>

<!-- Special display types -->
<div class="contents">Contents (removes container)</div>
<div class="hidden">Hidden element</div>
Run HTML
2. Box Sizing & Dimensions
Width
html
Copy
<div class="w-0">0 width</div>
<div class="w-full">100% width</div>
<div class="w-screen">100vw width</div>
<div class="w-min">Min-content width</div>
<div class="w-max">Max-content width</div>
<div class="w-fit">Fit-content width</div>
<div class="w-1/2">50% width</div>
<div class="w-[200px]">Custom 200px width</div>
Run HTML
Height
html
Copy
<div class="h-0">0 height</div>
<div class="h-full">100% height</div>
<div class="h-screen">100vh height</div>
<div class="h-min">Min-content height</div>
<div class="h-max">Max-content height</div>
<div class="h-fit">Fit-content height</div>
<div class="h-1/2">50% height</div>
<div class="h-[200px]">Custom 200px height</div>
Run HTML
Box Sizing
html
Copy
<div class="box-border">Border-box sizing</div>
<div class="box-content">Content-box sizing</div>
Run HTML
3. Spacing (Margin & Padding)
Margin
html
Copy
<div class="m-4">All margins (1rem)</div>
<div class="mx-4 my-2">Horizontal and vertical margins</div>
<div class="mt-4 mr-2 mb-1 ml-3">Directional margins</div>
<div class="-m-4">Negative margin</div>
<div class="m-auto">Auto margin</div>
Run HTML
Padding
html
Copy
<div class="p-4">All padding (1rem)</div>
<div class="px-4 py-2">Horizontal and vertical padding</div>
<div class="pt-4 pr-2 pb-1 pl-3">Directional padding</div>
Run HTML
4. Borders
Border Style
html
Copy
<div class="border-solid">Solid border</div>
<div class="border-dashed">Dashed border</div>
<div class="border-dotted">Dotted border</div>
<div class="border-double">Double border</div>
<div class="border-none">No border</div>
Run HTML
Border Width
html
Copy
<div class="border">1px border</div>
<div class="border-2">2px border</div>
<div class="border-t-4">4px top border</div>
<div class="border-x-0">No horizontal borders</div>
Run HTML
Border Color
html
Copy
<div class="border-gray-500">Gray border</div>
<div class="border-red-500">Red border</div>
<div class="border-blue-500/50">Semi-transparent blue border</div>
Run HTML
Border Radius
html
Copy
<div class="rounded-none">No rounding</div>
<div class="rounded-md">Medium rounding</div>
<div class="rounded-full">Full rounding (circle)</div>
<div class="rounded-t-lg">Large top rounding</div>
<div class="rounded-br-xl">Extra large bottom-right rounding</div>
Run HTML
5. Positioning
Position Types
html
Copy
<div class="static">Static position</div>
<div class="relative">Relative position</div>
<div class="absolute">Absolute position</div>
<div class="fixed">Fixed position</div>
<div class="sticky">Sticky position</div>
Run HTML
Positioning Values
html
Copy
<div class="top-0">Top 0</div>
<div class="right-4">Right 1rem</div>
<div class="bottom-[10px]">Bottom 10px</div>
<div class="left-full">Left 100%</div>
<div class="inset-0">All edges 0</div>
<div class="inset-x-4">Left and right 1rem</div>
Run HTML
Z-Index
html
Copy
<div class="z-0">Base z-index</div>
<div class="z-10">Higher z-index</div>
<div class="z-50">Very high z-index</div>
<div class="z-auto">Auto z-index</div>
Run HTML
6. Overflow
html
Copy
<div class="overflow-auto">Auto overflow</div>
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-visible">Visible overflow</div>
<div class="overflow-scroll">Scroll overflow</div>
<div class="overflow-x-auto">Horizontal auto overflow</div>
<div class="overflow-y-hidden">Vertical hidden overflow</div>
Run HTML
7. Visibility & Opacity
html
Copy
<div class="visible">Visible</div>
<div class="invisible">Invisible (keeps space)</div>
<div class="opacity-0">Fully transparent</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-100">Fully opaque</div>
Run HTML
8. Box Shadow
html
Copy
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Regular shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2XL shadow</div>
<div class="shadow-inner">Inner shadow</div>
<div class="shadow-none">No shadow</div>
Run HTML
9. Aspect Ratio
html
Copy
<div class="aspect-square">Square (1:1)</div>
<div class="aspect-video">Video (16:9)</div>
<div class="aspect-[4/3]">Custom 4:3</div>
Run HTML
10. Object Fit & Position (for replaced elements)
html
Copy
<img class="object-contain" src="..." alt="Contain">
<img class="object-cover" src="..." alt="Cover">
<img class="object-fill" src="..." alt="Fill">
<img class="object-none" src="..." alt="None">
<img class="object-scale-down" src="..." alt="Scale down">

<img class="object-left-top" src="..." alt="Left top">
<img class="object-center" src="..." alt="Center">
<img class="object-right-bottom" src="..." alt="Right bottom">
Run HTML
11. Float & Clear
html
Copy
<div class="float-left">Float left</div>
<div class="float-right">Float right</div>
<div class="float-none">No float</div>

<div class="clear-left">Clear left</div>
<div class="clear-right">Clear right</div>
<div class="clear-both">Clear both</div>
<div class="clear-none">No clear</div>
Run HTML
12. Isolation
html
Copy
<div class="isolate">Isolated stacking context</div>
<div class="isolation-auto">Auto isolation</div>
Run HTML
13. Mix Blend Mode
html
Copy
<div class="mix-blend-normal">Normal blend</div>
<div class="mix-blend-multiply">Multiply blend</div>
<div class="mix-blend-screen">Screen blend</div>
<div class="mix-blend-overlay">Overlay blend</div>
Run HTML
14. Background Blend Mode
html
Copy
<div class="bg-blend-normal">Normal background blend</div>
<div class="bg-blend-multiply">Multiply background blend</div>
<div class="bg-blend-screen">Screen background blend</div>
Run HTML
This comprehensive list covers all box-related properties available in HTML with their corresponding Tailwind CSS utilities. You can combine these classes to create complex layouts while maintaining consistency in your design system.
