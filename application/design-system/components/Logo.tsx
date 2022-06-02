/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';

import styled from '@emotion/styled';

export interface LogoProperties extends SVGProps<SVGSVGElement> {
  size: 'small' | 'medium' | 'large';
  width: number;
  height: number;
}

const StyledComponent = styled.svg((props: LogoProperties) => {
  return {
    width: props.width,
    height: props.height,
    color: 'inherit',
    fill: 'currentColor',
  };
});

export default function Component(props: LogoProperties) {
  return (
    <StyledComponent
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${props.width * 0.1} ${props.height * 0.1}`}
      {...props}
    >
      <rect x={2} y={2} width={20} height={20} rx="4" />
    </StyledComponent>
  );
}
