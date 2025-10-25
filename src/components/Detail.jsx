import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'

const Detail = () => {

    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type")

    const {Api} = useSelector((state)=>state.pexels)

    if (type === 'image') {
        const photo = Api.photos[id];
        return <div className="detail-pic">
            <img src={photo.src.original} alt="" />
        </div>
    }else if(type==='video'){
        const video = Api.videos[id];
        if (!video) {
            return <h1>Video Not Found😢</h1>
        }
        return <div className="detail-vid">
            <video src={video.video_files[2].link} controls autoPlay ></video>
        </div>
    }

  
}

export default Detail