import java.sql.*;

public class Transaction_Handling_in_JDBC {

    static void transfer(
            Connection con,
            int from,
            int to,
            int amount) throws Exception {

        con.setAutoCommit(false);

        try {
            PreparedStatement debit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance=balance-? WHERE id=?");

            debit.setInt(1, amount);
            debit.setInt(2, from);
            debit.executeUpdate();

            PreparedStatement credit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance=balance+? WHERE id=?");

            credit.setInt(1, amount);
            credit.setInt(2, to);
            credit.executeUpdate();

            con.commit();

        } catch (Exception e) {
            con.rollback();
        }
    }

    public static void main(String[] args)
            throws Exception {

        Connection con =
                DriverManager.getConnection(
                        "jdbc:mysql://localhost:3306/testdb",
                        "root",
                        "root");

        transfer(con, 1, 2, 500);
    }
}