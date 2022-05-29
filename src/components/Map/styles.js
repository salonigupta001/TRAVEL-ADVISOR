import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
//   .................STYLING THE PAPER.................
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  //   .................STYLING THE CONTAINER OF THE MAP.................
  mapContainer: {
    height: '84vh', width: '100%', marginTop: '2rem',
  },
  //   .................STYLING THE CONTAINER OF THE MARKER OF THE PLACE.................
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  //   .................STYLING THE POINTER OF THE MAP.................
  pointer: {
    cursor: 'pointer',
  },
}));
