import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { Themes, SyntaxHighlighter } from '@patternfly/react-syntax-highlighter';
import Toolbar from './common/Toolbar';
import Select from './common/Select';
import TextArea from './common/TextArea';

const languages = {
  javascript: 'javascript',
  json: 'json',
  typescript: 'typescript',
  python: 'python',
  go: 'go'
};

const defaultCode = `import React from 'react';
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

class SyntaxHighlighterPlayground extends React.Component {
  static title = 'Syntax Highlighter';
  state = {
    code: defaultCode,
    language: languages.javascript,
    theme: Themes.dark
  };

  handleCodeChange = event => {
    this.setState({ code: event.currentTarget.value });
  };

  handleThemeChange = event => {
    this.setState({ theme: event.currentTarget.value });
  };

  handleLanguageChange = event => {
    this.setState({ language: event.currentTarget.value });
  };

  render() {
    const { code, language, theme } = this.state;
    return (
      <React.Fragment>
        <Toolbar>
          <Select
            label="Language"
            value={language}
            options={Object.values(languages)}
            onChange={this.handleLanguageChange}
          />
          <Select label="Theme" value={theme} options={Object.values(Themes)} onChange={this.handleThemeChange} />
        </Toolbar>
        <Grid lg={6} md={12}>
          <GridItem>
            <TextArea label="Code Sample" value={code} onChange={this.handleCodeChange} />
          </GridItem>
          <GridItem>
            <SyntaxHighlighter language={language} theme={theme}>
              {code}
            </SyntaxHighlighter>
          </GridItem>
        </Grid>
      </React.Fragment>
    );
  }
}

export default SyntaxHighlighterPlayground;
