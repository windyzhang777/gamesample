import {useDispatch} from 'react-redux';
import React from 'react';
import ToterShared, {ToterProps} from 'shared/containers/Toter';

const renderCandy = (cachedImages: any, candy: any) => {
  const items = [];

  // for (let step = 0; step < candy.count; step++) {
  //   items.push(
  //     <img src={cachedImages[`${candy.id}.jpg`]} alt={candy.id} key={`${candy.id}-${step}`} />,
  //   );
  // }

  items.push(
    <span>
      {candy.id}: {candy.count}
    </span>,
  );

  return items;
};

const ToTer = (props: ToterProps) => {
  return (
    <ToterShared
      {...props}
      useDispatch={useDispatch}
      renderComponent={({
        chooseTrick,
        chooseTreat,
        cachedImages,
        candies,
        name,
        id,
      }: ToterProps) => {
        return (
          <div>
            Candy In {name}'s Pillowcase
            {candies &&
              candies.map((candy: any) => (
                <div key={candy.id}>{renderCandy(cachedImages, candy)}</div>
              ))}
            <button onClick={() => chooseTrick()}>Trick</button>
            or
            <button onClick={() => chooseTreat(id)}>Treat</button>
          </div>
        );
      }}
    />
  );
};

export default ToTer;
