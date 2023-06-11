import { useState, KeyboardEvent, forwardRef, Dispatch } from 'react';

type Props = {
    keys: string[];
    setKeys: Dispatch<React.SetStateAction<string[]>>;
    onKeyComboCallback: (keys: string[]) => void;
};

export const KeyCombo = forwardRef<HTMLInputElement, Props>(
    ({ keys, setKeys, onKeyComboCallback }, ref) => {
        const [pressedKeys, setPressedKeys] = useState<string[]>([]);

        const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            event.preventDefault();

            const key = event.key;
            setKeys([...keys, key]);
            setPressedKeys([...pressedKeys, key]);
        };

        const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            event.preventDefault();

            const newPressedKeys = pressedKeys.filter(key => key !== event.key);
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
