import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Search, VideoDescription, VideoList } from "./components/index";
import youtube from "./api/youtube";
import { defaultVideos } from "./util";

const App = () => {
  const [videos, setVideos] = useState<any[]>(defaultVideos);
  const [selectedVideo, setSelectedVideo] = useState<any>(defaultVideos[0]);

  const onSearch = async (searchText: string) => {
    const response = await youtube.get("search", { params: { q: searchText } });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };


  const onVideoSelect = (video: any) => {
    setSelectedVideo(video);
  };

  return (
    <Grid justifyContent="center" container spacing={12}>
      <Grid item xs={12}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Search onSearch={onSearch} />
          </Grid>
          <Grid item xs={8}>
            <VideoDescription video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
