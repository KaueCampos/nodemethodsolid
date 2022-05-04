import {ChallengesRepository} from "../../applications/repositories/ChallengeRepostory"
import { Challenge } from "../../domain/entities/challenge"

export class InMemoryChallengesRepository implements ChallengesRepository {
    public items: Challenge[] = [];
    
    async findById(id: string): Promise<Challenge | null> {
       const challenges = this.items.find(challenges => challenges.id === id)

       if (!challenges) {
           return null;
       }
       return challenges
    }
}