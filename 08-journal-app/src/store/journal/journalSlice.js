import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        mesaageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state,action) => {
            //recordando que no se debe mutar. pero redux, lo hace solito, por eso
            //ponemos el push 
            state.notes.push(action.payload)
            state.isSaving =false
        },
        setActiveNote: (state,action) => {
            state.active = action.payload  
        },
        setNotes: (state,action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state,action) => {

        },
        deleteNOteById: (state,action)  => {

        },

    }
});


// Action creators are generated for each case reducer function
export const {  addNewEmptyNote,
    setActiveNote,setNotes,setSaving,
    updateNote,deleteNOteById,savingNewNote
} = journalSlice.actions;