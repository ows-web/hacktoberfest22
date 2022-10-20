#include<stdio.h>
#include<math.h>
int main()
{
    int i,j,k,count,sum;
    printf("Enter the number:\n");
    scanf("%d",&i);
    j = i;
    k = i;
    count = 0;
    while(i!=0)
    {
        i/=10;
        count+=1;
    }
    while(j!=0)
    {
        sum+=pow((j%10),count);
        j/=10;
    }
    if(sum==k)
    {
        printf("It's an armstrong number.");
    }
    else
    {
        printf("It's not an armstrong number.");
    }
    return 0;
}