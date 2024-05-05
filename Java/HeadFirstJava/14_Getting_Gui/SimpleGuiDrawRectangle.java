import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.Random;

public class SimpleGuiDrawRectangle implements ActionListener{
    private JFrame frame;

    public static void main(String[] args){
        SimpleGuiDrawRectangle gui = new SimpleGuiDrawRectangle();
        gui.go();
    }

    public void go(){
        frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton button = new JButton("change colors!");
        button.addActionListener(this);

        DrawMyRectangle drawPanel = new DrawMyRectangle();

        frame.getContentPane().add(BorderLayout.SOUTH, button);
        frame.getContentPane().add(BorderLayout.CENTER, drawPanel);
        frame.setSize(300,300);
        frame.setVisible(true);
    }

    public void actionPerformed(ActionEvent event){
        frame.repaint();
    }
    public static int generateRandomNumber(int lowerBound, int upperBound){
        Random rand = new Random();
        int randomNumber = rand.nextInt(upperBound - lowerBound) + lowerBound;
        System.out.println(randomNumber);
        return randomNumber;
    }
}


class DrawMyRectangle extends JPanel {
    private int colorIndex = 0;
    private Color[] colors = {Color.ORANGE, Color.RED, Color.GREEN, Color.BLUE};
    public void paintComponent(Graphics g){
        
        g.setColor(colors[colorIndex]);
        g.fillRect(20,50,100,100);
        colorIndex = SimpleGuiDrawRectangle.generateRandomNumber(0, colors.length);
    }
}
