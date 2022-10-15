#include<iostream>
using namespace std;

//normal recursion
int lootsum(int n,int *arr)
{
	if(n<0)
	{
		return 0;
	}
	if(n==0)
	{
		return arr[0];
	}
	int x=lootsum(n-2,arr)+arr[n];
	int y=lootsum(n-1,arr);
	return max(x,y);
	
}



int lootsum1(int *output,int n,int *arr)
{
	if(n<0)
	{
		return 0;
	}
	if(output[n]!=INT_MIN)
	{
		return output[n];
	}
	if(n==0)
	{
		return arr[0];
	}
	else
	{
	int x=lootsum(n-2,arr)+arr[n];
	int y=lootsum(n-1,arr);
	output[n]= max(x,y);
	}
	return output[n];
	
}

int lootsumhelper(int n,int *arr)
{
	int*output=new int[n+1];
	for(int i=0;i<n+1;i++)
	{
		output[i]=INT_MIN;
	}
	return lootsum1(output,n,arr);
}

int lootsumDP(int n,int *arr)
{
	int *output=new int[n+1];
	output[0]=arr[0];
	output[1]=max(arr[0],arr[1]);
	for(int i=2;i<n+1;i++)
	{
		output[i]=max((arr[i]+output[i-2]),output[i-1]);
		
	}
	return output[n];
	
}

int main()
{
	int n=6;
	int arr[]={10 ,2 ,30 ,20 ,3 ,50};
	cout<<"normal recursion: "<<lootsum(n,arr)<<endl;
	cout<<"memoising recursion: "<<lootsumhelper(n,arr)<<endl;	
	cout<<"DP iteration: "<<lootsumDP(n,arr);
 } 
