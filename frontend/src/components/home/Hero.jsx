function Hero() {

    return (
      <>
        <div className="hero">
            <img src="images/image.png" alt="" height={850} width={800} className="cam"/>
            <div className="hero-right">
                <h1 className="hero-head">“Capture Timeless Moments with <br/>Our Photography Services.”</h1> <br />
                <p className="hero-content">Welcome to Antique Films, where we specialize in capturing elegant and professional photography that immortalizes your precious moments.Our team of skilled photographers uses high-quality equipment and creative vision to deliver stunning images that exceed expectations.</p>
                <button className="chat-btn"> <span style={{fontSize:"1.5rem",paddingTop:"1500px",fontWeight:"bolder"}}><i class="fa-brands fa-whatsapp"></i></span> <span className="chat">Chat with us</span></button>
            </div>
        </div>
      </>
    )
  }
  
  export default Hero;