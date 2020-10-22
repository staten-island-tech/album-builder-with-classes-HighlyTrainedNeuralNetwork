console.log("connected");

class Album {
  constructor(title, artist, url) {
    this.title = title;
    this.artist = artist;
    this.url = url;
  }
}

class UI {
  addAlbumToList(album) {
    let html =
      '<div class="display-album flex-row"><div class="display-title">%title%</div><div class="display-artist">%artist%</div><div class="display-cover"><img src="%url%"alt=""></div><div class="remove-album">Remove Album X</div>';
    let newHtml = html.replace("%title%", album.title);
    newHtml = newHtml.replace("%artist%", album.artist);
    newHtml = newHtml.replace("%url%", album.url);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("url").value = "";
  }
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  console.log(title);
  const singer = document.getElementById("artist").value;
  console.log(singer);
  const url = document.getElementById("url").value;
  console.log(url);
  const album = new Album(title, singer, url);
  console.log(album);
  const ui = new UI();
  ui.addAlbumToList(album);
  ui.clearFields();
});
