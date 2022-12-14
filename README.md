# Repeats Tracker

A simple counter app designed to help keeping track of repeats in your workout.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Increment and decrement the number of repeats per session
- Save the repeats to the list
- See the current session after refreshing/restarting their browser
- Reset current session
- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page


### Screenshot

![](./images/preview.jpg)


### Links

- Code: [Github](https://github.com/Arniss5/Gym-Counter)
- Live Site URL: [Github Pages](https://arniss5.github.io/Gym-Counter/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

With this project I practised creating responsive applications. I also got more experience manipulating DOM and writing JS functions. I set onclick events on buttons. I learned how to save data in local storage.

```html
<button class="tracker-btn" id="increment" onclick="increment()">Increment</button>
```
```css
:root {
    --primary: rgb(133, 215, 0);
}
```
```js
prevRepeats.textContent = localStorage.getItem('gymSession')
}
```



### Continued development

I'm planning on exploring more DOM manipulation methods. I will practice writing more complex JS functions.


## Author

- Github - [Arniss5](https://github.com/Arniss5)


## Acknowledgments

Debagni Sarkhel for the background image. [Debagni's Unsplash](https://unsplash.com/photos/0jIxHsotdac)

