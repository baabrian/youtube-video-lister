import React from 'react';
import { Modal, CardMedia } from '@material-ui/core';

type VideoModalProps = {
  videoId: string;
  open: boolean;
  handleClose: () => void;
};

export function VideoModal({ videoId, open, handleClose }: VideoModalProps) {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div>
        <iframe
          title='video player'
          style={{ height: 'calc(90vh - 30px)', width: 'calc(90vw - 30px)' }}
          src={videoSrc}
        />
      </div>
    </Modal>
  );
}
