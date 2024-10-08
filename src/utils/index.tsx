import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  createStandaloneToast,
  ToastId,
  VStack,
} from '@chakra-ui/react';
import { Day } from 'dayspan';
import { GetTimelineBlockRes } from '../lib/impakt-dev-api-client/react-query/types';
import theme, { toastDarkLayout, toastLayout } from '../theme';

const toast = createStandaloneToast({ theme });

export const horizontalScrollBy = (ref: any, size = 0) => {
  ref?.current?.scrollBy({
    top: 0,
    behavior: 'smooth',
    left: size,
  });
};

export const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export const parsePathname = (pathname: string) => {
  const path = pathname.split('/');

  return {
    path: path[1],
  };
};

export const parseUrlQueryParamsToKeyValuePairs = (queryString: string) => {
  return queryString
    .split(/[?&]/)
    .filter((x) => x.includes('='))
    .map((x) => x.split(/=/))
    .reduce<{ [key: string]: any }>((p, c) => ({ ...p, [c[0]]: c[1] }), {});
};
export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const getImageFromS3AsUrl = (currentCoverImageSource: string) => {
  const sourceBaseUrl =
    // eslint-disable-next-line no-constant-condition
    import.meta.env.DEV ? 'https://impakt-upload-file-data-dev.s3.amazonaws.com/' : '';
  const imageUrl = `${sourceBaseUrl}${currentCoverImageSource}`;

  return imageUrl;
};

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, '0');
};

export const convertMsToHM = (milliseconds: number, isNot2Digit?: boolean) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.

  return {
    d: hours / 24,
    h: isNot2Digit ? (hours % 24).toString() : padTo2Digits(hours % 24),
    m: isNot2Digit ? minutes.toString() : padTo2Digits(minutes),
    s: isNot2Digit ? seconds.toString() : padTo2Digits(seconds),
  };
};

export const convertSSToMMSS = (seconds: number) => {
  const minutes = seconds / 60;
  const restSeconds = seconds % 60;

  return {
    m: minutes,
    s: restSeconds,
  };
};

let toastCounter = 0;
let previousMode = '';
let previousToastId: ToastId | undefined = '';

export function renderToast(
  type: 'error' | 'success' | 'warning',
  description: string,
  // eslint-disable-next-line default-param-last
  whiteOrDarkMode: 'white' | 'dark' | undefined = 'white',
  duration?: number,
) {
  if (whiteOrDarkMode === 'white' && previousMode === 'dark' && previousToastId) {
    toast.close(previousToastId);
  }

  if (toastCounter === 3) {
    // display max 3 toast together
    toastCounter = 0;
    toast.closeAll();
  }
  let toastTitle = '';
  if (type === 'error') {
    toastTitle = 'Error';
  }
  if (type === 'success') {
    toastTitle = 'Success';
  }
  if (type === 'warning') {
    toastTitle = 'Warning';
  }
  const toastWillBeDisplayed = toast({
    title: toastTitle,
    description,
    isClosable: true,
    duration: duration ?? 8000,
    status: type,
    position: 'top-right',
    variant: 'glass',
    // containerStyle: whiteOrDarkMode === 'white' ? toastLayout : toastDarkLayout,
    render: ({ onClose }) => (
      <Alert
        style={whiteOrDarkMode === 'white' ? { ...toastLayout } : { ...toastDarkLayout }}
        status={type}
      >
        <AlertIcon
          // eslint-disable-next-line no-nested-ternary
          color={type === 'error' ? '#f84153' : type === 'success' ? '#4cbfa6' : 'yellow'}
        />
        <VStack gap="0" justifyContent="left" align="left">
          <AlertTitle margin="0 !important"> {toastTitle} </AlertTitle>
          <AlertDescription margin="0 !important">{description}</AlertDescription>
        </VStack>
        <CloseButton
          alignSelf="flex-start"
          position="absolute"
          right={2}
          top={1}
          onClick={onClose}
        />
      </Alert>
    ),
  });

  toastCounter += 1;
  previousToastId = toastWillBeDisplayed;
  previousMode = whiteOrDarkMode;

  return toastWillBeDisplayed;
}

export const truncateString = (str: string, max: number) => {
  if (str.length > max) {
    const truncatedString = str.substring(0, max).concat('...');

    return truncatedString;
  }

  return str;
};
export const getTimeDifference = (validFrom: string, validUntil: string) => {
  if (validFrom.length === 0) return { d: '00', h: '00', m: '00', s: '00' };
  if (validUntil.length === 0) return { d: '00', h: '00', m: '00', s: '00' };

  const isValidDate = Day.fromString(validFrom).time < Day.now().time;

  if (!isValidDate) return { d: '00', h: '00', m: '00', s: '00' };

  return compareDateWithNow(validUntil);
};

