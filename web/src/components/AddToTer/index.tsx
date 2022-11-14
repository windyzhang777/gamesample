import React from 'react';
import AddToterShared, {AddToterProps, AddToterRenderProps} from 'shared/containers/AddToter';
import classes from './AddToTer.module.css';

/**
 * This is a web version of rendering
 * @param {AddToterProps} props
 */
export default function AddToTer(props: AddToterProps) {
  //This is just passing down the properties
  return (
    <AddToterShared
      {...props}
      renderComponent={({
        username,
        changeToterNameCallback,
        addToterCallback,
      }: AddToterRenderProps) => {
        return (
          <div className={classes.AddToTer}>
            <label>
              Trick or Treater Name
              <input
                autoFocus
                type="text"
                name="name"
                value={username}
                onChange={(e) => {
                  changeToterNameCallback(e.target.value);
                }}
              />
            </label>
            <button
              onClick={() => {
                console.log(username);
                addToterCallback(username);
              }}>
              Add a new ToTer
            </button>
          </div>
        );
      }}
    />
  );
}
