import java.awt.*;
import javax.swing.*;
import java.awt.event.*;


public class SimpleGuiDisplayImage {
    private JFrame frame;
    public static void main(String[] args){
        SimpleGuiDisplayImage gui = new SimpleGuiDisplayImage();
        gui.go();
    }

    public void go(){
        // create a new frame
        frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton button = new JButton("display image");


    }

    public void actionPerformed(ActionEvent event){
        frame.repaint();
    }
}

class DrawJPEGPanel extends JPanel{
    public void paintComponent(Graphics g){
        Image image = new ImageIcon("./imgs/test1.jpg").getImage();
        g.drawImage(image, 3, 4, this);
    }
}
