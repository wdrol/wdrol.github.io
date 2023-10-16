# How to Build a Responsive Web Page
This is a deep-dive on how to build a responsive web page from scratch. In Parts One and Two below, we'll keep it technology-agnostic and focus solely on the Html and Css. In Part Three, we'll add in extras like Bootstrap, Sitecore, SXA, React, and Angular to learn how those technologies impact our implementation.

1. Design
2. Implementation
3. Enhancements

<br>

## Part One - Design
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

**Explain desktop-first vs. mobile-first design strategies.**

<br>

## Part Two - Implementation
Part Two is the implementation of the design. In this part, we're going to focus solely on the Html and Css building blocks. We might need a little bit of Javascript too, but it will be minimal. In Part Three below, we'll learn how technologies like Bootstrap, Angular, and React impact what we're building here.

<br>

### Wireframe Pass
Let's begin with a wireframe pass to build out the page at low detail. This version will be a simple blocky page, with black and white text and no images. By eliminating distrations, we can understand how blocks on the page behave as we transition between mobile and desktop sizes in the browser. This will also minimize the amount of CSS needed at first.

By the end of this section, we'll have a fully functional responsive page. In the next section, the detail pass, we'll add all the other parts like font sizes, colors, backgrounds, images, and icons.

So let's begin. If you want to follow along, create a new text file named `wireframe.html` and save it to your desktop or anywhere convenient. Open the file with your favorite text editor (you do not need Visual Studio or anything fancy). If you double-click the file, it should launch in your default browser.

> The code listings below can be copy/pasted. Hover over the code. You should see a `Copy` button appear in the upper-right corner of the listing.
{.is-info}

Here is the HTML version of Hello World. This is bare minimum for any web page. If you have a look at this in your browser, your see the word **Wireframe** on an empty page. The most important part is line number `5` below. This meta tag is required on every page that needs responsive coding.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Wireframe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>Wireframe</h1>
    </body>
</html>
```

<br>

Let's add some styles and content.

Lines `6 to 12` below is the CSS, and lines `15 to 20` is the content. Normally, we would put the CSS into its own text file, but for simplicity, we'll keep everything in one file for now. Later, in a cleanup pass, we'll learn how to be more formal and prepare our code for a web server.

Line `9` below sets the default font size for the page to 18 pixels. For simplicity, we're going to use pixel units (px) during the wireframe pass. Units are a big topic. If you want to learn more, here's a great blog post: https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/

Line `10` below sets the default font for the page to `sans-serif`, which is intentionally non-specific. This forces the browser to make the decision about which sans serif font it should actually use. Like just about everything else in this section, it's a detail we don't need to care about yet, so let the browser decide.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Wireframe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body
            {
                font-size: 18px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        <h1>Wireframe</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et doa aliqua.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            Excepteur sint occaecat cupidatat non proident, ub officia deserunt mollid est laborum.
        </p>
    </body>
</html>
```

<br>

> From this point foward, to save vertical space, we may not show the entire file in every code listing. The line numbers on-screen may not match your local file. It should be clear from context, however, where the code belongs in your file.
{.is-info}

<br>

Now let's use the standard HTML `header`, `main`, and `footer` tags to make our content more structured and semantically correct. Here's a partial listing of the body section.

```html
<body>
    <header>
        <strong>Header</strong>
    </header>

    <main>
        <h1>Wireframe</h1>
        <p>...</p>
    </main>

    <footer>
        <strong>Footer</strong>
    </footer>
</body>
```

<br>

To make the page look more like a wireframe, we first add the `wire` style to the CSS.

```html
<style>
    ...

    .wire
    {
        padding: 20px 30px;
        margin-bottom: 20px; 
        border: 2px dashed #ccc;
    }
</style>
```

<br>

Then we add the `wire` class to the HTML (basically anywhere we want something to look like a big wireframe block).

