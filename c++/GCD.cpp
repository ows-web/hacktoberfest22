//GCD using modulo operator in Euclidean algorithm.

#include <iostream>
using namespace std;

int gcd(int a, int b)
{
	return b == 0 ? a : gcd(b, a % b);
}

// Driver code
int main()
{
	int a = 98, b = 56;
	cout<<"GCD of "<<a<<" and "<<b<<" is "<<gcd(a, b);
	return 0;
}

/*

OUTPUT:
GCD of 98 and 56 is 14

*/
