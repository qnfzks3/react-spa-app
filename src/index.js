import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";  //이게 중요함 라우트는 꼭 있어야함
import './index.css'


import App from './App';


ReactDOM.render(// 렌더링 해라
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>,
    document.getElementById('root')
);


