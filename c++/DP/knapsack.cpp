#include<iostream>
using namespace std;

int knapsack(int *weight,int *value,int n,int maxweight){
	
	if(n==0||maxweight==0)
	{
		return 0;
	}
	if(weight[0]>maxweight)
	{
		return knapsack(weight+1,value+1,n-1,maxweight);
	}
	int x=knapsack(weight+1,value+1,n-1,maxweight-weight[0])+value[0];
	int y=knapsack(weight+1,value+1,n-1,maxweight);
	
	return max(x,y);
}


//memoising recursion

int knapsack1(int *arr,int *weight,int *value,int n,int maxweight){
	
	if(n==0||maxweight==0)
	{
		return 0;
	}
	if(arr[n]!=INT_MIN)
	{
		return arr[n];
	}
	if(weight[0]>maxweight)
	{
		return knapsack1(arr,weight+1,value+1,n-1,maxweight);
	}
	else
	{
	int x=knapsack1(arr,weight+1,value+1,n-1,maxweight-weight[0])+value[0];
	int y=knapsack1(arr,weight+1,value+1,n-1,maxweight);
	arr[n]= max(x,y);
	}
	return arr[n];
}

int knapsackhelper(int *weight,int *value,int n,int maxweight)
{
	int *arr=new int[n+1];
	for(int i=0;i<=n;i++)
	{
		arr[i]=INT_MIN;
	}
	return knapsack1(arr,weight,value,n,maxweight);
	
}
int main()
{
	int weight[]={1,2,4,5};
	int value[]={5,4,8,6};
	int maxweight=5;
	
	cout<<knapsack(weight,value,4,maxweight)<<endl;
	cout<<knapsackhelper(weight,value,4,maxweight);	
 } 
