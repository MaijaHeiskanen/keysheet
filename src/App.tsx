import { useState } from 'react';
import { KeyLogger } from './KeyLogger';
import { ShortcutList } from './ShortcutList';
import { Printter } from './Printter';

export type Shortcut = {
    keys: string[];
    description: string;
};

function App() {
    const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

    const onRemove = (index: number) => {
        setShortcuts(shortcuts.filter((_, i) => i !== index));
    };

    return (
        <div>
            <ShortcutList shortcuts={shortcuts} onRemoveCallback={onRemove} />
            <KeyLogger
                onSaveCallback={(keys: string[], description: string) => {
                    setShortcuts([...shortcuts, { keys, description }]);
                }}
            />
            <Printter shortcuts={shortcuts} />
        </div>
    );
}

export default App;
