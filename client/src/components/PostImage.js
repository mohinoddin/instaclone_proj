import React from 'react'
import './Postcontainer.css';

export default function PostImage({ details }) {

    let bin = '';
    for (let i = 0, l = details.PostImage.data.data.length; i < l; i++) {
        bin += String.fromCharCode(details.PostImage.data.data[i]);
    }

    const base64String = btoa(bin);
    // const base64String = btoa(
    //     String.fromCharCode(...new Uint8Array(details.PostImage.data.data))
    //   );
    //  console.log(details.PostImage.data.data)
    return (
        <div className='PostImage'>
            {/* <img className='postimages' src={details.PostImage.data.data} alt="img" /> */}
            <img className='postimages' src={`data:image/png;base64,${base64String}`} alt="img" />
        </div>
    )
}