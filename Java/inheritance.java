class Member{
String name; int age; long phone; String add; long salary;
Member(String name, int age, long phone, String add, long salary) {
this.name=name;
this.age=age;
this.phone=phone;
this.add=add;
this.salary=salary;
}
public void printDetails() {
System.out.println("Name: "+ name);
System.out.println("Age: "+age);
System.out.println("Phone: "+phone);
System.out.println("Address:"+add);
System.out.println("Salary: "+salary);
}
}
class Employee extends Member{
String spe;
Employee(String name, int age, long phone, String add, long salary, String spe){
super(name,age,phone,add,salary);
this.spe=spe;
}
@Override
public void printDetails() {
System.out.println("\n\n***** Employee Data *****\n");
super.printDetails();
System.out.println("Specialization: "+ spe);
}
}
class Manager extends Member{
String dept;
Manager(String name, int age, long phone, String add, long salary, String dept){
super(name,age,phone,add,salary);
this.dept=dept;
}
@Override
public void printDetails() {
System.out.println("\n\n***** Manager Data *****\n");
super.printDetails();
System.out.println("Department: "+dept);
}
}
public class asgn7 {
public static void main(String args[]){
Member obj1=new Member("Sid", 19, 937333669, "Pune", 2000000);
obj1.printDetails();
Member obj2 = new Employee("Siddhi", 19, 937333669, "Nashik", 2000000, 
"Java");
obj2.printDetails();
Member obj3 = new Manager("Siddhi", 19, 937333669, "Nashik", 2000000, 
"Development");
obj3.printDetails();
}
}
