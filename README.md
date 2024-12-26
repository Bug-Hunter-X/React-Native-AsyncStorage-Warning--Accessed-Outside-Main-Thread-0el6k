# React Native AsyncStorage Warning: Accessed Outside Main Thread

This repository demonstrates a common error in React Native when using AsyncStorage: accessing it outside the main thread.  This often happens when asynchronous operations are initiated within a component that unmounts before they complete.

## Problem

The `bug.js` file shows an example where we fetch data from AsyncStorage. If the component unmounts before the asynchronous `getItem` call completes, React Native throws a warning.

## Solution

The `bugSolution.js` file provides a corrected version. It incorporates a cleanup function in the `useEffect` hook to cancel any pending asynchronous operations before the component unmounts, preventing the warning.