import React,{ useState,useEffect } from 'react';
import { View, FlatList} from 'react-native';
import { styles } from './styles';
import { Background } from '../../components/Background'
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
interface Props{
  handleGuildSelect: (guild: GuildProps) => void;
}
export function Guilds ({ handleGuildSelect } : Props){
  const [ guilds, setGuilds] = useState<GuildProps[]>([]);
  const [ loading, setLoading]= useState(true);
  async function fecthGuilds(){
    const response = await api.get("/users/@me/guilds");
    setGuilds(response.data)
    setLoading(false)
  }
  useEffect(()=>{
    fecthGuilds()
  },[])
  return(
    <Background>
    <View style={styles.container}>
         { loading 
          ? <Load />
          : <FlatList 
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
          />}
    </View>
    </Background>
  )
}