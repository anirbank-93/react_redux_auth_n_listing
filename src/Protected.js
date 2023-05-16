import { useSelector } from 'react-redux';

export const LoginProtected = () => {
  // Redux data stores
  const { user_details } = useSelector((state) => state.loginSlice);
  // console.log('login store', user_details);

  if (Object.keys(user_details).length > 0) {
    // console.log('Goto game');
    return true;
  } else {
    return false;
  }
};
