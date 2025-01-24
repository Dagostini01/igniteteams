import { useState } from "react";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { HightLight } from "@components/HightLight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";

export function Groups() {

    const [groups, setGroups] = useState(['Galera da Rocket', 'Amigos do Ignite'])

    return (
        <Container>
            <Header />

            <HightLight
                title="Turmas"
                subtitle="jogue com a turma"
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
            />

        </Container>
    )
}