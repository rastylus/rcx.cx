import { useState } from 'react'


function Test() {
  
    const [count, setCount] = useState(0);

    return (
      <>
<iframe style={{borderRadius: "20px", margin: 8}} src="https://open.spotify.com/embed/album/4wpInK8KH9jMNt2nSNWEzx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style={{borderRadius: "20px", margin: 8}} src="https://open.spotify.com/embed/track/6cGmOGCCRFPCLKvTe9PsGE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </>
    )
  }
  
  export default Test