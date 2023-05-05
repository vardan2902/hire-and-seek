import React from 'react';

// @ts-ignore
const Button = React.lazy(() => import('SharedUI/ui-button'));

const App = () => {
    return (
        <div className={'container'}>
            Hello Hire And Seek
            <React.Suspense fallback={'Loading Button...'}>
                <Button/>
            </React.Suspense>
        </div>
    );
};

export default App;