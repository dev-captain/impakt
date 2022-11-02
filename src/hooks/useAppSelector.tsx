import { TypedUseSelectorHook, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useSelector`
const useAppSelector: TypedUseSelectorHook<any> = useSelector;

export default useAppSelector;
