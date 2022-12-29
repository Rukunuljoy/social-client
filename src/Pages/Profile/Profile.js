import React from "react";
import "./Profile.css";
import Feed from "../../Components/Feed/Feed";
import NavBar from "../../Components/NavBar/NavBar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="profile">
        <Sidebar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/10 Facebook Cover Photo Size & Design Best Practices-Sep-24-2021-02-25-13-81-PM.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/profile/download (1).jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Jahan Liya</h4>
              <span className="profileInfoDesc">hello my friend</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
