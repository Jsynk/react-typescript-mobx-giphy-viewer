import { GiphyFetch } from "@giphy/js-fetch-api";
import { makeAutoObservable, observable } from "mobx";
import type { Giphy, Data } from "./types/Giphy"
import * as mockApiResponse from "./mocks/giphy.json"

const gf = new GiphyFetch("FQBF3KgCdeUz6qNCJIYAKj4Kn3u1809v");

enum ImageMode {
  Carousel = "CAROUSEL",
  Card = "CARD",
  Grid = "GRID",
  List = "LIST",
}

class ApplicationStore {
  imageMode = "";
  images?: Data[] = undefined;
  mockApi = false;

  constructor() {
    makeAutoObservable(
      this,
      {
        imageMode: observable,
        images: observable,
        mockApi: observable,
      },
      { autoBind: true }
    );
    this.getImages();
  }

  getImages() {
    if (!this.mockApi) {
      gf.trending({ limit: 10 })
        .then(gifs=>this.setImages(gifs))
    } else {
      this.setImages(mockApiResponse)
    }
  }

  setImages(gifs: Giphy|any) {
    const { data } = gifs
    this.images = data;
  }

  setImageMode(mode: ImageMode) {
    this.imageMode = mode
  }
}

const store = new ApplicationStore();

export { store, ImageMode };
