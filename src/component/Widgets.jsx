import React from 'react'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InfoIcon from "@mui/icons-material/Info";
import './Widgets.css';

const Widgets = () => {
    const newsArticle = (heading,subtitle) =>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
             <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
             <h4>{heading}</h4>
             <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
       <div className="widgets_header">
        <h2>Linkdin News</h2>
       <InfoIcon />
       </div>
       {newsArticle ("React Devlopers are Roking","FreeCode Camp")}
       {newsArticle ('Top Ten Npm package',"dev.to")}
       {newsArticle ('Redux Toolkit',"FreeCode Camp")}
       {newsArticle ('Mern stack is easy',"GeeksforGeeks")}
       {newsArticle ('Top React Dev tools you should try',"FreeCode Camp")}
       {newsArticle ('A guide to FireBase Auth',"FreeCode Camp")}
    </div>
  )
}

export default Widgets