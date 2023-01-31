import axios from "axios";

export default class FakeYoutube {
  constructor() {}
  async search(keyword) {
    // #는 private함수
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }
  async #searchByKeyword() {
    // 이미 생성된 데이터를 사용하므로 keyword는 필요 X
    return axios
      .get(`/data/list_by_keyword.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    // 이미 생성된 데이터를 사용하므로 keyword는 필요 X
    return axios
      .get(`/data/list_by_most_popular_videos.json`)
      .then((res) => res.data.items);
  }
}
