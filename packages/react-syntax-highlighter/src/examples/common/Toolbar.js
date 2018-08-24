import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from '@patternfly/react-styles';
import { global_spacer_md as spacer } from '@patternfly/react-tokens';

const propTypes = {
  children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  toolbar: {
    paddingTop: spacer.var,
    paddingBottom: spacer.var
  }
});

const Toolbar = ({ children }) => <div className={css(styles.toolbar)}>{children}</div>;

Toolbar.propTypes = propTypes;

export default Toolbar;
