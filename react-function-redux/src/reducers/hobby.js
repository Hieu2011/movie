
const initialState = {
    list: [
        {
            id : '1',
            title : 'Redux Class'
        },
        {
            id: '2',
            title : 'Redux Hooks'
        }
    ],
    selectedId: null,
}
const hobby = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            }
        }
        case 'SET_ACTIVE_HOBBY':{
            const selectedId = action.payload.id;
            return{
                ...state,
                selectedId
            }
        }
        
        default:
            return state;
    }
};
export default hobby;