import axios from 'axios';
import Login from './login';
import SingUp from './SingUp';
import {Route,Routes} from 'react-router-dom'
import User from './User';

import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  return (
    <>
    <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/singup' element={ <SingUp/>}></Route>
    <Route path='/user' element={ <User/>}></Route>
    </Routes>
    </>
  )
}

export default App;
