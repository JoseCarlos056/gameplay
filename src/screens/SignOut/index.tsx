import React, { useState } from "react"
import { View, Text, Modal, TouchableWithoutFeedback, ModalProps,Alert } from "react-native"
import { styles } from "./styles"
import { RectButton } from "react-native-gesture-handler"
import { Background } from "../../components/Background"
import { useAuth } from "../../hooks/auth"
interface Props extends ModalProps {
  closeModal: () => void;
}
export function SignOut({ closeModal, ...rest }: Props) {
  const { signOut } = useAuth()
  function handleConfirmSignOut() {
    Alert.alert("press")
    console.log("signout")
    //signOut()
  }
  return (
    <Modal { ...rest} 
    transparent 
    animationType="slide" 
    statusBarTranslucent
    
    >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.content}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Deseja sair do </Text>
                  <Text style={styles.titleHeading}>Game</Text>
                  <Text style={styles.titlePrimary}>Play</Text>
                  <Text style={styles.title}>?</Text>
                </View>

                <View style={styles.options}>
                  <View style={styles.cancel}>
                    <RectButton onPress={closeModal}>
                      <Text style={styles.btnTitle}>Não</Text>
                    </RectButton>
                  </View>
                    <RectButton  style={styles.confirm} 
                    
                      onPress={()=>{handleConfirmSignOut()}}>
                      <Text style={styles.btnTitle}>Sim</Text>
                    </RectButton>
                </View>
              </View>
            </Background>
          </View>
        </View>
    </Modal>
  )
}
