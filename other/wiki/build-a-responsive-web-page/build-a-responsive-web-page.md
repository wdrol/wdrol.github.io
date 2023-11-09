> **Prerequisites** basic knowledge of Html and Css, a browser and text editor. There is a small amount of Javascript in this article, but just in one section.

# How to Build a Responsive Web Page
This is a deep-dive on how to build a responsive web page from scratch. In Parts One and Two below, we'll focus on the design, HTML, and CSS. In Part Three, we'll add enhancements like Bootstrap and Content Management Systems (CMS) to learn how those technologies impact our code.

<br>

# Tabs {.tabset}
## Part One - Design
There are two major design strategies for responsive web sites.

**1. Mobile-First Designs** target mobile layouts first (starting with smallest mobile devices) with the goal of creating an optimal mobile user experience. As more and more real-estate becomes available (tablets, laptops, and desktops) additional patterns are added to create optimal experiences at those sizes. Mobile-first is trying to create a win-win situation for everyone.

**2. Desktop-First Designs** target desktop layouts first (starting with largest desktop sizes) with the goal of defining all possible content that can fit on large platforms. As less and less real-estate becomes available (smaller desktops, laptops, tablets, and small mobile devices), content is removed and/or rearranged to fit on those platforms. With desktop-first, there's no guarantee the user experience will be optimal on smaller platforms and mobile devices.

For better or worst, most of the designs we see today are **desktop-first**. They seem to be easier to create when people are short on time or budget. Here are the desktop-first designs for the page we'll be coding in Part Two:

<br>

**Large Desktop Design**

![detail-07.png](/solutions/development/build-a-responsive-web-page/detail-07.png =900x)

<br>

**Laptop Design**

![detail-08.png](/solutions/development/build-a-responsive-web-page/detail-08.png =900x)

<br>

**Tablet Design**

![detail-09.png](/solutions/development/build-a-responsive-web-page/detail-09.png =700x)

<br>

**Tablet Design (menu expanded)**

![detail-10.png](/solutions/development/build-a-responsive-web-page/detail-10.png =700x)

<br>

**Mobile Design**

![detail-12.png](/solutions/development/build-a-responsive-web-page/detail-12.png =400x)

<br>

**Mobile Design (menu expanded)**

![detail-11.png](/solutions/development/build-a-responsive-web-page/detail-11.png =400x)

<br>

## Part Two - Coding
In this part, we're going to focus solely on the Html and Css building blocks. We might need a little bit of Javascript too, but it will be minimal. In Part Three, we'll learn how other technologies like Bootstrap and Content Management Systems (CMS) impact what we're building here.

<br>

### Wireframe Pass
Let's begin with a wireframe pass to build out the page at low detail. This version will be a simple blocky page, with black and white text and no images. By eliminating distrations, we can better understand how the page behaves as we transition between mobile and desktop sizes. This will also minimize the amount of CSS needed in the beginning.

By the end of this section, we'll have a fully functional responsive page. In the next section, the detail pass, we'll add all the other parts like font sizes, colors, backgrounds, images, and icons.

So let's begin. If you want to follow along, create a new text file named `wireframe.html` and save it to your desktop or anywhere convenient. Open the file with your favorite text editor (you do not need Visual Studio or anything fancy). If you double-click the file, it should launch in your default browser.

> The code listings below can be copy/pasted. Hover over the code. You should see a `Copy` button appear in the upper-right corner of the listing.
{.is-info}

Here is the HTML version of Hello World. This is the bare minimum for any responsive web page. If you have a look at this in your browser, you should see the word **Wireframe** on an empty page. The most important part is line number `5` below. This meta tag is required on every page that needs responsive coding.

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

Lines `6 to 12` below is the CSS and lines `15 to 20` is the content. Normally, we would put the CSS into its own text file, but for simplicity, we'll keep everything in one file for now. Later, in a cleanup pass, we'll learn how to prepare our code for a web server with a more structured file system.

Line `9` below sets the default font size for the page to 18 pixels. For simplicity, we're going to use pixel units (px) during the wireframe pass. Units are a big topic. If you want to learn more, here's a great blog post: https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/

Line `10` below sets the default font for the page to `sans-serif`, which is intentionally non-specific. This forces the browser to make the decision about which sans serif font it should actually use. Like just about everything else in the wireframe pass, it's a detail we don't care about yet, so let the browser decide.

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
      gap: 30px;
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

So what is the point of cheating the widths like this? One of the basic tenets in responsive coding is letting the content drive the code, not the other way around. If you have a look at the two screens below, notice the amount of horizontal white space between the Primary Menu Links and the CTA Button. There is plenty of available space at the large desktop size, but we run out of room at the laptop size and smaller. We wouldn't have noticed this without the width cheats, unless we had entered the real content and styles, which defeats the purpose of a fast wireframe pass.

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

You can think of line `1` above like an if statement that reads:

*if your browswer or device is less than or equal to 991 pixels wide, do the following.*

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
            gap: 30px;
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

        @media( max-width: 991px )
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

So this is what the page looks like when the browser width is 991 pixels or smaller. Give it a try to see how it updates as you change the width of your browser. If you made it this far and haven't built responsive web pages before, congratulations on your first success!

![wire-08.png](/solutions/development/build-a-responsive-web-page/wire-08.png =900x)

<br>

Now let's have a closer look at the mobile content. The design requires an expandable mobile content section, so initially, it needs to be hidden. When we click the mobile menu button, it should reveal the content. If we click it again, it should hide the content. To do this, we'll need some Javascript and a little more CSS. For the Javascript, we need to add a `<script>...</script>` block near the end of the document, just before the closing `</body>` tag, as shown below.

Lines `4` to `14` define the initial, hidden state of the mobile content. We're using a transition of 400ms (milliseconds) at line `13` to ensure a smooth reveal when the button is clicked. Lines `16` to `23` define the visible state of the content.

For the Javascript, line `30` ensures we do not run the code until the DOM is ready. Line `38` is the button click handler. When we click the button, what really happens is that line `41` dynamically adds and removes a class named `expand` to the `mobile-menu-content` div in the DOM. If you inspect the page, you can actually see the `expand` class appear and disappear on that line of HTML when you click the button. Because the CSS already has a definition for the expanded state at line `16`, it all seems to work like magic.

Give it a try. When you click the mobile menu button, it should now show and hide the mobile content with a nice smooth transition.

