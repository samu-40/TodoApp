import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { clickAdd } from '../../actions/ui';

const FastToDo = () => {

    const { open } = useSelector( state => state.ui.add );
    const dispatch = useDispatch();

    const onClickAdd = () => {

        ( open ) ? dispatch( clickAdd( false ) ) : dispatch( clickAdd( true ) )

    }

    return (

        <div
            className={`add-container ${
                (open) ? 'activeAdd' : ''
            }`}
            onClick={ onClickAdd }
        >
            <i className='fas fa-plus'></i>
        </div>

    )

}

export default FastToDo
