import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { HightLight } from "@components/HightLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
    group: string;
}

export function Players() {

    const [team, setTeam] = useState('Turma A');
    const [players, setPlayers] = useState([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    return (
        <Container>
            <Header showBackButton />
            <HightLight title={group} subtitle="adicione a galera e separe os times" />
            <Form>
                <Input placeholder="Nome da pessoa" autoCorrect={false} />
                <ButtonIcon icon="add" />
            </Form>
            <HeaderList>
                <FlatList
                    data={['Turma A', 'Turma B', 'Turma C']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
                    )}
                    horizontal
                />
                <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard name={item} onRemove={() => { }} />
                )}
                ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time." />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
            />

            <Button title="Remover Turma" type="SECONDARY" />

        </Container>
    )
}