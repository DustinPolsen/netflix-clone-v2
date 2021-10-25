import { makeStyles, Tooltip } from '@material-ui/core';
import { COLORS } from '@/utils/generalUtils';

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.white,
  },
  tooltip: {
    color: COLORS.BLACK,
    fontSize: (props) => props.fontSize || 'clamp(0.8rem, 4vw, 1rem)',
    border: `1px solid ${COLORS.WHITE}`,
    fontWeight: (props) => props.fontWeight || 700,
    backgroundColor: theme.palette.common.white,
    boxShadow: `1px 2px 4px 1px ${COLORS.VERY_BRIGHT_BLACK} `,
  },
}));

export default function BootstrapTooltip(props) {
  const classes = useStylesBootstrap(props);

  return <Tooltip arrow classes={classes} {...props} />;
}
