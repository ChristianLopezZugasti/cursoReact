import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Google, Password} from '@mui/icons-material'
import { Link as RouterLink } from 'react-router'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch } from 'react-redux'
import { checkingAuthentication } from "../../store/auth/thunks"


export const LoginPage = () => {
  
  const {email,password,onInputChange,formState} = useForm({
    email: 'chrislopez_28@hotmail',
    password: '123456',
  })
  

  const dispatch = useDispatch()
  
  const onSubmit = ( event) => {
    event.preventDefault();
    dispatch(checkingAuthentication(email,password))
    console.log({email,password})
  }

  const onGoogleSignIn = () => {
    console.log('epep')
  }
  
  return (
   

    <AuthLayout  title="login">
      <form onSubmit={onSubmit}>
        <Grid container direction="column">
          <Grid item xs={12}  sx={{mt:2}} >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              name="email"
              value={email}
              onChange={onInputChange}

              fullWidth />
          </Grid>
          <Grid item xs={12}  sx={{mt:2}} >

             <TextField
              label="Contrasena"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}

              fullWidth /> 

          </Grid>

          <Grid container direction="column" spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12} sm={6} >
                  <Button type="submit" variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} >
                  <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
                    <Google/>
                    <Typography sx={{ml:1}}> Google </Typography>
                  </Button>
                </Grid>

          </Grid>


          <Grid container direction='row' justifyContent='end' >
            <Link component={RouterLink } color="inherit" to="/auth/register">
                
                Crear una Cuenta
            </Link>

          </Grid>

        </Grid>

      </form>
    </AuthLayout>

      


    

  )
}


