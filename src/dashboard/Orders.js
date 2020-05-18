import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {NativeSelect ,InputLabel,FormControl , Grid} from '@material-ui/core'
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Benches', 'Centre', '10', 'Ravi'),
  createData(1, '16 Mar, 2019', 'stools', 'Centre2', '10', 'Blah'),
  createData(2, '16 Mar, 2019', 'Pens', 'Centre3', '20', 'Blah2'),
  createData(3, '16 Mar, 2019', 'Books', 'Centre4', '40', 'Blah3'),
  createData(4, '15 Mar, 2019', 'bladjkfsadgfk', 'Centre5', '10', 'Blah4'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Title>History</Title>
        </Grid>
        <Grid>
          <FormControl>
            <InputLabel htmlFor="age-native-helper">centre</InputLabel>
            <NativeSelect id="centre" >
              <option value='all'>all</option>
              <option value='centre1'>kormangala</option>
              <option value='centre2'>bellandur</option>
              <option value='centre3'>varthur</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Delivery centre</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="right">Recieved by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
