// @flow

import * as React from 'react';

type VideoProps = {
  videoSrc: string,
  trackSrc: string,
  trackSrcLang: string,
};

const Video = ( props: VideoProps ) => (
  <div>
    <video autoPlay loop src={props.videoSrc}>
      <track
        kind="captions"
        src={props.trackSrc}
        srcLang={props.trackSrcLang}
        default
      />
      <style jsx>{`
        video {
          max-width: 100%;
          margin: 15px 0;
        }
      `}</style>
    </video>
  </div>
);

export default Video;
