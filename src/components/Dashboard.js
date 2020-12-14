import React, { useState,useEffect } from "react";
import Styles from "../components/Dashboard.module.css";
import axios from "axios";


let landPadWiki = "";
let missionWiki = "";
let result = null;
const Dashboard = () => {
  const [missionName, setMissionName] = useState(null);
  const [SpacexData, setSpacexData] = useState(null);
  const [launchTimeDate, setLaunchTime] = useState(null);
  const [launchTimeTime, setLaunchTimeTime] = useState(null);
  const [launchStream, setLaunchStream] = useState(null);
  const [rocketName, setRocketName] = useState(null);
  const [rocketPic, setRocketPic] = useState(null);
  const [landpad, setLandPad] = useState(null);
  const [launchpad, setLaunchPad] = useState(null);

  const getLaunchpadDetails = async (launchpadID) => {
    let launchpadResult = await axios.get(
      `https://api.spacexdata.com/v4/launchpads/${launchpadID}`
    );
    let launchLocation = launchpadResult.data.locality;
    let launchLocationLatitute = launchpadResult.data.latitude;
    let launchLocationLongiitute = launchpadResult.data.longitude;

    setLaunchPad(launchLocation);
  };

  const gotoLaunchPad = () => {
    if (launchpad && launchpad == "Cape Canaveral") {
      window.open(
        "https://www.google.com/maps/place/Cape+Canaveral/@28.6085484,-80.606357"
      );
    }
  };

  const getLandpadDetails = async (landpadID) => {
    console.log("LANDPAD IS", landpadID);
    let landpadResult = await axios.get(
      `https://api.spacexdata.com/v4/landpads/${landpadID}`
    );
    console.log(landpadResult);
    let landpad = landpadResult.data.full_name;
    landPadWiki = landpadResult.data.wikipedia;
    console.log(landPadWiki);
    setLandPad(landpad);
  };

  const gotoLandPad = () => {
    if (landpad) {
      window.open(landPadWiki);
    }
  };
  const getRocketDetails = async (rocketID) => {
    let rocketResult = await axios.get(
      `https://api.spacexdata.com/v4/rockets/${rocketID}`
    );
    console.log(rocketResult);
    let rocketName = rocketResult.data.name;
    let rocketPic = rocketResult.data.flickr_images[0];
    console.log(rocketPic);
    setRocketName(rocketName);
    setRocketPic(rocketPic);
    
        
  };

  const getSpacexData = async () => {
    result = await axios.get(`https://api.spacexdata.com/v4/launches/latest`);
    console.log(typeof result);
    // console.log('RESULT iS:  '+ JSON.stringify(result));
    // result = JSON.stringify(result);
    // result = JSON.parse(result);
    let iterator = result.data;
    let missionName = iterator.name;
        let missiondetails = iterator.details;
        let launchTime = iterator.date_utc;
        let launchTimeDate = launchTime.split('T')[0];
        let launchTimeTime = launchTime.split('T')[1];

        let launchStream = iterator.links.youtube_id;
        let rocketID = iterator.rocket;
        let landpadID = iterator.cores[0].landpad;
        let launchpadID = iterator.launchpad;
        missionWiki = iterator.links.wikipedia;

        getLaunchpadDetails(launchpadID);
        console.log("LANDPAD IS",landpadID);
        if (landpadID != null) {
          getLandpadDetails(landpadID);
        }

        console.log(landpadID);
        getRocketDetails(rocketID);

        console.log(launchStream);
        setMissionName(missionName);
        setSpacexData(missiondetails);
        setLaunchTime(launchTimeDate);
        setLaunchTimeTime(launchTimeTime);
        setLaunchStream(`https://www.youtube.com/embed/${launchStream}`);

       

    // console.log("NEW RESULT "+JSON.stringify(result.data[101].name));
    result = result.data;
    console.log(result);
  };
  const openWikipedia = () => {
    window.open(missionWiki);
  };
useEffect(()=>{
  getSpacexData();
});
  return (
    <div>
      {/* <Button className={Styles.LaunchesButton} onClick={getSpacexData}>
        Call API
      </Button>       */}
          <div className={Styles.dashboard} id="dashboard">

                <div className={Styles.navButtonContainer}>
                  <div className={Styles.mainDiv}>
                    <div className={Styles.div1}>
                      {/* <h1>Div1</h1> */}
                      <div className={Styles.divMissionName}>
                        <p>{missionName}</p>
                      </div>
                      {/* <Button
                        className={Styles.LaunchesButton}
                        onClick={getSpacexData}
                      >
                        Call API
                      </Button> */}
                      <div className={Styles.divLaunchTime}>
                        <h6>{launchTimeDate}</h6>
                        <h6>{launchTimeTime}</h6>
                      </div>
                    </div>
                    <div className={Styles.div2}>{SpacexData}</div>
                    <div className={Styles.div3}>
                      <iframe
                        id="ytplayer"
                        type="text/html"
                        width="100%"
                        height="100%"
                        src={launchStream}
                        frameborder="0"
                      ></iframe>
                    </div>
                    <div className={Styles.div4}>
                      <div className={Styles.div5}>
                        <div className={Styles.div6}>
                          <img className={Styles.image} src={rocketPic}></img>
                          <div className={Styles.overlay}></div>
                          <div className={Styles.rocketName}>{rocketName}</div>
                        </div>
                      </div>
                      <div className={Styles.div7}>
                        <div className={Styles.div8} onClick={gotoLaunchPad}>
                          {launchpad}
                        </div>
                        <div className={Styles.div8} onClick={gotoLandPad}>
                          {landpad}
                        </div>
                      </div>
                    </div>
                    <div className={Styles.WikiDiv} onClick={openWikipedia}>
                      Wikipedia
                    </div>

                  </div>
                </div>


          </div>
    </div>
  );
};

export default Dashboard;
