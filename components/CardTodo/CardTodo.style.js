import { StyleSheet } from "react-native";

export const s = StyleSheet.create({

    card: {backgroundColor: "white", height: 115, borderRadius: 13, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: "20",
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,},
    title: {fontSize: 25},
    img: {height: 25, width: 25}


})