#include <iostream>
using namespace std;
int area(int s);
int area(int l, int b);
float area(float r);
int main()
{   
    int s, l, b;
    float r;
    cout<<"Enter the side of square :";
    cin>>s;
    cout << "Area of square is " << area(s) << endl;

    cout<<"Enter the length and breadth of rectangle:";
    cin>> l >> b;
    cout << "Area of rectangle is " << area(l, b) << endl;

    cout<<"Enter the radius of square :";
    cin>>r;
    cout << "Area of circle is " << area(r) << endl;

    return 0;
}
int area(int s)
{
    return (s * s);
}
int area(int l, int b)
{
    return (l * b);
}
float area(float r)
{
    return (3.14 * r * r);
}