import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { HightLight } from "@components/HightLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <HightLight title="Nome da turma" subtitle="adicione a galera e separe os times" />
            <Form>
                <Input placeholder="Nome da pessoa" autoCorrect={false} />
                <ButtonIcon icon="add" />
            </Form>
        </Container>
    )
}