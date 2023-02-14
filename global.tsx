//Importando las ferecencias requeridas
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignContent: 'center'
    },
    mainText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40
    },
    secondaryText: {
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'blue',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    },
    SumRes: {
        flex: 2,
        flexDirection: 'row',
    },
    corazon: {
        flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: 'center',
    },
})

export default globalStyles