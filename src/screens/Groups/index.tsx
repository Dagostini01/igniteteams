import { useState } from "react";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { HightLight } from "@components/HightLight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Groups() {

    const navigation = useNavigation();
    const [groups, setGroups] = useState([])

    function handleNewGroup() {
        navigation.navigate('new')
    }

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
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
                showsVerticalScrollIndicator={false}
            />

            <Button title="Criar nova turma" onPress={handleNewGroup} />

        </Container>
    )
}