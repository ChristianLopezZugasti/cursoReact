import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <Grid container direction='column' sx={{ mb: 1 }}>

      {/* Fila superior: fecha y botón */}
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item>
          <Typography fontSize={39} fontWeight='light'>28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{ p: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
      </Grid>

      {/* Fila inferior: TextField */}
      <Grid container sx={{ mt: 2 }}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: 'none', mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedio en el dia"
          minRows={5}
        />
      </Grid>


    <ImageGallery/>



    </Grid>
  )
}
