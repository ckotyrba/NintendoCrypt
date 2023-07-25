#include "pch.h"
#include "../NintendoCrypt/decrypt.cpp"



TEST(equation, test0) {
	auto result = equation(0);
	EXPECT_EQ(result.size(),1);
	EXPECT_EQ(get<0>(result.at(0)), entry{ 0, 0 });
	EXPECT_EQ(get<1>(result.at(0)), entry{ 1, 0 });
  
}