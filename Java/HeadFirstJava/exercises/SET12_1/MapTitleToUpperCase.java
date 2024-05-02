/**
 * MapTitleToUpperCase program demonstrates the use of Stream Intermediate 
 * operation map(), to change the Song title to uppercase
 * will be using string method to change the string to uppercase
 */

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class MapTitleToUpperCase {
    public static void main(String[] args){
        Songs songs = new Songs();
        List<Song> allSongs = songs.getSongs();

        Stream<Song> songsStream = allSongs.stream();
        Stream<String> songTitles = songsStream.map(s -> s.getTitle().toUpperCase());
        List<String> results = songTitles.collect(Collectors.toList());

        System.out.println("Results = " + results);
    }
}
