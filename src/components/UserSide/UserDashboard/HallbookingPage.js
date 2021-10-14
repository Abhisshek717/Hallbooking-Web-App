import React from 'react'
import './Hallbookingpage.css'
function HallbookingPage() {
    return (
        <div className="hallbookingpage">
             <div className="left">
                 {/* build a image grid*/}
                  <img src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240" alt="" />
                  <img src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240" alt="" />
                  <img src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240" alt="" />
                  <img src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240" alt="" />
                  <img src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240" alt="" />
                  {/* image */}
                  {/* image */}
                  {/* image */}
                  {/* image */}
                  {/* image */}
                  {/* image */}

             </div>
             <div className="right">
                 <h1>Event Date: </h1>
                 <h1>Hall Price: </h1>
                 <h1>Hall Type: </h1>
                 <label>Description</label>
                 <input type="text" />
                 <button>submit</button>
             </div>
        </div>
    )
}

export default HallbookingPage
