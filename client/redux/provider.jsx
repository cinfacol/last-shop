"use client";

import { Provider } from "react-redux";
import { store } from "./store";

const preloadedState = window.__PRELOADED_STATE__

export function Providers({ children }) {
  return <Provider store={store} serverState={preloadedState}>{children}</Provider>
}