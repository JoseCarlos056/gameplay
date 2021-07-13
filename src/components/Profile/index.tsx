import React,{useState} from "react";
import { View,Text, Alert } from 'react-native'
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { SignOut } from "../../screens/SignOut";
import { Avatar } from "../Avatar";
import { styles } from './styles'


export function Profile(){
    const {  user } = useAuth();
    const [openModalSignOut, setOpenModalSignOut] = useState(false)

    // function handleSignOut() {
    //     Alert.alert('Logout','Deseja sair do Gameplay?',
    //     [
    //         {
    //             text: 'Não',
    //             style: 'cancel'
    //         },
    //         {
    //             text: 'Sim',
    //             onPress: ()=> signOut()
                
    //         }
    //     ]
    //     )
    // }
    function handleOpenModalSignOut() {
        setOpenModalSignOut(true)
      }
      function handleCloseModalSignOut() {
        setOpenModalSignOut(false)
      }
    return(
        <>
       <View style={styles.container}>
                <RectButton
                onPress={handleOpenModalSignOut}
                >
                    <Avatar  urlImage={user.avatar} />
                </RectButton>

           <View>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Olá,
                </Text>
                <Text style={styles.username}>
                    {user.firstName}
                </Text>
            </View>
            <Text style={styles.message}>
                    Hoje é dia de vitória
            </Text>
           </View>

       </View>
      {
        openModalSignOut &&
        
        <SignOut visible={openModalSignOut} closeModal={handleCloseModalSignOut} />

      }
      </>
    )
}