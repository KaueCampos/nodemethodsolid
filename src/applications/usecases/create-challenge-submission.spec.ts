import {CreateChallengeSubmission} from "./use-case-challenge";

describe('Requisição foi enviada com sucesso', () => {
    it('Requisição precisa ser criada', async () => {
        const sut = new CreateChallengeSubmission();

        const response = await sut.execute({
            studentId: 'fake-student-id',
            challengeId : 'fake-student-id',
        })

        expect(response);
    });
});
