export function injectColonAtPace(pace: string) {
  if (pace.length <= 2) return pace;
  return pace.slice(0, -2) + ":" + pace.slice(-2);
}

export function paceToKmPerHour(pace: string) {
  const splitedPace = pace.split(":");
  const [minute, second] = (() => {
    if (splitedPace.length === 1) {
      return [Number(splitedPace[0]), 0];
    }

    return splitedPace.map(Number);
  })();

  if (isNaN(minute) || isNaN(second)) {
    return "";
  }

  const calculatedPace = minute + second / 60;
  const kmPerHourValueNumber = 60 / calculatedPace;

  if (isNaN(kmPerHourValueNumber) || kmPerHourValueNumber === Infinity) {
    return "";
  }

  const RoundedKmPerHourValueNumber =
    Math.round(kmPerHourValueNumber * 100) / 100;
  const kmPerHourValueString = String(RoundedKmPerHourValueNumber);
  return kmPerHourValueString;
}

export function kmPerHourToPace(kmPerHour: string) {
  const kmPerHourNumber = Number(kmPerHour);
  if (isNaN(kmPerHourNumber)) return "";
  if (kmPerHourNumber === 0) return "";

  const minute = Math.floor(60 / kmPerHourNumber);
  const second = Math.floor((60 / kmPerHourNumber - minute) * 60);
  const pace = `${minute}:${getTwoDigitsString(second)}`;
  return pace;
}

function getTwoDigitsString(number: number) {
  return number.toString().padStart(2, "0");
}
