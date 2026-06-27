package com.cognizant.ormlearn;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public Country findCountryByCode(String countryCode) 
            throws CountryNotFoundException {
        Optional<Country> result = 
            countryRepository.findById(countryCode);
        if (!result.isPresent()) {
            throw new CountryNotFoundException(
                "Country not found: " + countryCode);
        }
        Country country = result.get();
        return country;
    }
}