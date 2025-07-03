package assignment;

public class AssignmentProb1 {
    public static void main(String args[]){
        int x = 7;
        int y = 4;
        int r = 3;

        int result1 = x + y - 1 + x^2;
        System.out.println("x + y - 1 + x^2: "+result1);

        int result2 = x^2 + y^(r-2);
        System.out.println("x^2 + y^(r-2): "+result2);

        int result3 = x^2 * y^(r-2);
        System.out.println("x^2 * y^(r-2): "+result3);

        int result4 = Math.abs(x - y);
        System.out.println("|x - y|: "+result4);

        int result5 = (x/y) * x + (y/x) * x;
        System.out.println("(x/y) * x + (y/x) * x: "+result5);

        int result6 = (x^r/y) - y^5;
        System.out.println("(x^r/y) - y^5: "+result6);

        int result7 = x / y; // notes: floor
        System.out.println("floor(x/y): "+ Math.floor(result7));
        System.out.println("floor(x/y): "+ (int) Math.floor((double) result7)); // cast to integer

        int result8 = x / y;
        System.out.println("ceil(x/y): "+ Math.ceil(result8));
        System.out.println("ceil(x/y): "+ (int) Math.ceil((double) result8));

        System.out.println(Math.floor(5.7));
    }
}
