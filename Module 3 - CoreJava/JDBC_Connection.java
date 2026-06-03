import java.sql.*;

public class JDBC_Connection {
    public static void main(String[] args) {

        String url =
                "jdbc:mysql://localhost:3306/testdb";

        String user = "root";
        String pass = "root";

        try {
            Connection con =
                    DriverManager.getConnection(
                            url, user, pass);

            Statement st =
                    con.createStatement();

            ResultSet rs =
                    st.executeQuery(
                            "SELECT * FROM students");

            while (rs.next()) {
                System.out.println(
                        rs.getInt("id")
                        + " "
                        + rs.getString("name"));
            }

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}