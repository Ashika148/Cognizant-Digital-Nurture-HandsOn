public class Logger {
     // Step 2a: private static instance of itself
    private static Logger instance;

    // Step 2b: private constructor (prevents creating objects with "new Logger()")
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Step 2c: public static method to get the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // A simple method to demonstrate logging
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}
    

