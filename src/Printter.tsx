import jsPDF from 'jspdf';
import { Shortcut } from './App';

type Props = {
    shortcuts: Shortcut[];
};

export const Printter = ({ shortcuts }: Props) => {
    const printShortcutsAsPdf = () => {
        const doc = new jsPDF();
        doc.setFontSize(40);
        doc.text('Shortcuts', 35, 25);
        doc.setFontSize(20);
        shortcuts.forEach((shortcut, index) => {
            const keyText = shortcut.keys
                .map(key => key.toUpperCase())
                .join(' + ');
            const description = shortcut.description;
            doc.text(`${keyText} - ${description}`, 10, 40 + index * 10);
        });
        doc.save('shortcuts.pdf');
    };

    return (
        <div>
            <button onClick={printShortcutsAsPdf}>Print</button>
        </div>
    );
};
