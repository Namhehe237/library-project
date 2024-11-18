class BookModel {
    id:number;
    title:string;
    author?:string; // represent this attribute can be null
    description?:string;
    copies?: number;
    copiesAvailable?:number;
    category?:string;
    img?:string
    
    constructor(id:number, title: string, author:string,description:string, copies:number,copiesAvailable:number,category:string,img:string){
        this.id=id;
        this.title=title;
        this.author=author;
        this.description=description;
        this.copies=copies;
        this.copiesAvailable=copiesAvailable;
        this.img=img;
    }
}

export default BookModel;