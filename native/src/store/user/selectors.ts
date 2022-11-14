import {get} from 'src/utils/object';

// Keys - used to search up the path in the reducer slice like door.something
const contentKey = 'user';
const sessionTicketKey = 'sessionTicket';

// Selectors
export const userDataSelector = (state) => get(state, `${contentKey}`, {});

export const userSessionTicketSelector = (state) =>
  get(state, `${contentKey}.${sessionTicketKey}`, '');
