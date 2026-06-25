public abstract class DocumentFactory {

    // The Factory Method — subclasses will decide which Document to create
    public abstract Document createDocument();

    // A common operation that uses the factory method
    public void openDocument() {
        Document doc = createDocument();
        doc.open();
    }
}
    