```html
<body>
    <header class="wire">
        <strong>Header</strong>
    </header>

    <main class="wire">
        <h1>Wireframe</h1>
        <p>...</p>
    </main>

    <footer class="wire">
        <strong>Footer</strong>
    </footer>
</body>
```

<br>

Out-of-the-box, the `h1` text seems quite large, so we can adjust that with an `h1` style.

```html
<style>
    ...
  
    h1
    {
        margin: 0;
        font-size: 24px;
    }
</style>
```

<br>

The page should now look like this.

![wire-01.png](/solutions/development/build-a-responsive-web-page/wire-01.png =900x)
<br>

Here is the full code listing so far.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Wireframe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body
        {
            font-size: 18px;
            font-family: sans-serif;
        }

        .wire
        {
            padding: 20px 30px;
            margin-bottom: 20px; 
            border: 2px dashed #ccc;
        }

        h1
        {
            margin: 0;
            font-size: 24px;
        }
    </style>
</head>

<body>
    <header class="wire">
        <strong>Header</strong>
    </header>

    <main class="wire">
        <h1>Wireframe</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et doa aliqua.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            Excepteur sint occaecat cupidatat non proident, ub officia deserunt mollid est laborum.
        </p>
    </main>

    <footer class="wire">
        <strong>Footer</strong>
    </footer>
</body>
</html>
```

<br>

Now let's work on the header a little bit. If we examine the design, there are basically four content groups in the header. Essentially two blocks of content on the left and right in each of the two rows. We can model that easily with our existing wire class and some new HTML in the header.

```html
<header class="wire">
    <div>
        <div class="wire">Row 1 Left</div>
        <div class="wire">Row 1 Right</div>
    </div>
    <div>
        <div class="wire">Row 2 Left</div>
        <div class="wire">Row 2 Right</div>
    </div>
