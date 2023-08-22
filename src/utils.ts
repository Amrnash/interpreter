export class Utils {
  static isLetter(s: string) {
    return !!s.match(/[a-zA-Z]/);
  }

  static isDigit(s: string) {
    return !!s.match(/[0-9]/);
  }
}
