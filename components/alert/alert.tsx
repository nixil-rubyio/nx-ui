import React from 'react';
import t from 'prop-types';

import { AlertProps, KindMap } from './interface';
import { Card, Input, Button, Container, Grid, Paper, Box } from "@material-ui/core";

const prefixCls = 'nx-alert';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <Card
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </Card>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;