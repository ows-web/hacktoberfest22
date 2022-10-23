#include <stdio.h>
#include <stdlib.h>
int convert(int dec);

void main()
{
    int dec,bin;
    printf("Enter a binary number\n");
    scanf("%d",&dec);
    bin=convert(dec);
    printf("The binary equivalent of %d is %d\n",dec,bin);
}
int convert (int dec)
{
    if(dec==0)
    {
        return 0;
    }
    else
    {
      return (dec%2+10*convert(dec/2));
    }
}
