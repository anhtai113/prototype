enum Language {
   EN_US,
   VN
}

class LanguageMessages {
   language: Language = Language.EN_US;
   strings: Array<NameValue> = new Array<NameValue>();
   constructor(language: Language, strings: Array<NameValue>) {
     this.language = language;
     this.strings = strings;
   };

   getMessage(key: string) : string {
      for (let nv of this.strings) {
         if (nv.name == key) {
      	    return nv.value as string;
      	 }
      }
      return key;
   }
}

let defaultLanguage = Language.EN_US;

let enUsStrings = new Array<NameValue>();
enUsStrings.push(new NameValue("firstName", "First Name"));
enUsStrings.push(new NameValue("birthDay", "Birth Day"));
enUsStrings.push(new NameValue("weight", "Weight"));
let enUsMessages = new LanguageMessages(Language.EN_US, enUsStrings);

let vnStrings = new Array<NameValue>();
vnStrings.push(new NameValue("test", "Test"));
let vnMessages = new LanguageMessages(Language.VN, enUsStrings);

class Messages {
   static getMessage(key: string) : string {
       if (defaultLanguage == Language.VN) {
	       return vnMessages.getMessage(key);
       }
       return enUsMessages.getMessage(key);
   };
}
