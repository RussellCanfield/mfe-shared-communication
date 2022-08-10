import React, { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        if (!window.loggingEmitter) return;

        const loggingEmitter = window.loggingEmitter;

        loggingEmitter.emit('logInfo', 'hello from remote');
    }, []);

    return (
        <div>I am remote.</div>
    )
}

export default App;