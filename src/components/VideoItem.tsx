import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export type videoItem = {
  video: any;
  onVideoSelect: (video: any) => void;
};

const VideoItem = ({ video, onVideoSelect }: videoItem) => {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img src={video?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
        <Typography variant="subtitle1">
          <b>{video?.snippet?.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
