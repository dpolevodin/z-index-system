import {Toolbar} from './components/toolbar';
import {DropdownMenu, HelpMark, PopupPlacement, type DropdownMenuItem} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import './App.scss';

const mdHelpPlacement: PopupPlacement = ['bottom', 'bottom-end', 'right-start', 'right', 'left'];

const Help = () => (
    <div
        onClick={(e) => {
            // stop clicks propagation
            // because otherwise click in MarkdownHints handled as click on MenuItem
            e.stopPropagation();
        }}
    >
        <HelpMark popoverProps={{modal: false, placement: mdHelpPlacement}} className="mode-help">
            <>
                <div>test1</div>
                <div>test2</div>
                <div>test3</div>
            </>
        </HelpMark>
    </div>
);

const DROPDOWN_ITEMS = [
    {
        text: <Help />,
        action: () => console.log('Help'),
    },
    {
        action: () => console.log('Rename'),
        text: 'Rename',
    },
    {
        action: () => console.log('Update'),
        text: 'Update',
    },
    {
        action: () => console.log('Delete'),
        text: 'Delete',
    },
    {
        action: () => console.log('Create'),
        text: 'Create',
    },
    {
        action: () => console.log('Rename'),
        text: 'Rename',
    },
    {
        action: () => console.log('Update'),
        text: 'Update',
    },
    {
        action: () => console.log('Delete'),
        text: 'Delete',
    },
    {
        action: () => console.log('Create'),
        text: 'Create',
    },
    {
        action: () => console.log('Rename'),
        text: 'Rename',
    },
    {
        action: () => console.log('Update'),
        text: 'Update',
    },
    {
        action: () => console.log('Delete'),
        text: 'Delete',
    },
    {
        action: () => console.log('Create'),
        text: 'Create',
    },
    {
        action: () => console.log('Rename'),
        text: 'Rename',
    },
    {
        action: () => console.log('Update'),
        text: 'Update',
    },
    {
        action: () => console.log('Delete'),
        text: 'Delete',
    },
];

function App() {
    return (
        <div>
            <Toolbar>
                <div className="toolbar__dropdown">
                    <DropdownMenu items={DROPDOWN_ITEMS} />
                </div>
            </Toolbar>
        </div>
    );
}

export default App;
