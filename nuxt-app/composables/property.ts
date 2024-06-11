 interface IProperty {
    styleObject : object;
    classObject : object;
}
class Property implements IProperty{
   styleObject : object;
   classObject : object;

   constructor(styleObject : object, classObject: object) {
       this.styleObject = styleObject;
       this.classObject = classObject;
   }
}


export {Property, IProperty}