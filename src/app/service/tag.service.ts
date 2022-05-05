import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TagService {

    getKnownTags(): string[] {
        return ['Test1', 'Zaklady', 'Vzorce', 'Neorganicka', '1. pololeti', '3. rocnik']
    }

}