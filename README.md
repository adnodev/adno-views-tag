# [Adno](https://adno.app/) views tags 

[Adno](https://adno.app/) is a web application for viewing, editing and sharing narratives and journeys on online images, static images and [IIIF](https://iiif.io/) images.

An [Adno](https://adno.app/) project is simply a json file in [W3C Web Annotation model](https://www.w3.org/TR/annotation-model/) format. It can therefore be processed by [Adno](https://adno.app/) and by any other compatible software. Adno views tags allows you to embed different types of visualization in your web pages.

Warning: Adno only works with Adno projects based on [IIIF](https://iiif.io/) resources.

Example: 

```html
<div data-adno="slider" 
    data-src="https://static.emf.fr/adno/embed/annotations.json"
    data-width="800px";
></div>
```

See `index.html` page.

## Installation

Dependencies:

- [jQuery](https://jquery.com/)
- [Short slider](https://www.jqueryscript.net/slider/Generic-Slider-Carousel-Plugin-with-jQuery-Short-Slider.html) for slider tag only.

Insert just before the `<body>` tag.

```html
<script src="https://code.jquery.com/jquery-3.6.2.min.js"></script>
<script src="jquery.shortslider.min.js"></script>
<script src="adno-display-tags.js"></script>
```

## Views

### Infos

Display the project metadata.

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value: `infos` | |
| data-src | project url  | |
| data-title-level | level of the title h1 ... h3  | h3 |

### List

Display in list of images of annotated areas and annotations in captions.

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value:  `list` | |
| data-src | project url | |
| data-image-max-width | maximum image width (in pixels) | 600px |
| data-image-max-height | maximum image height (in pixels) | 600px |


### Slider

Display as a slideshow.

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value: `slider` | |
| data-src | project url | |
| data-style | presentation style: `normal`, `carousel ou `fade` | normal |
| data-width | width of slider (in pixels) | 800px |
| data-text-width | width of text (in pixels) | 600px |

### Embed

Insertion of the [https://adno.app](https://adno.app/) player.

| Attribute | Description | Default |
|-----------|-------------|---------|
| data-adno | value: `embed` | |
| data-src | project url | |
| data-width | width of the embed (in percentage or pixels) | 100% |
| data-height | height of the embed (in pixels) | 600px |
| data-fullscreen | allow fullscreen `true` or `false` | true |

[https://adno.app](https://adno.app/) directly provides a procedure to generate an iframe without using Adno views tags. 

```
<iframe
    src="https://w.adno.app/#/embed?url=URL OF ADNO PROJECT HERE"
    height="600px"
    width="100%"
    allow="fullscreen"
></iframe>
```

## Styling

The html produced is generic. You can style it by adding a style tag or a link to a custom stylesheet in the header. You can also use a [minimal css library](https://github.com/dohliam/dropin-minimal-css) ([MVP.css](https://andybrewer.github.io/mvp/) for example) as a base and override it with your own styles.

## References 

- [adno.app](https://adno.app)
- this hack is inspired by [Annona Library](https://ncsu-libraries.github.io/annona/). 


