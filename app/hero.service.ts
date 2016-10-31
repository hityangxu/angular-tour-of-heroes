import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";
/**
 * Created by yangxu on 16-10-30.
 */

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}