export const compareDateWithNow = (date: string) => {
  const dateObj = new Date(date);

  if (Number.isNaN(dateObj.getTime())) {
    return { d: '00', h: '00', m: '00', s: '00' };
  }

  if (dateObj.getTime() < Day.now().time) {
    return { d: '00', h: '00', m: '00', s: '00' };
  }

  const d = Day.fromString(date).daysBetween(Day.now());
  const h = Day.fromString(date).hoursBetween(Day.now()) % 24;
  const m = Day.fromString(date).minutesBetween(Day.now()) % 60;
  const s = Day.fromString(date).secondsBetween(Day.now()) % 60;

  return { d: padTo2Digits(d), h: padTo2Digits(h), m: padTo2Digits(m), s: padTo2Digits(s) };
};

export default {};

export const getCreatedBefore = (createdAt: string) => {
  const stringToDateDay = Day.fromDate(new Date(createdAt));
  if (!stringToDateDay) return '';

  if (Day.now().yearsBetween(stringToDateDay) === 0) {
    if (Day.now().weeksBetween(stringToDateDay) === 0) {
      if (Day.now().daysBetween(stringToDateDay) === 0) {
        if (Day.now().hoursBetween(stringToDateDay) === 0) {
          if (Day.now().minutesBetween(stringToDateDay) === 0) {
            return 'just now';
          }

          return `${Day.now().minutesBetween(stringToDateDay)} min ago`;
        }

        return `${Day.now().hoursBetween(stringToDateDay)} hours ago`;
      }

      return `${Day.now().daysBetween(stringToDateDay)} days ago`;
    }

    return `${Day.now().weeksBetween(stringToDateDay)} weeks ago`;
  }

  return `${Day.now().yearsBetween(stringToDateDay)} years ago`;
};

export const convertToPascalCase = (label: string) => {
  const convertedLabel = label.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

  return convertedLabel;
};

const exerciseNameCorrection = (exerciseName: string) => {
  const exercises = {
    'No Action': 'Rest',
    'Push Up': 'Push Ups',
    'KneePush Up': 'Knee Push Ups',
    'Sit Up': 'Sit Ups',
    Squat: 'Squats',
    'Squat Hold': 'Squat Hold',
    'Elbow Plank': 'Elbow Plank',
    'Elbow PlankHold': 'Elbow Plank Hold',
    'Leg Raise': 'Leg Raises',
    'Glute Bridge': 'Glute Bridges',
    'Jumping Jack': 'Jumping Jacks',
    'High Knee': 'High Knees',
    Stretch: 'Stretch',
    'Stretch Hold': 'Stretch Hold',
    'Forward Lunge': 'Forward Lunges',
    Burpee: 'Burpees',
    'Side Lunge': 'Side Lunges',
    'Glute Bridge Hold': 'Glute Bridge Holds',
    'Walk Out': 'Walk Outs',
    'Feet Tap Left': 'Left Foot Taps',
    'Feet Tap Right': 'Right Foot Taps',
    'Cross Feet Tap Front': 'Cross Foot Taps',
    'Cross Feet Tap Back': 'Back Cross Foot Taps',
    'Cross Punch': 'Cross Punches',
    'Standing CrunchKnee': 'Standing Knee Crunches',
    'Standing CrunchLeg': 'Standing Leg Crunches',
    'Standing Kick': 'Standing Kicks',
    'Bicycle Crunch': 'Bicycle Crunches',
    'Kick Back': 'Kickbacks',
    'Mountain Climber': 'Mountain Climbers',
    Windmill: 'Windmills',
    'Plank UpDown': 'Up Down Planks',
  };
  const convertedExerciseName = exercises[exerciseName] ?? exerciseName;

  return convertedExerciseName;
};

export const normalizeExerciseNames = (routines: GetTimelineBlockRes[]) => {
  const pascalCasedRoutines = routines.map((r1) => {
    return {
      ...r1,
      Exercise: { ...r1.Exercise, name: convertToPascalCase(r1.Exercise?.name ?? '') },
    };
  });

  const pascalCaseWithNormalizedExerciseName = pascalCasedRoutines.map((pR) => {
    return {
      ...pR,
      Exercise: { ...pR.Exercise, name: exerciseNameCorrection(pR.Exercise.name ?? '') },
    };
  }) as GetTimelineBlockRes[];

  const sortByExerciseOrderNumber = pascalCaseWithNormalizedExerciseName.sort(
    (a, b) => a.order - b.order,
  );

  return sortByExerciseOrderNumber;
};

export const parseDaytime = (time: any) => {
  // eslint-disable-next-line prefer-const
  let [hours, minutes] = time
    .substr(0, time.length - 2)
    .split(':')
    .map(Number);
  if (time.includes('pm') && hours !== 12) {
    hours += 12;
  }

  return 1000 * 60 * (hours * 60 + minutes);
};

export const isProduction =
  import.meta.env.VITE_VERCEL_ENV === 'production' ||
  import.meta.env.VITE_VERCEL_GIT_COMMIT_REF === 'beta';
export const isPreview = import.meta.env.VITE_VERCEL_ENV === 'preview';
export const isStage = import.meta.env.VITE_VERCEL_GIT_COMMIT_REF === 'staging';

export const getCurrentEnv = () => {
  if (isStage) return 'stage';
  if (isProduction) return 'production';
  if (isPreview) return 'preview';

  return 'development';
};
