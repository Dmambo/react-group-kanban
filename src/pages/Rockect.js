import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserve } from '../redux/rocket';
import '../styles/Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchRockets({ method: 'GET' }));
  // }, [dispatch]);

  const reserves = (reservess) => {
    if (reservess) return <span className="reserved">Reserved</span>;
    return null;
  };
  return (
    <section className="rockets">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket">
          <div className="rocket-img">
            <img src={rocket.image} alt={rocket.name} />
          </div>

          <div className="rocket-info">
            <h2 className="rocket_name">{rocket.name}</h2>
            <p className="rocket_desc">
              {reserves(rocket.reserved)}
              {' '}
              {rocket.description}
            </p>
            <button
              className={`${rocket.reserved ? 'cancel' : 'reserve'}`}
              onClick={() => {
                dispatch(reserve(rocket.id));
              }}
              type="button"
            >
              {`${rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}`}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
