import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { container_styles } from "../utils/styles/container_style";

export function SearchPage() {
    return (
        <KeyboardAvoidingView
            style={container_styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ScrollView>
                <HeadSection />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

function HeadSection() {
    return (
        <View>

        </View>
    );
};