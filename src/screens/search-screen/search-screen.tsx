import React, { useState } from "react";
import { Keyboard, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react";
import { Button, Loader, SearchField, WeatherCard } from "@/components";
import { weatherStore } from "@/stores";
import { FLEX } from "@/theme";
import { styles } from "./styles";

export const SearchScreen = observer(() => {
  const [searchLocation, setSearchLocation] = useState<string>("");

  const handleChangeText = (value: string) => {
    setSearchLocation(value);
    !value && handleClear();
  };

  const handleClear = () => {
    weatherStore.reset();
  };

  const handleApply = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      weatherStore.fetchData(searchLocation);
    }, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={FLEX} onPress={Keyboard.dismiss}>
        <SearchField
          value={searchLocation}
          onChangeText={handleChangeText}
          onEndIconPress={handleClear}
          lable={"Location"}
          placeholder={"Search Location"}
          containerStyle={styles.searchField}
        />
        {weatherStore.error && (
          <Text style={styles.error}>{weatherStore.error}</Text>
        )}
        {weatherStore.isData && (
          <WeatherCard
            location={weatherStore.location!}
            currentWeather={weatherStore.currentWeather!}
            forecast={weatherStore.forecast!}
          />
        )}
        <Button
          text={"Apply"}
          onPress={handleApply}
          style={styles.button}
          disabled={!searchLocation}
        />
      </Pressable>
      <Loader animating={weatherStore.isLoading} />
    </SafeAreaView>
  );
});
