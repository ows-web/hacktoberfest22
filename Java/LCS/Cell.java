public class Cell {
      int val;
      char dir;
      Cell(int val,char dir) {
                      this.val=val;
                      this.dir=dir;
      }
      Cell(){

      }
      Cell(int val){
                      this.val=val;
      }
      Cell(char dir){
                      this.dir=dir;
      }
      public void setDir(char dir) {
                            this.dir = dir;
      }
      public void setVal(int val) {
                            this.val = val;
      }

}
