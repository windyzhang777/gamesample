import React from 'react';
import AccountInfoSectionShared, {
  AccountInfoSectionProps,
} from 'shared/containers/AccountInfoSection';
import classes from './AccountInfoSection.module.css';

/**
 * This is a web version of rendering
 * @param {AccountInfoSectionProps} props
 */

export default function AccountInfoSection(props: AccountInfoSectionProps) {
  return (
    <AccountInfoSectionShared
      {...props}
      renderComponent={({profileImageSource, username}: AccountInfoSectionProps) => {
        return (
          <div className={classes.AccountInfoSection}>
            <div className={classes.ProfileImage}>
              <img
                style={{
                  objectFit: 'cover',
                  height: '70px',
                  marginRight: '10px',
                }}
                src={profileImageSource}
                alt="demoProfileImage"
              />
            </div>
            <div className={classes.Username}>{username}</div>
          </div>
        );
      }}
    />
  );
}
