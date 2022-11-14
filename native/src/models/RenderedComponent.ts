import React from 'react';

export interface RenderedComponent<T> {
  renderComponent: (props: T) => React.ReactElement;
}
