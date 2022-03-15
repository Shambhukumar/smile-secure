import React from "react";
import "./inpain.scss";
import InPainImg from "../Assets/Image/InPain.jpg";
import FloatMenu from "../FloatMenu/FloatMenu";
const InPain = () => {
  return (
    <div className="inpain">
      <div className="inpain-head">
        <span className="inpain-head-text">
          SMILE <br /> SECURE
        </span>
        <span className="inpain-head-appointment">For appointment</span>
      </div>
      <div className="inpain-body">
        <span>Hi, Samir</span>
        <span>Suffering from any of these dental woes?</span>
        <div className="inpain-body-list">
          <ul>
            <li>
              Sharp, shooting pain: Tooth decay, cavity, or fractured teeth
              likely the issue
            </li>
            <li>
              Teeth periodic pain: Discomfort while eating or applying pressure
              onto affected teeth
            </li>
            <li>
              Sensitivity: Brushing, eating or drinking sends sharp, temporary
              pain to you teeth
            </li>
            <li>
              Sore or swollen gums: infection either arising from a broken tooth
              or injury
            </li>
          </ul>
        </div>
        <div>
          <img src={InPainImg} alt="inPain" />
        </div>

        <span>
          Your oral health needs the immediate attention of a dental specialist,
          Find the right dental solution with Secure by scrolling down and
          selecting the affected tooth.
        </span>
      </div>
      <FloatMenu />
    </div>
  );
};

export default InPain;
