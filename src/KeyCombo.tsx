import { useState, KeyboardEvent, forwardRef, Dispatch } from 'react';

type Props = {
    keys: string[];
    setKeys: Dispatch<React.SetStateAction<string[]>>;
    onKeyComboCallback: (keys: string[]) => void;
};

const readKey = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const key = event.key;

    switch (key) {
        case ' ':
            return 'Space';
        case 'Escape':
            return 'Esc';
        case 'ControlLeft':
        case 'ControlRight':
        case 'Control':
            return 'Ctrl';
        case 'AltLeft':
        case 'AltRight':
        case 'Alt':
            return 'Alt';
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'Shift':
            return 'Shift';
        case 'MetaLeft':
        case 'MetaRight':
        case 'Meta':
            return 'Meta';
    }

    return key.toUpperCase();
};

export const KeyCombo = forwardRef<HTMLInputElement, Props>(
    ({ keys, setKeys, onKeyComboCallback }, ref) => {
        const [pressedKeys, setPressedKeys] = useState<string[]>([]);

        const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            event.preventDefault();

            const key = readKey(event);
            setKeys([...keys, key]);
            setPressedKeys([...pressedKeys, key]);
        };

        const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            event.preventDefault();

            const newPressedKeys = pressedKeys.filter(
                key => key !== readKey(event)
            );
            setPressedKeys(newPressedKeys);

            if (pressedKeys.length > 0 && newPressedKeys.length === 0) {
                onKeyComboCallback(keys);
            }
        };

        return (
            <div>
                <input
                    ref={ref}
                    value={keys.map(k => k.toUpperCase()).join(' + ')}
                    readOnly
                    onKeyDown={onKeyDownHandler}
                    onKeyUp={onKeyUpHandler}
                />
            </div>
        );
    }
);
