import { logout } from './auth';
import history from '../utils/history';

export function quit() {
  return (dispatch) => {
    dispatch(logout());
    localStorage.removeItem('token');
    history.push('/');
  }
}