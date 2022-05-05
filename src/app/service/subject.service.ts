import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class SubjectService {

    getTaughtSubjects(): string[] {
        return ['', 'Matematika', 'Fyzika', 'Chemie'];
    }
}