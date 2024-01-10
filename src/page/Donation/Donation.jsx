import React from 'react'

const Donation = () => {
  return (
    <>
    <section>
        <div className="container-fluid " style={{background:  `url("assets/images/about-6.jpg")`, height: '31rem'}}>
            <div className='text-center container' style={{
                paddingTop:'10rem' , color:"#fff"
            }}>
                <h1>Need help with professional call us now? For your free consultation!</h1>
                <p>If you or your loved one requires professional and compassionate home healthcare services, we are here for you. Contact Always There Home Healthcare today to learn more about our services and how we can support your unique needs. Our dedicated team is ready to provide the care you deserve.</p>

            </div>
            <div className='container' style={{display:'flex', justifyContent:'space-between'}}>
                <button className='btn btn-danger'>Donation</button>
                <button className='btn btn-danger'>Donation</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Donation