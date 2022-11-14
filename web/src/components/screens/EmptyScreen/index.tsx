import React from 'react';
import EmptyScreenShared, {EmptyScreenProps} from 'shared/containers/screens/EmptyScreen';

export default function EmptyScreen(props: EmptyScreenProps) {
  return (
    <EmptyScreenShared
      {...props}
      renderComponent={({emptyScreenName}: EmptyScreenProps) => {
        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div style={{color: '#fff'}}>
              This is an empty Screen {emptyScreenName ? <>for {emptyScreenName}</> : <></>}
            </div>
          </div>
        );
      }}
    />
  );
}
