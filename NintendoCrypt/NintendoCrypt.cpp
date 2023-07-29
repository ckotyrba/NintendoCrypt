
#include <iostream>
#include <iomanip>
#include <bitset>
#include <vector>
#include <tuple>
#include "NintendoCrypt.h"


using namespace std;


int main()
{
	int size;

	//cin >> size;
	size = 32;

	unsigned int* a = new unsigned int[2]; // <- input tab to encrypt
	unsigned int* b = new unsigned int[2]; // <- output tab

	//for (int i = 0; i < size / 16; i++) {   // Read size / 16 integers to a
	//	cin >> hex >> a[i];
	//}
	a[0] = 0x0;
	//10110000110000010101001011111001
	a[1] = 0x1;
	//11101011111100101000001100011111

	//=>
	//46508fb7 6677e201
	//b[0]= 
	//01000110010100001000111110110111
	//b[1]==
	//01100110011101111110001000000001

	cout << a[0] << "/" << a[1] << ":";
	encryptAndPrint(size, b, a);

	a[0] = 0x1;
	a[1] = 0x1;
	cout << a[0] << "/" << a[1] << ":";
	encryptAndPrint(size, b, a);

	a[0] = 0x2;
	a[1] = 0x1;
	cout << a[0] << "/" << a[1] << ":";
	encryptAndPrint(size, b, a);





	/*
	   Good luck humans
	*/
	return 0;
}

void encryptAndPrint(int size, unsigned int* b, unsigned int* a)
{
	for (int i = 0; i < size / 16; i++) {   // Write size / 16 zeros to b
		b[i] = 0;
	}

	for (int i = 0; i < size; i++)
		for (int j = 0; j < size; j++) {
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
}
