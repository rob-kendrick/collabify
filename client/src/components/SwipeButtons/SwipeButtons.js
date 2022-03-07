import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { Icon, IconButton } from '@mui/material';

import './SwipeButtons.css';

//TODO:
//  Implement swipe functionality with buttons
//  create functions for handling diff. button clicks

function SwipeButtons() {
  return (
    <div className="swipe-buttons">
      <IconButton className="swipe-btn-dislike">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-btn-reverse">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-btn-like">
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
