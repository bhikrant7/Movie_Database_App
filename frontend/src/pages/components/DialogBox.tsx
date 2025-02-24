import React from "react";
import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Movie } from "../HomePage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DialogBoxProps {
  data: Movie;
}


const DialogBox: React.FC<DialogBoxProps> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary"><InfoIcon /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-zinc-900 text-white rounded-sm overflow-x-auto">
        <DialogHeader>
          <DialogTitle>Information on Movie</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col p-4 bg-zinc-800 text-white rounded-md whitespace-nowrap overflow-x-auto">
          <li><strong>Id:</strong> {data.id}</li>
          <li><strong>MovieId:</strong> {data.movie_id}</li>
          <li><strong>Title:</strong> {data.original_title}</li>
          <li><strong>Average Vote:</strong> {data.vote_average}</li>
          <li><strong>Vote Count:</strong> {data.vote_count}</li>
          <li><strong>Release Date:</strong> {data.release_date}</li>
          <li><strong>Language:</strong> {data.original_language}</li>
          <li><strong>Popularity:</strong> {data.popularity}</li>
          <li><strong>Adult:</strong> {data.adult ? "Yes" : "No"}</li>
          <li><strong>Overview:</strong> {data.overview}</li>
          <li><strong>Poster:</strong> <a href={data.poster_path} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View</a></li>
          <li><strong>Backdrop:</strong> <a href={data.backdrop_path} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View</a></li>
          <li><strong>Casts:</strong> {data.casts.map((cast: {name:string}) => cast.name).join(", ")}</li>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;