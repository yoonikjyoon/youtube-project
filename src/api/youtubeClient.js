import axios from "axios";

export default class YoutubeClient {
  constructor() {
    // 사용할 url 설정
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(params) {
    return this.httpClient.get("search", params);
  }
  async videos(params) {
    return this.httpClient.get("videos", params);
  }
  async video(params) {
    return this.httpClient.get("video", params);
  }
  async related(params) {
    return this.httpClient.get("related", params);
  }
}
