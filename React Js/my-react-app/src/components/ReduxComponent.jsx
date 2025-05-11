
import { createStore } from 'redux';

function ReduxComponent() {
    const counter=(state=0, action)=>{
        switch(action.type){
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    };
    const store = createStore(counter);
    const incrementAction = { type: 'INCREMENT' };
    const decrementAction = { type: 'DECREMENT' };
    

  return (
    <div>
        
        <h1>Redux Component</h1>
    
        <button onClick={() => store.dispatch(incrementAction)}>Increment</button><br />
        <button onClick={() => store.dispatch(decrementAction)}>Decrement</button>
        <h2>Counter: {store.getState()}</h2>
        

    </div>
  );
}
export default ReduxComponent;