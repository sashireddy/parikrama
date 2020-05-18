import React from 'react'
import {Grid,NativeSelect ,TextField,Button } from '@material-ui/core'
const RaiseRequest = (props) => {
    const inventory = ['pens','pencils','benches','stools','desktops']
    // const {} = props
    return (
        <Grid>
            <NativeSelect>
                {
                    inventory.map((item,idx)=>{
                        return <option id={idx} value={item}>{item}</option>
                    })
                }
            </NativeSelect>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <Button>Request</Button>
        </Grid>
    )
}
export {RaiseRequest}