import React from "react";
import { Paper, Typography } from "@mui/material";

export type videoDescriptionProps = {
  video: any;
};

const VideoDescription = ({ video }: videoDescriptionProps) => {
  console.log(video, "video");
  if (!video) return <h1>Loading...</h1>;

  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} sx={{ height: "600px" }}>
        <iframe
          frameBorder={0}
          height="100%"
          width="100%"
          title={video.snippet.title}
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} sx={{ padding: "15px" }}>
        <Typography variant="h4">
          {video?.snippet?.title} - {video?.snippet?.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video?.snippet?.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {video?.snippet?.description}
        </Typography>
      </Paper>
    </>
  );
};

export default VideoDescription;
