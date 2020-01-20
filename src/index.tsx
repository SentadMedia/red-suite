import * as serviceWorker from './serviceWorker';

import ReactDOM from 'react-dom';
import { initUIFactory } from './dep';

const uiFactory = initUIFactory();

ReactDOM.render(uiFactory.createApp(), document.getElementById('root'));
serviceWorker.unregister();
