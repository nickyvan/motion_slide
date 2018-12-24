import { TweenMax, TimelineMax, Expo, Power3, Power4 } from 'gsap';
const colors = ['#f6f6f6', '#f0f0f0', '#e3e3e3', '#d7d7d7', '#d0d0d0'];

import PageTurn from './pageTurn'
import Slide from './slide'
export default class Slideshow {
  constructor(el) {
    this.DOM = { el: el };
    // Current slide´s index.
    this.current = 0;
    // Slide instances.
    this.slides = [];
    Array.from(this.DOM.el.querySelectorAll('.slide')).forEach((slide) =>
      this.slides.push(new Slide(slide))
    );
    this.slidesTotal = this.slides.length;
    // Set the first slide as current.
    this.slides[this.current].DOM.el.classList.add('slide--current');
    // The page turning animations.
    this.pageturn = new PageTurn(
      this.DOM.el.querySelector('.revealer'),
      this.slidesTotal
    );
    // The arrows to navigate the slideshow.
    this.pagination = {
      prevCtrl: this.DOM.el.querySelector('.arrow-nav__item--prev'),
      nextCtrl: this.DOM.el.querySelector('.arrow-nav__item--next')
    };
    // The table of contents element.
    this.DOM.nav = this.DOM.el.querySelector('.nav');
    this.DOM.navCtrl = this.DOM.nav.querySelector('.nav__button');
    // ..Its items.
    this.DOM.tocItems = Array.from(
      this.DOM.nav.querySelectorAll('.toc > .toc__item')
    );
    // Set the first one as current.
    this.DOM.tocItems[this.current].classList.add('toc__item--current');
    // Current chapter name (TOC Item that is selected and visible next to the "index+").
    this.DOM.chapter = this.DOM.nav.querySelector('.nav__chapter');
    // The "book" left/right cover indicators.
    this.DOM.indicators = Array.from(
      this.DOM.el.querySelectorAll('.slideshow__indicator')
    );
    // The one on the right side is not visible in the beginning while the one on the left is fully visible.
    // We will later change this as we turn the pages.
    TweenMax.set(this.DOM.indicators[1], { scaleX: 0 });
    this.initEvents();
  }
  initEvents() {
    // Clicking on the next and previous arrows will turn the page to right or left.
    const arrowClickPrevFn = () => this.pagethrough('prev');
    const arrowClickNextFn = () => this.pagethrough('next');
    this.pagination.prevCtrl.addEventListener('click', arrowClickPrevFn);
    this.pagination.nextCtrl.addEventListener('click', arrowClickNextFn);

    // Clicking the TOC element reveals or hides the TOC.
    const navClickFn = () => this.toggleToc();
    this.DOM.navCtrl.addEventListener('click', navClickFn);

    // Clicking a link inside the TOC to go to a specific page
    this.DOM.tocItems.forEach((tocItem, pos) => {
      tocItem.addEventListener('click', (ev) => {
        ev.preventDefault();
        this.navigate(pos);
      });
    });
  }
  // This function is executed at the middle point of the turning pages animation.
  switchPage(newPagePos, direction = 'next') {
    const currentSlide = this.slides[this.current];
    const upcomingSlide = this.slides[newPagePos];
    // Set the upcoming slide as current.
    currentSlide.DOM.el.classList.remove('slide--current');
    currentSlide.resetItems();
    upcomingSlide.DOM.el.style.zIndex = 100;
    upcomingSlide.showItems(direction).then(() => {
      upcomingSlide.DOM.el.classList.add('slide--current');
      upcomingSlide.DOM.el.style.zIndex = '';
      this.isAnimating = false;
    });
    // Update the side indicators.
    TweenMax.to(this.DOM.indicators[0], 0.5, {
      ease: Expo.easeOut,
      scaleX: 1 - newPagePos / (this.slidesTotal - 1)
    });
    TweenMax.to(this.DOM.indicators[1], 0.5, {
      ease: Expo.easeOut,
      scaleX: newPagePos / (this.slidesTotal - 1)
    });
    // Update TOC
    this.updateToc(newPagePos);
    // Update current value.
    this.current = newPagePos;
    // Update pagination ctrls visibility.
    this.pagination.nextCtrl.style.visibility =
      this.current === this.slidesTotal - 1 ? 'hidden' : 'visible';
    this.pagination.prevCtrl.style.visibility =
      this.current === 0 ? 'hidden' : 'visible';
  }
  // Go to the next or previous page.
  pagethrough(direction) {
    if (
      this.isAnimating ||
      (direction === 'next' && this.current === this.slidesTotal - 1) ||
      (direction === 'prev' && this.current === 0)
    ) {
      return false;
    }
    this.isAnimating = true;
    const newPagePos =
      direction === 'next' ? this.current + 1 : this.current - 1;
    this.pageturn.turn(direction, 1, () =>
      this.switchPage(newPagePos, direction)
    );
  }
  // Show or hide the TOC.
  toggleToc() {
    if (this.isTocOpen) {
      this.DOM.chapter.style.opacity = 1;
      this.DOM.nav.classList.remove('nav--open');
      TweenMax.set(this.DOM.tocItems, { opacity: 0 });
    } else {
      this.DOM.chapter.style.opacity = 0;
      this.DOM.nav.classList.add('nav--open');
      TweenMax.staggerTo(
        this.DOM.tocItems,
        1,
        {
          ease: Expo.easeOut,
          startAt: { opacity: 0, y: 10 },
          opacity: 1,
          y: 0
        },
        0.02
      );
    }
    this.isTocOpen = !this.isTocOpen;
  }
  // Update the current TOC item.
  updateToc(newpos) {
    this.DOM.tocItems[this.current].classList.remove('toc__item--current');
    this.DOM.tocItems[newpos].classList.add('toc__item--current');
    this.DOM.chapter.innerHTML = this.DOM.tocItems[newpos].querySelector(
      '.toc__item-title'
    ).innerHTML;
  }
  // Clicking a link inside the TOC will turn as many pages needed and jump to the specified page.
  navigate(newPagePos) {
    if (this.isAnimating || newPagePos === this.current) {
      return false;
    }
    this.isAnimating = true;
    // Close after clicking.
    this.toggleToc();
    const direction = newPagePos > this.current ? 'next' : 'prev';
    // Turn [this.current-newPagePos] pages.
    this.pageturn.turn(direction, Math.abs(this.current - newPagePos), () =>
      this.switchPage(newPagePos, direction)
    );
  }
}

