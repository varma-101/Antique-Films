function Events() {

    return (
      <>
        <div className="events">
          <h1>Featured Categories</h1>
          <div className="event-container">
            <div className="event-card" style={{marginLeft: "3rem"}}>
              <img src="images/birthday.png" alt="Birthday" width={215} height={300} />
              <h2>Birthday</h2>
            </div>
            <div className="event-card">
              <img src="images/birthday.png" alt="Wedding" width={215} height={300} />
              <h2>Wedding</h2>
            </div>
            <div className="event-card">
              <img src="images/birthday.png" alt="Pre-Wedding" width={215} height={300} />
              <h2>Pre-Wedding</h2>
            </div>
            <div className="event-card">
              <img src="images/birthday.png" alt="Maternal" width={215} height={300} />
              <h2>Maternal</h2>
            </div>
            <div className="event-card">
              <img src="images/birthday.png" alt="Maternal" width={215} height={300} />
              <h2>Model Shoots</h2>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Events;