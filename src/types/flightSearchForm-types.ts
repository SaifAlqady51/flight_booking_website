import React from "react";

export type InputEventType = React.ChangeEvent<HTMLInputElement>;

export type SelectEventType = React.ChangeEvent<HTMLSelectElement>;

export type SetInputChangeType = React.Dispatch<React.SetStateAction<string>>;
