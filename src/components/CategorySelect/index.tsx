import React from "react";
import { RectButton} from 'react-native-gesture-handler'
import { styles } from './styles'
import { View,ScrollView} from "react-native";
import { categories } from '../../utils/categories'
export function CategorySelect(){
    return(
            <ScrollView 
            horizontal
            style={styles.container} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 40
            }}
            >
                {
                    categories.map(category=>
                        <Category 
                        
                        />
                    )
                }
            </ScrollView>
            
      
    )
}