// --- Material Ui Imports --- //
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import withStyles from '@material-ui/core/styles/withStyles';

export const FiCard = withStyles({
  root: {
    position: 'relative',
  },
})(Card);

export const FiCardActionArea = withStyles({
  root: {
    position: 'relative',
  },
})(CardActionArea);

export const FiCardActions = withStyles({
  root: {
    position: 'relative',
  },
})(CardActions);

export const FiCardContent = withStyles({
  root: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    width: '100%',
  },
})(CardContent);

export const FiCardMedia = withStyles({
  root: {
    height: '100%',
    width: '100%',
  },
})(CardMedia);

// --- Exports --- //
export default {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia,
};
