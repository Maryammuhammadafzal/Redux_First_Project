
const iState = {
        count : 0,
};

export const counterReducer = (state = iState , action) => {
   switch(action.type){
        case 'INCREAMENT':
                return { ...state , count : state.count + 1 };
        case "DECREAMENT" :
                return { ...state , count : state.count <= 0 ? state.count : state.count - 1 };
         default :
         return state;
   }
}