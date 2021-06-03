function weatherInfo(temp) {
  const c = convertToCelsius(temp);
  return (
    c + (c > 0 ? ' is above freezing temperature' : ' is freezing temperature')
  );
}

function convertToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}
