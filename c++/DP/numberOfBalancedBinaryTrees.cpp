/* No. of balanced BTs using DP

Given an integer h, find the possible number of balanced binary trees of height h. You just need to return the count of possible binary trees which are balanced.
This number can be huge, so, return output modulus 10^9 + 7.
Time complexity should be O(h).
Input Format :
The first and only line of input contains an integer, that denotes the value of h. Here, h is the height of the tree.
Output Format :
The first and only line of output contains the count of balanced binary trees modulus 10^9 + 7.

Sample Input:
3
Sample Output:
15
*/


#include <bits/stdc++.h>
using namespace std;

// Recursive Solution

int balancedBTs(int n) {
	if (n <= 1) {
		return 1;
	}
	long long a = balancedBTs(n - 1);
	long long b = balancedBTs(n - 2);
	int mod = pow(10, 9) + 7;
	long long temp1 = ((2 * a) * b) % mod;
	long long temp2 = (a * a) % mod;
	return (temp1 + temp2) % mod;
}

// Dynamic Programming Solution

int balancedBTsDP(int n) {
	vector<int> dp(n + 1);
	dp[0] = 1;
	dp[1] = 1;
	int mod = pow(10, 9) + 7;
	for (int i = 2; i <= n; i++) {
		long long a = dp[i - 1];
		long long b = dp[i - 2];
		dp[i] = (a * a) % mod;
		dp[i] = (dp[i] + (2 * a * b) % mod) % mod;
	}
	return dp[n];
}


int main() {
	int n;
	cin >> n;
	cout << balancedBTs(n) << endl;
	return 0;
}