```html
<style>
    ...

    .mobile-menu-content
    {
        height: 0;
        padding: 0;
        opacity: 0;
        border: none;
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

<body>
    ...

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

There's one last thing we need to finish the wireframe pass. In the footer, there are two large blocks of links next to each other horizontally. One smaller mobile devices, the design calls for these blocks to be stacked vertically. Here's the CSS to handle that.

```html
@media( max-width: 768px )
{
    .footer-links
    {
        flex-direction: column;
    }
}
```

Line `5` above sets the flex-direction to column (the default value is row) which causes the two blocks to stack vertically.

The `768px` on line `1` above is a guess and may need to be adjusted later. We could have put in width cheats just like we did with the header, but we won't pursue that here and now. Feel free to try that on your own as an exercise. In the next section, the detail pass, there will be plenty of opportunities to adjust the `768px` if needed.

Here is the final code listing for the wireframe pass. Congratulations! You should now have a fully functional responsive page. In the next section, the detail pass, we'll update each of the wire blocks to make the page match the design.

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
            gap: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media( max-width: 768px )
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

        @media( max-width: 991px )
        {
            header .mobile  { display: block; }
            header .desktop { display: none;  }
        }

        .mobile-menu-content
        {
            height: 0;
            padding: 0;
            opacity: 0;
            border: none;
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

Here is the finished wireframe page at large desktop size.

![wire-12.png](/solutions/development/build-a-responsive-web-page/wire-12.png =800x)

<br>

Wireframe page at laptop or tablet size.

![wire-10.png](/solutions/development/build-a-responsive-web-page/wire-10.png =600x)

<br>

Wireframe page at mobile size.

![wire-11.png](/solutions/development/build-a-responsive-web-page/wire-11.png =400x)

<br>

### Detail Pass
Now for the fun part! We've already done the hard work in the wireframe pass above. The rest is making things look nice and maybe tweaking the responsive code a little bit to match the designs. Let's start by duplicating the `wireframe.html` file from last section. We named the duplicate `detail.html` and changed the title at line number `4` to `Detail`. We can finally begin to add some color to the page, as well as some basic styling and spacing. First, change the body tag style to this:

```html
body
{
    margin: 0;
    font-size: 18px;
    background: #d9fff4;
    font-family: sans-serif;
}
```

Then append the following new CSS to the `style` tag:

```html
<style>
    ...

    a
    {
        color: #555;
        text-decoration: underline;
    }

    footer .footer-links a
    {
        margin: 12px 0;
        display: block;
    }

    .logo
    {
        height: auto;
        max-width: 200px;
        text-decoration: none;
    }

    header , footer
    {
        padding: 20px 0;
        background: #d9fff4;
    }

    header
    {
        border-bottom: 1px solid #888;
    }

    footer
    {
        border-top: 1px solid #888;
    }

    main , .mobile-menu-content
    {
        background: white;
    }

    main
    {
        padding: 40px 0 25px 0;
    }
</style>
```

<br>

Let's remove the `wire` class from `header`, `main`, and `footer`. Just on those three lines only. As you'll see, removing the `wire` class as we go is a nice way to work. When we look at the page in the browser, we can easily see which parts we've updated, and which parts still need some work.

Before:

```html
<header class="wire">...</header>

<main class="wire">...</main>

<footer class="wire">...</footer>
```

After:

```html
<header>...</header>

<main>...</main>

<footer>...</footer>
```

<br>

In the main section, please change the content to this:

```html
<main>
    <div class="max-content-width">
        <h1>About Us</h1>
        <p>
            ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
            commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
        </p>
        <p>
            ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
            commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
        </p>
    </div>
</main>
```

<br>

Finally, let's change the logo HTML in the header (there are two of them, one for desktop, one for mobile) from this:

`<div class="wire">Logo Here</div>`

To this:

`<a href="#"><img class="logo" src="logo.png" alt="logo" /></a>`

You can download the logo here:

https://wdrol.github.io/other/wiki/build-a-responsive-web-page/1-flat/logo.png

<br>

Here is the full code listing so far:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Detail</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body
        {
            margin: 0;
            font-size: 18px;
            background: #d9fff4;
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
            gap: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media( max-width: 768px )
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

        @media( max-width: 991px )
        {
            header .mobile  { display: block; }
            header .desktop { display: none;  }
        }

        .mobile-menu-content
        {
            height: 0;
            padding: 0;
            opacity: 0;
            border: none;
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

        a
        {
            color: #555;
            text-decoration: underline;
        }

        footer .footer-links a
        {
            margin: 12px 0;
            display: block;
        }

        .logo
        {
            height: auto;
            max-width: 200px;
            text-decoration: none;
        }

        header , footer
        {
            padding: 20px 0;
            background: #d9fff4;
        }

        header
        {
            border-bottom: 1px solid #888;
        }

        footer
        {
            border-top: 1px solid #888;
        }

        main , .mobile-menu-content
        {
            background: white;
        }

        main
        {
            padding: 40px 0 25px 0;
        }
    </style>
</head>

<body>
    <header>
        <div class="max-content-width">
            <div class="desktop">
                <div class="flex-space-between">
                    <a href="#"><img class="logo" src="logo.png" alt="logo" /></a>
                    <div class="wire" style="width: 500px;">Links and Search Here</div>
                </div>
                <div class="flex-space-between">
                    <div class="wire" style="width: 640px;">Primary Menu Links Here</div>
                    <div class="wire" style="width: 120px;">CTA Button</div>
                </div>
            </div>
            <div class="mobile">
                <div class="flex-space-between">
                    <a href="#"><img class="logo" src="logo.png" alt="logo" /></a>
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

    <main>
        <div class="max-content-width">
            <h1>About Us</h1>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
        </div>
    </main>

    <footer>
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

The page now looks like this in desktop.

![detail-01.png](/solutions/development/build-a-responsive-web-page/detail-01.png =900x)

<br>

The `footer` needs the least amount of work to finish, so let's tackle that next. Please change the existing footer links media query to the following to ensure proper alignment and spacing.

```html
@media( max-width: 768px )
{
    .footer-links
    {
        display: block;
        text-align: center;
    }

    .footer-links > div
    {
        margin-bottom: 30px;
    }
}
```

We'll need a few other footer styles, let's append these to the `style` tag.

```html
<style>
    ...

    .social , .copyright
    {
        margin: 20px 0;
    }

    .social a
    {
        margin: 0 6px;
    }

    .social img
    {
        width: auto;
        opacity: .75;
        max-height: 40px;
        will-change: opacity;
        transition: opacity 400ms;
    }

    .social img:hover
    {
        opacity: 1;
    }

    .copyright
    {
        color: #555;
        font-size: 14px;
    }
