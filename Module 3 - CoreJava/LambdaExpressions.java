import java.util.*;

public class LambdaExpressions {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.add("Ravi");
        names.add("Anu");
        names.add("Kiran");

        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println(names);
    }
}