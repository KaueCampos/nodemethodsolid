import { Submission } from "../../domain/entities/submission";
import { StudentsRepository } from "../repositories/StudentRepository";
import { ChallengesRepository } from "../repositories/ChallengeRepostory";
type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId:  string;

}

export class CreateChallengeSubmission{
    constructor(
        private studentsRepository: StudentsRepository,
        private challengeRepository: ChallengesRepository,
    ){}
    async execute({studentId, challengeId}: CreateChallengeSubmissionRequest){

        const student = await this.studentsRepository.findById(studentId)
        if (!student){
            throw new Error('Estudante não encontrado ')
        }

        const challenge = await this.challengeRepository.findById(challengeId)
        if (!challenge){
            throw new Error('Desafio não encontrado')
        }


        const submission = Submission.create({
            studentId,
            challengeId,
        })
        
        return submission
    }
}