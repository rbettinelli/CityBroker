import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
      },
    imageDisplay: {
        height: "100%",
        width: "100%",
      },
    textTitle: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
        backgroundColor: '#0a4a4b',
        padding: 20,
      },
    searchBox: {
        padding: 30,
        alignItems: "center",
      },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: 200,
      },
    loginBox: {
        padding: 30,
        alignItems: "center",
      },
    openPageBox: {
        height: "65%",
        alignItems: "center",
      },  
    topBox: {
        padding: 30,
        height: "55%",
        alignItems: "center",
      },    
    botBox: {
        justifyContent: "flex-end",
        padding: 30,
      },
    navButtonsWrapper: {
        flexDirection: "row",
        justifyContent: "center",
      },
    buttonStyle: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 10,
        marginBottom: 2,
        marginHorizontal: 20,
        width: 100,
        alignItems: "center",
      },
    buttonFont: {
        color: "white",
      },
    item: {
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20,
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24,
        borderRadius: 15,
      },
});