import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-simple-toast';
import {
  PermissionsAndroid,
  Platform,
  Linking,
  Alert,
  ToastAndroid,

} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Geolocation from 'react-native-geolocation-service';
import RNFS from 'react-native-fs';
import messaging from '@react-native-firebase/messaging';
import { reduxStorage } from '@/store';

interface props {
  object: Object;
  // isShow: boolean;
}

const CameraPicker = async ({object}: props) => {
  try {
    let res = await ImagePicker.openCamera(object);
    return res;
  } catch (e) {
    const {message} = e;
    Toast.show(message, Toast.SHORT);
  }
};

const MediaPicker = async ({object}: props) => {
  try {
    let res = await ImagePicker.openPicker(object);
    return res;
  } catch (e) {
    const {message} = e;
    Toast.show(message, Toast.SHORT);
  }
};

const formatDate = date => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const pdfDownload = (setPDF: any) => {
  const {config, fs} = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let date = new Date();
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      //Related to the Android only
      useDownloadManager: true,
      notification: true,
      path:
        PictureDir +
        '/Report_Download' +
        Math.floor(date.getTime() + date.getSeconds() / 2),
      description: 'Risk Report Download',
    },
  };
  config(options)
    .fetch('GET', 'https://www.africau.edu/images/default/sample.pdf')
    .then(res => {
      //Showing alert after successful downloading

      setPDF(false);
      alert('Report Downloaded Successfully.');
      return JSON.stringify(res);
    });
};

const TakeCameraPicture = async navigation => {
  let object = {
    width: 300,
    height: 400,
    cropping: false,
  };
  let res = await CameraPicker({object: object});
  let {path, sourceUrl, filename, mime}: any = res;
  navigation.navigate('Editor', {uri: path});
};

const hasPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };
  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow to determine your location.`,
      '',
      [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }

  return false;
};

const hasLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasPermissionIOS();
    return hasPermission;
  }

  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      'Location permission revoked by user.',
      ToastAndroid.LONG,
    );
  }

  return false;
};

const getLocation = async () => {
  const hasPermission = await hasLocationPermission();

  if (!hasPermission) {
    return;
  }

  Geolocation.getCurrentPosition(
    position => {
      console.log(position);
    },
    error => {
      //Alert.alert(`Code ${error.code}`, error.message);
      console.log(error);
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    },
  );
};

 //Download Multiple Files
 const downloadFiles = (uri:string) => {


  const promise = RNFS.downloadFile({
    fromUrl: uri,
    toFile: `${RNFS.DownloadDirectoryPath}/download_${Math.random()}.pdf`,
  });

  setTimeout(() => {
    Toast.show('Downloading Completed', Toast.SHORT);
  }, 2500);
  return promise;
};




const requestUserPermission = async () => {
  await messaging()
    .requestPermission()
    .then(async(response) => {
      if (response) {

        if (response) {
          let fcmToken = await getToken();
          reduxStorage.setItem('fcmToken', fcmToken);
        }
      }
    })
    .catch((error) => {
      console.log('Error', error);
    });
};

const getToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  return token
};

const alertModel = (onPress:any) => {
  Alert.alert(
    'Delete Confirmation',
    'Are you sure you want to delete?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: onPress,
        style: 'destructive',
      },
    ],
    { cancelable: false }
  );



};

 const checkConnected = () => {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
};


const getURL=(prop)=>{
  return `http://192.168.192.86:3500/get-uploaded-image/${prop}`
}

export {
  downloadFiles,
  CameraPicker,
  MediaPicker,
  formatDate,
  pdfDownload,
  TakeCameraPicture,
  getLocation,
  hasLocationPermission,
  requestUserPermission,
  getToken,
  alertModel,
  checkConnected,
  getURL
};
