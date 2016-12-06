class Html {
   // TODO need to pass the context for the template
   static setTemplate(element: HTMLElement, template: string) {
       // TODO More work needed here
    	 element.appendChild(document.createTextNode(Messages.getMessage(template)));
   }

   static setValue(element: HTMLElement, value: any) {
       // TODO More work needed here
       if (value != null) {
    	   // need to convert value to a string! could be any array, etc.
    	   element.appendChild(document.createTextNode(value.toString()));
       }
   }
}
