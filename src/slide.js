import { TweenMax, TimelineMax, Expo, Power3, Power4 } from 'gsap';
// Window sizes.
let winsize;
const calcWinsize = () =>
  (winsize = { width: window.innerWidth, height: window.innerHeight });
calcWinsize();
window.addEventListener('resize', calcWinsize);

// Class for a content item.
class Item {
  constructor(el) {
    this.DOM = { el: el };
    // The inner contains both the image and reveal elements.
    this.DOM.inner = this.DOM.el.querySelector('.slide__figure-inner');
    // The image.
    this.DOM.image = this.DOM.inner.querySelector('.slide__figure-img');
    // The reveal element (element that is on top of the image and moves away to reveal the image).
    this.DOM.reveal = this.DOM.inner.querySelector('.slide__figure-reveal');
    // Title and description.
    this.DOM.title = this.DOM.el.querySelector('.slide__figure-title');
    this.DOM.description = this.DOM.el.querySelector(
      '.slide__figure-description'
    );

    const calcRect = () => (this.rect = this.DOM.el.getBoundingClientRect());
    window.addEventListener('resize', calcRect);
    calcRect();
  }
  // Gets the side where the item is on the slideshow/viewport (left or right).
  getSide() {
    // Item´s center point.
    const center = {
      x: this.rect.left + this.rect.width / 2,
      y: this.rect.top + this.rect.height / 2
    };
    return center.x >= winsize.width / 2 ? 'right' : 'left';
  }
}

// A slide is the two "pages" that are currently visible.
export default class Slide {
  constructor(el) {
    this.DOM = { el: el };
    // Content item instances.
    this.items = [];
    // The figures
    Array.from(this.DOM.el.querySelectorAll('.slide__figure')).forEach((item) =>
      this.items.push(new Item(item))
    );
  }
  // Show its content items.
  showItems(direction) {
    return new Promise((resolve, reject) => {
      const duration = 1;
      const ease = Expo.easeOut;
      this.tl = new TimelineMax({ onComplete: resolve }).add('begin');
      for (const item of this.items) {
        // Animate the main element (translation of the whole item).
        this.tl.to(
          item.DOM.el,
          duration,
          {
            ease: ease,
            startAt: { x: direction === 'next' ? 60 : -60, opacity: 1 },
            x: '0%'
          },
          'begin'
        );
        // Animate the rotationZ for the elements that are inside the turning side.
        if (
          (direction === 'next' && item.getSide() === 'left') ||
          (direction === 'prev' && item.getSide() === 'right')
        ) {
          // Animate the perspective element
          TweenMax.set(item.DOM.inner, {
            'transform-origin': direction === 'next' ? '100% 50%' : '0% 50%'
          });
          this.tl.to(
            item.DOM.inner,
            duration,
            {
              ease: ease,
              startAt: {
                rotationY: direction === 'next' ? 30 : -30
                //rotationZ: direction === 'next' ?  5 : -5
              },
              rotationY: 0.1
              //rotationZ: 0
            },
            'begin'
          );
        }
        // Animate the reveal element away from the image.
        this.tl
          .to(
            item.DOM.reveal,
            duration,
            {
              ease: ease,
              startAt: { x: '0%' },
              x: direction === 'next' ? '-100%' : '100%'
            },
            'begin'
          )
          // Animate the scale of the image.
          .to(
            item.DOM.image,
            duration,
            {
              ease: ease,
              startAt: {
                scale: 1.5
                //rotationZ: direction === 'next' ?  -5 : 5
              },
              scale: 1
              //rotationZ: 0
            },
            'begin'
          )
          // Animate the title in.
          .to(
            item.DOM.title,
            duration * 0.8,
            {
              ease: Power3.easeOut,
              startAt: { x: direction === 'next' ? 15 : -15, opacity: 0 },
              x: '0%',
              opacity: 1
            },
            'begin+=0.25'
          )
          // Animate the description in.
          .to(
            item.DOM.description,
            duration * 0.8,
            {
              ease: Power3.easeOut,
              startAt: { x: direction === 'next' ? 20 : -20, opacity: 0 },
              x: '0%',
              opacity: 1
            },
            'begin+=0.3'
          );
      }
    });
  }
  // Reset items after the page turns.
  resetItems() {
    for (const item of this.items) {
      TweenMax.set(item.DOM.el, { opacity: 0 });
      TweenMax.set([item.DOM.title, item.DOM.description], { opacity: 0 });
    }
  }
}
