import React from 'react';
import Content from '../../components/content';
import { SyntaxHighlighter, Themes } from '@patternfly/react-syntax-highlighter';

const code = `import React from 'react';
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

function Icons() {
  return (
    <Content>
      <div>
        <h1>Dark</h1>
        <SyntaxHighlighter showLineNumbers language="javascript" theme={Themes.dark}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div>
        <h1>Light</h1>
        <SyntaxHighlighter showLineNumbers language="javascript" theme={Themes.light}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div>
        <h1>Light</h1>
        <SyntaxHighlighter showLineNumbers language="javascript" theme={Themes.grayscale}>
          {code}
        </SyntaxHighlighter>
      </div>
    </Content>
  );
}

export default Icons;
