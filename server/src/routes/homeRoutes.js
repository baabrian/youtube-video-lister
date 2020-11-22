const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const { google } = require('googleapis');

const params = {
  key: keys.youtubeKey,
  part: 'snippet',
  channelId: 'UCMHXMAeKkI6HXlPfLiYvo9g',
  maxResults: 12,
};

router.get('/api', async (req, res) => {
  const response = await google.youtube('v3').search.list(params);
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

  res.send(videos);
});

module.exports = router;
