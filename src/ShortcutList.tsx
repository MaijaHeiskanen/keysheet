import { Shortcut } from './App';

type Props = {
    shortcuts: Shortcut[];
};

export const ShortcutList = ({ shortcuts }: Props) => {
    return (
        <div>
            {shortcuts.map(shortcut => {
                const keyText = shortcut.keys
                    .map(key => key.toUpperCase())
                    .join(' + ');
                return (
                    <div key={keyText}>
                        <div>{keyText}</div>
                        <div>{shortcut.description}</div>
                    </div>
                );
            })}
        </div>
    );
};
