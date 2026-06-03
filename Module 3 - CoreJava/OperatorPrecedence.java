public class OperatorPrecedence {
	public static void main(String[] args) {
		int n=10+5*2;
		int o=(10+5)*2;
		int p=20/2+3;
		System.out.println("10 + 5 * 2= "+n);
		System.out.println("(10 + 5) * 2= "+o);
		System.out.println("20 / 2 + 3= "+p);
	}
}