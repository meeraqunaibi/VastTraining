import { TreeNode } from "./TreeNode.js"; // Importing TreeNode module

const map = new Map(); // Creating a map to store characters and their probabilities
map.set("b", 0.1);
map.set("a", 0.3);
map.set("c", 0.11);
map.set("d", 0.09);
map.set("e", 0.4);

let nodeArray = new Array(); // Array to hold nodes for Huffman encoding
let internalNodesCounter = 0; // Counter for internal nodes in the Huffman tree

// Function to check if the sum of probabilities is equal to 1
let checkProbabilitySum = () => {
    let sum = 0;
    for (const value of map.values()) {
        sum += value;
    }
    if (sum != 1) {
        console.log("The probability should be equal 1");
        return;
    }
    huffmanEncoding(); // If sum is 1, start Huffman decoding process
}

// Function to find the node with minimum frequency
let minNode = () => {
    let min = nodeArray[0].frequency;
    let minIndex = 0;
    nodeArray.map((element, index) => {
        if (element.frequency < min) {
            min = element.frequency;
            minIndex = index;
        }
    });
    const minNode = nodeArray[minIndex];
    nodeArray.splice(minIndex, 1);
    return minNode;
}

// Function to print the Huffman codes for characters
let printCode = (node, binaryCode) => {
    if (node.left == null && node.right == null) {
        console.log(node.data + ": " + binaryCode);
        return;
    }
    printCode(node.left, binaryCode + "0");
    printCode(node.right, binaryCode + "1");
}

// Function to perform Huffman encoding
let huffmanEncoding = () => {
    // Creating tree nodes for each character and its probability
    for (const [key, value] of map) {
        let newNode = new TreeNode(key, value)
        nodeArray.push(newNode);
    }

    // Building the Huffman tree
    while (nodeArray.length > 1) {
        let min1 = minNode();
        let min2 = minNode();
        internalNodesCounter++;
        let newNode = new TreeNode(`internalNode${internalNodesCounter}`, min1.frequency + min2.frequency);

        // Constructing the tree based on minimum frequencies
        if (!min1.left && !min2.left) {
            newNode.left = new TreeNode(min1.data, min1.frequency)
            newNode.right = new TreeNode(min2.data, min2.frequency)
        }
        else if (!min1.left) {
            newNode.left = new TreeNode(min1.data, min1.frequency)
            newNode.right = min2;
        }
        else if (!min2.left) {
            newNode.left = min1;
            newNode.right = new TreeNode(min2.data, min2.frequency)
        }
        else {
            newNode.left = min1;
            newNode.right = min2;
        }
        nodeArray.push(newNode);
    }

    printCode(nodeArray[nodeArray.length - 1], "") // Printing Huffman codes
}

checkProbabilitySum(); // Start the process by checking probabilities

// console.log(nodeArray[nodeArray.length - 1]); // to print the final Huffman tree node
