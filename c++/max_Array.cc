#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter size of array :";
    cin >> n;
    int A[n];
    for (int i = 0; i < n; i++)
    {
        cin >> A[i];
    }

    int max = A[0];
    for (int i = 0; i < n; i++)
    {
        if (A[i] > max)
        {
            max = A[i];
        }
    }
    cout << max << endl;
    return 0;
}
