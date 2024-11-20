import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";


export default function Account () {
    return <SafeAreaView>
        <Text>Account Page</Text>
        <Link href={'/accountinfo'}>
            <Text>AccountInfo</Text>
        </Link>
    </SafeAreaView>
}