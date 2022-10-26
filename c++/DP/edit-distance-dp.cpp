// Program to solve Edit distance Problem
#include<bits/stdc++.h>
using namespace std;
int editDist(string str1 , string str2 , int m ,int n,int dp[][5000]) 
{ 
    
    if (m == 0) return n; 
  
   
    if (n == 0) return m; 
  
 
    if (str1[m-1] == str2[n-1]) 
        return editDist(str1, str2, m-1, n-1,dp); 
    if(dp[m][n]!=0)
        return dp[m][n];
    else
    {
        dp[m][n]= 1 + min ( editDist(str1,  str2, m, n-1,dp),min(editDist(str1,  str2, m-1, n,dp), 
                  editDist(str1,  str2, m-1, n-1,dp))); 
        return dp[m][n];
    }
}

// Driver Program
int main()
 {
  int n,m;
  cout<<"Enter length of string 1: ";
  cin>>n;
  cout<<"\nEnter length of string 2: ";
  cin>>m;
  char a[n],b[m];
  cout<<"\nEnter string 1: ";
  for(int i=0;i<n;i++)
      cin>>a[i];
  cout<<"\nEnter string 2: ";
  for(int i=0;i<m;i++)
      cin>>b[i];
  int dp[n+1][5000];
  memset(dp,0,sizeof(dp));
  dp[0][0]=1;
        cout<<"\nMinimum operation required for conversion is "<<editDist(a,b,n,m,dp)<<"\n";
  return 0;
}