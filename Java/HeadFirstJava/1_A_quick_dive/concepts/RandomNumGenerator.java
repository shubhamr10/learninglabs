package concepts;
// A program to generate Random Number between 1 and 100
import java.util.Random;

public class RandomNumGenerator{
    public static void main(String[] args){
        int randomNum;
        Random rand = new Random();

        randomNum = rand.nextInt(100);
        System.out.println("Your random number is " + randomNum);
    }
}