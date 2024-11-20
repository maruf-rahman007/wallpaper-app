module.exports = function (api) {
    api.cache(true); // Caches the configuration for better performance
    return {
      presets: ['babel-preset-expo'], // Uses Expo’s Babel preset
    };
  };
  