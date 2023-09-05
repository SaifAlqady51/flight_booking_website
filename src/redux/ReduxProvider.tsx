"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
	const persistor = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};
