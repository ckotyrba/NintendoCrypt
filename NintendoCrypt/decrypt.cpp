
#include <iostream>
#include <iomanip>
#include <bitset>
#include <vector>
#include <tuple>
#include <map>
#include <list>
#include "decrypt.h"
#include <string>
#include <optional>


using namespace std;

struct entry {
	int a_ArrayOffset;
	int index;

	bool operator==(const entry& other) const
	{
		return a_ArrayOffset == other.a_ArrayOffset && index == other.index;
	}

	string to_String() {
		return "a[" + to_string(a_ArrayOffset) + "]" + to_string(index);
	}
};

/**
*result : b_stage=a[0]_stage * a[1]_0 xor a[0]_stage-1 * a[1]_1 xor ...
* */
vector<tuple<entry, entry>> equation(int stage) {
	vector<tuple<entry, entry>> result{};
	for (int lowerIndex = 0; lowerIndex < (stage + 1) / 2; lowerIndex++) {
		int upperIndex = stage - lowerIndex;
		upperIndex %= 32;
		lowerIndex %= 32;
		result.push_back(make_tuple(entry{ 0,upperIndex }, entry{ 1,lowerIndex }));
		result.push_back(make_tuple(entry{ 0,lowerIndex }, entry{ 1,upperIndex }));
	}
	if (stage % 2 == 0)
		result.push_back(make_tuple(entry{ 0, stage / 2 }, entry{ 1, stage / 2 }));
	return result;
}

vector<entry> findUnknownIndices(vector<tuple<entry, entry>> equation, vector<vector<optional<bool>>> currentSolution)
{
	vector<entry> unknown_indices;
	for (tuple<entry, entry> tuple : equation) {
		entry x_entry = get<0>(tuple);
		entry y_entry = get<1>(tuple);

		optional<bool> x = currentSolution[x_entry.a_ArrayOffset][x_entry.index];
		optional<bool> y = currentSolution[y_entry.a_ArrayOffset][y_entry.index];

		if (x && y) {
			continue;
		}
		if (x && *x == 0 || y && *y == 0) {
			continue;
		}
		// merke variable anteile
		if (!x) {
			unknown_indices.push_back(x_entry);
		}
		if (!y) {
			unknown_indices.push_back(y_entry);
		}
	}
	return unknown_indices;
}

vector<vector<optional<bool>>> initSolution(int size = 2) {
	vector<vector<optional<bool>>> result;
	for (int i = 0; i < size; i++) {
		vector < optional<bool>> a_i;
		for (int j = 0; j < 32; j++) {
			a_i.push_back(nullopt);
		}
		result.push_back(a_i);
	}
	return result;
}

bool solutionPossible(vector<tuple<entry, entry>> equation, vector<vector<optional<bool>>> currentSolution, int expectedResult) {
	int result = 0;
	for (tuple<entry, entry> factor : equation) {
		entry x_entry = get<0>(factor);
		entry y_entry = get<1>(factor);

		bool x = *currentSolution[x_entry.a_ArrayOffset][x_entry.index];
		bool y = *currentSolution[y_entry.a_ArrayOffset][y_entry.index];

		result ^= x * y;
	}
	return result == expectedResult;
}

vector<vector<vector<optional<bool>>>> allPossibleSolutions(vector<tuple<entry, entry>> equation, vector<entry> freeIndices, vector<vector<optional<bool>>> currentSolution, int b_i) {
	vector<vector<vector<optional<bool>>>> results;

	vector<bool> combinations(freeIndices.size());
	for (int i = 0; i < std::pow(2, combinations.size()); i++)
	{
		for (int j = 0; j < combinations.size(); j++)
		{
			combinations[j] = i & (1 << j);
		}

		auto newSolution = currentSolution;
		for (int x = 0; x < combinations.size(); x++) {
			newSolution[freeIndices[x].a_ArrayOffset][freeIndices[x].index] = optional<bool>{ combinations[x] };
		}
		if (solutionPossible(equation, newSolution, b_i))
			results.push_back(newSolution);
	}
	return results;
}

unsigned int bitArrayToInt32(vector<bool> arr)
{
	bitset<32> result;
	for (int i = 0; i < arr.size(); i++) {
		result.set(i, arr[i]);
	}
	return (int)result.to_ulong();
}


vector<unsigned int> transformBitArray(vector<vector<optional<bool>>> currentSolution) {
	vector<unsigned int> results;
	for (vector <optional<bool>> boolVector : currentSolution) {
		vector<bool> realValues;
		for (optional<bool> value : boolVector) {
			realValues.push_back(*value);
		}
		results.push_back(bitArrayToInt32(realValues));
	}
	return results;
}

string currentEquationString(vector<tuple<entry, entry>> equation) {
	string result = "";
	for (int i = 0; i < equation.size(); i++) {
		auto tuple = equation[i];
		auto x = get<0>(tuple);
		auto y = get<1>(tuple);
		result += x.to_String() + y.to_String();
		if (i < equation.size() - 1)
			result += " + ";
	}
	return result;
}


bool solve(int stage, vector<bool> b, vector<vector<optional<bool>>> currentSolution) {
	vector<vector<bool>> result;

	bool b_stage = b[stage];
	auto currentEquation = equation(stage);
	cout << stage;
	cout << ":";


	//cout << currentEquationString(currentEquation);
	cout << endl;
	vector<entry> variableIndices = findUnknownIndices(currentEquation, currentSolution);
	if (variableIndices.size() == 0) {
		if (stage == 63) {
			cout << "LÖSUNG GEFUNDEN";

			vector<unsigned int> solution = transformBitArray(currentSolution);
			for (int i = 0; i < solution.size(); i++) {
				if (i > 0) {
					cout << ' ';
				}
				cout << setfill('0') << setw(8) << hex << solution[i];       // print result
			}
			return true;
		}
		if (solutionPossible(currentEquation, currentSolution, b_stage))
			return solve(stage + 1, b, currentSolution);
	}
	else {
		auto possibleSolutions = allPossibleSolutions(currentEquation, variableIndices, currentSolution, b_stage);
		for (auto newSolution : possibleSolutions) {
			if (solve(stage + 1, b, newSolution)) {
				return true;
			}
		}
	}
	for (int j = 0; j < 2; j++) {
		for (int i = 31; i >= 0; i--) {
			if (currentSolution[j][i].has_value())
				cout << *currentSolution[j][i] ? '1' : '0';
			else { cout << '?'; }
		}
		cout << ' ';
	}
	cout << endl;
	return false;
}


int main()
{
	unsigned int* b = new unsigned int[32 / 16]; // <- output tab
	vector<bool> bitset(64);

	b[0] = 0x000073af;
	b[1] = 0x00000000;

	b[0] = 0x738377c1;
	b[1] = 0x00000000;

	b[0] = 0x46508fb7;
	b[1] = 0x6677e201;



	for (int i = 0; i < 2 * 32; i++) {
		bitset[i] = (b[i / 32] >> i) & 1;
	}
	solve(0, bitset, initSolution());
	// Write an answer using cout. DON'T FORGET THE "<< endl"
	// To debug: cerr << "Debug messages..." << endl;
	cout << "ANSWER" << endl;
}
