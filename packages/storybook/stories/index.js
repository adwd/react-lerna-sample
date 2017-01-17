import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { SampleComponent } from 'my-react-components';

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));

storiesOf('SampleComponent', module)
  .add('works', () => (
    <SampleComponent />
  ));
