import "../ProfilePage/ProfilePage.css";
import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { RxRulerHorizontal } from "react-icons/rx";

function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [fullName, setFullName] = useState("Full Name");
  const [phoneNumber, setPhoneNumber] = useState("Phone Number");
  const [age, setAge] = useState("Age");

  const [editModeMeasures, setEditModeMeasures] = useState(false);
  const [neckline, setNeckline] = useState("0");
  const [chest, setChest] = useState("0");
  const [arms, setArms] = useState("0");
  const [bust, setBust] = useState("0");
  const [waist, setWaist] = useState("0");
  const [hips, setHips] = useState("0");

  useEffect(() => {
    // Load user data from localStorage if available
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setFullName(userData.fullName);
      setPhoneNumber(userData.phoneNumber);
      setAge(userData.age);
    }
  }, []);

  useEffect(() => {
    // Load measurements data from localStorage if available
    const measuresData = JSON.parse(localStorage.getItem("measuresData"));
    if (measuresData) {
      setNeckline(measuresData.neckline);
      setChest(measuresData.chest);
      setArms(measuresData.arms);
      setBust(measuresData.bust);
      setWaist(measuresData.waist);
      setHips(measuresData.hips);
    }
  }, []);

  const handleEditMeasures = () => {
    setEditModeMeasures(true);
  };

  const handleSaveMeasures = () => {
    setEditModeMeasures(false);

    // Save measurements data to localStorage
    const measuresData = { neckline, chest, arms, bust, waist, hips };
    localStorage.setItem("measuresData", JSON.stringify(measuresData));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    const userData = { fullName, phoneNumber, age };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div className="profilepage-container">
      <div className="profilepage-left">
        <div className="profilepage-left-top-div">
          <div className="flip-card1">
            <div className="flip-card-inner1">
              <div className="flip-card-front1">
                <p className="title1">Profile Details</p>
              </div>
              <div className="flip-card-back1">
                <h1 className="profilepage-myprofile-title">My Details</h1>

                <div className="profilepage-details-both-div">
                  <div className="profilepage-details-left-div">

                <div className="profilepage-detail-line">
                  <div className="profilepage-details-icon">
                    <AiOutlineUser />
                  </div>
                  {editMode ? (
                    <input
                      onChange={(e) => setFullName(e.target.value)}
                      className="profilepage-details-inputs"
                      defaultValue={fullName}
                      maxLength={18}
                    />
                  ) : (
                    <div className="profilepage-details-inputs">{fullName}</div>
                  )}
                </div>

                <div className="profilepage-detail-line">
                  <div className="profilepage-details-icon">
                    <AiOutlineMail />
                  </div>{" "}
                  <div className="profilepage-details-inputs">Email</div>
                </div>

                <div className="profilepage-detail-line">
                  <div className="profilepage-details-icon">
                    <AiOutlinePhone />
                  </div>
                  {editMode ? (
                    <input

                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="profilepage-details-inputs"
                      defaultValue={phoneNumber}
                      maxLength={11}
                    />
                  ) : (
                    <div className="profilepage-details-inputs">
                      {phoneNumber}
                    </div>
                  )}
                </div>

                </div>

                <div className="profilepage-details-right-div">

                <div className="profilepage-detail-line-second">
                  <div className="profilepage-details-icon-second">G</div>
                  <div className="profilepage-details-inputs">Gender</div>
                </div>

                <div className="profilepage-detail-line-second">
                  <div className="profilepage-details-icon-second">A</div>
                  {editMode ? (
                    <input

                      onChange={(e) => setAge(e.target.value)}
                      className="profilepage-details-inputs"
                      defaultValue={age}
                      maxLength={2}
                    />
                  ) : (
                    <div className="profilepage-details-inputs">{age}</div>
                  )}
                </div>
                </div>
                </div>

                {editMode ? (
                  <button
                    className="profilepage-detail-edit-btn"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="profilepage-detail-edit-btn"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="profilepage-left-bot-div">
          <div className="flip-card2">
            <div className="flip-card-inner2">
              <div className="flip-card-front2">
                <p className="title2">Subusers</p>
              </div>
              <div className="flip-card-back2">
                <h1 className="profilepage-myprofile-title">Subusers</h1>
                <h2 className="profilepage-subusers-line">
                  <span className="profilepage-subusers-icons">
                    <AiOutlineUser />
                  </span>
                  Wife
                </h2>
                <h2 className="profilepage-subusers-line">
                  <span className="profilepage-subusers-icons">
                    <AiOutlineUser />
                  </span>{" "}
                  Boy
                </h2>
                <h2 className="profilepage-subusers-line">
                  <span className="profilepage-subusers-icons">
                    <AiOutlineUser />
                  </span>
                  Girl
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilepage-right">
        <div className="profilepage-right-top-div">
          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
                <p className="title3">My Measures</p>
              </div>
              <div className="flip-card-back3">
                <h1 className="profilepage-mymeasures-title">My Measures</h1>
                <div className="profilepage-measure-left-right">
                  <div className="profilepage-measure-left">
                    <div className="profilepage-data">
                      <div className="profilepage-measure-part">Neckline</div>
                      {editModeMeasures ? (
                        <input 
                        onChange={(e) => setNeckline(e.target.value)}
                        className="profilepage-measures-input"
                        type="text"
                        maxLength={5}
                        defaultValue={neckline}
                        />
                      ) : (
                        <div className="profilepage-measures-input">
                          {neckline}
                        </div>
                      )}
                      <div className="profilepage-icons">
                        <RxRulerHorizontal />
                      </div>
                    </div>
                    <div className="profilepage-data">
                      <div className="profilepage-measure-part">Chest</div>
                      {editModeMeasures ? (
                        <input
                          onChange={(e) => setChest(e.target.value)}
                          className="profilepage-measures-input"
                          defaultValue={chest}
                          maxLength={5}
                        />
                      ) : (
                        <div className="profilepage-measures-input">
                          {chest}
                        </div>
                      )}
                      <div className="profilepage-icons">
                        <RxRulerHorizontal />
                      </div>
                    </div>
                    <div className="profilepage-data">
                      <div className="profilepage-measure-part">Arms</div>
                      {editModeMeasures ? (
                        <input
                          onChange={(e) => setArms(e.target.value)}
                          className="profilepage-measures-input"
                          defaultValue={arms}
                          maxLength={5}
                        />
                      ) : (
                        <div className="profilepage-measures-input">{arms}</div>
                      )}
                      <div className="profilepage-icons">
                        <RxRulerHorizontal />
                      </div>
                    </div>
                  </div>
                  <div className="profilepage-measure-right">
                    <div className="profilepage-data">
                      <div className="profilepage-measure-part">Bust</div>
                      {editModeMeasures ? (
                        <input
                          onChange={(e) => setBust(e.target.value)}
                          className="profilepage-measures-input"
                          defaultValue={bust}
                          maxLength={5}
                        />
                      ) : (
                        <div className="profilepage-measures-input">{bust}</div>
                      )}
                      <div className="profilepage-icons">
                        <RxRulerHorizontal />
                      </div>
                    </div>
                    <div className="profilepage-data">
                      <div className="profilepage-measure-part">Waist</div>
                      {editModeMeasures ? (
                        <input
                          onChange={(e) => setWaist(e.target.value)}
                          className="profilepage-measures-input"
                          defaultValue={waist}
                          maxLength={5}
                        />
                      ) : (
                        <div className="profilepage-measures-input">
                          {waist}
                        </div>
                      )}
                      <div className="profilepage-icons">
                        <RxRulerHorizontal />
                      </div>
                    </div>
                    <div className="profilepage-data">
                      <div className="profilepage-measure-part">Hips</div>
                      {editModeMeasures ? (
                        <input
                          onChange={(e) => setHips(e.target.value)}
                          className="profilepage-measures-input"
                          defaultValue={hips}
                          maxLength={5}
                        />
                      ) : (
                        <div className="profilepage-measures-input">{hips}</div>
                      )}
                      <div className="profilepage-icons">
                        <RxRulerHorizontal />
                      </div>
                    </div>
                  </div>
                </div>
                {editModeMeasures ? (
                  <button
                    className="profilepage-detail-edit-btn"
                    onClick={handleSaveMeasures}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="profilepage-detail-edit-btn"
                    onClick={handleEditMeasures}
                  >
                    Edit 
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="profilepage-right-both-div">
          <div className="flip-card4">
            <div className="flip-card-inner4">
              <div className="flip-card-front4">
                <p className="title4">Fav Brands</p>
              </div>
              <div className="flip-card-back4">
                <p className="title4">BACK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
