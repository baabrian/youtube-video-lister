import express, { Request, Response } from 'express';
const router = express.Router();
import { keys } from '../config/keys';
import { google } from 'googleapis';

const params = {
  key: keys.youtubeKey,
  part: ['snippet'],
  channelId: 'UCMHXMAeKkI6HXlPfLiYvo9g',
  maxResults: 30
};

interface RequestQuery extends Request {
  query: { [key: string]: string | undefined };
}

router.get('/api', async (req: Request, res: Response) => {
  const response = await google.youtube('v3').search.list(params);
  const {
    data: { items },
  } = response;

  if (items) {
    const videos = items.map((item) => {
      return {
        title: item.snippet?.title,
        videoId: item.id?.videoId,
        description: item.snippet?.description,
        thumbnail: item.snippet?.thumbnails?.medium?.url,
      };
    });
    console.log(videos);
    res.status(200).send(videos);
  } else {
    res.status(400).send('Unable to load videos');
  }
});

router.get('/api/search', async (req: RequestQuery, res: Response) => {
  const { searchTerm } = req.query;

  const response = await google
    .youtube('v3')
    .search.list({ ...params, q: searchTerm });
  const {
    data: { items },
  } = response;

  if (items) {
    const videos = items.map((item) => {
      return {
        title: item.snippet?.title,
        videoId: item.id?.videoId,
        description: item.snippet?.description,
        thumbnail: item.snippet?.thumbnails?.medium?.url,
      };
    });
    res.status(200).send(videos);
  } else {
    res.status(400).send('Unable to load videos');
  }
});

export { router };
