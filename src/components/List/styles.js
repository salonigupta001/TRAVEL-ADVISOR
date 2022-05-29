import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
//   ...................STYLING THE DROPDOWN MENU................
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  //   ...................STYLING THE DEFAULT DROPDOWN MENU................
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  //   ...................STYLING THE CONTAINER OF THE LIST OF PLACES TO BE DISPLAYED................
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: 'calc(100vh - 300px)', overflow: 'auto',
  },
}));
