/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useState, useEffect, ChangeEvent } from "react";

import { useSnackbar } from "notistack";
import "./style.css";
import { getLocationSuggestions } from "constants/img-constants";
import useDebounce from "module/use-debounce";
import { LocationSuggestion } from "module/interface/location-interface";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { createSearchParams, useNavigate } from "react-router-dom";

export type IAutoCompleteValue = {
    cityName: string;
    entityId: number;
    entityType: string;
    locationName: string;
    locationId: number;
};

function SearchBar() {
    const [output, setOutput] = useState<LocationSuggestion[]>([]);
    const [autoCompleteValue, setAutoCompleteValue] = useState("");
    const [autoCompleteInputValue, setAutoCompleteInputValue] = useState("");
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { inputRef } = useDebounce({ handleChange, time: 500 });

    useEffect(() => {
        setAutoCompleteInputValue(
            localStorage.getItem("userLocations") ? JSON.parse(localStorage.getItem("userLocations")!).cityName : "Jammu"
        );
    }, []);

    useEffect(() => {
        return () => {
            setAutoCompleteInputValue("");
        };
    }, []);

    async function handleChange(inputValue: string) {
        const data = await getLocationSuggestions(inputValue);
        console.log("api", output);
        if (data.length) {
            setOutput(data);
        } else {
            enqueueSnackbar("No location found", { variant: "error" });
        }
    }

    const handleInputChange = (inputString: string) => {
        inputRef.current(inputString);
    };

    const handleAutoCompleteValueChange = (event: ChangeEvent<any>, value: string) => {
        setAutoCompleteValue(value);
        console.log("filter", output.filter((el) => el.title === value)[0]);

        const filteredLocationData = output.filter((el) => el.title === value)[0];

        const localStorageUpdatedData: IAutoCompleteValue = {
            entityId: filteredLocationData.entity_id ?? 11307, // Nullish coalescing operator (??)
            entityType: filteredLocationData.entity_type ?? "city",
            cityName: filteredLocationData.title ?? "Jammu",
            locationName: filteredLocationData.city_name ?? "Jammu",
            locationId: filteredLocationData.city_id ?? "11307"
        };
        localStorage.setItem("userLocations", JSON.stringify(localStorageUpdatedData));

        const getSubLocation: string = filteredLocationData.title.split(",")[0].toLowerCase();

        const queryParams = {
            countryName: filteredLocationData.country_name!,
            cityName: filteredLocationData.city_name?.toLowerCase()!,
            area: getSubLocation!,
            cityId: filteredLocationData.entity_id?.toString()!,
            entityType: filteredLocationData.entity_type!
        };

        navigate({
            pathname: "/location",
            search: `?${createSearchParams(queryParams)}` // Record
        });

        // Need to check later
        // push(`/${newValue.city_name?.toLowerCase()}?area=${encodeURIComponent(getSubLocation)}`);
    };

    const handleAutoCompleteInputChange = (event: ChangeEvent<any>, value: string) => {
        setAutoCompleteInputValue(value);
        handleInputChange(value);
    };

    return (
        <div className="search">
            <Autocomplete
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        fullWidth
                        placeholder="Search for locations here"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOn color="primary" />
                                </InputAdornment>
                            )
                        }}
                    />
                )}
                classes={{ paper: "dropdown" }}
                loading={!output.length}
                loadingText={<AutoCompleteLoader />}
                freeSolo
                filterOptions={(data) => data}
                // closeIcon={null}
                // className={autoComplete}
                disableClearable
                forcePopupIcon={false}
                value={autoCompleteValue}
                onChange={handleAutoCompleteValueChange}
                inputValue={autoCompleteInputValue}
                onInputChange={handleAutoCompleteInputChange}
                options={output.map((el) => el.title)}
            />
        </div>
    );
}

const AutoCompleteLoader = () => <div>Loading...</div>;

export default SearchBar;
