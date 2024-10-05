import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../services/allAPI';

function Add({setuploadVideoResponse}) {
  const [uploadVideos,setUploadVideos]=useState({id:"",name:"",url:"",link:""})
   console.log(uploadVideos);

   const getYoutubeLink =(e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      let VID = value.split('v=')[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      setUploadVideos({...uploadVideos,link:`https://www.youtube.com/embed/${VID}`})
    } else
    {
      setUploadVideos({...uploadVideos,link:""})
    }
   }

   const handleAdd =async ()=>{
    const{id,name,url,link}= uploadVideos
    if(!id || !name || !url || !link){
      alert("Please fill the missing fields")
    }else {
      //upload to json server
      const result = await uploadVideoAPI(uploadVideos)
      console.log(result);
      if(result.status>=200 && result.status<=300){
        alert("Video Uploaded")
        handleClose()

        setUploadVideos({
          id:"",name:"",url:"",link:""
        })
        setuploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }

   }


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className="d-flex mb-5 mt-5 align-items-center">
      <h2>Upload Videos</h2>
      <button className='btn'  onClick={handleShow}><i className="fa-solid fa-arrow-up-from-bracket fa-beat fa-2x mb-2"></i></button>
     </div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <FloatingLabel
        controlId="floatingId"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setUploadVideos({...uploadVideos,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>setUploadVideos({...uploadVideos,name:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Image URL" className="mb-3">
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideos({...uploadVideos,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video URL" className="mb-3">
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink} />
      </FloatingLabel>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
