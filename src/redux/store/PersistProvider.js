"use client";

import React from "react";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default function PersistProvider({ children }) {
  return <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>;
}
