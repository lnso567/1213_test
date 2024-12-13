import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import UserList from './UserList'; // 引入 UserList 組件

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/users" element={<UserList/>} /> {/* 建立路由 */}
                {/* 其他路由 ...*/}
            </Routes>
        </Router>
    );
}

export default App;