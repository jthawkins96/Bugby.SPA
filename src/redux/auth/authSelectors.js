import { createSelector } from 'reselect';

const selectAuth = state => state.auth

export const selectCurrentUser = createSelector(
    [selectAuth],
    auth => auth.username
)

export const selectLoginErrorState = createSelector(
    [selectAuth],
    auth => auth.hasLoginError
)