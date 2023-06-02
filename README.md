# [Adno](https://adno.app/) views tags 

[Adno](https://adno.app/) is a web application for viewing, editing and sharing narratives and journeys on online images, static images and [IIIF](https://iiif.io/) images.

An [Adno](https://adno.app/) project is simply a json file in [W3C Web Annotation model](https://www.w3.org/TR/annotation-model/) format. It can therefore be processed by [Adno](https://adno.app/) and by any other compatible software. Adno views tags allows you to embed different types of visualization in your web pages.

Warning: This script only works with Adno projects based on [IIIF](https://iiif.io/) resources.

Example: 

```html
<div data-adno="slider" 
    data-src="https://static.emf.fr/adno/embed/annotations.json"
    data-width="800px";
></div>
```

See this [demo](https://static.emf.fr/adno/views/) or `index.html` page of this repo.

## Installation

For minimal installation, insert just before the closing tag `</body>` of your page:

```html
<script src="https://code.jquery.com/jquery-3.6.2.min.js"></script>
<script src="adno-display-tags.js"></script>
```

You can also add [Classless](https://classless.de/) or [Bootstrap](https://getbootstrap.com/) CSS framewok for a more attractive layout and to access some options.

```html
<link rel="stylesheet" href="https://classless.de/classless-tiny.css">
```

If you want to use the slider, you have to add the following line:

```html
<script src="jquery.shortslider.min.js" defer></script>
```

If you want the power of [Annona]((https://ncsu-libraries.github.io/annona/)) then you need to add:

```html
 <script src="https://ncsu-libraries.github.io/annona/dist/annona.js" defer></script>
```

and this link before the closing tag `</head>`:

```html
<link rel="stylesheet" type="text/css" href="https://ncsu-libraries.github.io/annona/dist/annona.css">
```

Dependencies:

- [jQuery](https://jquery.com/)
- [Classless](https://classless.de/) for better rendering, optional.
- [Short slider](https://www.jqueryscript.net/slider/Generic-Slider-Carousel-Plugin-with-jQuery-Short-Slider.html) for slider tag only, optional.
- [Annona Library](https://ncsu-libraries.github.io/annona/) for annona tag only, optional.


## Views

### Infos

Display the project metadata.

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value: `infos` | |
| data-src | project url  | |
| data-title-level | level of the title h1 ... h3  | h3 |

Only `data-adno` and `data-src` are mandatory.

### List

Display in list of images of annotated areas and annotations in captions.

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value:  `list` | |
| data-src | project url | |
| data-image-max-width | maximum image width (in pixels) | 600px |
| data-image-max-height | maximum image height (in pixels) | 600px |
| data-caption-position | value: `top`, `right`, `bottom`, `left`, `none` | `bottom` |

Only `data-adno` and `data-src` are mandatory.

`data-caption-position` depends of CSS framework, works fine with [Classless](https://classless.de/).

### Slider

Display as a slideshow.

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value: `slider` | |
| data-src | project url | |
| data-style | presentation style: `normal`, `carousel ou `fade` | normal |
| data-width | width of slider (in pixels) | 800px |
| data-text-width | width of text (in pixels) | 600px |

Only `data-adno` and `data-src` are mandatory.

### Embed

Insertion of the [Adno](https://adno.app/) player.

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value: `embed` | |
| data-src | project url | |
| data-width | width of the embed (in percentage or pixels) | 100% |
| data-height | height of the embed (in pixels) | 600px |
| data-fullscreen | allow fullscreen `true` or `false` | true |
| data-delay | min = 1 and max = 20 (seconds) | |
| data-navigator | `true` or `false` | |
| data-toolbarsfs | `true` or `false` | |
| data-startfirst | `true` or `false` | |
| data-rotation | `true` or `false` | |
| data-toolbar | `true` or `false` | |
| data-bounds | `true` or `false` | |

Only `data-adno` and `data-src` are mandatory.

[Adno](https://adno.app/) directly provides a procedure to generate an iframe without using Adno views tags. 

```
<iframe
    src="https://w.adno.app/#/embed?url=URL OF ADNO PROJECT HERE"
    height="600px"
    width="100%"
    allow="fullscreen"
></iframe>
```

### Annona

Using the [Annona library](https://ncsu-libraries.github.io/annona/). 

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value: `annona` | |
| data-src | project url | |
| data-infos | inject project infos in Annona viewer (buttom `i`) | |
| data-option-* | wildcard `*` is an [option of Annona](https://ncsu-libraries.github.io/annona/storyboard/#settings) | Cf. [Annona settings](https://ncsu-libraries.github.io/annona/storyboard/#settings) |  

Only `data-adno` and `data-src` are mandatory.

Beware: specific Annona options `data-option-*` have not been extensively tested. 

## Styling

The html produced is generic. So, you can style it by adding a style tag or a link to a custom stylesheet in the header. 

You can also use a [minimal css library](https://github.com/dohliam/dropin-minimal-css) ([Classless](https://classless.de/) for example) or [Bootstrap](https://getbootstrap.com/) as a base and override it with your own styles. 

## References 

- [adno.app](https://adno.app)
- this hack is inspired by [Annona Library](https://ncsu-libraries.github.io/annona/). 


