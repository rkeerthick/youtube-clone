import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: "AIzaSyAtZYBZ3wbN4GTcQ-7pkoRS9ySX1u3ib-0",
  },
});
