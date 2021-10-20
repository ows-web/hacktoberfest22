#include <stdio.h>

int main()
{
    int i, n;
    printf("Enter number:");
    scanf("%d", &n);
    long int a = 0, b = 1, c = 0;

    for (i = 0; i < n; i++)
    {
        printf("%lu\t", a);
        c = a + b;
        a = b;
        b = c;
    }
    return 0;
}