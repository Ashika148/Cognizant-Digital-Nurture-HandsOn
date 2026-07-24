public class BinarySearch {

    // Searches for a productId in a SORTED array (sorted by productId)
    // Returns the index if found, or -1 if not found
    public static int search(Product[] products, int targetId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int midId = products[mid].getProductId();

            if (midId == targetId) {
                return mid; // found
            } else if (midId < targetId) {
                low = mid + 1; // search the right half
            } else {
                high = mid - 1; // search the left half
            }
        }
        return -1; // not found
    }
}