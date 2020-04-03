import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    containerLogo: {
        width: 75,
        height: 75,
        backgroundColor: '#eaf5ef',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },

    logo: {
        width: 50,
        height: 50,
    },

    title: {
        color: '#737380',
        fontSize: 15,
    },

    subtitle: {
        marginTop: 40,
        fontSize: 22,
        fontWeight: 'bold',
    },

    description: {
        marginTop: 6,
        fontSize: 16,
        lineHeight: 24,
    },

    input: {
        marginTop: 22,
        alignSelf: 'stretch',
        height: 50,
        fontSize: 18,
        marginHorizontal: 50,
        textAlign: 'center',
        backgroundColor: '#fff',
        marginBottom: 22,
    },

    containerResult: {
        backgroundColor: '#fff',
        marginBottom: 26,
        padding: 15,
        borderLeftWidth: 3,
        borderLeftColor: '#1bd75e',
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    resultTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666',
    },
    
    resultText: {
        fontSize: 14,
        marginTop: 6,
        color: '#737380',
    },

    textGroup: {
        flexDirection: 'row',
    },

    code: {
        fontWeight: 'bold',
        color: '#666',
        paddingLeft: 18,
    },

    resultSubtitle: {
        color: '#666',
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;