package Utils;

public class BinaryTree {
  static int idx = -1;

  public TreeNode buildTree(Integer nodes[]) {
    idx++;
    if (idx >= nodes.length || nodes[idx] == null)
      return null;

    TreeNode newNode = new TreeNode(nodes[idx]);
    newNode.left = buildTree(nodes);
    newNode.right = buildTree(nodes);
    return newNode;
  }

  public static class TreeNode {
    public Integer val;
    public TreeNode left, right;

    TreeNode() {
      this.val = null;
      this.left = null;
      this.right = null;

    }

    TreeNode(int val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }

  }
}
