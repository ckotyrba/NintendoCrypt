
#include <iostream>
#include <iomanip>
#include <bitset>
#include <vector>
#include <tuple>


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
	a[0] = 0xb0c152f9;
	//10110000110000010101001011111001
	a[1] = 0xebf2831f;
	//11101011111100101000001100011111

	//=>
	//46508fb7 6677e201
	//b[0]= 
	//01000110010100001000111110110111
	//b[1]==
	//01100110011101111110001000000001


	for (int i = 0; i < size / 16; i++) {   // Write size / 16 zeros to b
		b[i] = 0;
	}

	for (int i = 0; i < 32; i++)
		for (int j = 0; j < 32; j++) {
			bitset<32> zwischen = ((a[0] >> i) & (a[1] >> j) & 1) << ((i + j) % 32);
			auto lesbar = zwischen.to_string();

			b[(i + j) / 32] ^= ((a[0] >> i) & (a[1] >> j) & 1) << ((i + j) % 32); // Magic centaurian operation

			bitset<32> ergebnis = b[0];
			auto ergebnisLesbar = ergebnis.to_string();

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