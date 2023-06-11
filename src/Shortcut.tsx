import { Key } from './Key';
import { Shortcut as ShortcutType } from './App';
import styles from './Shortcut.module.scss';

type Props = {
    shortcut: ShortcutType;
};

export const Shortcut = ({ shortcut }: Props) => {
    const keys: JSX.Element[] = [];

    shortcut.keys.forEach(key => {
        keys.push(<Key key={key} keyText={key} />);
        keys.push(
            <div key={key + '+'} className={styles.plus}>
                +
            </div>
        );
    });

    keys.pop();

    return (
        <div className={styles.container}>
            <div>{shortcut.description}</div>
            <div className={styles.keys}>{keys}</div>
        </div>
    );
};
