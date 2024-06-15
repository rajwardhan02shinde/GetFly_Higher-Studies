import { useState } from "react";
import SeminarCard from "./SeminarCard";
import exampleImage from "../assets/seminar.jpg";
import upcomingSeminars from "./Data";
function Dashboard() {
  const [items, setItems] = useState(upcomingSeminars);
  return (
    <>
      {" "}
      <div className="container">
        {" "}
        <div className="perfectMatch">
          <h2>Dashboard</h2>
          <p>
            Displaying the Number of Seminars on Higher Studies Conducted and
            Students Attended
          </p>
          <div className="line"></div>
        </div>
        <section>
          <div className="selling ">
            <div className="outerBox">
              {" "}
              <div className="leftPart">
                <div className="statements">
                  <h1>Total Seminars Conducted</h1>
                  <p>Through our Oragnization</p>
                  <h1 class="size">20+</h1>
                  <p>Since last 3 months </p>
                </div>
                <div className="countries">
                  <ul>
                    <li>Study Abroad and Exchange Programs</li>
                    <li>Academic and Research Opportunities</li>
                    <li>Career and Professional Growth</li>
                    <li>International Exchange Program Orientations</li>
                    <li> Alumni Seminars on Higher Studies</li>
                    <li> Entrance Exam Preparation</li>
                    <li>Scholarships and Financial Aids</li>
                  </ul>
                </div>
              </div>
              <div className="rightPart">
                <div class="SeminarDes">
                  <h1>Enlightening Seminars</h1>
                </div>
                <img src={exampleImage} alt="" />
                <div class="SeminarDes">
                  <h1>Number of Student Beneficiaries: 100+</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="heroProducts container">
        <div className="perfectMatch">
          <h2>Upcoming Seminars</h2>
          <p>
            Join us to expand your professional horizons through our expert-led
            seminars
          </p>
          <div className="line"></div>
        </div>

        <div className="products">
          {items.map((item) => (
            <SeminarCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Dashboard;
