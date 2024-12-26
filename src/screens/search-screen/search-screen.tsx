import React, {useState} from 'react';
import {Keyboard, Pressable, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react';
import {Button, LanguageButton, Loader, SearchField, WeatherCard} from '@/components';
import {SupportedLanguageList} from '@/constants';
import {useLocale} from '@/hooks';
import {weatherStore} from '@/stores';
import {FLEX} from '@/theme';
import {initializeI18n} from '@/utils';
import {styles} from './styles';

export const SearchScreen = observer(() => {
  const {t} = useLocale();
  const [searchLocation, setSearchLocation] = useState<string>('');

  initializeI18n(SupportedLanguageList[0]);

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
        <LanguageButton style={styles.languageButton} />
        <SearchField
          value={searchLocation}
          onChangeText={handleChangeText}
          onEndIconPress={handleClear}
          lable={t('location')}
          placeholder={t('search_location')}
          containerStyle={styles.searchField}
        />
        {weatherStore.error && <Text style={styles.error}>{weatherStore.error}</Text>}
        {weatherStore.isData && (
          <WeatherCard
            location={weatherStore.location!}
            currentWeather={weatherStore.currentWeather!}
            forecast={weatherStore.forecast!}
          />
        )}
        <Button
          text={t('apply')}
          onPress={handleApply}
          style={styles.button}
          disabled={!searchLocation}
        />
      </Pressable>
      <Loader animating={weatherStore.isLoading} />
    </SafeAreaView>
  );
});
