import React, { Component } from 'react';
import './App.css';
import Slideshow from './motion';
class App extends Component {
  componentDidMount() {
    new Slideshow(document.querySelector('.slideshow'));
  }
  render() {
    return (
      <div className="App">
        <svg className="hidden">
          <svg id="icon-nav" viewBox="0 0 152 63">
            <title>navarrow</title>
            <path d="M115.737 29L92.77 6.283c-.932-.92-1.21-2.84-.617-4.281.594-1.443 1.837-1.862 2.765-.953l28.429 28.116c.574.57.925 1.557.925 2.619 0 1.06-.351 2.046-.925 2.616l-28.43 28.114c-.336.327-.707.486-1.074.486-.659 0-1.307-.509-1.69-1.437-.593-1.442-.315-3.362.617-4.284L115.299 35H3.442C2.032 35 .89 33.656.89 32c0-1.658 1.143-3 2.552-3H115.737z" />
          </svg>
        </svg>
        <div className="slideshow">
          <div className="slide slide--layout-1 slide--current">
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/1.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Black cappuccino sugar</h3>
                <p className="slide__figure-description">
                  Plunger pot dripper crema sit coffee
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/2.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Cup white foam</h3>
                <p className="slide__figure-description">
                  Mug that steamed to go
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/3.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Aroma mocha</h3>
                <p className="slide__figure-description">Foam trifecta</p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/4.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Seasonal et dripper</h3>
                <p className="slide__figure-description">
                  Trifecta foam, con panna caffeine
                </p>
              </figcaption>
            </figure>
            <span className="slide__number slide__number--left">1</span>
            <span className="slide__number slide__number--right">2</span>
          </div>
          <div className="slide slide--layout-2">
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/5.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Carajillo percolator</h3>
                <p className="slide__figure-description">
                  White sugar plunger pot half
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/6.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Cortado organic skinny</h3>
                <p className="slide__figure-description">
                  As aromatic, grinder turkish
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/7.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Qui coffee, americano</h3>
                <p className="slide__figure-description">
                  Espresso percolator iced rich
                </p>
              </figcaption>
            </figure>
            <span className="slide__number slide__number--left">3</span>
            <span className="slide__number slide__number--right">4</span>
          </div>
          <div className="slide slide--layout-3">
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/8.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">White filter</h3>
                <p className="slide__figure-description">
                  Breve, brewed ristretto rich arabica
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/9.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Java half and half</h3>
                <p className="slide__figure-description">
                  Et aged so, sweet cup
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/10.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Steamed et mazagran</h3>
                <p className="slide__figure-description">
                  As cultivar froth fair trade
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/11.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Coffee mazagran eu</h3>
                <p className="slide__figure-description">
                  Breve seasonal frappuccino
                </p>
              </figcaption>
            </figure>
            <span className="slide__number slide__number--left">5</span>
            <span className="slide__number slide__number--right">6</span>
          </div>
          <div className="slide slide--layout-4">
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/12.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Kopi-luwak body</h3>
                <p className="slide__figure-description">
                  Affogato steamed single shot
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/13.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Ut crema eu cultivar</h3>
                <p className="slide__figure-description">
                  Black flavour qui robusta
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/14.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">
                  Sit, in americano iced acerbic
                </h3>
                <p className="slide__figure-description">
                  Macchiato whipped, chicory mug
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/15.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">
                  At redeye, white foam extra
                </h3>
                <p className="slide__figure-description">
                  Variety black grounds espresso
                </p>
              </figcaption>
            </figure>
            <span className="slide__number slide__number--left">7</span>
            <span className="slide__number slide__number--right">8</span>
          </div>
          <div className="slide slide--layout-5">
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/16.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">Aftertaste roast</h3>
                <p className="slide__figure-description">
                  Instant extra beans decaffeinated
                </p>
              </figcaption>
            </figure>
            <figure className="slide__figure">
              <div className="slide__figure-inner">
                <div
                  className="slide__figure-img"
                  style={{ backgroundImage: 'url(./images/17.jpg)' }}
                />
                <div className="slide__figure-reveal" />
              </div>
              <figcaption>
                <h3 className="slide__figure-title">
                  Brewed sit in instant shop
                </h3>
                <p className="slide__figure-description">
                  Blue mountain, java crema
                </p>
              </figcaption>
            </figure>
            <span className="slide__number slide__number--left">9</span>
            <span className="slide__number slide__number--right">10</span>
          </div>
          {/* revealer */}
          <div className="revealer">
            <div className="revealer__item revealer__item--left" />
            <div className="revealer__item revealer__item--right" />
          </div>
          <nav className="arrow-nav">
            <button className="arrow-nav__item arrow-nav__item--prev">
              <svg className="icon icon--nav">
                <use xlinkHref="#icon-nav" />
              </svg>
            </button>
            <button className="arrow-nav__item arrow-nav__item--next">
              <svg className="icon icon--nav">
                <use xlinkHref="#icon-nav" />
              </svg>
            </button>
          </nav>
          {/* navigation */}
          <nav className="nav">
            <button className="nav__button">
              <span className="nav__button-text">index</span>
            </button>
            <h2 className="nav__chapter">Riding on a storm</h2>
            <div className="toc">
              <a className="toc__item" href="#entry-1">
                <span className="toc__item-page">01.</span>
                <span className="toc__item-title">Riding on a storm</span>
              </a>
              <a className="toc__item" href="#entry-2">
                <span className="toc__item-page">03.</span>
                <span className="toc__item-title">
                  Guidelines for happiness
                </span>
              </a>
              <a className="toc__item" href="#entry-3">
                <span className="toc__item-page">05.</span>
                <span className="toc__item-title">Freedom fighter</span>
              </a>
              <a className="toc__item" href="#entry-4">
                <span className="toc__item-page">07.</span>
                <span className="toc__item-title">Lost and found</span>
              </a>
              <a className="toc__item" href="#entry-5">
                <span className="toc__item-page">09.</span>
                <span className="toc__item-title">Fantasies of Wood</span>
              </a>
            </div>
          </nav>
          {/* little sides */}
          <div className="slideshow__indicator" />
          <div className="slideshow__indicator" />
        </div>
      </div>
    );
  }
}

export default App;
