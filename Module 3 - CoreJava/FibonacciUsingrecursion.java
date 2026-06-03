import java.util.Scanner;
public class FibonacciUsingrecursion {
		 static int fibonacci(int n) {
			if(n==0||n==1) {
				return n;
			}
				return fibonacci(n-1)+fibonacci(n-2);
		}
		public static void main(String[] args) {
			Scanner sc=new Scanner(System.in);
			System.out.println("Enter number of terms: ");
			int n=sc.nextInt();
			System.out.println("Fibonacci of "+n+" is: "+fibonacci(n));
	}
}
