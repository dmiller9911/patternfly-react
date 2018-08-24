import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from '@patternfly/react-styles';
import { global_FontSize_sm as fontSize, global_FontFamily_monospace as fontFamily } from '@patternfly/react-tokens';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textArea: {
    minHeight: 300,
    fontSize: fontSize.var,
    fontFamily: fontFamily.var,
    width: '100%',
    height: '100%'
  }
});

const TextArea = ({ label, value, onChange }) => (
  <textarea className={css(styles.textArea)} value={value} onChange={onChange} aria-label={label} />
);

TextArea.propTypes = propTypes;

export default TextArea;
