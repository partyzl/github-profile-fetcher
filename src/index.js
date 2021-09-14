import ReactDOM from 'react-dom';
import store from './redux/store';

ReactDOM.render(<Provider store={store}></Provider>, document.getElementById('root'));
