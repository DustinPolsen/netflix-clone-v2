import { CircularProgress } from '@material-ui/core';

export const CircularProgressLoading = ({
  marginTop,
  color,
  thickness,
  size,
}) => (
  <CircularProgress
    style={{
      marginTop: marginTop ?? '0',
      color: color ?? 'red',
    }}
    thickness={thickness ?? 1}
    size={size}
  />
);
