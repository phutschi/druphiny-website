/* global React */

export default ({ desc, href, children, wide  }) => (
  <div className={wide && 'wide'}>
    { href
        ? <a href={href} target="_blank">{ children }</a>
        : children }
    {
      desc && <p>
        { desc }
      </p>
    }
    <style jsx>{`
      div {
        text-align: center;
        margin-bottom: 20px;
      }
      p {
        font-size: 13px;
        color: #999;
        text-align: center;
        font-style: oblique;
        display: block;
      }
      .wide {
        background: #F2F2F2;
        position: relative;
      }
      .wide::before {
        width: 10000%;
        content: '';
        left: -1000px;
        height: 100%;
        position: absolute;
        background: #F2F2F2;
        z-index: -1;
      }
    `}</style>
  </div>
)

const Image = ({ width, src, alt }) => (
  <div>
    <img width={width} src={src} alt={alt} />
    <style jsx>{`
      img {
        max-width: 100%;
        margin: 15px 0;
      }
    `}</style>
  </div>
)

const Video = ({ videoSrc, trackSrc, trackSrcLang }) => (
  <div>
    <video autoPlay loop src={videoSrc}>
      <track
        kind='captions'
        src={trackSrc}
        srcLang={trackSrcLang}
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
)

export { Image, Video }