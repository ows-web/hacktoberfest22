import java.util.*;
class Student100 {
 int roll, choise;
 String name, branch;
 float percent;
 public Student100(int roll, String name, String branch, float percent) {
 this.roll = roll;
 this.name = name;
 this.branch = branch;
 this.percent = percent;
 }
}
public class asgn10 {
 public static void main(String[] args) {
 int roll, ch;
 String name, branch;
 float percent;
 Scanner sc = new Scanner(System.in);
 
 LinkedList<Student100> ll = new LinkedList<Student100>();
 do {
 System.out.println("**************** Menu ****************");
 System.out.println(
 "Choose your operation\n\n1. Add a Student\n2. Remove a Student\n3. Update a 
Student's details\n4. Diaplay all Students\n5. Exit");
 System.out.println("*************************************");
 System.out.print("Enter Your Choice : ");
 
 ch = sc.nextInt();
 sc.nextLine();
 switch (ch) {
 
 case 1: {
 System.out.println("\n*************************************");
 System.out.println("Enter details of student : ");
 System.out.print("Enter Roll No : ");
 roll = sc.nextInt();
 sc.nextLine();
 System.out.print("Enter Name : ");
 name = sc.nextLine();
 System.out.print("Enter Branch : ");
 branch = sc.nextLine();
 System.out.print("Enter percent : ");
 percent = sc.nextFloat();
 Student100 s = new Student100(roll, name, branch, percent);
 ll.add(s);
 System.out.println("\ndetails added successfully !!!");
 System.out.println("*************************************");
 }
 break;
 
 case 2: {
 System.out.println("\n*************************************");
 System.out.print("Enter the roll no of student to remove : ");
 int rn = sc.nextInt();
 sc.nextLine();
 boolean isDeleted = false;
 for (Student100 s : ll) {
 if (s.roll == rn) {
 ll.remove(s);
 System.out.println("\ndetails removed successfully !!!");
 isDeleted = true;
 break;
 }
 }
 if (!isDeleted) {
 System.out.println("Stuent not found ...");
 }
 System.out.println("*************************************");
 }
 break;
 // To update a student
 case 3: {
 System.out.println("\n*************************************");
 System.out.print("Enter the roll no of student to update details : ");
 int rn = sc.nextInt();
 sc.nextLine();
 boolean contains = false;
 for (Student100 s : ll) {
 if (rn == s.roll) {
 contains = true;
 System.out.println("\n\nSelect what you want to update : \n1)Name \n2)Branch 
\n3)percentage");
 
 int choise = sc.nextInt();
 
 System.out.println("\nEnter new details : ");
 if(choise== 1) {
 System.out.print("Enter Name : ");
 s.name = sc.nextLine();
 }
 else if(choise == 2) {
 System.out.print("Enter Branch : ");
 s.branch = sc.nextLine();
 }
 else if(choise== 3) {
 System.out.print("Enter percent : ");
 s.percent = sc.nextFloat();
 }
 else {
 System.out.print("Enter valid choise to update : ");
 }
 System.out.println("\nDetails updated successfully !!!");
 break;
 }
 }
 if (!contains) {
 System.out.println("\nStudent not found ...");
 }
 System.out.println("*************************************");
 }
 break;
 
 case 4: {
 Iterator<Student100> iterate = ll.iterator();
 System.out.println("\n*************************************");
 System.out.println("List of students : \n");
 
 while (iterate.hasNext()) {
 Student100 s = iterate.next();
 System.out.println(
 "Roll no : " + s.roll + "\nStudent Name: " + s.name + "\nBranch\t :" + s.branch 
+
 "\npercent :" + s.percent + "\n");
 }
 System.out.println("*************************************");
 }
 break;
 case 5:
 sc.close();
 System.exit(0);
 default:
 System.out.println("\nPlease enter valid choice\n");
 }
 } while (ch != 5);
 }
   }
