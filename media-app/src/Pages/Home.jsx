import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {

  const[uploadVideoResponse,setuploadVideoResponse]=useState({})
  return (
    <>
    <div className="container mt-3 mb-3 d-flex justify-content-between">
    <div className="add-videos">
      <Add setuploadVideoResponse={setuploadVideoResponse}/>
    </div>
    <Link to={"/watch-history"} style={{textDecoration:"none",color:"blueviolet",fontSize:'30px'}}>Watch History <i class="fa-solid fa-right-from-bracket fa-beat-fade"></i></Link>
    </div>
    <div className="container-fluid mt-5 mb-3 row">
      <div className="all-videos col-lg-9">
        <h2>All-Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse}/>
      </div>
      <div className="category col-lg-3">
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home
