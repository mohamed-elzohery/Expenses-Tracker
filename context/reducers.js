export const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_EXPENSE':
        action.payload.newExpense.id=Math.random().toString();
        return [...state, action.payload.newExpense];
        
        case 'DELETE_EXPENSE':
        return state.filter(({id}) => id !== action.payload.id);

        case 'UPDATE_EXPENSE':
        return state.map((exp) => {
            if(exp.id === action.payload.id) exp = {...exp, ...action.payload.newExpense};
            return exp;
        });

        default:
            return state;
    }
}