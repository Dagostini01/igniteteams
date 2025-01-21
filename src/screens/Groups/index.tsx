import { Header } from "@components/Header";
import { Container } from "./styles";
import { HightLight } from "@components/HightLight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
    return (
        <Container>
            <Header />
            <HightLight title="Turmas" subtitle="jogue com a turma" />
            <GroupCard title="Nome da turma" />
        </Container>
    )
}