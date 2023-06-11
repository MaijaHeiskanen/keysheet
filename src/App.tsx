import { useState } from 'react';
import { KeyLogger } from './KeyLogger';
import { ShortcutList } from './ShortcutList';

export type Shortcut = {
    keys: string[];
    description: string;
};

function App() {
    const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

    return (
        <div>
            <ShortcutList shortcuts={shortcuts} />
            <KeyLogger
                onSaveCallback={(keys: string[], description: string) => {
                    setShortcuts([...shortcuts, { keys, description }]);
                }}
            />
        </div>
    );
}

export default App;
