import Topbar from "@/components/Topbar";

import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";

import { useEffect, useState } from "react";
import DialogBox from "./components/DialogBox";

const url = "https://jsonfakery.com/movies/paginated";

//fetch from API
const fetchMovies = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export interface Movie {
  id: string;
  movie_id: number;
  original_title: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
  original_language: string;
  popularity: number;
  casts: { name: string }[];
  adult: boolean;
  created_at: string | null;
  updated_at: string | null;
}

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await fetchMovies();
      setMovies(data);
      console.log(data);
    };

    getMovies();
  }, []);

  return (
    <main className="h-full rounded-md flex flex-col bg-gradient-to-b from-zinc-700/60 to-zinc-950 select-none overflow-hidden">
      <Topbar />
      <ScrollArea className="flex-1 overflow-auto custom-scrollbar">
        <div className="p-4 sm:p-6 pb-24">
          <h1 className="text-xl font-bold mb-4">Movie Database</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md relative"
              >
                <img
                  src={movie.poster_path || "https://via.placeholder.com/150"}
                  alt={movie.original_title}
                  className="w-full max-h-[600px] object-cover rounded"
                />
                <h2 className="mt-2 text-lg font-bold">
                  {movie.original_title}
                </h2>
                <p className="text-sm text-gray-400">
                  Release: {movie.release_date}
                </p>
                <p className="text-sm text-gray-400">
                  Rating: {movie.vote_average}
                </p>
                <p className="text-blue-400">{movie.original_language}</p>
                <div className="absolute bottom-4 right-4">
                  <DialogBox data={movie} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default HomePage;
