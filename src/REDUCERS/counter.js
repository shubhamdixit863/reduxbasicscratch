
// WHAT ARE REDUCERS --->     ACTIONS (PERFORM SOME JOB)( THESE ACTIONS MODIFY THE REDUX STATE )-->  REDUCERS --->  STATE -->
// WE NEED A SEGMENT WHERE THAT STATE MANIPULATION HAPPENES 
// REDUCERS ARE SEGMENT THAT MODIFY THE STATE OF REDUX    ---->the segment where we write the logic for state manipulatiion


const CounterReducer=(state,action)=>{

    switch (action.type) {
        case "INCREMENT":

            return state+1;
            
    case "DECREMENT":
         return state-1;
            
         
        default:
           return 0;
    }


}

export default CounterReducer;