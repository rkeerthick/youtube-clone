import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@mui/material";

export type videoListProps = {
    videos: any;
    onVideoSelect: (video: any) => void;
};

const VideoList = ({ videos, onVideoSelect }: videoListProps) => {
  return (
    <Grid container spacing={10}>
      {videos.map((video: any, index: number) => (
        <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
      ))}
    </Grid>
  );
};

export default VideoList;
