// Task: https://javascript.info/array#array-operations

let styles = [`Jazz`, `Blues`];
console.log(styles);

styles.push(`Rock-n-Roll`);
console.log(styles);

styles[(styles.length - 1) / 2] = `Classics`;
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift(`Rap`, `Reggae`);
console.log(styles);
