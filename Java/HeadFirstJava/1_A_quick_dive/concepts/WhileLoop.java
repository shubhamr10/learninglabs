package concepts;
// A program to demonstrate the while loop and if

public class WhileLoop{
    public static void main(String[] args){
        boolean is_num_eight = false;
        int num = 0;
        while(!is_num_eight){
            System.out.println("value of num is::"+ num);
            num++;
            if(num == 8){
                break;
            }
        }
    }
}