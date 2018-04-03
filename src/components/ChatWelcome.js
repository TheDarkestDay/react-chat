import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  bold: {
    fontWeight: 'bold',
  },
  paper: {
    padding: '24px',
  },
  wrapper: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ChatWelcome = ({ classes }) => (
  <div className={classes.wrapper}>
    <Paper className={classes.paper}>
      <Typography variant="display1" color="textSecondary" gutterBottom>
        Start messaging...
      </Typography>
      <Typography variant="body1" color="inherit" gutterBottom>
        Use <span className={classes.bold}>Global</span> to explore communities around here.
      </Typography>
      <Typography variant="body1" color="inherit" gutterBottom>
        Use <span className={classes.bold}>Recents</span> to see your recent conversations.
      </Typography>
    </Paper>
  </div>
);

ChatWelcome.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ChatWelcome);
