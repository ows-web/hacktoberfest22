#include<iostream>
using namespace std;

int coinexchange(int *arr,int N,int V)
{
	if(V==0)
	{
		return 1;
	}
	if(V<0)
	{
		return 0;
	}
	if(N<=0 && V>=1)
	{
		return 0;
	}
	int x=coinexchange(arr,N-1,V);
	int y=coinexchange(arr,N,V-arr[N-1]);
	int ans=x+y;
	
	return ans;
 } 


int main()
{
	int N=6;
	int arr[]={1,2,3,4,5,6};
	int V=250;
	cout<<coinexchange(arr,N,V);
	
}
