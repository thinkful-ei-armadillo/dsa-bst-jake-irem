'use strict';
const BinarySearchTree = require('./BST');


function main(){
  const BST = new BinarySearchTree();
//   BST.insert(3, 3);
//   BST.insert(1, 1);
//   BST.insert(4, 4);
//   BST.insert(6, 6);
//   BST.insert(9, 9);
//   BST.insert(2, 2);
//   BST.insert(5, 5);
//   BST.insert(7, 7);

  BST.insert('E', 'E');
  BST.insert('A', 'A');
  BST.insert('S', 'S');
  BST.insert('Y', 'Y');
  BST.insert('Q', 'Q');
  BST.insert('U', 'U');
  BST.insert('E', 'E');
  BST.insert('S', 'S');
  BST.insert('T', 'T');
  BST.insert('I', 'I');
  BST.insert('O', 'O');
  BST.insert('N', 'N');

  console.log(BST);
  
}

main();