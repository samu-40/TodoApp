import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { clickBars } from '../../actions/ui';

const Bars = () => {

    const { open } = useSelector( state => state.ui.bars );
    const dispatch = useDispatch();

    const onClick = () => {

        ( open ) ? dispatch( clickBars( false ) ) :  dispatch( clickBars( true ) )

    };

    return (

        <div className='bars-container'>

            <span
                className={`bars ${
                    (open) ? 'activeBars' : ''
                }`}
                onClick={ onClick }
            ></span>

        </div>

    )

}

export default Bars
