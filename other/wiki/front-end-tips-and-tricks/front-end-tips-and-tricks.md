# Front-End Tips and Tricks
This wiki page is a collection of front-end tips, tricks, workarounds, and/or other unique solutions.

<br>

# Tabs {.tabset}

## MISC

<br>

**Markdown Tables**

Are you tired of creating Wiki.js tables manually?

https://www.tablesgenerator.com/markdown_tables

<br>
<hr>

**Best Git Trick Ever!**

Or, How I learned to love local config files!

https://compiledsuccessfully.dev/git-skip-worktree/

<br>
<hr>

**Simplist Web Server?**

Any folder on your Mac can be a Web Server:

https://lifehacker.com/start-a-simple-web-server-from-any-directory-on-your-ma-496425450

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

## BOOTSTRAP

<br>

**Bootstrap 5.3 Documentation** 

https://getbootstrap.com/docs/5.3/getting-started/introduction/

<br>
<hr>

**Bootstrap Container Classes**

Bootstrap has two container classes: `container` and `container-fluid` but some developers, including Sitecore developers, often misuse them. In general, you should only need to use `container` or `container-fluid` **once per page** at a very high level in the dom hierarchy. Use `container-fluid` when you need to support full-width, edge-to-edge designs. Use `container` when you want Bootstrap's out-of-the-box horizontal spacing (which prevents content from crashing into the edges of small devices, while also limiting content to comfortable reading widths on larger devices and desktops).

<br>
<hr>

**Bootstrap Utility Classes**

Some developers, including front-end developers, forget that Bootstrap is much more than a responsive grid system. As such, they tend to overuse the grid, often in situations where a grid is not even necessary. There is a large number of responsive utility classes to easily handle tedious CSS tasks (without using the grid and without adding custom CSS or media queries to your code).

Example:

```html
<div class="mx-3 mx-md-5 px-3 px-md-5">Example Line</div>
```

| Class   | Description                                                     |
|---------|-----------------------------------------------------------------|
| mx-3    | sets level 3 horizontal margin on all devices                   |
| mx-md-5 | sets level 5 horizontal margin at the md breakpoint and higher  |
| px-3    | sets level 3 horizontal padding on all devices                  |
| px-md-5 | sets level 5 horizontal padding at the md breakpoint and higher |

https://getbootstrap.com/docs/5.3/layout/utilities/

https://getbootstrap.com/docs/5.3/utilities/display/

https://getbootstrap.com/docs/5.3/utilities/flex/

https://getbootstrap.com/docs/5.3/utilities/spacing/

https://getbootstrap.com/docs/5.3/utilities/visibility/

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

## HTML

<br>

**HTML to JSX Tool**

https://transform.tools/html-to-jsx

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

## CSS

<br>

**Take Advantage of Hardware Acceleration**

Use `will-change` to make transitions smoother with hardware acceleration. On device/browser combinations that do not support it, this will simply be ignored and have no negative impact.

```html
<!-- Without will-change (no hardware acceleration). -->
<style>
  .my-class
  {
    color: yellow;
    background: red;
    transition: color, background 400ms;
  }
</style>

<div class="my-class">...</div>
```

```html
<!-- With will-change (use hardware acceleration if available). -->
<style>
  .my-class
  {
    color: yellow;
    background: red;
    will-change: color, background;
    transition: color, background 400ms;
  }
</style>

<div class="my-class">...</div>
```

<br>
<hr>

**Until Attr is Fully Supported**

Until Attr is fully supported, this works nicely!

![attr-workaround.png](/solutions/development/front-end-tips-and-tricks/attr-workaround.png)

https://css-tricks.com/css-attr-function-got-nothin-custom-properties/

https://caniuse.com/css3-attr

<br>
<hr>

**Stop Decoration Interference**

Sometimes we need to add decorative items onto elements (i.e. non-standard dropdown list arrows, etc.) but doing this can interfere with access to the element. Use `pointer-events: none;` to remove the interference of decorative items.

https://stackoverflow.com/questions/25777599/css-after-content-below-a-select-element-causes-click-not-to-work

<br>
<hr>

**The Ultimate Guide to the CSS Cascade**

It doesn't get any more specific than this:

https://2019.wattenberger.com/blog/css-cascade

<br>
<hr>

**All About Pixels**

Have you heard that pixel units (px) shouldn't be used in CSS because it breaks accessibility?

https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility

<br>
<hr>

**Keyframe Animations in CSS**

Great interactive guide to keyframe animations in CSS.

https://www.joshwcomeau.com/animation/keyframe-animations

<br>
<hr>

**Transitions in CSS**

Great interactive guide to CSS transitions.

https://www.joshwcomeau.com/animation/css-transitions

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

## JAVASCRIPT

<br>

**Easy Querystring Values**

Easiest way to get querystring values in JS:

```javascript
var a = new URL( window.location.href );
var b = new URLSearchParams( a.search );
var c = b.get( 'size' );
var d = b.get( 'page' );
```

<br>
<hr>

**Node Version Manager for Windows**

Easily manage multiple versions of Node.js in Windows.

This is *THE* Windows version to use, not the same as the original nvm.

https://github.com/coreybutler/nvm-windows

<br>
<hr>

**Dark Mode**

https://www.codemzy.com/blog/dark-mode-to-static-site

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

## DESIGN TOOLS

<br>

**Dynamic Fluid SVG Backgrounds**

https://fffuel.co/ffflux/

<br>
<hr>

**Dynamic Generated Shape Backgrounds**

https://fffuel.co/dddepth/

<br>
<hr>

**Accessible Colors Tool**

https://color.review/

<br>
<hr>

**Currated Colors Tool**

https://www.happyhues.co/

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>
<hr>

**Topic Name**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.
