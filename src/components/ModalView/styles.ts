import { Inter_100Thin, Inter_200ExtraLight } from '@expo-google-fonts/inter'
import {  StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container:{
       flex: Inter_100Thin,
       marginTop: 100
    },
    overlay:{
        flex: 1,
        backgroundColor: theme.colors.overlay,

    },
    bar:{
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        marginTop: 13,
        alignSelf: 'center',
    }
   
})