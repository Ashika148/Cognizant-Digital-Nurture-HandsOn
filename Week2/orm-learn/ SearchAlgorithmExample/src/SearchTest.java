public class SearchTest {
    public static void main(String[] args) {

        // Array of products, sorted by productId (needed for binary search)
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Headphones", "Electronics"),
            new Product(103, "Sofa", "Furniture"),
            new Product(104, "Desk", "Furniture"),
            new Product(105, "Blender", "Appliances"),
            new Product(106, "Sneakers", "Footwear"),
            new Product(107, "Watch", "Accessories")
        };

        int targetId = 105;

        // Linear Search
        long startLinear = System.nanoTime();
        int linearResult = LinearSearch.search(products, targetId);
        long endLinear = System.nanoTime();

        // Binary Search (requires sorted array — ours already is, by productId)
        long startBinary = System.nanoTime();
        int binaryResult = BinarySearch.search(products, targetId);
        long endBinary = System.nanoTime();

        System.out.println("Linear Search found at index: " + linearResult
                + " (time: " + (endLinear - startLinear) + " ns)");

        System.out.println("Binary Search found at index: " + binaryResult
                + " (time: " + (endBinary - startBinary) + " ns)");

        if (linearResult != -1) {
            System.out.println("Product found: " + products[linearResult]);
        }
    }
}