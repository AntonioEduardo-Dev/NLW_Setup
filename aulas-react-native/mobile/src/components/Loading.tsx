import { ActivityIndicator, View } from "react-native";

// componet loader page
export function Loading(){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator  color="#7C3AED" />
        </View>
    );
}