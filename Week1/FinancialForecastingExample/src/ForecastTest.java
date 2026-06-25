public class ForecastTest {
    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.08;

        for (int years = 0; years <= 10; years++) {
            double recursive = ForecastCalculator.futureValue(presentValue, growthRate, years);
            double iterative = ForecastCalculator.futureValueIterative(presentValue, growthRate, years);
            double formula = ForecastCalculator.futureValueFormula(presentValue, growthRate, years);

            System.out.printf("Year %2d -> Recursive: $%.2f | Iterative: $%.2f | Formula: $%.2f%n",
                    years, recursive, iterative, formula);
        }
    }
}