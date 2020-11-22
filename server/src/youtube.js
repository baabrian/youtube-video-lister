const { google } = require('googleapis');
const { youtube } = require('googleapis/build/src/apis/youtube');
const keys = require('./config/keys');

const params = {
  key: keys.youtubeKey,
  part: 'snippet',
  id: 'UCMHXMAeKkI6HXlPfLiYvo9g',
  maxResults: 12,
};

google
  .youtube('v3')
  .search.list(params)
  .then((response) => {
    const { data } = response;
    const { items } = data;

    const videos = items.map((item) => {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
      };
    });

    items.forEach((item) => {
      console.log(`VideoId: ${item.id.videoId}`);
      console.log(`Title: ${item.snippet.title}`);
      console.log(`Description: ${item.snippet.description}`);
      console.log(`Thumbnail: ${item.snippet.thumbnails.medium.url}`);
      console.log('\n');
    });

    console.log(videos);

    youtube('v3').channels;
  })
  .catch((er) => {
    console.log(er);
  });
