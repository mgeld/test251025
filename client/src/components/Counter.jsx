import { useSelector, useDispatch } from 'react-redux'
import { counterSlice } from '../store/counter/counterSlice'

function Counter() {

    const count = useSelector(store => store.counter.value) // читаем значение
    const count = useSelector(store => store.user) // читаем значение

    const dispatch = useDispatch()

    const {increment, decrement, reset} = counterSlice.actions

    console.log('> increment', increment())
    // console.log('> decrement', decrement())
    // console.log('> reset', reset())

    return (
        <div>
            <h1>Счётчик: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>0</button>
        </div>
    )

}
export default Counter