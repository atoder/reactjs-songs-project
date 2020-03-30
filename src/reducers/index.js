import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All Star', duration: '3:15'},
    {title: 'Yellow Submarine', duration: '1:15'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;

};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});