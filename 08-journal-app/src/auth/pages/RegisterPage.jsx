import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"
export const RegisterPage = () => {


  const dispatch = useDispatch()
  const [formSubmitted, setformSubmitted] = useState(false)

  const {status,errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo( () => status === 'checking',[status])

  console.log('error desde register',errorMessage)

  const formData = {
    email: '',
    password: '',
    displayName: ''
  }

  const formValidations = {
      email: [(value) => value.includes('@'), 'El correo debe tener un @'],
      password: [(value) => value.length >= 6, 'El passwrod debe de tener mas de 6 letras'],
      displayName: [(value) => value.length >=1, 'El nombre es obligatorio']
      
  }

  const {displayName,email,password,onInputChange,formState,isFormValid,emailValid,passwordValid,displayNameValid} = useForm(formData,formValidations)



  const onSubmit = (event) => {
    event.preventDefault()
    setformSubmitted(true);


    if(!isFormValid) return

    dispatch(startCreatingUserWithEmailPassword(formState))
  }


  return (
   

    <AuthLayout  title="Crear cuenta">
      <h1> FormValid {isFormValid ? 'valido' : 'Incorrecto'} </h1>
      <form onSubmit={ onSubmit }   className='animate__animated animate__fadeIn animate__faster'>
        <Grid container direction="column">
          
          <Grid item xs={12}  sx={{mt:2}} >
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre Completo"
              name="displayName"
              value={displayName}
              onChange={ onInputChange}
              error={ !!displayNameValid && formSubmitted }
              helperText= { displayNameValid}
              fullWidth />
          </Grid>

          
          <Grid item xs={12}  sx={{mt:2}} >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              name="email"
              value={email}
              onChange={ onInputChange}
              error={ !!emailValid && formSubmitted}
              helperText= { emailValid}
              fullWidth />
          </Grid>
          <Grid item xs={12}  sx={{mt:2}} >

             <TextField
              label="Contrasena"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={ onInputChange}
              error={ !!passwordValid && formSubmitted }
              helperText= { passwordValid}
              fullWidth /> 

          </Grid>

          <Grid item
                xs={12}
                display={ !!errorMessage ? '': 'none' } >
                <Alert severity="error"> pep{errorMessage} </Alert>
           </Grid>

          


          <Grid container direction="column" spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12} sm={6} >
                  <Button disabled={isCheckingAuthentication}  variant="contained" type="submit" fullWidth>
                    Crear Cuenta
                  </Button>
           </Grid>

                

          </Grid>


          <Grid container direction='row' justifyContent='end' >
            <Typography sx={{mr:1}} > Ya tienes una cuenta?</Typography>
            <Link component={RouterLink } color="inherit" to="/auth/login">
                
                Ingresar
            </Link>

          </Grid>

        </Grid>

      </form>
    </AuthLayout>

      


    

  )
}


