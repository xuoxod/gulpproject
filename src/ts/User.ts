class User {
  private fname: string = "";
  private lname: string = "";
  private email: string = "";
  private sid: string | number = "";
  private uid: string | number = "";

  constructor(newUser: object) {
    this.setFname(newUser[`fname`]);
    this.setLname(newUser[`lname`]);
    this.setEmail(newUser[`email`]);
    this.setSid(newUser[`sid`]);
    this.setUid(newUser[`uid`]);
  }

  private contains(obj: object, member: string | number): boolean {
    let memberIndex;

    if (Array.isArray(obj)) {
      memberIndex = obj.findIndex((x) => x == member);
    }

    return memberIndex !== -1;
  }

  /* Setters */

  public setFname(f: string): void {
    this.fname = f;
  }

  public setLname(l: string): void {
    this.lname = l;
  }

  public setEmail(e: string): void {
    this.email = e;
  }

  public setSid(s: string | number): void {
    this.sid = s;
  }

  public setUid(u: string | number): void {
    this.uid = u;
  }

  /* Getters */

  public getFname(): string {
    return this.fname;
  }

  public getLname(): string {
    return this.lname;
  }

  public getEmail(): string {
    return this.email;
  }

  public getSid(): string | number {
    return this.sid;
  }

  public getUid(): string | number {
    return this.uid;
  }

  public getDetails(): object {
    return {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      sid: this.sid,
      uid: this.uid,
    };
  }

  public toString(): string {
    return `${this.email}`;
  }
}

const user = User;

export default user;
