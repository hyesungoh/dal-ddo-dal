"use client";

import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import * as s from "./Calculator.css";
import {
  injectColonAtPace,
  kmPerHourToPace,
  paceToKmPerHour,
} from "./calculator.util";

export default function Calculator() {
  const { paceId, paceValue, onPaceChange, setPaceValue } = usePace();
  const { kmPerHourId, kmPerHourValue, onKmPerHourChange, setKmPerHourValue } =
    useKmPerHour();

  const { paceInputRef, kmPerHourInputRef } = useCalculateEffect({
    paceValue,
    setPaceValue,
    kmPerHourValue,
    setKmPerHourValue,
  });

  return (
    <div className={s.div}>
      <label htmlFor={paceId}>페이스</label>
      <input
        ref={paceInputRef}
        className={s.input}
        id={paceId}
        value={paceValue}
        onChange={onPaceChange}
        type="tel"
      />

      <label htmlFor={kmPerHourId}>시속</label>
      <input
        ref={kmPerHourInputRef}
        className={s.input}
        id={kmPerHourId}
        value={kmPerHourValue}
        onChange={onKmPerHourChange}
        type="tel"
      />
    </div>
  );
}

function useInput() {
  const id = useId();
  const [value, setValue] = useState<string>("");

  return [id, value, setValue] as const;
}

function usePace() {
  const [id, value, setValue] = useInput();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const valueWithoutColon = value.replace(":", "");
    const numberedValue = Number(valueWithoutColon);

    if (isNaN(numberedValue)) return;
    if (valueWithoutColon.length > 4) return;

    const valueWithColon = injectColonAtPace(valueWithoutColon);
    setValue(valueWithColon);
  };

  return {
    paceId: id,
    paceValue: value,
    setPaceValue: setValue,
    onPaceChange: onChange,
  };
}

function useKmPerHour() {
  const [id, value, setValue] = useInput();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const numberedValue = Number(value);

    if (isNaN(numberedValue)) {
      return;
    }

    setValue(value);
  };

  return {
    kmPerHourId: id,
    kmPerHourValue: value,
    setKmPerHourValue: setValue,
    onKmPerHourChange: onChange,
  };
}

interface UseCalculateEffectProps {
  paceValue: string;
  setPaceValue: Dispatch<SetStateAction<string>>;
  kmPerHourValue: string;
  setKmPerHourValue: Dispatch<SetStateAction<string>>;
}

function useCalculateEffect({
  paceValue,
  setPaceValue,
  kmPerHourValue,
  setKmPerHourValue,
}: UseCalculateEffectProps) {
  const paceInputRef = useRef<HTMLInputElement>(null);
  const kmPerHourInputRef = useRef<HTMLInputElement>(null);

  useEffect(
    function CalculatePaceToKmPerHout() {
      if (
        paceInputRef.current &&
        paceInputRef.current !== document.activeElement
      )
        return;

      const kmPerHour = paceToKmPerHour(paceValue);
      setKmPerHourValue(kmPerHour);
    },
    [paceValue, setKmPerHourValue]
  );

  useEffect(
    function CalculateKmPerHourToPace() {
      if (
        kmPerHourInputRef.current &&
        kmPerHourInputRef.current !== document.activeElement
      )
        return;

      const pace = kmPerHourToPace(kmPerHourValue);
      setPaceValue(pace);
    },
    [kmPerHourValue, setPaceValue]
  );

  return { paceInputRef, kmPerHourInputRef };
}
