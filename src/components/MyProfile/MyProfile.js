import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const rockets = useSelector((state) => state.rockets);
  const reservedMissions = Array.isArray(missions)
    ? missions.filter((mission) => mission.reserved)
    : [];
  const reservedRockets = Array.isArray(rockets)
    ? rockets.filter((rocket) => rocket.reserved)
    : [];
  return (
    <div className="myprofile">
      <div className="myprofile__missions">
        <h2 className="profile_title">My Missions</h2>
        <ul className="profile_item">
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id} className="profile_list">
              {mission.mission_name}
              {' '}
            </li>
          ))}
        </ul>
      </div>
      <div className="myprofile__rockets">
        <h2 className="profile_title">My Rockets</h2>
        <ul className="profile_item">
          {reservedRockets.map((rocket) => (
            <li key={rocket.id} className="profile_list">
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;
