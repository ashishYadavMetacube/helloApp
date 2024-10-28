import { Stack, TextField, InputAdornment } from "@mui/material";


export const MuiTextFields = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant="standard"/>
            <TextField label='Name' variant="filled"/>
            <TextField label='Name'variant="outlined"/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Small Secondary' size='small'  color='secondary' variant="standard"/>
            <TextField label='Small Secondary' size='small'  color='secondary' variant="filled" required/>
            <TextField label='Small Secondary' size='small'  color='secondary' variant="outlined" helperText="Name should not exceed 50char"/>

        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Password' size='small'  color='secondary' variant="outlined" type="password"/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Read Only' />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Amount' slotProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
            <TextField label='Weight' slotProps={{endAdornment: <InputAdornment>Kg</InputAdornment>}}/>
        </Stack>
    

    </Stack>
  )
}
