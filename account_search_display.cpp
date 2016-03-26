#include<iostream>
using namespace std;

int flag = 0;

class Account
{
	int acc_id, bal;
	string name;
	static int counter;
	public:
		void getdata();
		void display();
		void search(int id);	
};
int Account::counter;

void Account::getdata() {
	cout<<"Enter the account number (greater than "<<counter<<"):";
	cin>>acc_id;
	counter = acc_id;
	cout<<"Enter your name:";
	cin>>name;
	cout<<"Enter balance:";
	cin>>bal;
	cout<<"Successfully entered Account data.\n";
}


void Account::display() {
	cout<<"\nName: "<<name;
	cout<<"\nAccount ID: "<<acc_id;
	cout<<"\nBalance: "<<bal;
}

void Account::search(int id) {
	if(acc_id == id) {
		display();
		flag = 1;
	}
}

int main() {
	Account a1, a2, a3;
	a1.getdata();
	a2.getdata();
	a3.getdata();
	int search_id;
	cout<<"Enter the id of the account which would you like to search:";
	cin>>search_id;
	a1.search(search_id);
	a2.search(search_id);
	a3.search(search_id);
	if (flag == 0) {
		cout<<"\nSorry no Account exists with id "<<search_id<<".";
	}
	cout<<endl;
	return 0;
}