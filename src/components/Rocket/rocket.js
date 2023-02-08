import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Rocket = ({
  rocketName, image, id, description,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rockets">
      <div className="rocket--img">
        <img src={image} alt={rocketName} />
      </div>
      <div className="rocket--info">
        <h2>{rocketName}</h2>
        <p>{description}</p>
        <button
          type="button"
          onClick={() => dispatch({ type: 'RESERVE_ROCKET', payload: { id, rocketName } })}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

// Added the following line to indicate the types for the Rocket component
Rocket.propTypes = {
  rocketName: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Rocket;
