import java.lang.reflect.*;

class Test {
    public void hello() {
        System.out.println("Hello");
    }
}

public class Reflection_in_java {
    public static void main(String[] args)
            throws Exception {

        Class<?> c =
                Class.forName("Test");

        Object obj =
                c.getDeclaredConstructor()
                        .newInstance();

        Method[] methods =
                c.getDeclaredMethods();

        for (Method m : methods) {
            System.out.println(m.getName());

            m.invoke(obj);
        }
    }
}