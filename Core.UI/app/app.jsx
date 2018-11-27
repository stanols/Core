import React from 'react';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Registration from './pages/registration/registration';
import './app.less';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Registration />
                <Footer/>
            </div>
        );
    }
}

export default App;
