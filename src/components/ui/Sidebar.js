import React from 'react';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { clickBars } from '../../actions/ui';

const Sidebar = () => {

    const { open } = useSelector( state => state.ui.bars )
    const dispatch = useDispatch();

    const onClick = () => {

        dispatch( clickBars( false ) )

    }
    

    return (

        <nav className={
            (open) ? 'activeNav' : ''
        }>

            <Link 
                className='link' 
                to='/'
                onClick={ onClick }
            >
                <i className='fas fa-portrait'></i>Count
            </Link>

            <Link 
                className='link' 
                to='today'
                onClick={ onClick }
            >
                <i className='fas fa-sun'></i>Today
            </Link>

            <Link 
                className='link' 
                to='/planed'
                onClick={ onClick }
            >
                <i className='fas fa-calendar-check'></i>Planed
            </Link>

            <Link 
                className='link' 
                to='/important'
                onClick={ onClick }
            >
                <i className='fas fa-exclamation'></i>Important
            </Link>

            <Link 
                className='link' 
                to='/list'
                onClick={ onClick }
            >
                <i className='fas fa-list'></i>List
            </Link>

        </nav>

    )

}

export default Sidebar
