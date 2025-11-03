import { Button, Field, Input, Subtitle1, Title1 } from '@fluentui/react-components';
import { PackageIcon } from '@primer/octicons-react';
import { CalendarFilled } from '@fluentui/react-icons';
import { useI18n } from './i18n/I18nProvider';

function App() {
  const { t } = useI18n();
  return (
    <div style={{
      userSelect: "none"
    }}>
      <Title1>{t('app.body.about')}</Title1><br /><br />
      <Subtitle1>{t('app.body.features')}</Subtitle1><br />
      <Button appearance='secondary' icon={<PackageIcon />} onClick={() => window.open('https://www.npmjs.com/package/@fluentui/react-components')} style={{ margin: "5px", marginLeft: 0 }}>@fluentui/react-components</Button>
      <Button appearance='secondary' icon={<PackageIcon />} onClick={() => window.open('https://www.npmjs.com/package/@fluentui/react-icons')} style={{ margin: "5px" }}>@fluentui/react-icons</Button>
      <Button appearance='secondary' icon={<PackageIcon />} onClick={() => window.open('https://www.npmjs.com/package/@primer/octicons-react')} style={{ margin: "5px" }}>@primer/octicons-react</Button><br />

      <Subtitle1>{t('app.body.demo')}</Subtitle1><br />
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