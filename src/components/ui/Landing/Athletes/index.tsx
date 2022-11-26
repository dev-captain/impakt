import AthletesLayout from './AthletesLayout';
import AthletesHeader from './Header';
import AthleteContent from './Content';
import AthletesBottom from './Bottom';

const Athletes = () => {
  return (
    <AthletesLayout>
      <AthletesHeader />
      <AthleteContent />
      <AthletesBottom />
    </AthletesLayout>
  );
};

export default Athletes;
