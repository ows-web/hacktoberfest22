#include<iostream>
using namespace std;

bool findwinner(int x,int y,int n)
{
	int *output=new int[n+1];
	
	output[0]=0;
	output[1]=1;
	for(int i=2;i<n+1;i++)
	{
		if(i-y>=1 && !output[i-y])
		{
//			output[i]=(output[i-y]^1);
			output[i]=1;
		}
		else if(i-x>=1 && !output[i-x])
		{
//			output[i]=(output[i-x]^1);
			output[i]=1;

		}
		else if(i-1>=0 && !output[i-1])
		{
//			output[i]=(output[i-1]^1);
			output[i]=1;
		}
		else
		{
			output[i]=0;
		}
		
	}
	
	return output[n];
}




int main()
{
	
	int x=2,y=4,n=10;
//	cout<<findwinner(x,y,n);
	if(findwinner(x,y,n))
	{
		cout<<"A wins";
	}
	else
	cout<<"B wins";
}
