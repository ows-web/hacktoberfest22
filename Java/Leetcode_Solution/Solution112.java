import Utils.BinaryTree.TreeNode;

public class Solution112 {
  public static void main(String[] args) {

    System.out.println(Math.pow(3, 19) % Math.abs(-3) == 0);
  }

  public boolean hasPathSum(TreeNode root, int targetSum) {
    if (root == null)
      return false;
    if (root.val == targetSum && (root.left == null && root.right == null))
      return true;
    if (root.left == null && root.right == null)
      return false;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
  }
}
