#include "pch.h"
#include "CppUnitTest.h"

#include "../NintendoCrypt/decrypt.cpp"

using namespace Microsoft::VisualStudio::CppUnitTestFramework;
using namespace std;

namespace NintendoCryptTests
{



	TEST_CLASS(NintendoCryptTests)
	{
	public:

		TEST_METHOD(test0)
		{
			auto result = equation(0);
			Assert::IsTrue(result.size() == 1);
			Assert::IsTrue(get<0>(result.at(0)) == entry{ 0, 0 });
			Assert::IsTrue(get<1>(result.at(0)) == entry{ 1, 0 });
		}

		TEST_METHOD(test1)
		{
			auto result = equation(1);
			Assert::IsTrue(result.size() == 2);
			Assert::IsTrue(get<0>(result.at(0)) == entry{0, 1});
			Assert::IsTrue(get<1>(result.at(0)) == entry{1, 0});
		}

		TEST_METHOD(test2)
		{
			auto result = equation(2);
			Assert::IsTrue(result.size() == 3);
			Assert::AreEqual(get<0>(result.at(0)).index, 2);
			Assert::AreEqual(get<1>(result.at(0)).index, 0);

			Assert::AreEqual(get<0>(result.at(1)).index, 0);
			Assert::AreEqual(get<1>(result.at(1)).index, 2);

			Assert::AreEqual(get<0>(result.at(2)).index, 1);
			Assert::AreEqual(get<1>(result.at(2)).index, 1);
		}

		TEST_METHOD(test3)
		{
			auto result = equation(3);
			Assert::IsTrue(result.size() == 4);
			Assert::AreEqual(get<0>(result.at(0)).index, 3);
			Assert::AreEqual(get<1>(result.at(0)).index, 0);

			Assert::AreEqual(get<0>(result.at(1)).index, 0);
			Assert::AreEqual(get<1>(result.at(1)).index, 3);

			Assert::AreEqual(get<0>(result.at(2)).index, 2);
			Assert::AreEqual(get<1>(result.at(2)).index, 1);

			Assert::AreEqual(get<0>(result.at(3)).index, 1);
			Assert::AreEqual(get<1>(result.at(3)).index, 2);
		}

		TEST_METHOD(findUnknownIndices_00)
		{
			int b_i = 1;
			vector<entry> result = findUnknownIndices(equation(0), initSolution(), &b_i);
			Assert::IsTrue(result.size() == 2);
			Assert::IsTrue(result[0] == entry{0, 0});
			Assert::IsTrue(result[1] == entry{1, 0});
			Assert::AreEqual(b_i, 1);
		}

		TEST_METHOD(findUnknownIndices_0IgnoresOtherVariable)
		{
			int b_i = 0;
			auto currentSolution = initSolution();
			currentSolution[0][0] = 0;

			vector<entry> result = findUnknownIndices(equation(0), currentSolution, &b_i);
			Assert::IsTrue(result.size() == 0);
			Assert::AreEqual(b_i, 0);
		}

		TEST_METHOD(findUnknownIndices_bChanges)
		{
			int b_i = 0;
			auto currentSolution = initSolution();
			currentSolution[0][1] = 1;
			currentSolution[1][0] = 1;

			vector<entry> result = findUnknownIndices(equation(1), currentSolution, &b_i);
			Assert::IsTrue(result.size() == 2);
			Assert::AreEqual(b_i, 1);
		}

		TEST_METHOD(AllPossibleSolutions)
		{
			int b_0 = 0
				allPossibleSolutions(findUnknownIndices(equation(0), initSolution(), &b_0);
			int b_i = 0;
			auto currentSolution = initSolution();
			currentSolution[0][1] = 1;
			currentSolution[1][0] = 1;

			vector<entry> result = findUnknownIndices(equation(1), currentSolution, &b_i);
			Assert::IsTrue(result.size() == 2);
			Assert::AreEqual(b_i, 1);
		}


		//TEST_METHOD(noPickedActions_1)
		//{
		//	std::map<int, int> m;
		//	auto result = solve(1, equation(0), m);
		//	Assert::IsTrue(result.size() == 1);
		//	Assert::IsTrue(result[0].size() == 2);

		//	/*
		//	* 1=xi*xj
		//	* =>
		//		(xi=1,xj=1);
		//	*/
		//	Assert::AreEqual(get<0>(result[0][0]), 0);
		//	Assert::AreEqual(get<1>(result[0][0]), 1);

		//	Assert::AreEqual(get<0>(result[0][1]), 1);
		//	Assert::AreEqual(get<1>(result[0][1]), 1);
		//}

		//TEST_METHOD(noPickedActions_0)
		//{
		//	std::map<int, int> m;
		//	auto result = solve(1, equation(0), m);
		//	Assert::IsTrue(result.size() == 1);

		//	/*
		//	* 0=xi*xj
		//	* =>
		//		(xi=1,xj=0);
		//		(xi=0,xj=1);
		//		(xi=0;xj=0)
		//	*
		//	*
		//	*/
		//}
	};
}
