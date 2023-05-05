import React from 'react';
import Router from "./router";

// @ts-ignore
const Button = React.lazy(() => import('SharedUI/Button'));

const App = () => {
    return (
        <>
            <React.Suspense fallback={'Loading...'}>
                <Button/>
            </React.Suspense>
            <Router/>
        </>
    );
};

export default App;