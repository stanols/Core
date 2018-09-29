import React from 'react';
import './app.less';
import Registration from './pages/registration/registration.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Welcome to Adventure!
                <Registration/>
            </div>
        );
    }
}

export default App;
