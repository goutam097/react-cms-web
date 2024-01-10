import React from 'react'

const Health = () => {
  return (
    <>
    <section className='mt-5'>
        <div className="container">
            <div className="row ">
                <div className="col-lg-6">
                    <img src="assets/images/about-3.jpg" alt="" style={{width:'100%'}}/>
                </div>
                <div className="col-lg-6 text-center mt-5" style={{justifyContent:'center', alignItems:'center', backgroundColor:'grey'}}>
                    <ul className='mt-5'>
                        <li>Always There Home Healthcare</li>
                    </ul>
                    <h1>We Are Always There Home Healthcare</h1>
                    <p>We believe that everyone deserves the highest quality of care</p>
                    <ul style={{textDecoration:'none'}}>
                        <li>Companion Care</li>
                        <li>Rehabilitation Services</li>
                        <li>Alzheimer's and Dementia Care</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Health