
/**
 * dependencies
 */

var direction = require('component-directionality')
  , events = require('component-events')
  , trim = require('component-trim');

/**
 * Export `Direction`
 */

module.exports = Direction;

/**
 * Initialize `Direction` with `el`.
 *
 * @param {Element} el
 */

function Direction(el){
  if (!(this instanceof Direction)) return new Direction(el);
  if (!el) throw new TypeError('expected element');
  this.events = events(el, this);
  this.el = el;
  this.bind();
}

/**
 * Bind internal events.
 *
 * @return {Direction}
 */

Direction.prototype.bind = function(){
  this.events.bind('keyup');
  this.events.bind('blur');
  return this;
};

/**
 * Unbind internal events.
 *
 * @return {Direction}
 */

Direction.prototype.unbind = function(){
  this.events.unbind();
  return this;
};

/**
 * onkeyup
 */

Direction.prototype.onkeyup = function(e){
  if (1 <= this.el.value.length) {
    var val = trim.left(this.el.value);
    this.el.style.direction = direction(val);
  } else if (0 == this.el.value.length) {
    this.el.style.direction = null;
  }
};

/**
 * onblur
 */

Direction.prototype.onblur = function(){
  if (0 == this.el.value.length) {
    this.el.style.direction = null;
  }
};
