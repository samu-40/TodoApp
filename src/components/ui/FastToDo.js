import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';

const SidebarTask = () => {

    const { open } = useSelector( state => state.ui.add );

    const { formValues, onChange, reset } = useForm({
        title: '',
        todo: '',
        notes: ''
    })
    const { title, todo, notes } = formValues

    const onSubmit = ( e ) => {

        e.preventDefault()

        reset()

    }

    return (

        <div className={`container-sidebar ${
            open ? 'activeST' : ''
        }`}>
            
            <h3>Fast ToDo</h3>

            <form onSubmit={ onSubmit }>

                <label>Title</label>
                <input 
                    type='text'
                    placeholder='Comprar leche....'
                    name='title'
                    value={ title }
                    onChange={ onChange }
                />

                <label>ToDo</label>
                <input 
                    type='text'
                    placeholder='Ir al chino....'
                    name='todo'
                    value={ todo }
                    onChange={ onChange }
                />

                <label>Notes</label>
                <textarea 
                    type='text'
                    placeholder='Hay que llevar 10$....'
                    name='notes'
                    value={ notes }
                    onChange={ onChange }
                />

                <label>where are you going to keep this?</label>
                <button><i className='fas fa-calendar-check'></i> Planed</button>
                <button><i className='fas fa-exclamation'></i> Important</button>
                <button><i className='fas fa-list'></i> Lists</button>

            </form>

        </div>

    )

}

export default SidebarTask
