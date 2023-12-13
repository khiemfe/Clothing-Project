import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./public/css/App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // QueryClientProvider là một component React từ React Query được sử dụng để cung cấp một QueryClient instance cho tất cả các component con của nó
  <QueryClientProvider client={queryClient}>
    {/* Provider store={store} là một component React từ thư viện Redux được sử dụng để cung cấp một Redux store cho tất cả các component con của nó */}
    <Provider store={store}>
      {/* PersistGate trong redux để lưu giá trị vào storage */}
      <PersistGate loading={null} persistor={persistor}> 
        <App />
      </PersistGate>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
