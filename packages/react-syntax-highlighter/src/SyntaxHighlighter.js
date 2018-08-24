import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import { darkTheme, lightTheme, grayscaleTheme } from './themes';
import PropTypes from 'prop-types';

const Themes = {
  dark: 'dark',
  light: 'light',
  grayscale: 'grayscale'
};

const ThemeMap = {
  [Themes.dark]: darkTheme,
  [Themes.light]: lightTheme,
  [Themes.grayscale]: grayscaleTheme
};

const propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(Themes)),
  codeTagProps: PropTypes.object
};

const defaultProps = {
  theme: Themes.dark,
  codeTagProps: {}
};

const SyntaxHighlighter = ({ theme, codeTagProps, children, ...props }) => (
  <ReactSyntaxHighlighter
    {...props}
    style={ThemeMap[theme]}
    codeTagProps={{
      ...codeTagProps,
      style: {
        ...codeTagProps.style,
        fontFamily: 'operator-mono, monospace'
      }
    }}
  >
    {children}
  </ReactSyntaxHighlighter>
);

SyntaxHighlighter.propTypes = propTypes;
SyntaxHighlighter.defaultProps = defaultProps;

export { SyntaxHighlighter, Themes };
