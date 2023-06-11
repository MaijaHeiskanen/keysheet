import jsPDF from 'jspdf';
import { Shortcut } from './App';

type Props = {
    shortcuts: Shortcut[];
};

export const Printter = ({ shortcuts }: Props) => {
    const printShortcutsAsPdf = () => {
        const doc = new jsPDF('p', 'pt', 'a4');

        let source = window.document.getElementById('preview')?.outerHTML ?? '';

        doc.html(source, {
            callback: function (doc) {
                doc.save('test.pdf');
            },
        });
    };

    return (
        <div>
            <button onClick={printShortcutsAsPdf}>Print</button>
        </div>
    );
};
