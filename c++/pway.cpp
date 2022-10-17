#include<iostream>
#include<cmath>
using namespace std;

int possiblewayhelp(int X,int p,int c)  //normal recursion
{
	int val=pow(c,p);
	int ans;
	if(val>X)
	{
		return 0;
	 } 
	if(val==X)
	{
		return 1;
	}
	else
	{
		 ans=possiblewayhelp(X,p,c+1)+possiblewayhelp(X-val,p,c+1);
	}
	return ans;
	
}

int possibleway(int X,int p)
{
	int c=1;
	return possiblewayhelp(X,p,c);
	
}




int possiblewayhelpmemo(int **arr,int X,int p,int c)  //normal recursion
{
	int val=pow(c,p);
	int ans;
	if(val>X)
	{
		return 0;
	 }
	 if(arr[X][c]!=-1)
	 {
	 	return arr[X][c];
	  } 
	if(val==X)
	{
		return 1;
	}
	else
	{
		 arr[X][c]=possiblewayhelpmemo(arr,X,p,c+1)+possiblewayhelpmemo(arr,X-val,p,c+1);
	}
	return arr[X][c];
	
}



//memoising recurion

int possiblewaymemo(int X,int p)
{
	int **output=new int*[X+1];
	int num=sqrt(X);
	for(int i=0;i<X+1;i++)
	{
		output[i]=new int[num+1];
		for(int j=0;j<num+1;j++)
		{
			output[i][j]=-1;
		}
	}
	int c=1;
	return possiblewayhelpmemo(output,X,p,c);
	
}
int main()
{
	int n;
	cout<<"enter n: ";
	cin>>n;
	cout<<endl;
	cout<<"normal recursion: "<<possibleway(n,2)<<endl;
	cout<<"memoising recursion: "<<possiblewaymemo(n,2)<<endl;	
	
}
