import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>메인 페이지 index입니다.</h1>
            </div>
        );
    }
}
ReactDOM.render(<App /> ,document.getElementById('root'));

export default App;
