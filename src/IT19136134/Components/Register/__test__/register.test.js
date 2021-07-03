import React from "react";
import ReactDOM from 'react-dom';
import register from '../register';
import {isTSAnyKeyword} from '@babel/types';


it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<register></register>, div)
})
