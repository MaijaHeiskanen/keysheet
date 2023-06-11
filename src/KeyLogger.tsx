import { useEffect, useRef, useState } from 'react';
import { KeyCombo } from './KeyCombo';

type Props = {
    onSaveCallback: (keys: string[], description: string) => void;
};

export const KeyLogger = ({ onSaveCallback }: Props) => {
    const [keys, setKeys] = useState<string[]>([]);
    const [description, setDescription] = useState<string>('');
    const descriptionInputRef = useRef<HTMLInputElement>(null);
    const keyComboRef = useRef<HTMLInputElement>(null);

    const onSaveHandler = () => {
        onSaveCallback(keys, description);
        setKeys([]);
        setDescription('');
        focusKeyCombo();
    };

    const onCancelHandler = () => {
        setKeys([]);
        setDescription('');
        focusKeyCombo();
    };

    const focusDescriptionInput = () => {
        if (descriptionInputRef.current) {
            descriptionInputRef.current.focus();
        }
    };

    const focusKeyCombo = () => {
        if (keyComboRef.current) {
            keyComboRef.current.focus();
        }
    };

    const onKeyCombo = (keys: string[]) => {
        setKeys(keys);
        focusDescriptionInput();
    };

    useEffect(() => {
        focusKeyCombo();
    }, []);

    return (
        <div>
            <KeyCombo
                ref={keyComboRef}
                keys={keys}
                setKeys={setKeys}
                onKeyComboCallback={onKeyCombo}
            />
            <div>
                <input
                    ref={descriptionInputRef}
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            onSaveHandler();
                        } else if (event.key === 'Escape') {
                            onCancelHandler();
                        }
                    }}
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
            </div>
            <div>
                <button onClick={onSaveHandler}>Add</button>
                <button onClick={onCancelHandler}>Cancel</button>
            </div>
        </div>
    );
};
