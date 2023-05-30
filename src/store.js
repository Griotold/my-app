// 액션
export const increase = () => ({ type: 'INCREMENT' });
export const decrease = () => ({ type: 'DECREMENT' });

// 상태
const initstate = {
    number: 1,
};

// 액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { number: state.number + 1 };
        case 'DECREMENT':
            return { number: state.number - 1 };
        default:
            return state;
    }
};

export default reducer;
