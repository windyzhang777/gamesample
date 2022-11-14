import React from 'react';
import {GeoLocation, usePosition} from './UsePosition';
import {shallow} from 'enzyme';
import mockGeo from 'mock-geolocation';

interface PositionSettings {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}
interface DemoProps {
  overrideUsePositionWatch?: boolean;
  overrideUsePositionSettings?: PositionSettings;
}

const Demo = ({overrideUsePositionWatch, overrideUsePositionSettings}: DemoProps) => {
  const {longitude, latitude, accuracy, error, timestamp}: GeoLocation = usePosition(
    overrideUsePositionWatch,
    overrideUsePositionSettings,
  );
  return (
    <div>
      <span id="longitude">{longitude}</span>
      <span id="latitude">{latitude}</span>
      <span id="accuracy">{accuracy}</span>
      <span id="error">{error}</span>
      <span id="timestamp">{timestamp}</span>
    </div>
  );
};

/**
 * Normally I would not prefer to use a Demo w/ Snapshot approach, however we need to ensure that this
 * hook works within the context of a component and because it uses useEffect and useState within the
 * custom hook we need to wrap it in a component to see those work correctly
 */
describe('usePosition', () => {
  let useEffect;
  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementationOnce((f: () => void | (() => void | undefined)) => {
      f();
    });
    mockGeo.use();
  });

  afterEach(() => {
    mockGeo.restore();
  });

  it('should return empty values by default', () => {
    const wrapperForEffect = shallow(<Demo />);
    expect(wrapperForEffect.find('#longitude').text()).toEqual('');
    expect(wrapperForEffect.find('#latitude').text()).toEqual('');
    expect(wrapperForEffect.find('#accuracy').text()).toEqual('');
    expect(wrapperForEffect.find('#error').text()).toEqual('');
    expect(wrapperForEffect.find('#timestamp').text()).toEqual('');
  });

  it('should use currentLocation', () => {
    const wrapperForEffect = shallow(<Demo />);
    mockGeo.send({
      latitude: 50,
      longitude: 10,
      accuracy: 5,
      timestamp: 3000,
    });
    expect(wrapperForEffect.find('#longitude').text()).toEqual('10');
    expect(wrapperForEffect.find('#latitude').text()).toEqual('50');
    expect(wrapperForEffect.find('#accuracy').text()).toEqual('5');
    expect(wrapperForEffect.find('#error').text()).toEqual('');
    expect(wrapperForEffect.find('#timestamp').text()).toEqual('3000');
  });

  it('should keep up with currentLocation', () => {
    const wrapperForEffect = shallow(<Demo />);
    mockGeo.send({
      latitude: 50,
      longitude: 10,
      accuracy: 5,
      timestamp: 3000,
    });
    mockGeo.change({
      latitude: 72,
      longitude: 42,
      accuracy: 5,
      timestamp: 4000,
    });
    expect(wrapperForEffect.find('#longitude').text()).toEqual('42');
    expect(wrapperForEffect.find('#latitude').text()).toEqual('72');
    expect(wrapperForEffect.find('#accuracy').text()).toEqual('5');
    expect(wrapperForEffect.find('#error').text()).toEqual('');
    expect(wrapperForEffect.find('#timestamp').text()).toEqual('4000');
  });

  it('should allow one time get of location', () => {
    const wrapperForEffect = shallow(<Demo overrideUsePositionWatch={false} />);
    mockGeo.send({
      latitude: 50,
      longitude: 10,
      accuracy: 5,
      timestamp: 3000,
    });
    mockGeo.change({
      latitude: 72,
      longitude: 42,
      accuracy: 5,
      timestamp: 3000,
    });
    expect(wrapperForEffect.find('#longitude').text()).toEqual('10');
    expect(wrapperForEffect.find('#latitude').text()).toEqual('50');
    expect(wrapperForEffect.find('#accuracy').text()).toEqual('5');
    expect(wrapperForEffect.find('#error').text()).toEqual('');
    expect(wrapperForEffect.find('#timestamp').text()).toEqual('3000');
  });
});
