import { ViewCard, TextView, SjUiProvider, Row } from 'react-native-sj-ui';

export default function App() {
  return (
    <SjUiProvider
      theme={{
        colors: {
          primary: 'red',
        },
        typography: {
          fontSize: {
            h1: 30,
          },
        },
      }}
    >
      <ViewCard
        backgroundColor={'purple'}
        padding={20}
        marginTop={200}
        // style={{ backgroundColor: 'blue' }}
      >
        <Row gap={30} justifyContent="space-between" alignItems="center">
          <TextView size="h2">John Doe</TextView>

          <TextView size="body" color="secondary">
            Mobile Developer
          </TextView>
        </Row>
      </ViewCard>
    </SjUiProvider>
  );
}
