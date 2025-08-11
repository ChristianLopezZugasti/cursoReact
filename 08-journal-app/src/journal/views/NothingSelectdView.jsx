import { StarOutline, StartOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectdView = () => {
  return (
    <Grid container spacing={0} direction="column"
      className='animate__animated animate__fadeIn animate__faster'
      alignItems="center" justifyContent="center"
      sx={ {minHeight:'calc(100vh - 110px) ', backgroundColor:'primary.main', borderRadius:4} }> 

        <Grid item xs={12}>
            <StarOutline sx={{fontSize:100,color:'white'}} />

        </Grid>

        <Grid item xs={12}>
                <Typography color="white" variant="h5"> Selecciona o crea una entrada </Typography>

        </Grid>



    </Grid>
 )
}
