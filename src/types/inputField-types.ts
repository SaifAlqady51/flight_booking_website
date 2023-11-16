import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export type FieldType = {
    label: string;
    placeholder?: string;
    changeingFunction: ActionCreatorWithPayload<string>;
};
