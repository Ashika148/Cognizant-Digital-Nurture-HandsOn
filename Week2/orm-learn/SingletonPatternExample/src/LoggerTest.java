public class LoggerTest {
     public static void main(String[] args) {

        // Try to get the Logger instance multiple times
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Use the logger
        logger1.log("First message");
        logger2.log("Second message");

        // Check if both references point to the SAME object
        if (logger1 == logger2) {
            System.out.println("SUCCESS: logger1 and logger2 are the SAME instance.");
        } else {
            System.out.println("FAILURE: logger1 and logger2 are DIFFERENT instances.");
        }
    }
}

