let axios = require("axios");

const ROOT_URL = "https://www.googleapis.com/youtube/v3/playlistItems";

module.exports = function(options, callback) {
  if (!options.key) {
    throw new Error("Youtube Search expected key, received undefined");
  }

  let params = {
    part: "snippet",
    playlistId : "PLYyJCobshLZmtfXvUOIj3y0Ia-vdITP0W",
    key: options.key,
    maxResults: 10
  };

  axios
    .get(ROOT_URL, { params: params })
    .then(function(response) {
      var arr = response.data.items;

      //console.log(arr[0].snippet.resourceId.videoId)

      if (callback) { 
        callback(arr); // 모든 영상 다 띄울 경우
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};
