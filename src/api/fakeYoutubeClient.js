import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("/data/list_by_keyword.json");
  }
  async videos() {
    return axios.get("/data/list_by_most_popular_videos.json");
  }
  async video() {
    return axios.get("/data/list_by_channel_id.json");
  }
  async related() {
    return axios.get("/data/list_by_related_video.json");
  }
}
