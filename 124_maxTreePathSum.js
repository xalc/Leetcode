function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var maxPathSumv1 = function (root) {
    const subMax = (node, index) => {
        if (node.left === undefined && node.right === undefined) {
            return node.val;
        }
        if (index > root.length - 1) {
            return 0;
        }
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        const leftNode = new TreeNode(node.left, root[2 * leftIndex + 1], root[2 * leftIndex + 2]);
        const rightNode = new TreeNode(node.right, root[2 * rightIndex + 1], root[2 * rightIndex + 2]);

        const leftMaxSum = subMax(leftNode, leftIndex);
        const rightMaxSum = subMax(rightNode, rightIndex);

        const selected = node.val + leftMaxSum + rightMaxSum;
        const unSelected = Math.max(leftMaxSum, rightMaxSum)

        return Math.max(selected, unSelected)

    }

    const rootNode = new TreeNode(root[0], root[1], root[2]);
    return subMax(rootNode, 0);


};


var maxPathSumv2 = function (root) {

}

let tree = [-10, 9, 20, null, null, 15, 7];
tree = [1, 2, 3]
console.log(maxPathSum(tree))