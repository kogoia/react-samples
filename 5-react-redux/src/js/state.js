class State {
    constructor(initialState) {
        this._initialState = initialState;
    }

    loadState() {
        if (this._initialState)
            return this._initialState;
            
        try {
            const serializedState = localStorage.getItem('state');
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        }
        catch (error) {
            console.log(error);
        }
    }

    saveState(state) {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('state', serializedState);
        } catch (error) {
            console.log(error);
        }
    }
}

export default State