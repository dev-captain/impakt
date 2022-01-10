import { memo } from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import HeroLayout from "components/layouts/HeroLayout";
import useCountdown from "hooks/useCountdown";
import SocialMediasArea from "./SocialMediasArea";
import SubscribeArea from "./SubscribeArea";
import CounterItem from "./CounterItem";

const CountdownHero = ({ date }: { date: Date }) => {
  const countdown = useCountdown(date);

  return (
    <HeroLayout>
      <Container
        zIndex={1}
        minW="100%"
        minH="99vh"
        pos={"absolute"}
        backgroundSize="cover"
        filter="blur(5px) drop-shadow(0px 4px 8px rgba(39, 42, 25, 0.9)) drop-shadow(0px 4px 14px rgba(39, 42, 25, 0.9))"
        bgImage="url('https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
      />
      <SocialMediasArea />
      <SimpleGrid columns={4} columnGap={16} rowGap={4} zIndex={2}>
        <CounterItem value={countdown.days} title="days" />
        <CounterItem value={countdown.hours} title="hours" />
        <CounterItem value={countdown.minutes} title="minutes" />
        <CounterItem value={countdown.seconds} title="seconds" />
      </SimpleGrid>
      <SubscribeArea />
    </HeroLayout>
  );
};

export default memo(CountdownHero);
