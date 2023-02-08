import React from 'react';
import { useSelector } from 'react-redux';

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
      <h2>My Missions</h2>
      <ul>
        {reservedMissions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}
      </ul>
      <h2>My Rockets</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default MyProfile;
