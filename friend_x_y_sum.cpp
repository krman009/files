#include<iostream>
using namespace std;

int flag = 0;

class B;
class A
{
	int x;
	public:
		A(int a) {
			x = a;
		}
		friend void sum(A a1, B b1);
};

class B
{
	int y;	
	public:
		B(int a) {
			y = a;
		}
		friend void sum(A a1, B b1);
};

void sum(A a1, B b1) {
	int z;
	z = a1.x + b1.y;
	cout<<"\n Sum of "<<a1.x<<" and "<<b1.y<<" is "<<z<<".";
}

int main() {
	A a1(100);
	B b1(200);
	sum(a1, b1);
	cout<<endl;
	return 0;
}