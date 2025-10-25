import React, { useEffect } from 'react';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Output = ({ type }) => {

  const { Api , loading, error, hasSearched, userSearch, searchCount } = useSelector((state) => state.pexels);

  const nav = useNavigate();

  const Click  =(index)=>{
      nav(`/detail/${index}?type=${type}`, "_blank");
  }

  const ClickVideo = (index) => {
  nav(`/detail/${index}?type=${type}`);
};

  useEffect(() => {
    if (searchCount > 0) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  }, [searchCount]);                                   

  function renderResults() {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!Api || (type === 'image' && !Api.photos) || (type === 'video' && !Api.videos)) {
      return null;
    }

    if (type === 'image') {
      if (Api.photos.length === 0) {
        return <h1  className='not-found' >No Results Found!</h1>
        
      }
      return Api.photos.map((photo, index) => (
        <img src={photo.src.medium} key={index} alt=""  onClick={()=>{Click(index)}}  />
      ));
    } else if (type === 'video') {
      return Api.videos.map((video, index) => (
        <div key={index} >
          <img src={video.image}  onClick={()=>{ClickVideo(index)}} />
          <img src="./vid play.png" id='output-video-btn'  />
        </div>
        
      ));
    }
  }

  return (
    <div
      className="output"
      style={{ display: hasSearched ? 'block' : 'none' }}
    >
      <h1>{userSearch}</h1>
      <div className="response">{renderResults()}</div>
    </div>
  );
};

export default Output;
