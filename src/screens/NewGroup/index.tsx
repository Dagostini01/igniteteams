import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";
import { HightLight } from "@components/HightLight";
import { Input } from "@components/Input";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <HightLight title="Nova Turma" subtitle="crie a turma para adionar as pessoas"/>
                <Input placeholder="Nome da turma"/>
                <Button title="Criar" style={{marginTop: 20}}/>
            </Content>
        </Container>
    )
}