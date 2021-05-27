import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "Routes/Routes";
//Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "Store/store";
//Component

const { PUBLIC_URL } = process.env;

function App() {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate
        persistor={persistor}
        loading={<>loading persist gate ...</>}
      >
        {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
        <Suspense fallback={<>loading react suspense fallback ...</>}>
          {/* Override `basename` (e.g: `homepage` in `package.json`) */}
          <BrowserRouter basename={PUBLIC_URL}>
            {/* Render routes with provided `Layout`. */}
            <Routes />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
