import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { GameController } from 'phosphor-react-native'

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export interface DuoCardProps {
  hourEnd: string,
  hourStart: string,
  id: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: [],
  yearsPlaying: string,
}

interface Props {
  data: DuoCardProps
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  const [ads, setAds] = useState<DuoCardProps[]>([])
  const navigation = useNavigation();

  function handleConectGame() {
    // navigation.navigate('');
  }

  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name} />
      <DuoInfo label='Tempo de Jogo' value={`${data.yearsPlaying} anos`} />
      <DuoInfo label='Disponibilidade' value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`} />
      <DuoInfo label='Chamada de áudio' value={data.useVoiceChannel ? 'Sim' : 'Não'} colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT} />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  )
}
