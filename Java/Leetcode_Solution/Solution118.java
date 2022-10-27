

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution118 {
  public static void main(String[] args) {
    int numRows = 5;
    System.out.println(Arrays.deepToString(generate(numRows).toArray()));
  }

  public static List<List<Integer>> generate(int numRows) {
    List<List<Integer>> matrix = new ArrayList<>();
    List<Integer> row0 = new ArrayList<Integer>(Arrays.asList(1));
    List<Integer> row1 = new ArrayList<Integer>(Arrays.asList(1, 1));
    matrix.add(row0);
    matrix.add(row1);
    for (int i = 2; i < numRows; i++) {
      List<Integer> row = new ArrayList<>(i + 1);
      for (int j = 0; j < i + 1; j++) {
        if (j == 0 || i - j == 0) {
          row.add(1);
        } else {
          row.add(matrix.get(i - 1).get(j) + matrix.get(i - 1).get(j - 1));
        }
      }
      matrix.add(row);
    }
    return matrix;
  }

}
