/** @jsx jsx */
import { jsx, Global, GlobalProps } from '@emotion/react';

export interface GlobalProperties extends GlobalProps {}

export default function Component(props: GlobalProperties) {
  return <Global styles={props.styles} />;
}
