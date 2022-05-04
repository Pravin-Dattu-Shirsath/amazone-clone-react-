export const initialState ={
    basket:[]
};


export  const getbasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0)


function reducer(state,action){
 


    switch(action.type){
        case "ADD_TO_BASKET":
            //LOGIC
            return {...state,basket:[...state.basket,action.item]};
            break;
            case "REMOVE_TO_BASKET":
                //LOGIC remove basket product

                //clone basket
               let newBasket=[...state.basket];
               //we check to see same id found
               const index=state.basket.findIndex(basketItem=>basketItem.id===action.id);
               if(index>=0){
                   // item exist in basket ,remove it ...
                   newBasket.splice(index,1)
               }
               return {...state, basket:newBasket}
                break;
                default:
                    return state;
    }
}
export default reducer;