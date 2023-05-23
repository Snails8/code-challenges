/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    const helper = (node: TreeNode | null) => {
        if (!node) return;

        result.push(node.val);
        helper(node.left);
        helper(node.right);

        console.log(node.val);
    }
    helper(root);

    return result;
};
