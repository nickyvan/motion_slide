import { TweenMax, TimelineMax, Expo, Power3, Power4 } from 'gsap';
const colors = ['#f6f6f6', '#f0f0f0', '#e3e3e3', '#d7d7d7', '#d0d0d0'];

// The page turning animations.
export default class PageTurn {
  constructor(el, pagesTotal) {
    this.DOM = { el: el };
    this.config = {
      // Duration for each page turn animation.
      duration: 1.6,
      // Delay between the pages. Need to be tuned correctly together with the duration, so that there are no gaps between the pages, otherwise the content switch would be visible.
      pagesDelay: 0.15,
      // Ease for each page turn animation. Needs to be easeInOut
      ease: Power4.easeInOut
    };
    // Both sides.
    this.DOM.pagesWrap = {
      left: this.DOM.el.querySelector('.revealer__item--left'),
      right: this.DOM.el.querySelector('.revealer__item--right')
    };
    // Create the turning pages.
    let pagesHTML = '';
    for (let i = 0; i <= pagesTotal; ++i) {
      // Setting the color of the turning page based on the colors array
      // todo: Need to find a better way to do this..
      const color = colors[i] || colors[0];
      pagesHTML += `<div class="revealer__item-inner" style="background-color:${color};"></div>`;
    }
    this.DOM.pagesWrap.left.innerHTML = this.DOM.pagesWrap.right.innerHTML = pagesHTML;
    // All the turning pages.
    this.DOM.pages = {
      left: Array.from(
        this.DOM.pagesWrap.left.querySelectorAll('.revealer__item-inner')
      ),
      right: Array.from(
        this.DOM.pagesWrap.right.querySelectorAll('.revealer__item-inner')
      )
    };
  }
  // The pages will be initially translated to the right or left (100% or -100% on the x-axis) and then animated to the opposite side.
  addTween(side, direction, nmbPages) {
    const pages = this.DOM.pages[side];
    for (let i = 0, len = nmbPages - 1; i <= len; ++i) {
      const page = pages[i];
      this.tl.to(
        page,
        this.config.duration,
        {
          ease: this.config.ease,
          startAt: { x: direction === 'next' ? '100%' : '-100%' },
          x: direction === 'next' ? '-100%' : '100%'
        },
        i * this.config.pagesDelay
      );
    }
  }
  createTweens(direction, nmbPages) {
    this.addTween('left', direction, nmbPages);
    this.addTween('right', direction, nmbPages);
  }
  turn(direction, nmbPages, middleAnimationCallback) {
    return new Promise((resolve, reject) => {
      this.tl = new TimelineMax({ onComplete: resolve, paused: true });
      // Add a callback for the middle of the animation.
      if (middleAnimationCallback) {
        this.tl.addCallback(
          middleAnimationCallback,
          (this.config.duration + (nmbPages - 1) * this.config.pagesDelay) / 2
        );
      }
      this.createTweens(direction, nmbPages);
      this.tl.resume();
    });
  }
}