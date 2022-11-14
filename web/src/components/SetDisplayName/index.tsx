import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import SetDisplayNameShared, {SetDisplayNameProps} from 'shared/containers/SetDisplayName';

const SetDisplayName = () => {
  // let history = useHistory();
  const [displayNameState, setDisplayNameState] = useState('');

  return (
    <SetDisplayNameShared
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={({handleSubmit}: SetDisplayNameProps) => {
        const handleSubmitClick = () => {
          handleSubmit(displayNameState);
        };
        return (
          <>
            <label htmlFor="displayName">Add a Display name</label>
            <input
              id="displayName"
              type="text"
              onChange={(e) => setDisplayNameState(e.target.value)}
              value={displayNameState}
            />
            <input type="button" onClick={handleSubmitClick} value="Continue" />
          </>
        );
      }}
    />
  );
};

export default SetDisplayName;
