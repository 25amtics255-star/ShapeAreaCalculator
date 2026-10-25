
import java.util.Scanner;

public class Main {

    public static double readPositiveDouble(
            Scanner sc, String message) {

        double value;

        while (true) {
            System.out.print(message);

            if (sc.hasNextDouble()) {
                value = sc.nextDouble();

                if (Double.isFinite(value) && value > 0) {
                    return value;
                }

                System.out.println(
                    "Please enter a positive number.");
            } else {
                System.out.println(
                    "Invalid input. Enter a number.");
                sc.next();
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n==============================");
            System.out.println("    SHAPE AREA CALCULATOR");
            System.out.println("==============================");
            System.out.println("1. Calculate Circle Area");
            System.out.println("2. Calculate Rectangle Area");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            if (!sc.hasNextInt()) {
                System.out.println("Please enter 1, 2 or 3.");
                sc.next();
                continue;
            }

            int choice = sc.nextInt();
            sc.nextLine();

            if (choice == 3) {
                System.out.println("Thank you for using the app!");
                break;
            }

            Shape shape;

            if (choice == 1) {
                System.out.print("Enter circle color: ");
                String color = sc.nextLine();

                double radius = readPositiveDouble(
                    sc, "Enter radius: ");

                shape = new Circle(color, radius);

            } else if (choice == 2) {
                System.out.print("Enter rectangle color: ");
                String color = sc.nextLine();

                double length = readPositiveDouble(
                    sc, "Enter length: ");

                double width = readPositiveDouble(
                    sc, "Enter width: ");

                shape = new Rectangle(color, length, width);

            } else {
                System.out.println("Invalid menu choice.");
                continue;
            }

            System.out.println("\n----- RESULT -----");
            shape.displayColor();
            System.out.printf(
                "Area: %.2f%n", shape.calculateArea());
            System.out.println("------------------");
        }

        sc.close();
    }
}
