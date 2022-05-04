import {CreateChallengeSubmission} from "./use-case-challenge";

describe('Criar caso de uso de envio de desafio', () => {
    it('deve ser capaz de criar um novo envio de desafio', async () => {
        const sut = new CreateChallengeSubmission();

        const response = await sut.execute({
            studentId: 'fake-student-id',
            challengeId : 'fake-student-id',
        })

        expect(response);
    });
});
