import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import Utils.BinaryTree;
import Utils.BinaryTree.TreeNode;

public class Solution102 {
  public static void main(String[] args) {
    Integer[] values = { 3, 9, null, null, 20, 15, null, null, 7, null, null };
    BinaryTree tree = new BinaryTree();
    TreeNode root = tree.buildTree(values);

    System.out.println(Arrays.deepToString(levelOrder(root).toArray()));
  }

  public static List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> list = new ArrayList<>();
    if (root == null)
      return list;
    Queue<TreeNode> q = new LinkedList<>();
    List<Integer> l = new ArrayList<>();
    q.add(root);
    q.add(null);

    while (!q.isEmpty()) {
      TreeNode current = q.remove();
      if (current == null) {
        list.add(l);
        l = new ArrayList<>();
        if (q.isEmpty())
          break;
        else
          q.add(null);
      } else {
        l.add(current.val);
        if (current.left != null)
          q.add(current.left);
        if (current.right != null)
          q.add(current.right);
      }
    }
    return list;
  }
}
