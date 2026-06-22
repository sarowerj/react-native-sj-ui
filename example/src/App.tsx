import { ViewCard, TextView, SjUiProvider } from 'react-native-sj-ui';

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
        <TextView size="h2">John Doe</TextView>

        <TextView size="body" color="secondary">
          Mobile Developer
        </TextView>
      </ViewCard>
    </SjUiProvider>
  );
}
