import { Button, Field, Input, Subtitle1, Title1 } from '@fluentui/react-components';
import { Language, translate } from './api/translate';
import { PackageIcon } from '@primer/octicons-react';
import { CalendarFilled } from '@fluentui/react-icons';

function App(props: {
  lang: Language
}) {
  return (
    <div style={{
      userSelect: "none"
    }}>
      <Title1>{translate('app.body.about', props.lang)}</Title1><br /><br />
      <Subtitle1>{translate('app.body.features', props.lang)}</Subtitle1><br />
      <Button appearance='secondary' icon={<PackageIcon />} onClick={() => window.open('https://www.npmjs.com/package/@fluentui/react-components')} style={{ margin: "5px", marginLeft: 0 }}>@fluentui/react-components</Button>
      <Button appearance='secondary' icon={<PackageIcon />} onClick={() => window.open('https://www.npmjs.com/package/@fluentui/react-icons')} style={{ margin: "5px" }}>@fluentui/react-icons</Button>
      <Button appearance='secondary' icon={<PackageIcon />} onClick={() => window.open('https://www.npmjs.com/package/@primer/octicons-react')} style={{ margin: "5px" }}>@primer/octicons-react</Button><br />

      <Subtitle1>{translate('app.body.demo', props.lang)}</Subtitle1><br />
      <Button appearance='primary' icon={<CalendarFilled />} style={{ margin: "5px", marginLeft: 0 }}>Primary</Button>
      <Button appearance='secondary' icon={<CalendarFilled />} style={{ margin: "5px" }}>Secondary</Button>
      <Button appearance='subtle' icon={<CalendarFilled />} style={{ margin: "5px" }}>Subtle</Button>
      <Button appearance='transparent' icon={<CalendarFilled />} style={{ margin: "5px" }}>Transparent</Button>
      <Button appearance='outline' icon={<CalendarFilled />} style={{ margin: "5px" }}>Outline</Button><br />
      <Button disabled appearance='primary' icon={<CalendarFilled />} style={{ margin: "5px", marginLeft: 0 }}>Primary</Button>
      <Button disabled appearance='secondary' icon={<CalendarFilled />} style={{ margin: "5px" }}>Secondary</Button>
      <Button disabled appearance='subtle' icon={<CalendarFilled />} style={{ margin: "5px" }}>Subtle</Button>
      <Button disabled appearance='transparent' icon={<CalendarFilled />} style={{ margin: "5px" }}>Transparent</Button>
      <Button disabled appearance='outline' icon={<CalendarFilled />} style={{ margin: "5px" }}>Outline</Button><br />
      <Field style={{ maxWidth: "580px" }}><Input /></Field>
    </div>
  );
}

export default App;