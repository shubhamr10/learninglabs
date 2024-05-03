import javax.sound.midi.*;
import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.Line;
import javax.sound.sampled.Mixer;

import static javax.sound.midi.ShortMessage.*;

public class Soundplayer {
    public static void main(String[] args){
        Soundplayer mini = new Soundplayer();
        mini.displayMixerInfo();
    }

    public void play(){
        try{
            // Get the sequencer and open it
            Sequencer player = MidiSystem.getSequencer();
            player.open();

            Sequence seq = new Sequence(Sequence.PPQ, 4);

            Track track = seq.createTrack();


            ShortMessage msg1 = new ShortMessage();
            msg1.setMessage(NOTE_ON, 1, 44, 100);
            MidiEvent noteOn = new MidiEvent(msg1, 1);
            track.add(noteOn);

            ShortMessage msg2 = new ShortMessage();
            msg1.setMessage(NOTE_OFF, 1, 44, 100);
            MidiEvent noteOff = new MidiEvent(msg2, 16);
            track.add(noteOff);

            player.setSequence(seq);

            player.start();

        } catch (Exception e){
            e.printStackTrace();
        }
    }

    public void displayMixerInfo(){
        Mixer.Info [] mixersInfo = AudioSystem.getMixerInfo();
        System.out.println("mixer==" + mixersInfo);
        for(Mixer.Info mxInfo: mixersInfo){
            System.out.println("Mixer : " + mxInfo.getName());

            Mixer mixer = AudioSystem.getMixer(mxInfo);

            Line.Info [] sourceInfos = mixer.getSourceLineInfo();
            for(Line.Info info: sourceInfos){
                showInfoLine(info);
            }

            Line.Info[] targeInfos = mixer.getTargetLineInfo();
            for(Line.Info lInfo: targeInfos){
                showInfoLine(lInfo);
            }
        }
    }

    private final void showInfoLine(Line.Info lineInfo){
        System.out.println("  " + lineInfo.toString());

        if(lineInfo instanceof DataLine.Info){
            DataLine.Info dlInfo = (DataLine.Info) lineInfo;

            AudioFormat[] formats = dlInfo.getFormats();
            for(AudioFormat fmt : formats){
                System.out.println("   " + fmt.toString());
            }
        }
    }
}
