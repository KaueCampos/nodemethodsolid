import {CreateChallengeSubmission} from "./use-case-challenge";
import {InMemoryStudentsRepository} from "../../tests/repositories/memoria-students";
import {InMemoryChallengesRepository} from "../../tests/repositories/inmemoryrepo";
import {Student} from "../../domain/entities/student";
import { Challenge } from "../../domain/entities/challenge";

describe('Criar caso de uso de envio de desafio', () => {
    it('deve ser capaz de criar um novo envio de desafio', async () => {

        const studentsRepository =  new InMemoryStudentsRepository();
        const challengesRepository =  new InMemoryChallengesRepository();
        
        const student = Student.create({
            name : 'Kaue',
            email: 'kaue@exemple.com'
        })
        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionsUrl: 'http://exemplo.com/challenges'
        })

        studentsRepository.items.push(student);
        challengesRepository.items.push(challenge);

        const sut = new CreateChallengeSubmission(   
            studentsRepository,
            challengesRepository,
        );

        const response = await sut.execute({
            studentId: 'fake-student-id',
            challengeId : 'fake-student-id',
        })

        expect(response).toBeTruthy();
    });
});
