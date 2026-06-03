import java.util.Scanner;
public class Factorial {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter a number: ");
		int n=sc.nextInt();
		System.out.print("Factorial of "+n+" is : ");
		int fact=1;
		for(int i=1;i<=n;i++) {
			 fact=fact*i;
		}
		System.out.print(fact);
	}
}
