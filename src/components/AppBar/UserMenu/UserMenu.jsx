import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import {
  UserMenuStyled,
  UserMenuSpan,
  LogOutButton,
  IconButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const allowedEmoji = [...'πππ€ͺπ€π€―π΄π©π»π½π€πΎππβοΈπ€π€π€ππ­π¦π¦π'];

  return (
    <UserMenuStyled>
      <UserMenuSpan>
        Welcome, {name}{' '}
        <span role="img" aria-label="hello">
          {[...allowedEmoji][Math.floor(Math.random() * allowedEmoji.length)]}
        </span>
      </UserMenuSpan>
      <LogOutButton
        type="button"
        onClick={() => {
          dispatch(authOperations.logout());
        }}
      >
        Log out
        <IconButton />
      </LogOutButton>
    </UserMenuStyled>
  );
};
