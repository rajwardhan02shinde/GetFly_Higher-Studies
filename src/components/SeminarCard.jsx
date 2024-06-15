function SeminarCard({ item }) {
  return (
    <>
      <div className="upcomingSeminarContainer">
        <div className="upperPart">
          <div className="leftContent ">
            <p>{item.date}</p>
          </div>
          <div className="verticalLine"></div>
          <div className="rightContent">
            <p className="bigFont">Seminar on {item.title}</p>
            <p className="smallFont">{item.organizedBy}</p>{" "}
          </div>
        </div>
        <div className="downPart">
          <h1>Description</h1>
          <p>{item.description}</p>
          <h1>Speaker:</h1>
          <p>{item.speaker}</p>
          <div className="moreDetails">
            <div className="lastDate">
              <p>
                {" "}
                <span>Last Date to Apply :</span>{" "}
                <h3 class="actualDate">{item.lastDateToApply}</h3>
              </p>
            </div>
            <div className="lastDate">
              <p>
                {" "}
                <span>Time & Venue :</span>
                <h3 class="actualDate">
                  {" "}
                  {item.time},{item.venue}
                </h3>
              </p>
            </div>
          </div>
          <div className="applyButton">
            <button>Apply Now </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SeminarCard;
