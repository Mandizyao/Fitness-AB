import java.io.*;
import java.sql.*;
import org.sqlite.SQLiteConfig;
import java.util.*;

public class PersonTidbok {

    // Sökväg till SQLite-databas. OBS! Ändra sökväg så att den pekar ut din databas
    public static final String DB_URL = "jdbc:sqlite:/home/oskis/Documents/TIG058/jgrasp/ovningarTIG058/PersonTidbok.sqlite";
    // Namnet på den driver som används av java för att prata med SQLite
    public static final String DRIVER = "org.sqlite.JDBC";  //org.sqlite.JDBC

    public static void main(String[] args) throws IOException {
    Connection conn = null;
    //Statement st = conn.createStatement(); här eller i delar
    // Kod för att skapa uppkoppling mot SQLite-dabatasen
    try {
    Class.forName(DRIVER);
    SQLiteConfig config = new SQLiteConfig();
    config.enforceForeignKeys(true); // Denna kodrad ser till att sätta databasen i ett läge där den ger felmeddelande ifall man bryter mot någon främmande-nyckel-regel
    conn = DriverManager.getConnection(DB_URL,config.toProperties());
} catch (Exception e) {
    // Om java-progammet inte lyckas koppla upp sig mot databasen (t ex om fel sökväg eller om driver inte hittas) så kommer ett felmeddelande skrivas ut
    System.out.println( e.toString() );
    System.exit(0);
}


// PLATS FÖR DEKLARATIONER OCH KOD //
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
            //Scanner scNamn = new Scanner(System.in);
            String LastName = scNamn.next();

            System.out.println("Email?");
            String Mail = scNamn.next();

            System.out.println("Telefonnr?");
            String  = scPerson.next();
            String PhoneNr = scPerson.next();

            System.out.println("Level?");
            String Level = scNamn.next();

            private static long MemberID = 0;

            public static synchronized String createID()
        {
            return String.valueOf(MemberID++);
        }

            try {
                Statement st = conn.createStatement();
                st.executeUpdate("INSERT INTO Person (PersonalNr, FirstName, LastName, Mail, PhoneNr, Level, MemberID) VALUES ('"+personNr+"', '"+förNamn+"', '"+efterNamn+"')");

                //("INSERT INTO Person " + "VALUES (personNr, 'förNamn', 'efterNamn')");
                //("INSERT INTO Person " +
                //"VALUES (personNummer, förNamn, efterNamn)");
                //("INSERT INTO Person " +
                //"VALUES (PNr, 'förNamn', 'efterNamn')");
                //conn.close(); behövs detta?
            }
            catch (Exception e) {
            System.out.println( e.toString() );
        }
        finally {
            System.out.println("Insert completed");
            //conn.close();
        }

            break;

        case "t":
            System.out.println("Du valde: T - Ny tidrapport");
            System.out.println("Personnummer?");
            Scanner scT = new Scanner(System.in);
            int personNrT = scT.nextInt();
            //String personNummer = scPerson.nextLine();
            //int personNr = Integer.parseInt(personNummer);

            System.out.println("Datum? \n"
                + "Anges i format: ÅÅMMDD");
            int datum = scT.nextInt();
            System.out.println("Antal timmar?");
            int tid = scT.nextInt();
            //Scanner scPerson = new Scanner(System.in);
            //String personNummer = scPerson.nextLine();
            //int personNr = Integer.parseInt(personNummer);

            try {
                Statement st = conn.createStatement();
                st.executeUpdate("INSERT INTO Tidbok (PNr, Datum, AntalTimmar) VALUES ('"+personNrT+"', '"+datum+"', '"+tid+"')");
                //st.executeUpdate("INSERT INTO Tidbok " + "VALUES (personNrT, datum, tid)");

            }
            catch (Exception e) {
            System.out.println( e.toString() );
        }
        finally {
            System.out.println("Insert completed");
        }

            break;

        case "l":
            System.out.println("Du valde: L - Se rapporter för person");
            System.out.println("Personnummer?");
            Scanner scL = new Scanner(System.in);
            int personNrL = scL.nextInt();

            try {
                Statement st = conn.createStatement();
                //st.executeUpdate("INSERT INTO Tidbok (PNr, Datum, AntalTimmar) VALUES ('"+personNrT+"', '"+datum+"', '"+tid+"')");
                //ResultSet rs = st.executeQuery("SELECT * FROM Tidbok WHERE PNr='personNrL'" + "ORDER BY Datum DESC");
                ResultSet rs = st.executeQuery("SELECT PNr, Datum, AntalTimmar FROM Tidbok WHERE PNr='"+personNrL+"'");
                //ResultSet rs = st.executeQuery("SELECT * FROM Tidbok WHERE PNr='personNrL' AND ORDER BY DESC");

                ArrayList<Integer> array = new ArrayList<>();
                while (rs.next()) {
                    //int pNrL = rs.getInt("PNr");
                    //System.out.println(pNrL);
                    System.out.print(rs.getInt("PNr"));
                    System.out.print(" ");
                    System.out.print(rs.getInt("Datum"));
                    System.out.print(" ");
                    System.out.print(rs.getInt("AntalTimmar"));
                    System.out.print("\n");


                    array.add(rs.getInt("PNr"));
                    array.add(rs.getInt("Datum"));
                    array.add(rs.getInt("AntalTimmar"));
                }
                System.out.println("All records for " + personNrL + " have been selected.");
                //System.out.println(Arrays.toString(array.toArray()));
                //return array;


                /*List<Rapport> rapportPerson = new ArrayList<>();
                while(rs.next()) { //kanske i whileloop
                   int pNr = rs.getInt("PNr");
                   int datumL = rs.getInt("Datum");
                   int antalTimmar = rs.getInt("AntalTimmar");
                   System.out.println(pNr);
                   System.out.println(datumL);
                   System.out.println(antalTimmar);
                }
                */
            }
            catch (Exception e) {
            System.out.println( e.toString() );
            //return null;
        }
        finally {
            System.out.println("Search completed");
        }

            break;

        case "s":
            System.out.println("Du valde: S - Se summa arbetade timmar för person");
            System.out.println("Personnummer?");
            Scanner scS = new Scanner(System.in);
            int personNrS = scS.nextInt();

            try {
                Statement st = conn.createStatement();

                //ResultSet rs = st.executeQuery("SELECT SUM(AntalTimmar), AntalTimmar, PNr, Datum FROM Tidbok WHERE PNr='"+personNrS+"'");
                ResultSet rs = st.executeQuery("SELECT SUM(AntalTimmar), PNr, Datum, AntalTimmar FROM Tidbok WHERE PNr='"+personNrS+"'");
                rs.next();
                int sum = rs.getInt("SUM(AntalTimmar)");
                System.out.println(sum);
                /*ArrayList<Integer> arrayS = new ArrayList<>();
                while (rs.next()) {
                   System.out.print(rs.getInt("PNr"));
                   System.out.print(" ");
                   System.out.print(rs.getInt("Datum"));
                   System.out.print(" ");
                   System.out.print(rs.getInt("AntalTimmar"));
                   System.out.print("\n");
                  */

                //arrayS.add(rs.getInt("PNr"));
                //arrayS.add(rs.getInt("Datum"));
                //arrayS.add(rs.getInt("AntalTimmar"));
                //}
                System.out.println("Sum of records for " + personNrS + " have been selected.");

            }
            catch (Exception e) {
            System.out.println( e.toString() );
            //return null;
        }
        finally {
            System.out.println("Search completed");
        }

            break;

        case "a":
            System.out.println("Du valde: A - Se alla personer och deras tidrapporter");
            try {

                Statement st = conn.createStatement();
                ResultSet rs = st.executeQuery("SELECT p.PNr, p.FNamn, p.ENamn, t.Datum, t.AntalTimmar FROM Person p LEFT JOIN Tidbok t USING (PNr) UNION ALL SELECT p.PNr, p.FNamn, p.ENamn, t.Datum, t.AntalTimmar FROM Tidbok t LEFT JOIN Person p USING (PNr) WHERE p.PNr IS NULL");
                //ResultSet rs = st.executeQuery("SELECT * from Person, Tidbok on Person.PNr = Tidbok.PNr");
                //ResultSet rs = st.executeQuery("SELECT p.PNr, p.FNamn, p.ENamn FROM Person p LEFT JOIN Tidbok t USING(PNr) UNION ALL SELECT t.PNr, t.Datum, t.AntalTimmar FROM Tidbok t LEFT JOIN Person p USING(PNr) WHERE p.PNr IS NULL");
                //("PNr='"+personNrS+"'");

                rs.next();
                //int sum = rs.getInt("SUM(AntalTimmar)");
                //System.out.println(sum);
                ArrayList<String> arrayA = new ArrayList<>();
                while (rs.next()) {
                    System.out.print(rs.getString("PNr"));
                    System.out.print(" ");
                    System.out.print(rs.getString("FNamn"));
                    System.out.print(" ");
                    System.out.print(rs.getString("ENamn"));
                    System.out.print(" ");
                    System.out.print(rs.getInt("Datum"));
                    System.out.print(" ");
                    System.out.print(rs.getInt("AntalTimmar"));
                    System.out.print("\n");


                    arrayA.add(rs.getString("PNr"));
                    arrayA.add(rs.getString("FNamn"));
                    arrayA.add(rs.getString("ENamn"));
                    arrayA.add(rs.getString("Datum"));
                    arrayA.add(rs.getString("AntalTimmar"));

                }
                System.out.println("All records have been selected.");

            }
            catch (Exception e) {
            System.out.println( e.toString() );
        }
        finally {
            System.out.println("Search completed");
        }

            break;

        case "q":
            System.out.println("Du valde: Q - Avsluta");
            System.out.println("Tack för att du provade mitt program! :-)");
            System.exit(0);

        default:
            System.out.println("Angiven char är felaktig");
            break;

    }
    mainScreen();
    val = sc.next();
}
System.out.println();
}
public static void mainScreen() {
    System.out.println("Please input any of the following chars: \n"
        + "P - Ny person \n"
        + "T - Ny tidrapport \n"
        + "L - Se rapporter för person \n"
        + "S - Se summa arbetade timmar för person \n"
        + "A - Se alla personer och deras tidrapporter \n"
        + "Q - Avsluta");
}
/*public static ArrayList<String> get() {//throws Exception
   try {
      Statement st = conn.createStatement();
      st.executeUpdate("SELECT * FROM Tidbok WHERE Pnr='personNrL' AND ORDER BY DESC");

      ResultSet result = st.executeQuery();

      ArrayList<String> array = new ArrayList<String>();
      while(result.next()) {
         System.out.println(result.getString("first"));
         array.add(result.getString("last"));
      }
      System.out.println("All records for " + personNrL + " selected.");
      return array;
   }
   catch (Exception e) {
         System.out.println( e.toString() );
   return null;
}
*/


}
/*class Person {
  private int pNr;
  private int datum;
  private int antalTimmar
*/