import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { PERMISSIONS, request, check } from 'react-native-permissions';
import {
  Platform,
  Alert,
  Linking,
  AppState,
  AppStateStatus,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import RNSoundLevel from 'react-native-sound-level';

import {
  Container,
  NoisemeterContainer,
  Noisemeter,
  NoisemeterPointer,
  NoiseInfoContainer,
  NoiseLevel,
  NoiseDescription,
} from './styles';

interface SoundData {
  id: number;
  rawValue: number;
  value: number;
}

const NoisemeterScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const [microphoneAllowed, setMicrophoneAllowed] = useState<Boolean>(false);
  const [isRecording, setIsRecording] = useState<Boolean>(false);
  const [soundData, setSoundData] = useState<SoundData>({
    id: -1,
    rawValue: 0,
    value: 0,
  });
  const formattedSoundData = useMemo(() => {
    return `${soundData?.rawValue.toPrecision(2)} DB`;
  }, [soundData]);
  const appState = useRef(AppState.currentState);

  const handleMicrophonePermission = useCallback(() => {
    async function handleMicrophonePermissionAsync() {
      const isMicrophonePermissionGranted = await check(
        Platform.select({
          android: PERMISSIONS.ANDROID.RECORD_AUDIO,
          ios: PERMISSIONS.IOS.MICROPHONE,
          default: PERMISSIONS.ANDROID.RECORD_AUDIO,
        }),
      );

      if (isMicrophonePermissionGranted === 'granted') {
        setMicrophoneAllowed(true);
        return;
      }

      if (isMicrophonePermissionGranted === 'blocked') {
        Alert.alert(
          'Permissão necessária',
          'Precisamos da permissão para utilizar o microfone',
          [
            {
              text: 'Ir para configurações',
              style: 'default',
              onPress: () => Linking.openSettings(),
            },
            {
              text: 'Cancelar',
              style: 'cancel',
            },
          ],
        );

        return;
      }

      const askPermissionResult = await request(
        Platform.select({
          android: PERMISSIONS.ANDROID.RECORD_AUDIO,
          ios: PERMISSIONS.IOS.MICROPHONE,
          default: PERMISSIONS.ANDROID.RECORD_AUDIO,
        }),
      );

      if (askPermissionResult === 'granted') {
        setMicrophoneAllowed(true);
      } else {
        navigate('InfoList');
      }
    }

    handleMicrophonePermissionAsync();
  }, [navigate]);

  const handleStartRecording = useCallback(() => {
    handleMicrophonePermission();

    if (!microphoneAllowed || isRecording) {
      return;
    }

    RNSoundLevel.start();
    setIsRecording(true);
  }, [handleMicrophonePermission, isRecording, microphoneAllowed]);

  const handleStopRecording = useCallback(() => {
    if (!isRecording) {
      return;
    }

    RNSoundLevel.stop();
    setIsRecording(false);
  }, [isRecording]);

  const handleStartStopRecording = useCallback(() => {
    handleStartRecording();

    return () => handleStopRecording();
  }, [handleStartRecording, handleStopRecording]);

  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        handleStartStopRecording();
      }

      appState.current = nextAppState;
    },
    [handleStartStopRecording],
  );

  useFocusEffect(handleStartStopRecording);

  useEffect(() => {
    RNSoundLevel.onNewFrame = (data: SoundData) => {
      setSoundData(data);
    };
  });

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [handleAppStateChange]);

  return (
    <Container>
      <NoisemeterContainer>
        <Noisemeter>
          <NoisemeterPointer />
        </Noisemeter>
      </NoisemeterContainer>
      <NoiseInfoContainer>
        <NoiseLevel>{formattedSoundData}</NoiseLevel>
        <NoiseDescription>Nível prejudicial</NoiseDescription>
      </NoiseInfoContainer>
    </Container>
  );
};

export default NoisemeterScreen;
