import React from 'react';
import VideoItem from './video_item';

const VideoList = (props) => {

   const videoItems = props.videos.map((video) => {
        return (
        <VideoItem
            onVideoClick={props.onVideoSelect}
            video={video}
            key={video.etag}/>)
    });
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;