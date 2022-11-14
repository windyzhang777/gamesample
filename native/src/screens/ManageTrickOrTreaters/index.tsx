import {RenderedComponent} from 'src/models/RenderedComponent';
import {ToterState} from 'src/store/trick-or-treat/types';
import {getPlayFabToTers} from 'src/store/trick-or-treat/actions';
import React, {useEffect} from 'react';
import ManageTrickOrTreaters from '../../components/ManageTrickOrTreaters';
import {useDispatch, useSelector} from 'react-redux';

export interface ManageTrickOrTreatersProps {
  useSelector: any;
  useDispatch?: any;
  useEffect?: any;
}

export interface ManageTrickOrTreatersRenderProps {
  toterList: ToterState;
}

function ManageTrickOrTreatersScreen() {
  const dispatch = useDispatch();

  const loadPlayFabToTers = () => {
    getPlayFabToTers({}, dispatch);
  };

  useEffect(() => {
    loadPlayFabToTers();
  }, []);

  const toterList = useSelector((state: any) => state.toterList);

  return <ManageTrickOrTreaters toterList={toterList} />;
}

export default ManageTrickOrTreatersScreen;
