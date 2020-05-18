package fitnessabdemo;
import java.sql.*;
import org.sqlite.SQLiteConfig;
import java.util.*;

public class Driver {

	public static void main(String[] args) {

		try {
			//get connection
			Connection myConn = DriverManager.getConnection("jdbc:sqlite:/home/oskis/eclipse-workspace/FitnessAB/db/db");
			//create statement
			Statement myStmt = myConn.createStatement();
			//execute sql query
			ResultSet myRs = myStmt.executeQuery("select * from Course");
			//result set
			while (myRs.next()) {
				System.out.println(myRs.getString("CourseID") + ", " + myRs.getString("CourseName"));
			}
		}
		catch (Exception exc) {
			exc.printStackTrace();
		}


Scanner sc = new Scanner(System.in);
String val;
mainScreen();
val = sc.next(); //kanske sc.nextLine (gör om allt till char?)

while (val != "q") {
    switch (val) {
        case "p":
            System.out.println("Du valde: P - Ny person");
            System.out.println("Personnummer?");
            Scanner scPerson = new Scanner(System.in);
            String personNummer = scPerson.nextLine();
            int PersonalNr = Integer.parseInt(personNummer);

            System.out.println("Förnamn?");
            Scanner scNamn = new Scanner(System.in);
            String FirstName = scNamn.next();

            System.out.println("Efternamn?");
            String LastName = scNamn.next();

            System.out.println("Email?");
            String Mail = scNamn.next();

            System.out.println("Telefonnr?");
            String PhoneNr = scNamn.next();

            System.out.println("Level?");
            String Level = scNamn.next();

            System.out.println("MemberID?");
            String MemberIDString = scNamn.nextLine();
            int MemberID = Integer.parseInt(MemberIDString);

            try {
            	Statement myStmt = myConn.createStatement();
                myStmt.executeUpdate("INSERT INTO Person (PNr, FNamn, ENamn) VALUES ('"+PersonalNr+"', '"+FirstName+"', '"+LastName+"', '"+Mail+"', '"+PhoneNr+"', '"+Level+"', '"+MemberID+"')");
            }
            catch (Exception e) {
                System.out.println( e.toString() );
             }
            finally {
                System.out.println("Insert completed");
                //conn.close();
             }
            break;

            mainScreen();
            val = sc.next();
         }
         System.out.println();
         }
         public static void mainScreen() {
            System.out.println("Please input any of the following chars: \n"
                               + "P - Ny person \n"
                               + "T - Ny tidrapport \n"
                               + "L - Se rapporter fЖr person \n"
                               + "S - Se summa arbetade timmar fЖr person \n"
                               + "A - Se alla personer och deras tidrapporter \n"
                               + "Q - Avsluta");
         }

      }
            
