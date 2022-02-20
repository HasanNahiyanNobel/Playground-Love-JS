/**
 * Pre-task researches
 */

console.log(`Pre-task researches.`);

class User {
  constructor(name) {
    console.log(`Inside constructor.`);
    this.name = name;
  }

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));

let user = new User(`John`);
user.sayHi();

new User();

console.log(User);

class Button {
  constructor(value) {
    this.value = value;
  }

  get currentValue() {
    return this.value;
  }

  set newValue(value) {
    this.value = value;
  }

  click() {
    console.log(this);
    console.log(this.value);
  };

  anotherClick = () => {
    console.log(this);
    console.log(this.value);
  };
}

let button = new Button(`John`);
console.log(button.currentValue);
button.newValue = `George`;
console.log(button.currentValue);

// Details on this are on the lesson: https://javascript.info/bind
// button.click();
// setTimeout(button.click, 100);
// setTimeout(button.anotherClick, 300);

/**
 * Task: https://javascript.info/class#rewrite-to-class
 */

console.log(`https://javascript.info/class#rewrite-to-class`);

class Clock {
  constructor({template}) {
    let timer;

    function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template.replace('h', hours).
          replace('m', mins).
          replace('s', secs);

      console.log(output);
    }

    this.stop = function() {
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  }
}

console.log(Clock);
let clock = new Clock({template: 'h:m:s'});
clock.start();
