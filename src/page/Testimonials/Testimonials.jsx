import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <>

<section className="mt-5">
  <div className="container">
    <p>Testimonials</p>
  <h1>Testimonials</h1>
    <div id="owl-demo-3" className="owl-carousel owl-theme">
      <article className="thumbnail item">
        <div className="caption">
          <p className="flex-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis obcaecati sint doloremque unde hic aliquid! Aspernatur, quia debitis. Doloribus odio quia ratione id laudantium adipisci distinctio, placeat quos accusamus?</p>
        </div>
        <div className='d-flex'>
          <img src="assets/images/service-1.jpg" className="img-responsive" style={{borderRadius: '50%', width:'100px', height:'100px'}}/>
          <div className='ms-3'>
            <h1>Goutam Singh</h1>
            <p>Junior Developer</p>
          </div>
        </div>
      </article>
      <article className="thumbnail item">
        <div className="caption">
          <p className="flex-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis obcaecati sint doloremque unde hic aliquid! Aspernatur, quia debitis. Doloribus odio quia ratione id laudantium adipisci distinctio, placeat quos accusamus?</p>
        </div>
        <div className='d-flex ms-3'>
          <img src="assets/images/service-1.jpg" className="img-responsive" style={{borderRadius: '50%', width:'100px', height:'100px'}}/>
          <div className='ms-3'>
            <h1>Goutam Singh</h1>
            <p>Junior Developer</p>
          </div>
        </div>
      </article>
      <article className="thumbnail item">
        <div className="caption">
          <p className="flex-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis obcaecati sint doloremque unde hic aliquid! Aspernatur, quia debitis. Doloribus odio quia ratione id laudantium adipisci distinctio, placeat quos accusamus?</p>
        </div>
        <div className='d-flex ms-3'>
          <img src="assets/images/service-1.jpg" className="img-responsive" style={{borderRadius: '50%', width:'100px', height:'100px'}} alt='vc'/>
          <div className='ms-3'>
            <h1>Goutam Singh</h1>
            <p>Junior Developer</p>
          </div>
        </div>
      </article>
      
    </div>
  </div>
</section> 

    </>
  )
}

export default Testimonials