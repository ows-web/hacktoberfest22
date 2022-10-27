import java.util.*;

import Utils.BinaryTree;
import Utils.BinaryTree.TreeNode;

public class Solution103 {
  public static void main(String[] args) {
    Integer[] values = { 3, 9, null, null, 20, 15, null, null, 7, null, null };
    BinaryTree tree = new BinaryTree();
    TreeNode root = tree.buildTree(values);
    System.out.println(Arrays.deepToString(zigzagLevelOrder(root).toArray()));
  }

  public static List<List<Integer>> zigzagLevelOrder(TreeNode root) {
    List<List<Integer>> list = new ArrayList<>();
    if (root == null)
      return list;
    Queue<TreeNode> q = new LinkedList<>();
    List<Integer> l = new ArrayList<>();
    q.add(root);
    q.add(null);
    int count = 0;

    while (!q.isEmpty()) {
      TreeNode current = q.remove();
      if (current == null) {
        if (count % 2 == 0)
          list.add(l);
        else {
          Collections.reverse(l);
          list.add(l);
        }
        l = new ArrayList<>();
        count++;
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
