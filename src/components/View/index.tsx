import React from 'react';
import { View as RNView, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
  mLeft?: number;
  mRight?: number;
  flex?: boolean;
  row?: boolean;
  pHorizontal?: number;
  mTop?: number;
  mBottom?: number;
  jCenter?: boolean;
  sBetween?: boolean;
  sAround?: boolean;
  fEnd?: boolean;
  wrap?: boolean;
  background?: string;
  centered?: boolean;
  style?: any;
}

const View: React.FC<Props> = (props) => {
  return (
    <RNView
      {...props}
      style={[
        props.mLeft && { marginLeft: props.mLeft },
        props.mRight && { marginRight: props.mRight },
        props.flex && styles.flex,
        props.row && styles.row,
        props.pHorizontal && { paddingHorizontal: props.pHorizontal },
        props.jCenter && styles.jCenter,
        props.sBetween && styles.sBetween,
        props.sAround && styles.sAround,
        props.fEnd && styles.fEnd,
        props.mTop && { marginTop: props.mTop },
        props.mBottom && { marginBottom: props.mBottom },
        props.centered && styles.centered,
        props.background && { backgroundColor: props.background },
        props.wrap && { flexWrap: 'wrap' },
        props.style && props.style,
      ]}>
      {props.children}
    </RNView>
  );
};

export default View;