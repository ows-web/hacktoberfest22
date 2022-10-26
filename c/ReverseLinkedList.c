#include<stdio.h>
#include<stdlib.h>
struct node{
	int data;
	struct node *next;
}*head,*curr,*temp,*s,*nt,*prev;
void create(int);
void display();
void reverse(struct node*, int);
int main(){
	printf("Enter limit of the list: ");
	int n;
	scanf("%d",&n);
	create(n);
	printf("The list is created: ");
	display();
	printf("The reversed list is: ");
	reverse(head,n);
}
void create(int k){
	int i;
	for(i = 0; i<k;i++){
		curr = (struct node*)malloc(sizeof(struct node));
		printf("Enter value: ");
		scanf("%d",&curr->data);
		if(curr == NULL)
			printf("Memory not allocated");
		else if(i == 0)
			head = temp = curr;
		else{
			temp->next = curr;
			temp = curr;
		}
 	}
 	temp->next = NULL;
	temp = head;
}

void display(){
	if(temp == NULL)
		printf("List is empty");
	while(temp!=NULL){
		printf("%d ",temp->data);
		temp = temp->next;
	}
	printf("\n");
}

void reverse(struct node *h,int num){
	nt = NULL;
	prev = NULL;
	s = h;
	while(s!=NULL){
		nt = s->next;
		s->next = prev;
		prev = s;
		s = nt;
	}
	h = prev;
	temp = h;
	display();
}