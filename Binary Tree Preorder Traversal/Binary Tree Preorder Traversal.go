/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func preorderTraversal(root *TreeNode) []int {
    return preorderTraversalWith(root, []int{})
}

func preorderTraversalWith(node *TreeNode, current []int) []int {
    if node != nil {
        current = append(current, node.Val)
        current = preorderTraversalWith(node.Left, current)
        current = preorderTraversalWith(node.Right, current)
    }
    return current
}
