import {Toolbar} from './components/toolbar';
import {DropdownMenu} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {DROPDOWN_ITEMS} from './constants';

function App() {
    return (
        <div>
            <Toolbar>
                <DropdownMenu items={DROPDOWN_ITEMS} />
            </Toolbar>
        </div>
    );
}

export default App;
