import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalLinkBlockProps = {};
export type LinkBlockProps = BoxProps & React.LinkHTMLAttributes<any> & LocalLinkBlockProps;

const useProps = createHook<LinkBlockProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.LinkBlock,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Link.Block' }
);

export const LinkBlock = createComponent<LinkBlockProps>(
  (props) => {
    const linkBlockProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: linkBlockProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Link.Block',
    },
    defaultProps: {
      use: 'a',
    },
    themeKey: 'Link.Block',
  }
);
