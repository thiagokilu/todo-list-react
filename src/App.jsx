import { BrowserRouter } from "react-router-dom";
import { Router } from './router';
import {AppContextProvider} from "./contexts";

function App() {
	return (
		<AppContextProvider>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</AppContextProvider>
	);
}

export { App };
