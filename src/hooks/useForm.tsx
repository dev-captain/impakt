import React from 'react';
import {
  DeepMap,
  DeepPartial,
  FieldError,
  FieldValues,
  useForm as useReactHookForm,
  UseFormHandleSubmit,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';

const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  props?: UseFormProps<TFieldValues, TContext>,
): Omit<
  UseFormReturn<TFieldValues, TContext>,
  | 'watch'
  | 'getFieldState'
  | 'setError'
  | 'clearErrors'
  | 'trigger'
  | 'formState'
  | 'resetField'
  | 'reset'
  | 'unregister'
  | 'control'
  | 'register'
  | 'setFocus'
> & {
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  errors: DeepMap<DeepPartial<TFieldValues>, FieldError>;
} => {
  const hooks = useReactHookForm(props);

  const {
    formState: { errors },
    register,
    setValue,
    ...rest
  } = hooks;

  React.useEffect(() => {
    if (!props?.defaultValues) return;
    Object.keys(props.defaultValues).forEach((field) => register(field as any));
  }, []);

  return { ...rest, errors, setValue };
};

export default useForm;
