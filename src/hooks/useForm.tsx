import React from 'react';
import {
  DeepMap,
  DeepPartial,
  FieldError,
  FieldValues,
  useForm as useReactHookForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';

const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  props?: UseFormProps<TFieldValues, TContext>,
): Omit<
  UseFormReturn<TFieldValues, TContext>,
  | 'getFieldState'
  | 'setError'
  | 'clearErrors'
  | 'formState'
  | 'resetField'
  | 'unregister'
  | 'control'
  | 'register'
  | 'setFocus'
> & {
  errors: DeepMap<DeepPartial<TFieldValues>, FieldError>;
  isDirty: boolean;
  isValid: boolean;
} => {
  const formReturn = useReactHookForm(props);

  const {
    formState: { errors, isDirty, isValid },
    trigger,
    register,
    setValue,
    ...rest
  } = formReturn;

  React.useEffect(() => {
    if (!props?.defaultValues) return;
    Object.keys(props.defaultValues).forEach((field) => register(field as any));
  }, []);

  return { ...rest, errors, isDirty, isValid, setValue, trigger };
};

export default useForm;
