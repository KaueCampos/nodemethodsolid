import { Entity } from "../../core/domain/Entity";

type StudentProps ={
    name: string;
    email: string;
}

export class Student extends Entity <StudentProps>{
    static create(arg0: { name: string; email: string; }) {
        throw new Error("Method not implemented.");
    }
    private constructor(props: StudentProps, id?: string){
        super(props, id);
    }
    public create(props: StudentProps, id?: string){
        const student = new Student(props, id);

        return student;
    }
}