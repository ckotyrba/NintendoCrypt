
#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    int size=128 ;


    unsigned int* a = new unsigned int[size / 16]; // <- input tab to encrypt
    unsigned int* b = new unsigned int[size / 16]; // <- output tab


    a[0] = 0xa30d28bd;
    a[1] = 0xbda19675;
    a[2] = 0x3f95d074;
    a[3] = 0xb6f69434;
    a[4] = 0xc58f4047;
    a[5] = 0xd73fe36a;
    a[6] = 0x24be2846;
    a[7] = 0xe2ebe432;

           

    for (int i = 0; i < size / 16; i++) {   // Write size / 16 zeros to b
        b[i] = 0;
    }

    for (int i = 0; i < size; i++)
        for (int j = 0; j < size; j++) {
            cout << "schreibe b[" <<(i + j) / 32 << "] fuer a["<<i/32<<"] a["<< j / 32 + size / 32<<"]" << endl;
            b[(i + j) / 32] ^= ((a[i / 32] >> (i % 32)) &
                (a[j / 32 + size / 32] >> (j % 32)) & 1) << ((i + j) % 32);   // Magic centaurian operation
        }

    for (int i = 0; i < size / 16; i++) {
        if (i > 0) {
            cout << ' ';
        }
        cout << setfill('0') << setw(8) << hex << b[i];       // print result
    }
    cout << endl;

    /*
       Good luck humans
    */
    return 0;
}
