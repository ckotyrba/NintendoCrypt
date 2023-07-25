
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
};

/**
*result : b_stage=a[0]_stage * a[1]_0 xor a[0]_stage-1 * a[1]_1 xor ...
* */
vector<tuple<entry, entry>> equation(int stage) {
	vector<tuple<entry, entry>> result{};
	for (int i = 0; i < (stage + 1) / 2; i++) {
		int upperIndex = stage - i;
		result.push_back(make_tuple(entry{ 0,upperIndex }, entry{ 1,i }));
		result.push_back(make_tuple(entry{ 0,i }, entry{ 1,upperIndex }));
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


bool solve(int stage, vector<bool> b, vector<vector<optional<bool>>> currentSolution) {
	vector<vector<bool>> result;

	bool b_stage = b[stage];
	auto currentEquation = equation(stage);
	vector<entry> variableIndices = findUnknownIndices(currentEquation, currentSolution);
	if (variableIndices.size() == 0 && solutionPossible(currentEquation, currentSolution, b_stage)) {
		cout << "LÖSUNG GEFUNDEN";
		return true;
	}
	cout << stage << endl;
	auto possibleSolutions = allPossibleSolutions(currentEquation, variableIndices, currentSolution, b_stage);
	if (possibleSolutions.size() == 0) {
		return false;
	}
	for (auto newSolution : possibleSolutions) {
		solve(stage + 1, b, newSolution);
	}
	return false;
}


int main()
{
	unsigned int* b = new unsigned int[32 / 16]; // <- output tab
	vector<bool> bitset(64);

	b[0] = 0x000073af;
	b[1] = 0x00000000;
	for (int i = 0; i < 2 * 32; i++) {
		bitset[i] = (b[i / 32] >> i) & 1;
	}
	solve(0, bitset, initSolution());
	// Write an answer using cout. DON'T FORGET THE "<< endl"
	// To debug: cerr << "Debug messages..." << endl;
	cout << "ANSWER" << endl;
}
