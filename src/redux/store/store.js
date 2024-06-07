import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuhtReducer from "../slices/AuthSlic";
import HotelReducer from "../slices/HotelSlice";


const persistConfig = {
  key: "tripiphy-customer",
  storage,
};

const rootReducer = combineReducers({
  Auth: AuhtReducer,
  Hotel: HotelReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
