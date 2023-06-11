import { useState } from 'react';
import { KeyLogger } from './KeyLogger';
import { ShortcutList } from './ShortcutList';
import { Printter } from './Printter';
import styles from './App.module.scss';
import { PdfPreview } from './PdfPreview';

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
        <div className={styles.container}>
            <div className={styles.previewContainerContainer}>
                <div className={styles.previewContainer}>
                    <div id="preview" className={styles.previewSection}>
                        <PdfPreview shortcuts={shortcuts} />
                    </div>
                </div>
            </div>
            <div className={styles.editorSection}>
                <ShortcutList
                    shortcuts={shortcuts}
                    onRemoveCallback={onRemove}
                />
                <KeyLogger
                    onSaveCallback={(keys: string[], description: string) => {
                        setShortcuts([...shortcuts, { keys, description }]);
                    }}
                />
                <Printter shortcuts={shortcuts} />
            </div>
        </div>
    );
}

export default App;
