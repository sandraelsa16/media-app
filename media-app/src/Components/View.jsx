import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadedVideosAPI } from '../../services/allAPI'
function View({uploadVideoResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    setDeleteVideoResponse(false)
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllVideos = async()=>{
    const result = await getAllUploadedVideosAPI()
    console.log(result);
    if(result.status==200){
      console.log(result.data);
      setAllVideos(result.data)
    }  else{
      console.log("Api failed");
      setAllVideos([])
    }  
  }

  console.log(allVideos);
  
   
  return (
    <>
    <Row>

      {
        allVideos?.length>0?allVideos.map(video =>(
          <Col sm={12} md={4} lg={3}>
          <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse} />
          </Col>
     
        )):<p className='text-danger fw-bolder'>Nothing to display</p>
      }
      </Row>
      </>
  )
}

export default View
