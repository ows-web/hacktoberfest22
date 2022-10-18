#include <iostream>
#include <solution.h>
using namespace std;
class Node {
   public:
    int data;
    Node *next;
    Node(int data) {
     this->data = data;
     next = NULL;
}
};
class Stack{
    private:
    Node *head;
    int len;
    public:

Stack(){
    head = NULL;
    len = 0;
}
void push(int element){
    
    Node* newNode = new Node(element);
    if(head == NULL){
        head = newNode;
        len++;
    }
    else{
      newNode->next = head;
    head = newNode;
    len++;  
    }
}
int pop(){
    if(head!= NULL){
      Node* lastNode = head;
      head = head->next;
      int lastelement = lastNode->data;
      delete lastNode;
      len--;
      return lastelement;  
    }
           /*int ans = head->data;
            head = head->next;
            return ans;
        }*/
    else{
      return -1;
    }  
}
    
int top(){
   if(head != NULL){
       return head->data; 
   }
   else{
      return -1;
   }
} 
int getSize(){
    return len;
}
bool isEmpty(){
    return len == 0;
}
};

int main() {
    Stack st;
    int q;
    cin >> q;
    while (q--) {
        int choice, input;
        cin >> choice;
        switch (choice) {
            case 1:
                cin >> input;
                st.push(input);
                break;
            case 2:
                cout << st.pop() << "\n";
                break;
            case 3:
                cout << st.top() << "\n";
                break;
            case 4:
                cout << st.getSize() << "\n";
                break;
            default:
                cout << ((st.isEmpty()) ? "true\n" : "false\n");
                break;
        }
    }
}