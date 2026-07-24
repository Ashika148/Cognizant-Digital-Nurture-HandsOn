public class LinearSearch {

    // Searches for a productId in an unsorted array
    // Returns the index if found, or -1 if not found
    public static int search(Product[] products, int targetId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductId() == targetId) {
                return i; // found at index i
            }
        }
        return -1; // not found
    }
}
