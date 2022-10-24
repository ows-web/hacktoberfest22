import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
public class asgn11 {
public static void main(String[] args) {
try{
// int b=10;
// int div= b/0;
int array[]= new int[50];
array[150] = 1000; 
}
catch(ArithmeticException e)
{
System.out.println("\nThis is arithmatic exception");
}
catch(ArrayIndexOutOfBoundsException e)
{
System.out.println("\nArray index is out of bound.");
}
try
{
String a = null; 
 System.out.println(a.charAt(0));
}
catch(NullPointerException e) 
{
 System.out.println("\nNullPointerException..");
 }
try
{
File file = new File("E://file.txt");
 FileReader fr = new FileReader(file); 
}
catch (FileNotFoundException e) 
{
 System.out.println("\nFile does not exist in your system");
 }
try 
{
 int number = Integer.parseInt ("Siddhi") ;
 System.out.println(number);
 }
catch(NumberFormatException e) 
{
 System.out.println("\nNumber format exception found");
 }
catch(Exception e){
System.out.println(e);
}
}
}
