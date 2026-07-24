public class FactoryTest {
    public static void main(String[] args) {

        // Use the Word factory
        DocumentFactory wordFactory = new wordDocumentFactory();
        wordFactory.openDocument();

        // Use the PDF factory
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        pdfFactory.openDocument();

        // Use the Excel factory
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        excelFactory.openDocument();
    }
    
}
