import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface RunBillingState {
    isLoading: boolean;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.


// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: RunBillingState = { isLoading: false };

export const reducer: Reducer<RunBillingState> = (state: RunBillingState | undefined, incomingAction: Action): RunBillingState => {
    if (state === undefined) {
        return unloadedState;
    }

    //const action = incomingAction as KnownAction;
    //switch (action.type) {
    //    case 'REQUEST_WEATHER_FORECASTS':
    //        return {
    //            startDateIndex: action.startDateIndex,
    //            forecasts: state.forecasts,
    //            isLoading: true
    //        };
    //    case 'RECEIVE_WEATHER_FORECASTS':
    //        // Only accept the incoming data if it matches the most recent request. This ensures we correctly
    //        // handle out-of-order responses.
    //        if (action.startDateIndex === state.startDateIndex) {
    //            return {
    //                startDateIndex: action.startDateIndex,
    //                forecasts: action.forecasts,
    //                isLoading: false
    //            };
    //        }
    //        break;
    //}

    return state;
};
