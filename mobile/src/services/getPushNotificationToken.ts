import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken() {
  const { granted } = await Notifications.getPermissionsAsync();

  if(!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if(granted) {
    try {
      const pushToken = await Notifications.getExpoPushTokenAsync();
      console.log('NOTIFICATION TOKEN =>', pushToken.data);
      return pushToken.data;
    } catch (error) {
      console.log('error', error);
    }



  }
}