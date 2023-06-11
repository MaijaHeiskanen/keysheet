import { Shortcut as ShortcutType } from './App';
import styles from './PdfPreview.module.scss';
import { Shortcut } from './Shortcut';

type Props = {
    shortcuts: ShortcutType[];
};

export const PdfPreview = ({ shortcuts }: Props) => {
    return (
        <div className={styles.container}>
            <div>Keyboard Shortcuts</div>
            <div id="shortcut-list" className={styles.shortcutsContainer}>
                {shortcuts.map(shortcut => {
                    return (
                        <Shortcut
                            key={shortcut.keys.join('')}
                            shortcut={shortcut}
                        />
                    );
                })}
            </div>
        </div>
    );
};
