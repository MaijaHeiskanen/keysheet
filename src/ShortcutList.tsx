import { Shortcut } from './App';

type Props = {
    shortcuts: Shortcut[];
    onRemoveCallback: (index: number) => void;
};

export const ShortcutList = ({ shortcuts, onRemoveCallback }: Props) => {
    return (
        <div>
            {shortcuts.map((shortcut, index) => {
                const keyText = shortcut.keys
                    .map(key => key.toUpperCase())
                    .join(' + ');
                return (
                    <div key={keyText}>
                        <div>{keyText}</div>
                        <div>{shortcut.description}</div>
                        <button onClick={() => onRemoveCallback(index)}>
                            Remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