</style>
```

The content in the footer needs some minor updates. Basically, we're removing all of the `wire` classes inside the `footer` tag, and then updating the links and social media icons.

Here is the footer before:

```html
<footer>
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
```

Here is the footer after:

```html
<footer>
    <div class="max-content-width">
        <div class="footer-links flex-centered">
            <div>
                <div><a href="#">Our Partners</a></div>
                <div><a href="#">Our Supporters</a></div>
                <div><a href="#">Foundation Members</a></div>
                <div><a href="#">Additional Group Features</a></div>
                <div><a href="#">Member Portal and Benefits</a></div>
            </div>
            <div>
                <div><a href="#">New for this Year</a></div>
                <div><a href="#">Privacy Information</a></div>
                <div><a href="#">Changes from Last Year</a></div>
                <div><a href="#">Roadmap and Announcements</a></div>
                <div><a href="#">Disclosures and Regulations</a></div>
            </div>
        </div>
        <div class="social center">
            <a href="#"><img src="social-linkedin.png" alt="linkedin" title="linkedin" /></a>
            <a href="#"><img src="social-youtube.png"  alt="youtube"  title="youtube"  /></a>
            <a href="#"><img src="social-facebook.png" alt="facebook" title="facebook" /></a>
        </div>
        <div class="copyright center">&copy;2023 Copyright Information. All rights reserved.</div>
    </div>
</footer>
```

You can download the social media icons here:

https://wdrol.github.io/other/wiki/build-a-responsive-web-page/1-flat/social-youtube.png

https://wdrol.github.io/other/wiki/build-a-responsive-web-page/1-flat/social-linkedin.png

https://wdrol.github.io/other/wiki/build-a-responsive-web-page/1-flat/social-facebook.png

<br>

After these changes, the footer should now match the design from desktop down to mobile:

![detail-02.png](/solutions/development/build-a-responsive-web-page/detail-02.png =900x)

![detail-03.png](/solutions/development/build-a-responsive-web-page/detail-03.png =400x)

<br>

Here is the full code listing so far:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Detail</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body
        {
            margin: 0;
            font-size: 18px;
            background: #d9fff4;
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
            gap: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media( max-width: 768px )
        {
            .footer-links
            {
                display: block;
                text-align: center;
            }

            .footer-links > div
            {
                margin-bottom: 30px;
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

        @media( max-width: 991px )
        {
            header .mobile  { display: block; }
            header .desktop { display: none;  }
        }

        .mobile-menu-content
        {
            height: 0;
            padding: 0;
            opacity: 0;
            border: none;
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

        a
        {
            color: #555;
            text-decoration: underline;
        }

        footer .footer-links a
        {
            margin: 12px 0;
            display: block;
        }

        .logo
        {
            height: auto;
            max-width: 200px;
            text-decoration: none;
        }

        header , footer
        {
            padding: 20px 0;
            background: #d9fff4;
        }

        header
        {
            border-bottom: 1px solid #888;
        }

        footer
        {
            border-top: 1px solid #888;
        }

        main , .mobile-menu-content
        {
            background: white;
        }

        main
        {
            padding: 40px 0 25px 0;
        }

        .social , .copyright
        {
            margin: 20px 0;
        }

        .social a
        {
            margin: 0 6px;
        }

        .social img
        {
            width: auto;
            opacity: .75;
            max-height: 40px;
            will-change: opacity;
            transition: opacity 400ms;
        }

        .social img:hover
        {
            opacity: 1;
        }

        .copyright
        {
            color: #555;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <header>
        <div class="max-content-width">
            <div class="desktop">
                <div class="flex-space-between">
                    <a href="#"><img class="logo" src="logo.png" alt="logo" /></a>
                    <div class="wire" style="width: 500px;">Links and Search Here</div>
                </div>
                <div class="flex-space-between">
                    <div class="wire" style="width: 640px;">Primary Menu Links Here</div>
                    <div class="wire" style="width: 120px;">CTA Button</div>
                </div>
            </div>
            <div class="mobile">
                <div class="flex-space-between">
                    <a href="#"><img class="logo" src="logo.png" alt="logo" /></a>
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

    <main>
        <div class="max-content-width">
            <h1>About Us</h1>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
        </div>
    </main>

    <footer>
        <div class="max-content-width">
            <div class="footer-links flex-centered">
                <div>
                    <div><a href="#">Our Partners</a></div>
                    <div><a href="#">Our Supporters</a></div>
                    <div><a href="#">Foundation Members</a></div>
                    <div><a href="#">Additional Group Features</a></div>
                    <div><a href="#">Member Portal and Benefits</a></div>
                </div>
                <div>
                    <div><a href="#">New for this Year</a></div>
                    <div><a href="#">Privacy Information</a></div>
                    <div><a href="#">Changes from Last Year</a></div>
                    <div><a href="#">Roadmap and Announcements</a></div>
                    <div><a href="#">Disclosures and Regulations</a></div>
                </div>
            </div>
            <div class="social center">
                <a href="#"><img src="social-linkedin.png" alt="linkedin" title="linkedin" /></a>
                <a href="#"><img src="social-youtube.png"  alt="youtube"  title="youtube"  /></a>
                <a href="#"><img src="social-facebook.png" alt="facebook" title="facebook" /></a>
            </div>
            <div class="copyright center">&copy;2023 Copyright Information. All rights reserved.</div>
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

Now that the footer is finished, let's have one last look at the header. There are four updates needed to finish the header (for desktop and mobile sizes):

1. Add primary links.
1. Add a new CTA button.
1. Add links and a search box.
1. Remove all remaining `wire` classes.

<br>

For the primary menu links, please see the updates below.

> Lines `4` to `11` below are for needed for edge padding when the browser nears the maximum content width size, which has nothing to do with the primary menu links. I just noticed this issue once the `wire` class was removed, so we might as well handle it now.
{.is-info}

```html
<style>
    ...

    @media( max-width: 1420px )
    {
        header , main , footer
        {
            padding-left: 15px;
            padding-right: 15px;
        }
    }

    .desktop .primary-menu-links a
    {
        margin-right: 30px;
        display: inline-block;
    }

    .desktop .primary-menu-links a:last-child
    {
        margin-right: 0;
    }

    .mobile .primary-menu-links a
    {
        display: block;
        margin: 12px 0;
        margin-right: 0;
    }
</style>

