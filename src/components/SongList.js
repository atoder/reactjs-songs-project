import React, {Component} from 'react';
import {connect}  from 'react-redux';

// no React.Component since we are extracting {Component}
// from 'react' library
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui dividen list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {

  console.log(state);

  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
