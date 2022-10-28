//code to find longest common subsequence from given two strings
import java.util.*;
public class LCS{
                      static int max(int a, int b) 
                      { 
                          return (a > b)? a : b; 
                      } 

static void lcs(char[] X,char[] Y,int n,int m,Cell[][] C){
    for(int i=0;i<=m;i++){
                    for(int j=0;j<=n;j++){
            if(i==0 || j==0){
                
                C[i][j]=new Cell(0,'H');
            }                    
            else{
        C[i][j]=new Cell();
        if (X[i-1]!=Y[j-1]){
                int value=max(C[i-1][j].val,C[i][j-1].val);
                C[i][j].setVal(value);
                            if(C[i-1][j].val>=C[i][j-1].val){
                                                C[i][j].setDir('U');
                            }
                            else{ 
                                                C[i][j].setDir('S');
                            }
                                        

                }
                else{
                    int temp=((C[i-1][j-1].val)+1);
                    C[i][j].setVal(temp);
                    C[i][j].setDir('D');
                }
        }
    }                    
}
for(int i=0;i<=m;i++){
    for(int j=0;j<=n;j++){
        System.out.print(C[i][j].val+"/"+C[i][j].dir+" ");
    }
    System.out.println();
}
System.out.println("Similarities between the sequences is:");
print_lcs(C,X,m,n);
}
static void print_lcs(Cell[][] C,char[] X,int i,int j) {
            if(i==0 || j==0){
                                return;
            }
            if(C[i][j].dir=='D'){
                                print_lcs(C,X,i-1,j-1);
                                System.out.println(X[i-1]);
            }
            else{
                                if(C[i][j].dir=='U'){
                                                        print_lcs(C,X,i-1,j);
                                }
                                else{
                                                        print_lcs(C,X,i,j-1);
                                }
            }
}
public static void main(String args[]){
               Scanner sc=new Scanner(System.in)       ;
               System.out.println("Enter string 1: ");
               String s1=sc.nextLine();
               System.out.println("Enter string 2: ");
               String s2=sc.nextLine();
               char[] X=s1.toCharArray();
               char[] Y=s2.toCharArray();
               int m=X.length;
               int n=Y.length;
               Cell[][] C=new Cell[m+1][n+1];
               lcs(X,Y,m,n,C);               
}

}