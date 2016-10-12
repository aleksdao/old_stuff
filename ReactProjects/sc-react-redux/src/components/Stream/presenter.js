import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, key) => {
          return <div key={key} className="track">{track.title}</div>
        })
      }
    </div>
  )
}

export default Stream;