<header>
    <div class="max-content-width">
        <div class="desktop">
            ...
            <div class="flex-space-between">
                <div class="primary-menu-links">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Our Services</a>
                    <a href="#">Our Locations</a>
                    <a href="#">For Contractors</a>
                </div>
                ...
            </div>
        </div>
        <div class="mobile">
            ...
            <div class="wire mobile-menu-content">
                ...
                <div class="primary-menu-links center">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Our Services</a>
                    <a href="#">Our Locations</a>
                    <a href="#">For Contractors</a>
                </div>
            </div>
        </div>
    </div>
</header>
```

<br>

Here is the updated header:

![detail-04.png](/solutions/development/build-a-responsive-web-page/detail-04.png =900x)

<br>

For the CTA Button styles and content, here are the updates:

```html
<style>
    ...

    .cta-button
    {
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 12px 24px;
        border-radius: 8px;
        background: #a55b9a;
        text-transform: uppercase;
    }
</style>

<header>
    <div class="max-content-width">
        <div class="desktop">
            ...
            <div class="flex-space-between">
                ...
                <button class="cta-button">CTA Button</button>
            </div>
        </div>
        <div class="mobile">
            ....
            <div class="wire mobile-menu-content">
                ...
                <div class="flex-centered">
                    <button class="cta-button">CTA Button</button>
                    ...
                </div>
                ...
            </div>
        </div>
    </div>
</header>
```

<br>

Here is the updated header:

![detail-05.png](/solutions/development/build-a-responsive-web-page/detail-05.png =900x)

<br>

For the links and searchbox, here are the updates:

```html
<style>
    ...

    .search
    {
        text-align: right;
    }

    .search a
    {
        margin-right: 20px;
    }

    .search input[type=text]
    {
        font-size: 18px;
        padding: 10px 20px;
        border-radius: 8px;
        border: 1px solid #888;
    }
</style>

<header>
    <div class="max-content-width">
        <div class="desktop">
            <div class="flex-space-between">
                ...
                <div class="search">
                    <a href="#">Account</a>
                    <a href="#">Sign In</a>
                    <input type="text" placeholder="Search:" name="q" />
                </div>
            </div>
            ...
        </div>
        <div class="mobile">
            ...
            <div class="wire mobile-menu-content">
                <div class="flex-centered">
                    ...
                    <div class="search">
                        <input type="text" placeholder="Search:" name="q" />
                    </div>
                </div>
                ...
            </div>
        </div>
    </div>
