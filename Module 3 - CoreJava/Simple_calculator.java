import java.util.Scanner;
public class Simple_calculator {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter first number: ");
		int a=sc.nextInt();
		System.out.println("Enter second number: ");
		int b=sc.nextInt();
		System.out.println("Enter an operation(+,-,*,/): ");
		char operation=sc.next().charAt(0);
		double result;
		switch(operation) {
		case '+':
			result=a+b;
			System.out.println("Addition: "+result);
			break;
			
		case '-':
			result=a-b;
			System.out.println("Subtraction: "+result);
			break;
			
		case '*':
			result=a*b;
			System.out.println("Multiplication: "+result);
			break;
			
		case '/':
			result=a/b;
			System.out.println("Division: "+result);
			break;
			}
            sc.close();
	}
}