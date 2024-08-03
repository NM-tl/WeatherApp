import React from 'react'

export default function Illustration({ backgroundImage  }) {
  const layoutStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    filter: 'Blur(5px)',
    position: 'absolute',
    width: '100%',
  };

  return (
    <div style={layoutStyle}></div>
  )
}
