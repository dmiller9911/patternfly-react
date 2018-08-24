export const languages = {
  javascript: 'javascript',
  json: 'json',
  typescript: 'typescript',
  python: 'python',
  go: 'go'
};

const jsSample = `import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';
import getContainerProps from './common/getContainerProps';

class ButtonVariants extends React.Component {
  static title = 'Button Variants';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <Button variant="primary">Primary</Button>
    );
  }
}

export default ButtonVariants;
`;

const jsonSample = `{
  "name": "@patternfly/react-syntax-highlighter",
  "version": "1.0.0",
  "peerDependencies": {
    "prop-types": "^15.6.1",
    "react": "^16.4.0",
    "react-dom": "^15.6.2 || ^16.4.0"
  },
  "dependencies": {
    "react-syntax-highlighter": "^8.0.1"
  }
}`;

export const samples = {
  [languages.javascript]: jsSample,
  [languages.json]: jsonSample
};
