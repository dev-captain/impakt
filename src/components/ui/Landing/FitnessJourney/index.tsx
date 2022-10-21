import FitnessJourneyHeader from './Header';
import FitnessJourneyContent from './Content';
import FitnessJourneyLayout from './FitnessJourneyLayout';

const FitnessJourney = () => {
  return (
    <FitnessJourneyLayout>
      <FitnessJourneyHeader />
      <FitnessJourneyContent />
    </FitnessJourneyLayout>
  );
};

export default FitnessJourney;
