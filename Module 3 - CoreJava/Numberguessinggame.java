import java.util.Scanner;
import java.util.Random;
public class Numberguessinggame {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		Random rand=new Random();
		int n=rand.nextInt(100)+1;
		int guess=0;
		while(guess!=n) {
			System.out.println("Guess a number between(1-100): ");
			guess=sc.nextInt();
			
			if(guess>n) {
				System.out.println("Too high");
			}else if(guess<n) {
				System.out.println("Too low");
			}else {
				System.out.println("Correct! You guessed correct number");
			}
		}
		sc.close();
	}
}