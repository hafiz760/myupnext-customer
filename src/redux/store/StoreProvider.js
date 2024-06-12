"use client";

import React from "react";
import { Provider } from "react-redux";
import PersistProvider from "./PersistProvider";
import { store } from "./store";

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistProvider>{children}</PersistProvider>
    </Provider>
  );
};
