package concepts;
// This programs demonstrates, how you can create the array of strings

public class ArrayOfStrings{
    public static void main(String[] args){
        String[] names = new String[7];
        names[0] = "Shubham";
        names[1] = "Pratik";
        names[2] = "Kumar";
        names[4] = "Rauniyar";


        for(int i = 0; i < 5; i++){
            System.out.println(names[i] + " ");
        }
    }
}