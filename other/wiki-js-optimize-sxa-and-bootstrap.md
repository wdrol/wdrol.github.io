# Optimize SXA and Bootstrap

Sitecore SXA uses Bootstrap as the default front-end framework. Behind the scenes, Sitecore has made some unfortunate decisions that can lead to improperly generated Bootstrap HTML. If you feel like you're in a losing battle with SXA or your designs are suffering, the optimization process described below might be for you.

> If you're starting a brand new SXA project, we recommend using these optimizations today, at the beginning of the project. It will prevent so much frustration during development. If you're working on a reasonably new SXA project, try these and see where you land. If you're working on an established project, your mileage may vary - please see the section near the bottom named *Implications to Existing Projects*.
{.is-info}

We started with a new Sitecore 10.3 instance that includes SXA. We created a new Example Tenant, Example Site, and Example Theme as shown below. The default grid system is Bootstrap 5. Nothing else has been changed at this point, it’s all out-of-the-box **(OOTB)** SXA.

![sxa-opt-01.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-01.png =500x)

![sxa-opt-02.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-02.png =500x)

![sxa-opt-03.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-03.png =500x)

<br>

## Default Theme

SXA doesn’t appear to set the default theme automatically. In Experience Editor, we set the **View Mode** to `Selected Theme` and the **Default Theme** to `Example Theme`:

![sxa-opt-14.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-14.png =900x)

![sxa-opt-16.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-15.png =900x)

<br>

## The Design

Here is the design we are trying to build in SXA. Notice that the borders and backgrounds of the header, main content area, and footer all extend to the edges of the page. The actual content is constrained to a comfortable reading width (at the green lines).

![sxa-opt-04.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-04.png =900x)

<br>

## The Implementation

We used:

- Rich Text
- Plain HTML
- Column Splitter

We added some minimal CSS to make the screenshots prettier. The only vital class below is `max-content-width`, which is needed to match the design.

```
<style>
    main { background: #ffe; }
    main h1 { text-align: center; border: 1px dashed #aaa; }
    .max-content-width { max-width: 1200px; margin: 0 auto; }
    .example-component { background: #eee; border: 2px dashed #aaa; padding: 30px 10px; }
</style>
```

<br>

## The OOTB Results

The OOTB results are not looking so great. The issues are shown in the red lines below. The content is not lining up as expected and the backgrounds and borders do not extend to the edges of the page.

![sxa-opt-05.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-05.png =900x)

The reason is clear when we examine the HTML output. In the screen below, the generated code that is either broken, unwanted, or unnecessary has been circled in pink. By default, SXA makes some unfortunate decisions about how to render the HTML and which Bootstrap classes to use (some repetitive code below has been omitted for brevity):

![sxa-opt-06.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-06.png =600x)

<br>

## The Optimized Results

After optimization, the generated HTML meets Bootstrap 5 expectations and the rendered page matches the design (some repetitive code below has been omitted for brevity). See the instructions in the next section to learn how to achieve this.

![sxa-opt-07.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-07.png =900x)

![sxa-opt-08.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-08.png =600x)

<br>

## How to Optimize

In the Content Editor, go to:

`/sitecore/system/Settings/Feature/Experience Accelerator/Bootstrap 5/Bootstrap 5 Grid Definition`

Please ensure the circled dropdown boxes in the **next two screenshots** are empty, then save those changes.

*It’s most beneficial to clear out these settings at the beginning of a project because they are static. Whenever we drag a new SXA component to the page, it receives a copy of these settings. When we change the settings here, it will only impact future component instances, not existing ones that have already been placed on a page. If you have an existing SXA project, you may need to find or create a PowerShell script that updates existing component instances (beyond the scope of this article).*

![sxa-opt-09.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-09.png =900x)

![sxa-opt-10.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-10.png =900x)

<br>

Next, clear out the placeholder fields shown below. Unlike the static settings above, these placeholder settings are dynamic and impact all component instances (existing ones and future ones).

![sxa-opt-11.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-11.png =900x)

<br>

Next, in the `Grid Body View Path` field, change Bootstrap5Body.cshtml to Bootstrap5BodyOptimized.cshtml

![sxa-opt-12.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-12.png =900x)

<br>

Finally, in the filesystem at `~/Views/SxaLayout`, duplicate the existing file named Bootstrap5Body.cshtml to Bootstrap5BodyOptimized.cshtml.

![sxa-opt-13.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-13.png =600x)

Inside the optimized file, replace the existing code with the new code shown below, then save the file. Lines `10` and `12` below are needed for the given design, but they may or may not be necessary for something you are building.

```
@using Sitecore.Mvc
@using Sitecore.XA.Foundation.Grid.Extensions
@using Sitecore.XA.Foundation.SitecoreExtensions.Extensions

<header>
    @Html.Sitecore().Placeholder( "header" )
</header>

<main class="container-fluid">
    <div class="max-content-width">
        @Html.Sitecore().Placeholder( "main" )
    </div>
</main>

<footer>
    @Html.Sitecore().Placeholder( "footer" )
</footer>
```

> Depending on your local settings and default database, you may need to Smart Publish and/or Recycle IIS to see the updates.
{.is-info}

<br>

## Implications to Existing Projects

If you're starting a brand new SXA project, we recommend using these optimizations today, at the beginning of the project. It will prevent so much frustration during development.

If you're working on a reasonably new SXA project, try these and see where you land. If anything breaks, you're probably only a few minor tweaks away from having a more maintainable site.

If you're working on an established project, your success with these optimizations may vary. Here's why. If you look at the left side of the diff screen below, line numbers `9`, `16`, and `23` all render essentially the same div using the `container` class from the `Fixed` field in Sitecore:

```
<div id="..." class="container">
```

![sxa-opt-17.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-17.png =900x)

![sxa-opt-16.png](/solutions/development/optimize-sxa-and-bootstrap/sxa-opt-16.png =300x)

This is a faulty assumption to impose on downstream code (basically everything inside the placeholders), so we removed these HTML wrappers during optimization. This is safe in new or reasonably new projects, but in an existing project with a significant development history, this could be a problem.

For example, code that seems necessary to match the design may creep into the project. These 'fixes' wouldn't be necessary if the generated HTML had been correct in the first place. Before long, the fixes become a perceived requirement and will likely migrate to all corners of the project. If you're in a situation like this, these optimizations probably won't work because they will remove the underlying issues that the workarounds were trying to fix. If that's the case, just keep these optimizations in mind as a better starting point for your next SXA project.

> Btw, most developers, including Sitecore developers, do not understand how to use Bootstrap containers properly. In general, you should only need to use `container-fluid` or `container` once per page, at a very high level in the dom hierarchy. That's why we hard-coded `container-fluid` instead of `container` in the optimized CSHTML file. We used `container-fluid` because it is less restrictive and allows for full-width designs. We also chose to hard-code it in the layout, because there is rarely, if ever, any valid reason to dynamically inject Bootstrap `container` classes into downstream code from the database.
{.is-info}

<br>

## Next Steps

Addressing the longevity of these optimizations is a good next step. We are aware that Sitecore updates will almost certainly overwrite these changes. Duplicating the OOTB Bootstrap 5 Settings (maybe naming them Bootstrap 5 Optimized instead) and moving them somewhere else in the content tree safe from updates seems like a reasonable option. If anyone would like to recommend a best practice for this, please comment below. Thanks!