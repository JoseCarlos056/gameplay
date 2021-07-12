import React from "react";
import { View, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { theme } from "../../global/styles/theme";

interface Props{
    urlImage: string;
}

export function Load(){
    return(
        <View style={styles.container}>
            <ActivityIndicator 
            size="large"
            color={theme.colors.primary}
            />
        </View>
    )
}