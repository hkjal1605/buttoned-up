import { createSelector } from 'reselect';

const selectEssential = state => state.essentials;

export const selectEssentialSection = createSelector(
    [selectEssential],
    directory => directory.sections
);