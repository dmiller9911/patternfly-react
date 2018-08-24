import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from '@patternfly/react-styles';
import { global_spacer_md as spacer, global_spacer_sm as spacerSm } from '@patternfly/react-tokens';

const propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  label: {
    marginRight: spacer.var
  },
  select: {
    marginLeft: spacerSm.var
  }
});

const Select = ({ label, options, value, onChange }) => (
  <label className={css(styles.label)}>
    {label}:
    <select value={value} onChange={onChange} className={css(styles.select)}>
      {options.map(opt => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </label>
);

Select.propTypes = propTypes;

export default Select;
