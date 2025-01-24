// Store configuration
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slicers/counterSlicer"; // Ensure the correct file path is used

// Correct store definition
const store = configureStore({
    reducer: {
        counter: counterReducer // Add your slice reducer under a key
    }
});

// Export the store
export default store;
