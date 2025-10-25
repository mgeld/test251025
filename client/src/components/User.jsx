import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from '../store/user/userSlice';


function User() {

    const user = useSelector(state => state.user) // читаем всю полку user

    const dispatch = useDispatch()

    const { login, logout } = userSlice.actions

    return (
        <div>
            <h2>{user.loggedIn ? `Привет, ${user.name}` : 'Гость'}</h2>
            <button onClick={() => dispatch(login(result.data))}>
                Войти
            </button>
            <button onClick={() => dispatch(logout())}>
                Выйти
            </button>
        </div>
    )
}
export default User