</header>
```

<br>

Here is the updated header:

![detail-06.png](/solutions/development/build-a-responsive-web-page/detail-06.png =900x)

<br>

The last step is to remove all remaining `wire` classes. There are only two of them and they're both in the header. After removing them, I noticed a few minor spacing and color issues. They're all fixed and shown below, along with the finished code for the detail pass and screenshots to match the design. If you've stuck around this long, congratulations, you rock!

- Lines `74` to `78` below - added `.mobile-menu-button` class

- Line `133` below - changed `main , .mobile-menu-content` to just `main`

- Lines `208` to `214` below - added media query

- Lines `234` to `247` below - added spacing utility classes

- Line `255` below - added `mb-10` class

- Line `281` below - added `pt-20 mb-20` classes

```html
<!DOCTYPE html>
<html>
<head>
    <title>Detail</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body
        {
            margin: 0;
            font-size: 18px;
            background: #d9fff4;
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
            gap: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media( max-width: 768px )
        {
            .footer-links
            {
                display: block;
                text-align: center;
            }

            .footer-links > div
            {
                margin-bottom: 30px;
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

        @media( max-width: 991px )
        {
            header .mobile  { display: block; }
            header .desktop { display: none;  }
        }

        .mobile-menu-button
        {
            font-size: 22px;
            cursor: pointer;
        }

        .mobile-menu-content
        {
            height: 0;
            padding: 0;
            opacity: 0;
            border: none;
            overflow: hidden;
            will-change: all;
            margin-bottom: 0;
            transition: all 400ms;
        }

        .mobile-menu-content.expanded
        {
            opacity: 1;
            height: unset;
        }

        a
        {
            color: #555;
            text-decoration: underline;
        }

        footer .footer-links a
        {
            margin: 12px 0;
            display: block;
        }

        .logo
        {
            height: auto;
            max-width: 200px;
            text-decoration: none;
        }

        header , footer
        {
            padding: 20px 0;
            background: #d9fff4;
        }

        header
        {
            border-bottom: 1px solid #888;
        }

        footer
        {
            border-top: 1px solid #888;
        }

        main
        {
            background: white;
            padding: 40px 0 25px 0;
        }

        .social , .copyright
        {
            margin: 20px 0;
        }

        .social a
        {
            margin: 0 6px;
        }

        .social img
        {
            width: auto;
            opacity: .75;
            max-height: 40px;
            will-change: opacity;
            transition: opacity 400ms;
        }

        .social img:hover
        {
            opacity: 1;
        }

        .copyright
        {
            color: #555;
            font-size: 14px;
        }

        @media( max-width: 1420px )
        {
            header , main , footer
            {
                padding-left: 15px;
                padding-right: 15px;
            }
        }

        .desktop .primary-menu-links a
        {
            margin-right: 30px;
            display: inline-block;
        }

        .desktop .primary-menu-links a:last-child
        {
            margin-right: 0;
        }

        .mobile .primary-menu-links a
        {
            display: block;
            margin: 12px 0;
            margin-right: 0;
        }

        .cta-button
        {
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 12px 24px;
            border-radius: 8px;
            background: #a55b9a;
            text-transform: uppercase;
        }

        @media( max-width: 500px )
        {
            .mobile .cta-button
            {
                display: none;
            }
        }

        .search
        {
            text-align: right;
        }

        .search a
        {
            margin-right: 20px;
        }

        .search input[type=text]
        {
            font-size: 18px;
            padding: 10px 20px;
            border-radius: 8px;
            border: 1px solid #888;
        }

        .pt-20
        {
            padding-top: 20px;
        }

        .mb-10
        {
            margin-bottom: 10px;
        }

        .mb-20
        {
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <header>
        <div class="max-content-width">
            <div class="desktop">
                <div class="flex-space-between mb-10">
                    <a href="#"><img class="logo" src="logo.png" alt="logo" /></a>
                    <div class="search">
                        <a href="#">Account</a>
                        <a href="#">Sign In</a>
                        <input type="text" placeholder="Search:" name="q" />
                    </div>
                </div>
                <div class="flex-space-between">
                    <div class="primary-menu-links">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Our Services</a>
                        <a href="#">Our Locations</a>
                        <a href="#">For Contractors</a>
                    </div>
                    <button class="cta-button">CTA Button</button>
                </div>
            </div>
            <div class="mobile">
                <div class="flex-space-between">
                    <a href="#"><img class="logo" src="logo.png" alt="logo" /></a>
                    <div class="mobile-menu-button">Menu</div>
                </div>
                <div class="mobile-menu-content">
                    <div class="flex-centered pt-20 mb-20">
                        <button class="cta-button">CTA Button</button>
                        <div class="search">
                            <input type="text" placeholder="Search:" name="q" />
                        </div>
                    </div>
                    <div class="primary-menu-links center">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Our Services</a>
                        <a href="#">Our Locations</a>
                        <a href="#">For Contractors</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="max-content-width">
            <h1>About Us</h1>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
        </div>
    </main>

    <footer>
        <div class="max-content-width">
            <div class="footer-links flex-centered">
                <div>
                    <div><a href="#">Our Partners</a></div>
                    <div><a href="#">Our Supporters</a></div>
                    <div><a href="#">Foundation Members</a></div>
                    <div><a href="#">Additional Group Features</a></div>
                    <div><a href="#">Member Portal and Benefits</a></div>
                </div>
                <div>
                    <div><a href="#">New for this Year</a></div>
                    <div><a href="#">Privacy Information</a></div>
                    <div><a href="#">Changes from Last Year</a></div>
                    <div><a href="#">Roadmap and Announcements</a></div>
                    <div><a href="#">Disclosures and Regulations</a></div>
                </div>
            </div>
            <div class="social center">
                <a href="#"><img src="social-linkedin.png" alt="linkedin" title="linkedin" /></a>
                <a href="#"><img src="social-youtube.png"  alt="youtube"  title="youtube"  /></a>
                <a href="#"><img src="social-facebook.png" alt="facebook" title="facebook" /></a>
            </div>
            <div class="copyright center">&copy;2023 Copyright Information. All rights reserved.</div>
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

**Detail Pass Large Desktop**

![detail-07.png](/solutions/development/build-a-responsive-web-page/detail-07.png =900x)

<br>

**Detail Pass Laptop**

![detail-08.png](/solutions/development/build-a-responsive-web-page/detail-08.png =900x)

<br>

**Detail Pass Tablet**

![detail-09.png](/solutions/development/build-a-responsive-web-page/detail-09.png =700x)

<br>

**Detail Pass Tablet (menu expanded)**

![detail-10.png](/solutions/development/build-a-responsive-web-page/detail-10.png =700x)

<br>

**Detail Pass Mobile**

![detail-12.png](/solutions/development/build-a-responsive-web-page/detail-12.png =400x)

<br>

**Detail Pass Mobile (menu expanded)**

![detail-11.png](/solutions/development/build-a-responsive-web-page/detail-11.png =400x)

<br>

## Part Three - Enhancements

Here in Part Three, we cleanup the files from Part Two and discuss enhancements such as front-end frameworks and content management systems.

<br>

### Cleanup for Web Server

In Part Two, we had a small number of files inside a single folder. On a real website, we'll have many files and folders. To start with, let's rename `detail.html` to `index.html`. This file is often used as the website's default document (normally the home page). Let's also add folders for `images`, `scripts`, and `styles`. We can cut and paste the styles and scripts directly from our `index.html` document into two new files named `website.css` and `website.js`. Here's what it should look like now:

<br>

![cleanup-01.png](/solutions/development/build-a-responsive-web-page/cleanup-01.png =250x)

**Index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Index</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./styles/website.css" rel="stylesheet" />
</head>

<body>
    <header>
        <div class="max-content-width">
            <div class="desktop">
                <div class="flex-space-between mb-10">
                    <a href="#"><img class="logo" src="images/logo.png" alt="logo" /></a>
                    <div class="search">
                        <a href="#">Account</a>
                        <a href="#">Sign In</a>
                        <input type="text" placeholder="Search:" name="q" />
                    </div>
                </div>
                <div class="flex-space-between">
                    <div class="primary-menu-links">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Our Services</a>
                        <a href="#">Our Locations</a>
                        <a href="#">For Contractors</a>
                    </div>
                    <button class="cta-button">CTA Button</button>
                </div>
            </div>
            <div class="mobile">
                <div class="flex-space-between">
                    <a href="#"><img class="logo" src="images/logo.png" alt="logo" /></a>
                    <div class="mobile-menu-button">Menu</div>
                </div>
                <div class="mobile-menu-content">
                    <div class="flex-centered pt-20 mb-20">
                        <button class="cta-button">CTA Button</button>
                        <div class="search">
                            <input type="text" placeholder="Search:" name="q" />
                        </div>
                    </div>
                    <div class="primary-menu-links center">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Our Services</a>
                        <a href="#">Our Locations</a>
                        <a href="#">For Contractors</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="max-content-width">
            <h1>About Us</h1>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
        </div>
    </main>

    <footer>
        <div class="max-content-width">
            <div class="footer-links flex-centered">
                <div>
                    <div><a href="#">Our Partners</a></div>
                    <div><a href="#">Our Supporters</a></div>
                    <div><a href="#">Foundation Members</a></div>
                    <div><a href="#">Additional Group Features</a></div>
                    <div><a href="#">Member Portal and Benefits</a></div>
                </div>
                <div>
                    <div><a href="#">New for this Year</a></div>
                    <div><a href="#">Privacy Information</a></div>
                    <div><a href="#">Changes from Last Year</a></div>
                    <div><a href="#">Roadmap and Announcements</a></div>
                    <div><a href="#">Disclosures and Regulations</a></div>
                </div>
            </div>
            <div class="social center">
                <a href="#"><img src="images/social-linkedin.png" alt="linkedin" title="linkedin" /></a>
                <a href="#"><img src="images/social-youtube.png"  alt="youtube"  title="youtube"  /></a>
                <a href="#"><img src="images/social-facebook.png" alt="facebook" title="facebook" /></a>
            </div>
            <div class="copyright center">&copy;2023 Copyright Information. All rights reserved.</div>
        </div>
    </footer>

    <script src="./scripts/website.js"></script>
</body>
</html>
```

**Website.css**

```html
body
{
    margin: 0;
    font-size: 18px;
    background: #d9fff4;
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
    gap: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media( max-width: 768px )
{
    .footer-links
    {
        display: block;
        text-align: center;
    }

    .footer-links > div
    {
        margin-bottom: 30px;
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

@media( max-width: 991px )
{
    header .mobile  { display: block; }
    header .desktop { display: none;  }
}

.mobile-menu-button
{
    font-size: 22px;
    cursor: pointer;
}

.mobile-menu-content
{
    height: 0;
    padding: 0;
    opacity: 0;
    border: none;
    overflow: hidden;
    will-change: all;
    margin-bottom: 0;
    transition: all 400ms;
}

.mobile-menu-content.expanded
{
    opacity: 1;
    height: unset;
}

a
{
    color: #555;
    text-decoration: underline;
}

footer .footer-links a
{
    margin: 12px 0;
    display: block;
}

.logo
{
    height: auto;
    max-width: 200px;
    text-decoration: none;
}

header , footer
{
    padding: 20px 0;
    background: #d9fff4;
}

header
{
    border-bottom: 1px solid #888;
}

footer
{
    border-top: 1px solid #888;
}

main
{
    background: white;
}

main
{
    padding: 40px 0 25px 0;
}

.social , .copyright
{
    margin: 20px 0;
}

.social a
{
    margin: 0 6px;
}

.social img
{
    width: auto;
    opacity: .75;
    max-height: 40px;
    will-change: opacity;
    transition: opacity 400ms;
}

.social img:hover
{
    opacity: 1;
}

.copyright
{
    color: #555;
    font-size: 14px;
}

@media( max-width: 1420px )
{
    header , main , footer
    {
        padding-left: 15px;
        padding-right: 15px;
    }
}

.desktop .primary-menu-links a
{
    margin-right: 30px;
    display: inline-block;
}

.desktop .primary-menu-links a:last-child
{
    margin-right: 0;
}

.mobile .primary-menu-links a
{
    display: block;
    margin: 12px 0;
    margin-right: 0;
}

.cta-button
{
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 12px 24px;
    border-radius: 8px;
    background: #a55b9a;
    text-transform: uppercase;
}

@media( max-width: 500px )
{
    .mobile .cta-button
    {
        display: none;
    }
}

.search
{
    text-align: right;
}

.search a
{
    margin-right: 20px;
}

.search input[type=text]
{
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #888;
}

.pt-20
{
    padding-top: 20px;
}

.mb-10
{
    margin-bottom: 10px;
}

.mb-20
{
    margin-bottom: 20px;
}
```

**Website.js**

```js
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
```

<br>

### Front-End Frameworks

Front-end frameworks like Bootstrap, Foundation, and Tailwind provide a core library of common front-end styles and patterns to help accelerate responsive web development. While each has its own proprietary syntax, they all help us write less CSS and JS code from scratch. In this example, we're going to add `Bootstrap 5.3` classes to our HTML. In doing so, we can eliminate a surprising amount of existing styles and javascript. Here are some of the Bootstrap classes we'll be using:

```
gap-2, gap-md-5 

justify-content-between

text-right, text-center, text-start

d-none, d-sm-inline, d-lg-block, d-flex

px-3, py-4, my-3, mx-1, me-3, pt-3, mb-3

flex-column, flex-md-row, align-items-center
```

It's not necessary to understand what all the classes mean right now. Documentation is at:

https://getbootstrap.com/docs/5.3/getting-started/introduction/

We'll also be using Bootstrap's `collapse` feature to replace our existing mobile menu content behavior. The collapse documentation is here:

https://getbootstrap.com/docs/5.3/components/collapse/

To give you an idea of how much code a front-end framework can eliminate, we **no longer need** the following CSS after Bootstrap. This is a reduction of 144 lines and 4 media queries:

```html
/* All of the following CSS can be deleted. */

.flex-space-between
{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.flex-centered
{
    gap: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media( max-width: 768px )
{
    .footer-links
    {
        display: block;
        text-align: center;
    }

    .footer-links > div
    {
        margin-bottom: 30px;
    }
}

.center { text-align: center; }

header .mobile  { display: none;  }
header .desktop { display: block; }

@media( max-width: 991px )
{
    header .mobile  { display: block; }
    header .desktop { display: none;  }
}

.mobile-menu-content
{
    height: 0;
    padding: 0;
    opacity: 0;
    border: none;
    overflow: hidden;
    will-change: all;
    margin-bottom: 0;
    transition: all 400ms;
}

.mobile-menu-content.expanded
{
    opacity: 1;
    height: unset;
}

footer .footer-links a
{
    margin: 12px 0;
    display: block;
}

.social , .copyright
{
    margin: 20px 0;
}

.social a
{
    margin: 0 6px;
}

@media( max-width: 1420px )
{
    header , main , footer
    {
        padding-left: 15px;
        padding-right: 15px;
    }
}

.desktop .primary-menu-links a
{
    margin-right: 30px;
    display: inline-block;
}

.desktop .primary-menu-links a:last-child
{
    margin-right: 0;
}

.mobile .primary-menu-links a
{
    display: block;
    margin: 12px 0;
    margin-right: 0;
}

@media( max-width: 500px )
{
    .mobile .cta-button
    {
        display: none;
    }
}

.search
{
    text-align: right;
}

.search a
{
    margin-right: 20px;
}

.pt-20
{
    padding-top: 20px;
}

.mb-10
{
    margin-bottom: 10px;
}

.mb-20
{
    margin-bottom: 20px;
}

margin: 0;
padding: 20px 0;
padding: 40px 0 25px 0;

.wire
{
    padding: 20px 30px;
    margin-bottom: 20px; 
    border: 2px dashed #ccc;
}
```

After Bootstrap, we no longer need the `website.js` file either (15 lines eliminated):

```js
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
```

After Bootstrap, here is the finished `website.css` file (went from 243 lines down to 99 lines):

```css
body
{
    margin: 0;
    font-size: 18px;
    background: #d9fff4;
    font-family: sans-serif;
}

h1
{
    font-size: 24px;
}

.max-content-width
{
    margin: 0 auto;
    max-width: 1400px;
}

.mobile-menu-button
{
    color: black;
    font-size: 22px;
    cursor: pointer;
    text-decoration: none;
}

a
{
    color: #555;
    text-decoration: underline;
}

.logo
{
    height: auto;
    max-width: 200px;
    text-decoration: none;
}

header , footer
{
    background: #d9fff4;
}

header
{
    border-bottom: 1px solid #888;
}

footer
{
    border-top: 1px solid #888;
}

main
{
    background: white;
}

.social img
{
    width: auto;
    opacity: .75;
    max-height: 40px;
    will-change: opacity;
    transition: opacity 400ms;
}

.social img:hover
{
    opacity: 1;
}

.copyright
{
    color: #555;
    font-size: 14px;
}

.cta-button
{
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 12px 24px;
    border-radius: 8px;
    background: #a55b9a;
    text-transform: uppercase;
}

.search input[type=text]
{
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #888;
}
```

After Bootstrap, here is the finished `index.html` file. Can you spot where the new Bootstrap classes are?

```html
<!DOCTYPE html>
<html>
<head>
    <title>Index</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./styles/website.css">
</head>

<body>
    <header class="px-3 py-4">
        <div class="max-content-width">
            <div class="desktop d-none d-lg-block">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <a href="#"><img class="logo" src="images/logo.png" alt="logo" /></a>
                    <div class="search text-right">
                        <a class="me-4" href="#">Account</a>
                        <a class="me-4" href="#">Sign In</a>
                        <input type="text" placeholder="Search:" name="q" />
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="primary-menu-links">
                        <a class="me-4" href="#">Home</a>
                        <a class="me-4" href="#">About Us</a>
                        <a class="me-4" href="#">Contact Us</a>
                        <a class="me-4" href="#">Our Services</a>
                        <a class="me-4" href="#">Our Locations</a>
                        <a class="me-4" href="#">For Contractors</a>
                    </div>
                    <button class="cta-button">CTA Button</button>
                </div>
            </div>
            <div class="mobile d-block d-lg-none">
                <div class="d-flex align-items-center justify-content-between">
                    <a href="#"><img class="logo" src="images/logo.png" alt="logo" /></a>
                    <a class="mobile-menu-button" data-bs-toggle="collapse" href="#mobile-menu-content-id" role="button" aria-expanded="false" aria-controls="collapseExample">Menu</a>
                </div>
                <div class="mobile-menu-content collapse" id="mobile-menu-content-id">
                    <div class="d-flex align-items-center justify-content-center gap-4 pt-3 mb-3">
                        <button class="cta-button d-none d-sm-inline">CTA Button</button>
                        <div class="search text-right">
                            <input type="text" placeholder="Search:" name="q" />
                        </div>
                    </div>
                    <div class="primary-menu-links text-center">
                        <div class="my-2"><a href="#">Home</a></div>
                        <div class="my-2"><a href="#">About Us</a></div>
                        <div class="my-2"><a href="#">Contact Us</a></div>
                        <div class="my-2"><a href="#">Our Services</a></div>
                        <div class="my-2"><a href="#">Our Locations</a></div>
                        <div class="my-2"><a href="#">For Contractors</a></div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="px-3 py-4">
        <div class="max-content-width">
            <h1>About Us</h1>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
            <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed,
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, illum qui dolorem eum fugiat quo voluptas.
            </p>
        </div>
    </main>

    <footer class="px-3 py-4">
        <div class="max-content-width">
            <div class="footer-links d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 gap-md-5 text-center text-md-start">
                <div>
                    <div class="my-2"><a href="#">Our Partners</a></div>
                    <div class="my-2"><a href="#">Our Supporters</a></div>
                    <div class="my-2"><a href="#">Foundation Members</a></div>
                    <div class="my-2"><a href="#">Additional Group Features</a></div>
                    <div class="my-2"><a href="#">Member Portal and Benefits</a></div>
                </div>
                <div>
                    <div class="my-2"><a href="#">New for this Year</a></div>
                    <div class="my-2"><a href="#">Privacy Information</a></div>
                    <div class="my-2"><a href="#">Changes from Last Year</a></div>
                    <div class="my-2"><a href="#">Roadmap and Announcements</a></div>
                    <div class="my-2"><a href="#">Disclosures and Regulations</a></div>
                </div>
            </div>
            <div class="social text-center my-3">
                <a class="mx-1" href="#"><img src="images/social-linkedin.png" alt="linkedin" title="linkedin" /></a>
                <a class="mx-1" href="#"><img src="images/social-youtube.png"  alt="youtube"  title="youtube"  /></a>
                <a class="mx-1" href="#"><img src="images/social-facebook.png" alt="facebook" title="facebook" /></a>
            </div>
            <div class="copyright text-center my-3">&copy;2023 Copyright Information. All rights reserved.</div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

<br>

> So why didn't we just start with Bootstrap to begin with (way back in Part Two). It's a fair question. The best answer might be that it's a valuable learning exercise to build a responsive web page from scratch first, without any supporting frameworks, then we can appreciate the actual reduction of code.
{.is-info}

<br>

**Bootstrap Utility Classes**

Bootstrap is more than a responsive grid system. Most of the classes we used above are utility classes. Developers tend to overuse the Bootstrap grid, often in situations where a grid is not even necessary (we didn't need the Bootstrap grid in our example). There is a large number of Bootstrap responsive utility classes to easily handle tedious CSS tasks:

For example:

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

**Bootstrap Container Classes**

Bootstrap has two container classes: `container` and `container-fluid.` Many developers completely misuse them (we didn't need either of these classes in our example). In general, you should only need to use them **once per page** at a very high level in the dom hierarchy. Use `container-fluid` when you need to support full-width, edge-to-edge designs. Use `container` when you want Bootstrap's out-of-the-box horizontal spacing (which prevents content from crashing into the edges of small devices, while also limiting content to comfortable reading widths on larger devices and desktops).

<br>

### Content Management Systems

Content Management Systems (CMS) are website tools to support the separation of code and content, giving content authors the ability to manage their website without writing code. Systems range in complexity and price (from the excellent free Umbraco CMS to expensive products such as Sitecore Experience Manager).

Even though content authors enjoy a codeless management experience, web developers are still needed to code the site in a way that is compatible with the CMS. In the case of Sitecore, one of the main techniques used to enable this is called placeholders. Placeholders allow the CMS to insert some piece of content (chosen by content authors) into some pre-defined place on the page. Other CMS products have similar mechanisms, but they might not be called placeholders in those products.

This is an over-simplification, but our example file system might look something like this with a CMS:

![cms-01.png](/solutions/development/build-a-responsive-web-page/cms-01.png =250x)

The layout file named `main.cshtml` provides the overall code for a page. Lines `12, 17, and 22` show where the placeholders are (this is NOT real placeholder syntax). The idea is to use placeholders for anything that might change, and hard-code everything else that won't likely change.

**main.cshtml**

```html
<!DOCTYPE html>
<html>
<head>
    <title>CMS Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./styles/website.css">
</head>

<body>
    <header class="px-3 py-4">
        <header-placeholder>
    </header>

    <main class="px-3 py-4">
        <div class="max-content-width">
            <main-placeholder>
        </div>
    </main>

    <footer class="px-3 py-4">
        <footer-placeholder>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

Inside the CMS, content authors can choose to put anything inside each of the placeholders in the main layout. In our example, that would mean putting `header.cshtml into <header-placeholder>` and `footer.cshtml into <footer-placeholder>`.

The reality is that `header.cshtml` and `footer.cshtml` would each have their own placeholders too. For instance, the hard-coded lines `14 to 19 in header.cshtml` and lines `4 to 17 in footer.html` below would  be replaced by placeholders. Other blocks of code would be replaced by placeholders too &mdash; be sure to give each placeholder a unique name so that content renders correctly on the page.

**header.cshtml**

```html
<!-- Start Header Markup -->
<div class="max-content-width">
    <div class="desktop d-none d-lg-block">
        <div class="d-flex align-items-center justify-content-between mb-3">
            <a href="#"><img class="logo" src="images/logo.png" alt="logo" /></a>
            <div class="search text-right">
                <a class="me-4" href="#">Account</a>
                <a class="me-4" href="#">Sign In</a>
                <input type="text" placeholder="Search:" name="q" />
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <div class="primary-menu-links">
                <a class="me-4" href="#">Home</a>
                <a class="me-4" href="#">About Us</a>
                <a class="me-4" href="#">Contact Us</a>
                <a class="me-4" href="#">Our Services</a>
                <a class="me-4" href="#">Our Locations</a>
                <a class="me-4" href="#">For Contractors</a>
            </div>
            <button class="cta-button">CTA Button</button>
        </div>
    </div>
    <div class="mobile d-block d-lg-none">
        <div class="d-flex align-items-center justify-content-between">
            <a href="#"><img class="logo" src="images/logo.png" alt="logo" /></a>
            <a class="mobile-menu-button" data-bs-toggle="collapse" href="#mobile-menu-content-id" role="button" aria-expanded="false" aria-controls="collapseExample">Menu</a>
        </div>
        <div class="mobile-menu-content collapse" id="mobile-menu-content-id">
            <div class="d-flex align-items-center justify-content-center gap-4 pt-3 mb-3">
                <button class="cta-button d-none d-sm-inline">CTA Button</button>
                <div class="search text-right">
                    <input type="text" placeholder="Search:" name="q" />
                </div>
            </div>
            <div class="primary-menu-links text-center">
                <div class="my-2"><a href="#">Home</a></div>
                <div class="my-2"><a href="#">About Us</a></div>
                <div class="my-2"><a href="#">Contact Us</a></div>
                <div class="my-2"><a href="#">Our Services</a></div>
                <div class="my-2"><a href="#">Our Locations</a></div>
                <div class="my-2"><a href="#">For Contractors</a></div>
            </div>
        </div>
    </div>
</div>
<!-- End Header Markup -->
```

**footer.cshtml**

```html
<!-- Start Footer Markup -->
<div class="max-content-width">
    <div class="footer-links d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 gap-md-5 text-center text-md-start">
        <div>
            <div class="my-2"><a href="#">Our Partners</a></div>
            <div class="my-2"><a href="#">Our Supporters</a></div>
            <div class="my-2"><a href="#">Foundation Members</a></div>
            <div class="my-2"><a href="#">Additional Group Features</a></div>
            <div class="my-2"><a href="#">Member Portal and Benefits</a></div>
        </div>
        <div>
            <div class="my-2"><a href="#">New for this Year</a></div>
            <div class="my-2"><a href="#">Privacy Information</a></div>
            <div class="my-2"><a href="#">Changes from Last Year</a></div>
            <div class="my-2"><a href="#">Roadmap and Announcements</a></div>
            <div class="my-2"><a href="#">Disclosures and Regulations</a></div>
        </div>
    </div>
    <div class="social text-center my-3">
        <a class="mx-1" href="#"><img src="images/social-linkedin.png" alt="linkedin" title="linkedin" /></a>
        <a class="mx-1" href="#"><img src="images/social-youtube.png"  alt="youtube"  title="youtube"  /></a>
        <a class="mx-1" href="#"><img src="images/social-facebook.png" alt="facebook" title="facebook" /></a>
    </div>
    <div class="copyright text-center my-3">&copy;2023 Copyright Information. All rights reserved.</div>
</div>
<!-- End Footer Markup -->
```

<br>

Here is an idea of what the header and footer might look like once placeholders are inserted (again, this is NOT real placeholder syntax):

```html
<!-- Start Header Markup -->
<div class="max-content-width">
    <div class="desktop d-none d-lg-block">
        <div class="d-flex align-items-center justify-content-between mb-3">
            <desktop-logo-placeholder>
            <div class="search text-right">
                <desktop-account-placeholder>
                <desktop-search-placeholder>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <div class="primary-menu-links">
                <desktop-menu-placeholder>
            </div>
            <desktop-cta-placeholder>
        </div>
    </div>
    <div class="mobile d-block d-lg-none">
        <div class="d-flex align-items-center justify-content-between">
            <mobile-logo-placeholder>
            <mobile-menu-button-placeholder>
        </div>
        <div class="mobile-menu-content collapse" id="mobile-menu-content-id">
            <div class="d-flex align-items-center justify-content-center gap-4 pt-3 mb-3">
                <mobile-cta-placeholder>
                <div class="search text-right">
                    <mobile-search-placeholder>
                </div>
            </div>
            <div class="primary-menu-links text-center">
                <mobile-menu-placeholder>
            </div>
        </div>
    </div>
</div>
<!-- End Header Markup -->


<!-- Start Footer Markup -->
<div class="max-content-width">
    <div class="footer-links d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 gap-md-5 text-center text-md-start">
        <footer-links-1-placeholder>
        <footer-links-2-placeholder>
    </div>
    <div class="social text-center my-3">
        <footer-social-links-placeholder>
    </div>
    <div class="copyright text-center my-3">
        <footer-copyright-placeholder>
    </div>
</div>
<!-- End Footer Markup -->
```

<br>

> Sitecore SXA uses Bootstrap as the default front-end framework. Behind the scenes, Sitecore has made some unfortunate decisions that can lead to improperly generated Bootstrap HTML. If you feel like you're in a losing battle with SXA or your designs are suffering, this how-to gives you some options: [optimize-sxa-and-bootstrap](/Solutions/Development/optimize-sxa-and-bootstrap) 
{.is-info}

<br>
