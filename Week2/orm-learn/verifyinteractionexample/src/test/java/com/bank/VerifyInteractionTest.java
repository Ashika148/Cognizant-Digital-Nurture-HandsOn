package com.bank;

import org.junit.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

public class VerifyInteractionTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Call the method
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Step 3: Verify getData() was called
        verify(mockApi).getData();
        System.out.println("Verified: getData() was called!");
    }
}
