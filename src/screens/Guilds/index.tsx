import React from 'react';
import { View, FlatList} from 'react-native';
import { styles } from './styles';
import { Background } from '../../components/Background'
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
interface Props{
  handleGuildSelect: (guild: GuildProps) => void;
}
export function Guilds ({ handleGuildSelect } : Props){
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    {
      id: '2',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    {
      id: '3',
      name: 'Lendários',
      icon: null,
      owner: true
    }
  ]
  return(
    <Background>
    <View style={styles.container}>
          <FlatList 
            data={guilds}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingBottom: 68}}
            renderItem={({ item })=> (
              <Guild 
                data={item}
                onPress={()=> handleGuildSelect(item)}
              />
            )}
          ItemSeparatorComponent={()=> <ListDivider isCentered />}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
          />
    </View>
    </Background>
  )
}