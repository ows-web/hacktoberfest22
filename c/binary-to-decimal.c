//convert binary to decimal 
#include <stdio.h>
#include <stdlib.h>
int convert(int bin);

void main()
{
    int dec,bin;
    printf("Enter a binary number\n");
    scanf("%d",&bin);
    dec=convert(bin);
    printf("The decimal equivalent of %d is %d\n",bin,dec);
}
int convert (int bin)
{
    if(bin==0)
    {
        return 0;
    }
    else
    {
      return (bin%10+2*convert(bin/10));
    }
}