</header>
```
<br>

If you refresh your browser, you'll notice that the new header blocks are stacked up vertically, which isn't quite what we hoped for. To make the blocks match the design, we need to add a new style named `flex-space-between` to the CSS.

```html
<style>
    ...
  
    .flex-space-between
    {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
```

<br>

Then we add the `flex-space-between` class to the HTML.

```html
<header class="wire">
    <div class="flex-space-between">
        <div class="wire">Row 1 Left</div>
        <div class="wire">Row 1 Right</div>
    </div>
    <div class="flex-space-between">
        <div class="wire">Row 2 Left</div>
        <div class="wire">Row 2 Right</div>
    </div>
</header>
````

<br>

> The three lines inside the `flex-space-between` class are from Flexbox, which is a huge topic beyond the scope of this Wiki page (btw, Bootstrap is also built with Flexbox). If you want to understand Flexbox once and for all, Josh Comeau has the world's best interactive guide to Flexbox at: https://www.joshwcomeau.com/css/interactive-guide-to-flexbox
{.is-info}

<br>

Here's our page now. Flexbox to the rescue!

![wire-02.png](/solutions/development/build-a-responsive-web-page/wire-02.png =900x)

<br>

While looking at the designs, we noticed the content inside `main` and `footer` need some updates. Let's add a new style named `max-content-width` to the CSS.

```html
<style>
    ...

    .max-content-width
    {
        margin: 0 auto;
        max-width: 1400px;
    }
</style>
```

<br>

Then add a `max-content-width` wrapper directly inside `main` and `footer` below. This will help match the design and provide a more comfortable reading width on large desktop monitors.

```html
<body>
    ...

    <main class="wire">
        <div class="max-content-width">
            <h1>Wireframe</h1>
            <p>...</p>
        </div>
    </main>

    <footer class="wire">
        <div class="max-content-width">
            <strong>Footer</strong>
        </div>
    </footer>
</body>
```

<br>

Let's also add some footer blocks to get closer to the design.

```html
<style>
    ...

    .center
    {
      	text-align: center;
    }
</style>

<footer class="wire">
    <div class="max-content-width">
        <div class="flex-space-between">
            <div class="wire">
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
            </div>
            <div class="wire">
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
                <div><a href="#">Link Text Here</a></div>
            </div>
        </div>
        <div class="wire center">Social Media Icons Here</div>
        <div class="wire center">&copy;2023 Copyright Line Information</div>
    </div>
</footer>
```

The page should now look like this on laptop screens or small desktops.

![wire-03.png](/solutions/development/build-a-responsive-web-page/wire-03.png =900x)

<br>

And like this on large desktop screens.

![wire-04.png](/solutions/development/build-a-responsive-web-page/wire-04.png)

<br>

We're getting close to a complete desktop wireframe page. We need to do four more things before we can begin the mobile wireframes and responsive coding:

1. Change `flex-space-between` to `flex-centered` in the footer.
1. Change the header text to something more descriptive (we'll see why soon).
1. Add a `max-content-width` wrapper to the header.
1. Add some `width` cheats to the header boxes.

<br>

For brevity, here are the first three changes.

```html
<style>
  ...

  .flex-centered
  {
      gap: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>

<header class="wire">
    <div class="max-content-width">
        <div class="flex-space-between">
            <div class="wire">Logo Here</div>
            <div class="wire">Links and Search Here</div>
        </div>
        <div class="flex-space-between">
            <div class="wire">Primary Menu Links Here</div>
            <div class="wire">CTA Button</div>
        </div>
    </div>
</header>

<footer class="wire">
    <div class="max-content-width">
        <div class="flex-centered">
          	...
        </div>
        ...
    </div>
</footer>
```

<br>

For the fourth change, we need to add some `width` cheats to our existing header boxes. We can steal the width measurements from the design and hard-code them into the boxes. We're intentionally cheating here so that we don't have to enter the real content and spend time styling it. To hard-code the widths, we can use inline styles directly in the HTML (see lines `4`, `5`, `8`, and `9` below).

```html
<header class="wire">
    <div class="max-content-width">
        <div class="flex-space-between">
            <div class="wire" style="width: 200px;">Logo Here</div>
            <div class="wire" style="width: 500px;">Links and Search Here</div>
        </div>
        <div class="flex-space-between">
            <div class="wire" style="width: 640px;">Primary Menu Links Here</div>
            <div class="wire" style="width: 120px;">CTA Button</div>
        </div>
    </div>
</header>
```

<br>

> In production level code, we would not use inline styles like the header example above (we'll remove them later during the detail pass). If you enjoy reading heated opinions, google why inline styles are bad.
{.is-info}

<br>

So what is the point of cheating the widths like this? One of the basic tenets in responsive coding is letting the content drive the code, not the other way around. If you have a look at the two screens below, notice the amount of horizontal white space between the Primary Menu Links and the CTA Button. There is plenty of available space at the large desktop size, but we've run out of room at the laptop size and smaller. We wouldn't have noticed this without the width cheats, unless we had entered the real content and styles, which defeats the purpose of a fast wireframe pass.

Now that we can see in the browser where we run out of space in the header, we can adapt and switch over to the mobile wireframes (which we haven't coded yet). The important part is that we're not inventing the switch over point first and hoping the content will fit, we're letting the content dictate when we switch to mobile.

Large Desktop Screen

![wire-06.png](/solutions/development/build-a-responsive-web-page/wire-06.png)

<br>

Average Laptop Screen

![wire-07.png](/solutions/development/build-a-responsive-web-page/wire-07.png =900x)

<br>

So looking at laptop screen above, it appears that we're running out of horizontal space in the header somewhere close to 1000 pixels wide and smaller. The precise number isn't hugely important, we're not locked down once we choose a number. Because I've worked with Bootstrap, I know one of its built-in breakpoints is 991 pixels, so let's start with that and see how close we get. Since our design stategy is desktop-first, we can add the following CSS media query to respond conditionally like this:

```html
@media( max-width: 991px )
{
    your css selector here
    {
        your css rules here
    }
}
```

You can think of line `1` above as an if statement that reads:

*if your browswer or device is less than 991 pixels wide, do the following.*

For the header, we're only concerned with two things, are we in desktop mode or mobile mode? We can model this in CSS with two new classes and a media query like so:

```html
    header .mobile  { display: none;  }
    header .desktop { display: block; }

    @media( max-width: 991px )
    {
        header .mobile  { display: block; }
        header .desktop { display: none;  }
    }
```

Lines `1` and `2` above set the default state (desktop visible), while lines `6` and `7` set the responsive state (mobile visible). If we added these classes to the HTML, we'd get something like this:

```html
<header class="wire">
    <div class="max-content-width">
        <div class="desktop">
            ...
        </div>
        <div class="mobile">
            <strong>Mobile Header Version</strong>
        </div>
    </div>
</header>
```

<br>

If we insert the mobile content for line 7 above, the header would look like the following. This code is similar to everything we've seen so far. The `mobile-menu-button` and `mobile-menu-content` classes are new, however, and we'll need them in just a little bit:

```html
<header class="wire">
    <div class="max-content-width">
        <div class="desktop">
            ...
        </div>
        <div class="mobile">
            <div class="flex-space-between">
                <div class="wire">Logo Here</div>
                <div class="wire mobile-menu-button">Menu</div>
            </div>
            <div class="wire mobile-menu-content">
                <div class="flex-centered">
                    <div class="wire">CTA Button</div>
                    <div class="wire">Links and Search Here</div>
                </div>
                <div class="wire center">Primary Menu Links Here</div>
            </div>
        </div>
    </div>
</header>
```

<br>

Ok, that's a lot of changes. Here is the full code listing so far:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Wireframe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body
        {
            font-size: 18px;
            font-family: sans-serif;
        }

        .wire
        {
            padding: 20px 30px;
            margin-bottom: 20px; 
            border: 2px dashed #ccc;
        }

        h1
        {
            margin: 0;
            font-size: 24px;
        }

        .flex-space-between
        {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .flex-centered
        {
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .max-content-width
        {
            margin: 0 auto;
            max-width: 1400px;
        }

        .center { text-align: center; }

        header .mobile  { display: none;  }
        header .desktop { display: block; }

        @ media( max-width: 991px )
        {
            header .mobile  { display: block; }
            header .desktop { display: none;  }
        }
    </style>
</head>

<body>
    <header class="wire">
        <div class="max-content-width">
            <div class="desktop">
                <div class="flex-space-between">
                    <div class="wire" style="width: 200px;">Logo Here</div>
                    <div class="wire" style="width: 500px;">Links and Search Here</div>
                </div>
                <div class="flex-space-between">
                    <div class="wire" style="width: 640px;">Primary Menu Links Here</div>
                    <div class="wire" style="width: 120px;">CTA Button</div>
                </div>
            </div>
            <div class="mobile">
                <div class="flex-space-between">
                    <div class="wire">Logo Here</div>
                    <div class="wire mobile-menu-button">Menu</div>
                </div>
                <div class="wire mobile-menu-content">
                    <div class="flex-centered">
                        <div class="wire">CTA Button</div>
                        <div class="wire">Links and Search Here</div>
                    </div>
                    <div class="wire center">Primary Menu Links Here</div>
                </div>
            </div>
        </div>
    </header>

    <main class="wire">
        <div class="max-content-width">
            <h1>Wireframe</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et doa aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                Excepteur sint occaecat cupidatat non proident, ub officia deserunt mollid est laborum.
            </p>
        </div>
    </main>

    <footer class="wire">
        <div class="max-content-width">
            <div class="flex-centered">
                <div class="wire">
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                </div>
                <div class="wire">
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                </div>
            </div>
            <div class="wire center">Social Media Icons Here</div>
            <div class="wire center">&copy;2023 Copyright Line Information</div>
        </div>
    </footer>
</body>
</html>
```

<br>

> If you're paying close attention, you may have noticed a syntax error in the previous code listing at line `52`. I had to put a space between the `@` character and `media` to avoid an unfortunate Wiki display issue. If you're copy/pasting the code from this Wiki, you'll need to remove the space so it reads `@media`.
{.is-warning}

<br>

So this is what the page looks like when the browser width drops below 991 pixels. If you made it this far, congratulations, this is your first bit of responsive coding success!

![wire-08.png](/solutions/development/build-a-responsive-web-page/wire-08.png =900x)

<br>

Add javascript to toggle mobile menu content

```html
<!DOCTYPE html>
<html>
<head>
    <title>Wireframe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body
        {
            font-size: 18px;
            font-family: sans-serif;
        }

        .wire
        {
            padding: 20px 30px;
            margin-bottom: 20px; 
            border: 2px dashed #ccc;
        }

        h1
        {
            margin: 0;
            font-size: 24px;
        }

        .flex-space-between
        {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .flex-centered
        {
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .max-content-width
        {
            margin: 0 auto;
            max-width: 1400px;
        }

        .center { text-align: center; }

        header .mobile  { display: none;  }
        header .desktop { display: block; }

        @ media( max-width: 991px )
        {
            header .mobile  { display: block; }
            header .desktop { display: none;  }
        }

        .mobile-menu-content
        {
            height: 0;
            padding: 0;
            border: none;
            opacity: .25;
            overflow: hidden;
            will-change: all;
            margin-bottom: 0;
            transition: all 400ms;
        }

        .mobile-menu-content.expanded
        {
            opacity: 1;
            height: unset;
            padding: 20px 30px;
            margin-bottom: 20px; 
            border: 2px dashed #ccc;
        }
    </style>
</head>

<body>
    <header class="wire">
        <div class="max-content-width">
            <div class="desktop">
                <div class="flex-space-between">
                    <div class="wire" style="width: 200px;">Logo Here</div>
                    <div class="wire" style="width: 500px;">Links and Search Here</div>
                </div>
                <div class="flex-space-between">
                    <div class="wire" style="width: 640px;">Primary Menu Links Here</div>
                    <div class="wire" style="width: 120px;">CTA Button</div>
                </div>
            </div>
            <div class="mobile">
                <div class="flex-space-between">
                    <div class="wire">Logo Here</div>
                    <div class="wire mobile-menu-button">Menu</div>
                </div>
                <div class="wire mobile-menu-content">
                    <div class="flex-centered">
                        <div class="wire">CTA Button</div>
                        <div class="wire">Links and Search Here</div>
                    </div>
                    <div class="wire center">Primary Menu Links Here</div>
                </div>
            </div>
        </div>
    </header>

    <main class="wire">
        <div class="max-content-width">
            <h1>Wireframe</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et doa aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                Excepteur sint occaecat cupidatat non proident, ub officia deserunt mollid est laborum.
            </p>
        </div>
    </main>

    <footer class="wire">
        <div class="max-content-width">
            <div class="flex-centered">
                <div class="wire">
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                </div>
                <div class="wire">
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                </div>
            </div>
            <div class="wire center">Social Media Icons Here</div>
            <div class="wire center">&copy;2023 Copyright Line Information</div>
        </div>
    </footer>

    <script>
        document.addEventListener( 'DOMContentLoaded' , function()
        {
            const button  = document.getElementsByClassName( 'mobile-menu-button'  )
            const content = document.getElementsByClassName( 'mobile-menu-content' )

            //----- Handle mobile menu button clicks.
            if ( button.length > 0 && content.length > 0 )
            {
                button[0].addEventListener( 'click' , function()
                {
                    //----- Toggle mobile menu content.
                    content[0].classList.toggle( 'expanded' )
                })
            }
        })
    </script>
</body>
</html>
```

<br>

Add responsive code to footer

```html
<!DOCTYPE html>
<html>
<head>
    <title>Wireframe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body
        {
            font-size: 18px;
            font-family: sans-serif;
        }

        .wire
        {
            padding: 20px 30px;
            margin-bottom: 20px; 
            border: 2px dashed #ccc;
        }

        h1
        {
            margin: 0;
            font-size: 24px;
        }

        .flex-space-between
        {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .flex-centered
        {
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @ media( max-width: 768px )
        {
            .footer-links
            {
                flex-direction: column;
            }
        }

        .max-content-width
        {
            margin: 0 auto;
            max-width: 1400px;
        }

        .center { text-align: center; }

        header .mobile  { display: none;  }
        header .desktop { display: block; }

        @ media( max-width: 991px )
        {
            header .mobile  { display: block; }
            header .desktop { display: none;  }
        }

        .mobile-menu-content
        {
            height: 0;
            padding: 0;
            border: none;
            opacity: .25;
            overflow: hidden;
            will-change: all;
            margin-bottom: 0;
            transition: all 400ms;
        }

        .mobile-menu-content.expanded
        {
            opacity: 1;
            height: unset;
            padding: 20px 30px;
            margin-bottom: 20px; 
            border: 2px dashed #ccc;
        }
    </style>
</head>

<body>
    <header class="wire">
        <div class="max-content-width">
            <div class="desktop">
                <div class="flex-space-between">
                    <div class="wire" style="width: 200px;">Logo Here</div>
                    <div class="wire" style="width: 500px;">Links and Search Here</div>
                </div>
                <div class="flex-space-between">
                    <div class="wire" style="width: 640px;">Primary Menu Links Here</div>
                    <div class="wire" style="width: 120px;">CTA Button</div>
                </div>
            </div>
            <div class="mobile">
                <div class="flex-space-between">
                    <div class="wire">Logo Here</div>
                    <div class="wire mobile-menu-button">Menu</div>
                </div>
                <div class="wire mobile-menu-content">
                    <div class="flex-centered">
                        <div class="wire">CTA Button</div>
                        <div class="wire">Links and Search Here</div>
                    </div>
                    <div class="wire center">Primary Menu Links Here</div>
                </div>
            </div>
        </div>
    </header>

    <main class="wire">
        <div class="max-content-width">
            <h1>Wireframe</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et doa aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                Excepteur sint occaecat cupidatat non proident, ub officia deserunt mollid est laborum.
            </p>
        </div>
    </main>

    <footer class="wire">
        <div class="max-content-width">
            <div class="footer-links flex-centered">
                <div class="wire">
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                </div>
                <div class="wire">
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                    <div><a href="#">Link Text Here</a></div>
                </div>
            </div>
            <div class="wire center">Social Media Icons Here</div>
            <div class="wire center">&copy;2023 Copyright Line Information</div>
        </div>
    </footer>

    <script>
        document.addEventListener( 'DOMContentLoaded' , function()
        {
            const button  = document.getElementsByClassName( 'mobile-menu-button'  )
            const content = document.getElementsByClassName( 'mobile-menu-content' )

            //----- Handle mobile menu button clicks.
            if ( button.length > 0 && content.length > 0 )
            {
                button[0].addEventListener( 'click' , function()
                {
                    //----- Toggle mobile menu content.
                    content[0].classList.toggle( 'expanded' )
                })
            }
        })
    </script>
</body>
</html>
```

<br>

Screenshot

![wire-09.png](/solutions/development/build-a-responsive-web-page/wire-09.png =700x)

<br>

### Detail Pass (high fidelity)
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>

### Cleanup Pass (web server)
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>

## Part Three - Enhancements
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>

### Content Management Systems
**Sitecore and SXA** - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

> Sitecore SXA uses Bootstrap as the default front-end framework. Behind the scenes, Sitecore has made some unfortunate decisions that can lead to improperly generated Bootstrap HTML. If you feel like you're in a losing battle with SXA or your designs are suffering, this how-to gives you some options: [optimize-sxa-and-bootstrap](/Solutions/Development/optimize-sxa-and-bootstrap) 
{.is-info}

<br>

### Front-End Frameworks

**Bootstrap** - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.

<br>

### Application Frameworks

**Angular and React** - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.