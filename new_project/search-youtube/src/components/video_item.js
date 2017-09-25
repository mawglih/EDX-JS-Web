import React from 'react';

const VideoItem = ({video, onVideoClick}) => {
    console.log(video);
    const snippet = video.snippet;
    const imgUrl = video.snippet.thumbnails.medium.url;
    return(
        <li  onClick={() => onVideoClick(video)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img src={imgUrl} alt="{snippet.title}" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {snippet.title}
                    </div>
                </div>
            </div>
        </li>
    ) ;
};

export default VideoItem;