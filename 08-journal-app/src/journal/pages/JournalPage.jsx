import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { NothingSelectdView } from "../views/NothingSelectdView"




export const JournalPage = () => {

  const dispatch = useDispatch()
  const {isSaving,active} = useSelector((state)=> state.journal)

  

  const onCLickNewNote = () => {
    dispatch(startNewNote());
  }


  return (
    <JournalLayout>

      {
        (!!active) ?
            <NoteView/> :
            <NothingSelectdView/>
  }


      <IconButton size="large" onClick={onCLickNewNote}  sx={{
        color:'white', backgroundColor: 'error.main', ':hover' : { backgroundColor: 'error.main',opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50}}
        loading={isSaving}  >
        <AddOutlined sx={{fontSize:30}}>

        </AddOutlined>

      </IconButton>

    </JournalLayout>
    

    
    
    
  )
}
