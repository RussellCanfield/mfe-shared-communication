import React from 'react';

import { LoggingProvider } from '../context/loggingProvider';

const RemoteApp = React.lazy(() => import('app1/App'));

const App = () => {
    return (
        <LoggingProvider>
            <div>I am host.</div>
            <React.Suspense fallback="Loading Remote">
                <RemoteApp />
            </React.Suspense>
        </LoggingProvider>
    )
}

export default App;