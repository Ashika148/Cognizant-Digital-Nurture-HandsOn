package com.bank;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.when;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Use mock in service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Step 4: Assert result
        assertEquals("Mock Data", result);
        System.out.println("Mock returned: " + result);
    }
}
