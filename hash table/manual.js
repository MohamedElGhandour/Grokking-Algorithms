// * Class Way
class hash {
  constructor() {
    this.table = {};
    this.list = [];
  }
  set(item, price) {
    this.list.push(price);
    this.table[item.trim().toLowerCase()] = this.list.length - 1;
  }
  get(item) {
    const index = this.table[item.trim().toLowerCase()];
    return this.list[index];
  } 
}

const book = new hash();
book.set("ALGO", 99.58);
book.set("JAVA", 147.45);
book.set("C", 65.55);
book.set("PYTHON", 150.58);
console.log(book.get("ALGO"));
console.log(book.list, book.table);

// * Function Way
// const hash = () => {
//   const table = {};
//   const list = [];
//   const set = (item, price) => {
//     list.push(price);
//     table[item.trim().toLowerCase()] = list.length - 1;
//   };
//   const get = (item) => {
//     const index = table[item];
//     return list[index];
//   };
//   return {
//     set: set,
//     get: get,
//     list: list,
//     table: table,
//   };
// };

// const book = hash();
// book.set("ALGO", 99.58);
// book.set("JAVA", 147.45);
// book.set("C", 65.55);
// book.set("PYTHON", 150.58);
// console.log(book.get("ALGO"));
// console.log(book.list, book.table);
