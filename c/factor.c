#include <stdio.h>
int main(void)
{
int num;
printf("Please enter an integer:");
scanf("%i", &num);
for(int i=2; i<=num; i++)
{
if(num%i==0)
{
printf("%i\n", i);
break;
}
}
return 0;
}
