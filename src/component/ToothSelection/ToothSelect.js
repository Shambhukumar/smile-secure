import React, { useContext, useEffect, useState } from "react";
import "./toothselect.scss";

import SelectedToothImg1 from "../Assets/Image/selectTooth1.jpg";
import SelectedToothImg2 from "../Assets/Image/selectTooth.jpg";
import SelectedToothContext from "../Context/SelectedToothContext";
import FloatMenu from "../FloatMenu/FloatMenu";
import { NavLink } from "react-router-dom";

const ToothSelect = () => {
    const {selectedTeath,teathPositionInfo} = useContext(SelectedToothContext);
    console.log(selectedTeath)

    
    const [typeTeath, setTypeTeath] = useState({});

    useEffect(()=>{
     findselectTeath()
    },[])

    const findselectTeath = ()=>{
      const type = {
        molar:false,
        premolar: false,
        incisor: false,
        canine: false
  
      }
      Object.entries(teathPositionInfo).forEach(([key,value],el)=>{
        if(value && key !== "upper" && key !== "lower" && key !== "right"&& key !== "left"){
          type[key.substring(2)] = true
        }
    })
    // console.log(type)
    setTypeTeath(type)
    }
  return (
    <div className="tootheselect">
        <div className="tootheselect-head">
            <span className="tootheselect-head-text">SMILE <br/> SECURE</span><span className="tootheselect-head-appointment">For appointment</span>
        </div>
        <div className="tootheselect-selected">
         <span className="tootheselect-selected-bold">Tooth selected is/are</span> 
         <span className={typeTeath.incisor ? "tootheselect-selected-select" : "tootheselect-selected-notselect" }>Incisor</span>
         <span className={typeTeath.canine ? "tootheselect-selected-select" : "tootheselect-selected-notselect" }>Canine</span>
         <span className={typeTeath.molar ? "tootheselect-selected-select" : "tootheselect-selected-notselect" }>Molar</span>
         <span className={typeTeath.premolar ? "tootheselect-selected-select" : "tootheselect-selected-notselect" }>PreMolar</span>
       <span ><NavLink to="/dentalmap" className="tootheselect-selected-again">SELECT AGAIN</NavLink></span> 
        </div>
      <div className="toothselect-info">

        {Object.entries(typeTeath).map(([key,value])=>{
          if(value){
            return (<div className="tootheselect-info-head">
            <span className="tootheselect-info-head-text-big">{key}</span>
            <span className="tootheselect-info-head-text-small">
            {Object.values(selectedTeath).map((e)=>{
                if(e.mod.substring(2) === key ){
                  return  <span>{"#"+e.number}</span>

                }
            })}
            </span>
          </div>)
          }
         
        })}
        
        <div className="tootheselect-body">
          <span>
            Basically, the four teeth in the front of the lower & upper jaw that
            you use to cut food, Now let's work together to narrow down your
            problem And to do that, we have to find the cause.
          </span>
          <img src={SelectedToothImg1} alt="tooth info" />
          <span  className="tootheselect-body-bigbold">Here's a list of probable reasons for you broken incisor</span>

          <div className="tootheselect-body-container">
            <ol>
              <li> Blunt Trauma (well, you can trip anywhare, it's ok)</li>
              <li>
                {" "}
                Improper Oral Hygiene (there's a reason to brush twice a day)
              </li>
              <li>Cavity (All the more reason to brush twice a day)</li>
              <li> Blunt Trauma (well, you can trip anywhare, it's ok)</li>
              <li>
                {" "}
                Improper Oral Hygiene (there's a reason to brush twice a day)
              </li>
              <li>Cavity (All the more reason to brush twice a day)</li>
            </ol>
          </div>
          <span  className="tootheselect-body-bold">Our case with similar problem</span>
          <span>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo...
            </span>
            <img src={SelectedToothImg2} alt="selected tooth" />

            <div className="tootheselect-body-btn">   
            <button>Know Solution</button>
            </div>
           
        </div>
      </div>
      <FloatMenu/>
    </div>
  );
};

export default ToothSelect;
