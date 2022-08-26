import React from 'react';
import { useSelector } from 'react-redux';
import RocketProfile from '../rockets/RocketProfile';
import MissionProfile from '../missions/MissionProfile';

const Profile = () => {
  const rocketList = useSelector((state) => state.rocketReducer);
  const profileRocket = rocketList.filter(
    (rocket) => rocket.reservation === true,
  );

  const missionList = useSelector((state) => state.mission);
  const profileMission = missionList.filter(
    (mission) => mission.reserved === true,
  );

  return (
    <>
      <main>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>My Rocket Reservations</th>
              </tr>
            </thead>
            <tbody>
              {profileRocket.length ? (
                profileRocket.map((item) => (
                  <RocketProfile key={item.id} id={item.id} name={item.name} />
                ))
              ) : (
                <tr className="empty">
                  <td>No Rockets have been reserved</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>My Mission Reservations</th>
              </tr>
            </thead>
            <tbody>
              {profileMission.length ? (
                profileMission.map((mission) => (
                  <MissionProfile key={mission.id} id={mission.id} name={mission.name} />
                ))
              ) : (
                <tr className="empty">
                  <td>No Rockets have been reserved</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Profile;
