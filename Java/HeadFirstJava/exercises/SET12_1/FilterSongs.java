import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FilterSongs{
    public static void main(String[] args){
        Songs songs = new Songs();
        List<Song> allSongs = songs.getSongs();

        System.out.println("Filter all the songs that has a Rock genre");

        // List<Song> rockSongs = allSongs.stream()
        //                         .filter(s -> s.getGenre().equals("Rock"))
        //                         .collect(Collectors.toList());
        

        Stream<Song> allSongStream = allSongs.stream();
        Stream<Song> filteredSongsStream = allSongStream.filter(s -> s.getGenre().equals("Rock"));

        List<Song> results = filteredSongsStream.collect(Collectors.toList());

        System.out.println("results" + results);

    }
}