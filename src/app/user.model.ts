/**
 * User is a data-structure that holds an individual
 * record from The Github user API
 */

export class User {

   
    login: string;
    created_at: Date;
    avatar_url: string;
    name : string;
    location: string;
    company:string;
    email:string;
    public_repos: string;

    constructor(obj?: any) {
        
        this.login           = obj && obj.login          || null;
        this.name            = obj && obj.name           || null;
        this.created_at      = obj && obj.created_at     || null;
        this.avatar_url      = obj && obj.avatar_url     || null;
        this.location        = obj && obj.location       || null;
        this.company         = obj && obj.company        || null;
        this.email           = obj && obj.email          || null;
        this.public_repos    = obj && obj.repos          || null;
     }

}
