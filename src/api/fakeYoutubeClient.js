import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/data/list_by_related_video.json")
      : axios.get("/data/list_by_keyword.json");
  }
  async videos() {
    return axios.get("/data/list_by_most_popular_videos.json");
  }
  async channels() {
    return axios.get("/data/list_by_channel_id.json");
  }
}
