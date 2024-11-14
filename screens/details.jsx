import { useRoute } from '@react-navigation/native';
import { ScreenContent } from 'components/ScreenContent';
import { StyleSheet, View } from 'react-native';

export default function Details() {
  const router = useRoute();

  return (
    <View style={styles.container}>
      <ScreenContent
        path="screens/details.js"
        title={`Showing details for user`}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
