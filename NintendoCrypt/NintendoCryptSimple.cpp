
#include <iostream>
#include <iomanip>
#include <bitset>
#include <map>
#include <string>



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
	a[0] = 0b1001;
	//1001
	a[1] = 0b0011;
	//0011

	a[0] = 0b01001;
	a[1] = 0b00011;



	for (int i = 0; i < size / 16; i++) {   // Write size / 16 zeros to b
		b[i] = 0;
	}

	map<string, string> results;

	for (int i = 0; i < 32; i++)
		for (int j = 0; j < 32; j++) {
			bitset<32> zwischen = ((a[0] >> i) & (a[1] >> j) & 1) << ((i + j) % 32);
			auto lesbar = zwischen.to_string();
			string bx = "b[" + to_string((i + j) / 32) + "]_" + to_string((i + j) % 32);
			string value = "a[" + to_string(i / 32) + "]_" + to_string(i % 32) + "a[" + to_string(j / 32 + size / 32) + "]_" + to_string(j % 32);
			results[bx] += value + " + ";

			b[(i + j) / 32] ^= ((a[0] >> i) & (a[1] >> j) & 1) << ((i + j) % 32); // Magic centaurian operation

			bitset<32> ergebnis = b[0];
			auto ergebnisLesbar = ergebnis.to_string();

		}

	for (int i = 0; i < size / 16; i++) {
		if (i > 0) {
			cout << ' ';
		}
		cout << bitset<32>(b[i]) << endl;
		cout << setfill('0') << setw(8) << hex << b[i];       // print result
	}
	cout << endl;

	for (const auto& elem : results)
	{
		std::cout << elem.first << "=" << elem.second << "\n";
	}
	/*
	   Good luck humans
	*/
	return 0;
}