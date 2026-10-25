
public abstract class Shape {
    protected String color;

    public Shape(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public void displayColor() {
        System.out.println("Color: " + color);
    }

    // Abstract method for calculating area
    public abstract double calculateArea();

    // Abstract method for calculating perimeter
    public abstract double calculatePerimeter();
}
