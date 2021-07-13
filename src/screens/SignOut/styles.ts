import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
export const styles = StyleSheet.create({
    overlay:{
        flex: 1,
        backgroundColor: theme.colors.overlay,
        justifyContent: 'flex-end',

    },
    container:{
        height: 174,
        width: '100%',
        marginTop: 100,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer:{
        flexDirection: 'row',
        marginBottom: 31
    },
    titleHeading:{
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },
    titlePrimary:{
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.primary
    },
    title:{
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading
    },
    options:{
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancel:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 56,
        marginRight: 8,
        borderWidth: 1,
        borderColor: theme.colors.secondary30,
        borderRadius: 8,
    },
    confirm:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 56,
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },
    btn:{
        flex:1,
    },
    btnTitle:{
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.heading,
    }
    
})