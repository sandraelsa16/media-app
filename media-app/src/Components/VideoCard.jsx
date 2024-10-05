import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';


function VideoCard({video,setDeleteVideoResponse}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const{name,link} = video
    let today = new Date()
    // console.log(new Intl.DateTimeFormat('en-US',{year:'2-digit',month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today));
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'2-digit',month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)
    
    let videoHistory = {name,link,timeStamp}

    await addVideoHistoryAPI(videoHistory)
  }

  const removeVideo = async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted =(e,id)=>{
    console.log("dragStarted"+id);
    e.dataTransfer.setData("videoId",id)
    
  }

  return (
    <>
     <Card style={{ width: '16rem',height:'18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)} >
      <Card.Img variant="top" src={video?.url} height={'200px'} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'><h3>{video?.name}</h3>
        <button onClick={()=>removeVideo(video?.id)}  className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video?.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard
