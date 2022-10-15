#include<iostream>
using namespace std;

matrixmulti(int *arr,int start,int end)
{
	int ans,min1=INT_MAX;
	if(start==end-1)
	{
		return 0;
	}
	for(int k=start+1;k<end-1;k++)
	{
		ans=matrixmulti(arr,start,k)+matrixmulti(arr,k,end)+arr[start]+arr[k]+arr[end];	
		if(ans<min1)
		{
			min1=ans;
		}
		
	}
	return min1;
	
}



int main()
{
	int n=3;
	int *arr=new int[n+1];
	for(int i=0;i<n+1;i++)
	{
		cin>>arr[i];
	}
	
	cout<<matrixmulti(arr,0,n+1);
}
