'use strict';
const BinarySearchTree = require('./BST');


function main(){
  const BST = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);

  // BST.insert('E', 'E');
  // BST.insert('A', 'A');
  // BST.insert('S', 'S');
  // BST.insert('Y', 'Y');
  // BST.insert('Q', 'Q');
  // BST.insert('U', 'U');
  // BST.insert('E', 'E');
  // BST.insert('S', 'S');
  // BST.insert('T', 'T');
  // BST.insert('I', 'I');
  // BST.insert('O', 'O');
  // BST.insert('N', 'N');

  //console.log(BST);
  //console.log(height(BST))
  //console.log(isItBST(BST))
  console.log(findThrid(BST))
}

main();


// 4. What does this program do?
// The function adds up all values in the tree.
// Time complexity: O(n)

// 5. Height of BST


function height(tree){
  if(tree === null){
    return 0;
  }
  let rightCount = height(tree.right);
  let leftCount = height(tree.left);
  return 1+Math.max(rightCount, leftCount);
}

// 6. Is it a BST?

function isItBST(tree){

  if(
    tree.left > tree || 
    tree.left > tree.right || 
    tree.right < tree || 
    tree.right < tree.left){
    return false;
  }
  if(!tree.right && !tree.left){
    if(!tree.parent){
      return false;
    }
    else return;
  }
  if(tree.left){
    isItBST(tree.left);
  }
  if(tree.right){
    isItBST(tree.right);
  }
  return true;

}

// 7. 3rd largest node
function findThrid(tree) {
  // find the largest node(to the right)
  if (!tree.right) {
    if(tree.left !== null){
      return tree.parent;
    }
    if(!tree.left){
      if(!tree.parent){
        return tree;
      }
      return tree.parent.left;
    }
  }
  return findThrid(tree.right);
}


