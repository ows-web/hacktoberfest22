#include<iostream>
using namespace std;
int main(){
    int array[] = {1,2,3,4,5,6,7,8, 9,21,23,32,36,44, 56,59, 64,72,85,96,100};
    int size = sizeof(array) / sizeof array[0];
    int n;
    cout<<"Enter Number to be searched : ";
    cin>>n;
    int i =0, f = size-1;

    while(i<=f){
        int mid = (i+f)/2;
        if(array[mid] == n)
            {
                cout<<"Found at: "<<mid;
                return 0;
            }
        else if(n > array[mid])
            i = mid+1;
        else f = mid-1;
    }
    cout<<"Not Found - -";
    return 0;
}
