import styles from './Key.module.scss';

type Props = {
    keyText: string;
};

export const Key = ({ keyText }: Props) => {
    return <div className={styles.key}>{keyText}</div>;
};
