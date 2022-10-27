import java.util.ArrayList;
import java.util.List;

public class Solution119 {
  public static void main(String[] args) {
    System.out.println(getRow(30));
  }

  public static List<Integer> getRow(int rowIndex) {
    List<Integer> res = new ArrayList<>();
    double prev = 1;
    res.add((int) prev);

    for (int i = 1; i <= rowIndex; i++) {
      double curr = (prev * (rowIndex - i + 1)) / i;
      res.add((int) curr);
      prev = curr;
    }
    return res;
  }
}
